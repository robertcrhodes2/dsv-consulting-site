export default function Merchant() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-4 text-center">Merchant Banking Services</h2>
        <div className="w-24 h-1 bg-gold mx-auto mb-12" />
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-10 border-t-4 gold-accent shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Fractional CFO Services</h3>
            <p className="text-slate-600 leading-relaxed">Providing executive-level financial oversight without the full-time overhead. We manage capital structures, financial reporting, and long-term fiscal strategy for high-growth organizations.</p>
          </div>
          <div className="bg-white p-10 border-t-4 gold-accent shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Management Consulting</h3>
            <p className="text-slate-600 leading-relaxed">Preparing your organization for rapid financial growth. We analyze operations, optimize workflows, and restructure corporate governance to meet institutional standards.</p>
          </div>
          <div className="bg-white p-10 border-t-4 gold-accent shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Go-Public Consulting</h3>
            <p className="text-slate-600 leading-relaxed">Navigating the complexities of public markets. From regulatory compliance to market capitalization strategies, we have a proven track record of successful exits and listings.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
