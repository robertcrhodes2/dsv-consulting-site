import Link from 'next/link';

export default function Home() {
  return (
    <>
      <section className="relative h-[70vh] flex items-center bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl border-l-8 gold-accent pl-8">
            <h2 className="text-5xl md:text-7xl font-bold mb-6">
              Strategic Capital. <br />
              <span className="text-gold">Expert Guidance.</span>
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              A Texas merchant banking organization structuring businesses for growth through management consulting, debt & equity funding, fractional CFO services, and taking companies to the public markets.
            </p>
            <Link href="/merchant" className="bg-gold text-slate-900 px-8 py-3 font-bold uppercase tracking-widest hover:bg-yellow-500 transition inline-block">
              Our Expertise
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-12 text-center">
          <div className="p-8 border border-slate-100 shadow-sm hover:shadow-md transition">
            <div className="text-4xl text-gold mb-4">🏛️</div>
            <h3 className="text-2xl font-bold mb-2">Merchant Banking</h3>
            <p className="text-slate-600">Institutional-grade management consulting and financial restructuring.</p>
          </div>
          <div className="p-8 border border-slate-100 shadow-sm hover:shadow-md transition">
            <div className="text-4xl text-gold mb-4">📈</div>
            <h3 className="text-2xl font-bold mb-2">Funding Services</h3>
            <p className="text-slate-600">Accessing debt through ROK Financial and private public funding hedge funds.</p>
          </div>
          <div className="p-8 border border-slate-100 shadow-sm hover:shadow-md transition">
            <div className="text-4xl text-gold mb-4">🚀</div>
            <h3 className="text-2xl font-bold mb-2">Go-Public Consulting</h3>
            <p className="text-slate-600">Extensive experience taking private entities into the public markets.</p>
          </div>
        </div>
      </section>
    </>
  );
}
