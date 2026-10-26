export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12 border-t-4 gold-accent">
      <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8 text-sm">
        <div>
          <h3 className="text-lg font-bold mb-4">DSV Consulting LLC (Texas)</h3>
          <p>A Delta S Ventures LP portfolio company<br />Merchant Banking & Financial Strategy</p>
          <div className="mt-4 space-x-4">
            <a href="https://x.com/dsvconsult" target="_blank" rel="noopener noreferrer" className="text-gold">X</a>
            <a href="https://www.linkedin.com/company/dsvconsult" target="_blank" rel="noopener noreferrer" className="text-gold">LinkedIn</a>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">Headquarters</h3>
          <p>Mailing Address:<br />C/O Delta S Management Inc.<br />615 Longview Drive<br />Sugar Land, Texas 77478-3728</p>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">Identifiers</h3>
          <p>D-U-N-S: 62-379-4281<br />Phone: +1 (281) 435-3917</p>
        </div>
      </div>
      <div className="text-center text-xs text-slate-500 mt-8">
        COPYRIGHT 2022 TO 2026 BY DSV CONSULTING LLC, F/K/A RHODES HOLDINGS LLC. ALL RIGHTS RESERVED.
      </div>
    </footer>
  );
}
