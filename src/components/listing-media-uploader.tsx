"use client";

import { ChangeEvent, useMemo, useState } from "react";
import { createClient } from "@/lib/supabase/client";

type MediaItem = {
  id: string;
  storage_path: string;
  media_type: "IMAGE" | "VIDEO";
  sort_order: number;
  alt_text: string | null;
};

const MAX_FILES = 8;
const MAX_IMAGE_BYTES = 8 * 1024 * 1024;
const MAX_VIDEO_BYTES = 40 * 1024 * 1024;

export default function ListingMediaUploader({
  listingId,
  initialMedia = [],
}: {
  listingId: string;
  initialMedia?: MediaItem[];
}) {
  const supabase = useMemo(() => createClient(), []);
  const [media, setMedia] = useState(initialMedia);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  async function uploadFiles(event: ChangeEvent<HTMLInputElement>) {
    const files = Array.from(event.target.files ?? []);
    event.target.value = "";
    if (!files.length) return;
    setError("");
    setMessage("");

    if (media.length + files.length > MAX_FILES) {
      setError(`You can upload up to ${MAX_FILES} media files.`);
      return;
    }

    setUploading(true);
    try {
      const uploaded: MediaItem[] = [];
      for (const [index, file] of files.entries()) {
        const isImage = file.type.startsWith("image/");
        const isVideo = file.type.startsWith("video/");
        const maxBytes = isVideo ? MAX_VIDEO_BYTES : MAX_IMAGE_BYTES;
        if (!isImage && !isVideo) throw new Error("Only image and video files are supported.");
        if (file.size > maxBytes) throw new Error(`${file.name} is too large.`);

        const extension = file.name.split(".").pop()?.toLowerCase() || (isVideo ? "mp4" : "jpg");
        const path = `${listingId}/${crypto.randomUUID()}.${extension}`;
        const { error: uploadError } = await supabase.storage.from("listing-media").upload(path, file, {
          cacheControl: "3600",
          upsert: false,
          contentType: file.type,
        });
        if (uploadError) throw uploadError;

        const { data: row, error: rowError } = await supabase
          .from("listing_media")
          .insert({
            listing_id: listingId,
            storage_path: path,
            media_type: isVideo ? "VIDEO" : "IMAGE",
            sort_order: media.length + index,
            alt_text: file.name.replace(/\.[^.]+$/, ""),
          })
          .select("id,storage_path,media_type,sort_order,alt_text")
          .single();
        if (rowError || !row) throw rowError ?? new Error("Could not save media metadata.");
        uploaded.push(row as MediaItem);
      }
      setMedia((current) => [...current, ...uploaded]);
      setMessage(`${uploaded.length} file${uploaded.length === 1 ? "" : "s"} uploaded.`);
    } catch (uploadError) {
      setError(uploadError instanceof Error ? uploadError.message : "Upload failed. Please try again.");
    } finally {
      setUploading(false);
    }
  }

  async function removeMedia(item: MediaItem) {
    setError("");
    setMessage("");
    const { error: storageError } = await supabase.storage.from("listing-media").remove([item.storage_path]);
    if (storageError) {
      setError(storageError.message);
      return;
    }
    const { error: dbError } = await supabase.from("listing_media").delete().eq("id", item.id);
    if (dbError) {
      setError(dbError.message);
      return;
    }
    setMedia((current) => current.filter((entry) => entry.id !== item.id));
    setMessage("Media removed.");
  }

  function publicUrl(path: string) {
    return supabase.storage.from("listing-media").getPublicUrl(path).data.publicUrl;
  }

  return (
    <section className="rounded-2xl border border-[var(--border)] bg-white p-6 sm:p-8">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="text-xs uppercase tracking-[0.14em] text-[var(--muted)]">Media</p>
          <h2 className="mt-2 text-xl font-semibold">Show the space.</h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-[var(--slate)]">Upload clear photos of the placement. The first image is used as the primary visual until a dedicated cover selector is added.</p>
        </div>
        <label className="inline-flex cursor-pointer items-center justify-center rounded-xl bg-[var(--ink)] px-5 py-3 text-sm font-semibold text-white">
          {uploading ? "Uploading…" : "Upload media"}
          <input type="file" accept="image/*,video/*" multiple className="sr-only" onChange={uploadFiles} disabled={uploading || media.length >= MAX_FILES} />
        </label>
      </div>

      {media.length ? (
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {media.map((item, index) => (
            <div key={item.id} className="overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface)]">
              <div className="aspect-[4/3] overflow-hidden bg-white">
                {item.media_type === "VIDEO" ? (
                  <video src={publicUrl(item.storage_path)} className="h-full w-full object-cover" controls preload="metadata" />
                ) : (
                  <img src={publicUrl(item.storage_path)} alt={item.alt_text || "Listing media"} className="h-full w-full object-cover" />
                )}
              </div>
              <div className="flex items-center justify-between gap-3 p-3">
                <p className="text-xs font-semibold text-[var(--slate)]">{index === 0 ? "Primary image" : `Media ${index + 1}`}</p>
                <button type="button" onClick={() => removeMedia(item)} className="text-xs font-semibold text-red-700">Remove</button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="mt-6 rounded-xl border border-dashed border-[var(--border-strong)] px-6 py-12 text-center">
          <p className="text-sm font-semibold">No media uploaded yet.</p>
          <p className="mt-2 text-sm text-[var(--muted)]">Use real photos so advertisers can judge the placement quickly.</p>
        </div>
      )}

      {error && <p role="alert" className="mt-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">{error}</p>}
      {message && <p role="status" className="mt-5 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">{message}</p>}
    </section>
  );
}
