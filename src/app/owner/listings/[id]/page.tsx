import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import ListingMediaUploader from "@/components/listing-media-uploader";
import { createClient } from "@/lib/supabase/server";

export default async function OwnerListingManagePage({ params }: { params: Promise<{ id: string }> }) {
 const { id } = await params;
 const supabase = await createClient();
 const { data:{ user } } = await supabase.auth.getUser();
 if (!user) redirect('/auth/login');
 const { data: profile } = await supabase.from('profiles').select('role,status').eq('id', user.id).single();
 if (!profile || profile.role !== 'LISTING_OWNER' || profile.status !== 'ACTIVE') redirect('/dashboard');
 const { data } = await supabase.from('ad_listings').select('id,title,description,status,ad_type,size_width,size_height,size_unit,estimated_views_daily,estimated_views_monthly,locations(address_line,landmark,cities(name),districts(name)),listing_pricing(monthly_price,daily_price,weekly_price,currency),listing_media(id,storage_path,media_type,sort_order,alt_text)').eq('id', id).eq('owner_id', user.id).single();
 const listing:any = data;
 if (!listing) notFound();
 const location:any = Array.isArray(listing.locations) ? listing.locations[0] : listing.locations;
 const pricing:any = Array.isArray(listing.listing_pricing) ? listing.listing_pricing[0] : listing.listing_pricing;
 const media = [...(listing.listing_media ?? [])].sort((a:any,b:any)=>a.sort_order-b.sort_order);
 const city = Array.isArray(location?.cities) ? location.cities[0]?.name : location?.cities?.name;
 const district = Array.isArray(location?.districts) ? location.districts[0]?.name : location?.districts?.name;
 return <main><div>{listing.title} - {[city,district].filter(Boolean).join(', ')}</div></main>;
}
