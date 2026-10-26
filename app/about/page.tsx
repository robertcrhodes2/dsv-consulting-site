export default function About() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-4xl font-bold mb-4 text-center">About DSV Consulting</h2>
        <div className="w-24 h-1 bg-gold mx-auto mb-12" />
        <p className="text-lg text-slate-700 leading-relaxed mb-6">
          DSV Consulting LLC is a Texas-domiciled private merchant banking organization and a core subsidiary of the family office Delta S Ventures LP. We specialize in providing comprehensive funding solutions, fractional CFO services, and elite management consulting designed to prepare companies for significant financial growth.
        </p>
        <p className="text-lg text-slate-700 leading-relaxed mb-8">
          The firm is led by <a href="https://www.linkedin.com/in/robertrhodes/" target="_blank" rel="noopener noreferrer" className="text-gold font-semibold">Robert C. Rhodes</a>, a seasoned financial strategist with an extensive background in restructuring, mergers and acquisitions, and public market transitions.
        </p>
        <div className="grid md:grid-cols-4 gap-6 text-center">
          <div className="bg-white p-6 shadow"><div className="text-3xl font-bold text-gold">19</div><div className="text-sm uppercase">Public Listings</div></div>
          <div className="bg-white p-6 shadow"><div className="text-3xl font-bold text-gold">50+</div><div className="text-sm uppercase">Restructurings</div></div>
          <div className="bg-white p-6 shadow"><div className="text-3xl font-bold text-gold">8</div><div className="text-sm uppercase">Reg A+ / CF Projects</div></div>
          <div className="bg-white p-6 shadow"><div className="text-3xl font-bold text-gold">$250M</div><div className="text-sm uppercase">Market Cap in 34 Days</div></div>
        </div>
      </div>
    </section>
  );
}
