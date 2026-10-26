import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-slate-900 text-white border-b-4 gold-accent shadow-xl">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-3">
          <div className="logo-container">
            <img src="https://dsvconsult.com/assets/favicon.jpg" alt="DSV Consulting LLC" className="h-full w-full object-cover" />
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tighter text-white">DSV CONSULTING LLC</h1>
            <p className="text-[10px] uppercase tracking-widest text-gold font-semibold">A Delta S Ventures LP Company</p>
          </div>
        </Link>
        <nav className="hidden md:flex space-x-8 font-semibold text-sm uppercase tracking-wide">
          <Link href="/" className="nav-link hover:text-gold">Home</Link>
          <Link href="/merchant" className="nav-link hover:text-gold">Merchant Banking</Link>
          <Link href="/funding" className="nav-link hover:text-gold">Funding</Link>
          <Link href="/portfolio" className="nav-link hover:text-gold">Portfolio</Link>
          <Link href="/press" className="nav-link hover:text-gold">Press</Link>
          <Link href="/about" className="nav-link hover:text-gold">About</Link>
          <Link href="/investors" className="nav-link text-gold">Investors</Link>
        </nav>
      </div>
    </header>
  );
}
