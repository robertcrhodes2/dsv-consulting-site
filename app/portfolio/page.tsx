import { createClient } from '@/lib/supabase/server';

const fallbackPortfolio = [
  {
    category: 'Technology',
    items: [
      { name: 'AW Entertainment LLC', location: 'Spring, Texas', years: '2026 - Current', description: 'A leading simulation platform delivering cybersecurity & disaster recovery tabletop exercises with AutoTableTop™ and cybersecurity gamification with ThreatGEN® Red vs. Blue.', tags: ['Fractional CFO Services', 'Funding'], current: true, website: 'https://a-went.com' },
      { name: 'Derezzed Inc. (D/B/A ThreatGEN)', location: 'Houston, Texas', years: '2019 - Current', description: 'A leading simulation platform delivering cybersecurity & disaster recovery tabletop exercises with AutoTableTop™ and cybersecurity gamification with ThreatGEN® Red vs. Blue.', tags: ['Fractional CFO Services'], current: true, website: 'https://threatgen.com' },
      { name: 'Edge Realm Inc.', location: 'Sugar Land, Texas', years: '2025 - Current', description: 'Technology systems integrator providing the ERVault™ "data center in a box" innovative solution for data & process sovereignty.', tags: ['Fractional CFO Services'], current: true, website: 'https://edgerealm.ai' },
    ]
  },
  {
    category: 'Hospitality',
    items: [
      { name: 'C9 JR LLC (D/B/A Cloud 9 Hookah Lounge)', location: 'San Antonio, Texas', years: '2024 - Current', description: 'San Antonio hookah lounge with after hours operations and mobile hookah locations throughout San Antonio, Texas.', tags: ['Fractional CFO Services', 'Funding'], current: true, website: 'https://cloud9-satx.com' },
    ]
  }
];

export default async function Portfolio() {
  let categories = fallbackPortfolio;

  try {
    const supabase = await createClient();
    const { data } = await supabase.from('portfolio_items').select('*').order('category');
    if (data && data.length > 0) {
      categories = [{ category: 'All Engagements', items: data }];
    }
  } catch (e) {
    // Use fallback
  }

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-4 text-center">Portfolio & Engagements</h2>
        <div className="w-24 h-1 bg-gold mx-auto mb-12" />
        {categories.map((cat) => (
          <div key={cat.category} className="mb-16">
            <h3 className="text-2xl font-bold mb-8 border-l-4 border-gold pl-4 text-slate-800 uppercase tracking-widest">{cat.category}</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cat.items.map((item: any) => (
                <a key={item.name} href={item.website || '#'} target={item.website ? '_blank' : undefined} rel="noopener noreferrer" className={`${item.current ? 'bg-white shadow hover:shadow-xl' : 'bg-slate-100 shadow-inner'} p-6 transition relative border border-slate-200 block`}>
                  {item.current && <div className="absolute top-2 right-2 text-gold">★</div>}
                  <h4 className="font-bold text-lg mb-1">{item.name}</h4>
                  <p className="text-xs text-slate-400 mb-3">{item.location} | {item.years}</p>
                  <p className="text-sm mb-4">{item.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {(item.tags || []).map((tag: string) => (
                      <span key={tag} className={`text-xs font-bold ${item.current ? 'text-gold bg-slate-900' : 'text-slate-500 bg-slate-200'} px-2 py-1 uppercase`}>{tag}</span>
                    ))}
                  </div>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
