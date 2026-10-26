import Link from 'next/link';

export default function AdminDashboard() {
  return (
    <div className="container mx-auto px-6 max-w-5xl">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">DSV Admin Dashboard</h1>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Link href="/admin/portfolio" className="bg-white p-8 rounded-lg shadow hover:shadow-lg transition">
          <h2 className="text-xl font-bold mb-2">Portfolio</h2>
          <p className="text-slate-600">Add and manage client engagements.</p>
        </Link>
        <Link href="/admin/press" className="bg-white p-8 rounded-lg shadow hover:shadow-lg transition">
          <h2 className="text-xl font-bold mb-2">Press Releases</h2>
          <p className="text-slate-600">Create and distribute press releases.</p>
        </Link>
        <Link href="/admin/clients" className="bg-white p-8 rounded-lg shadow hover:shadow-lg transition">
          <h2 className="text-xl font-bold mb-2">Clients & Documents</h2>
          <p className="text-slate-600">Manage investor document libraries.</p>
        </Link>
        <Link href="/admin/investors" className="bg-white p-8 rounded-lg shadow hover:shadow-lg transition">
          <h2 className="text-xl font-bold mb-2">Investors & NDAs</h2>
          <p className="text-slate-600">Invite investors and track NDA status.</p>
        </Link>
      </div>

      <div className="mt-10 bg-green-50 border border-green-200 text-green-800 p-4 rounded text-sm">
        Authentication is active. Only signed-in users can access admin routes.
      </div>
    </div>
  );
}
