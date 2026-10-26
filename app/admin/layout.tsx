import { createClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import LogoutButton from '@/components/LogoutButton';

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect('/login');
  }

  return (
    <div className="min-h-screen bg-slate-100">
      <div className="bg-slate-900 text-white px-6 py-3 flex justify-between items-center text-sm">
        <div className="flex items-center gap-4">
          <span className="font-semibold">DSV Admin</span>
          <span className="text-slate-400">{user.email}</span>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/" className="text-gold hover:underline">Public Site</Link>
          <LogoutButton />
        </div>
      </div>
      <div className="py-6">{children}</div>
    </div>
  );
}
