import { createClient } from '@/lib/supabase/server';

const fallbackPress = [
  { date: 'October 2026', title: 'DSV Consulting Expands Fractional CFO Practice', body: 'DSV Consulting LLC announces expanded fractional CFO services for high-growth technology and hospitality clients in the Greater Houston area.', distributed: true },
  { date: 'September 2026', title: 'Partnership with Edge Realm for Data Sovereignty Solutions', body: 'Collaborating with Edge Realm Inc. to deliver institutional-grade data and process sovereignty solutions for regulated industries.', distributed: true },
];

export default async function Press() {
  let releases = fallbackPress;

  try {
    const supabase = await createClient();
    const { data } = await supabase.from('press_releases').select('*').order('created_at', { ascending: false });
    if (data && data.length > 0) releases = data;
  } catch (e) {}

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-4 text-center">Press Releases</h2>
        <div className="w-24 h-1 bg-gold mx-auto mb-12" />
        <div className="space-y-8 max-w-4xl mx-auto">
          {releases.map((p: any) => (
            <article key={p.title} className="border-b border-slate-200 pb-8">
              <p className="text-sm text-gold font-semibold mb-2">{p.date || new Date(p.created_at).toLocaleDateString()}</p>
              <h3 className="text-2xl font-bold mb-3">{p.title}</h3>
              <p className="text-slate-600">{p.body}</p>
              {p.distributed && <p className="text-xs text-slate-400 mt-3">Distributed to LinkedIn & X</p>}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
