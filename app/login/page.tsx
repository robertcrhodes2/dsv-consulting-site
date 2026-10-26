'use client';

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get('redirectTo') || '/admin';

  const supabase = createClient();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setMessage(error.message);
      setLoading(false);
      return;
    }

    router.push(redirectTo);
    router.refresh();
  };

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center px-4">
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full">
        <div className="text-center mb-8">
          <div className="logo-container mx-auto mb-4">
            <img src="https://dsvconsult.com/assets/favicon.jpg" alt="DSV" className="h-full w-full object-cover" />
          </div>
          <h1 className="text-2xl font-bold">DSV Admin Login</h1>
          <p className="text-sm text-slate-500 mt-1">Merchant Banking Administration</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full border border-slate-300 p-3 rounded focus:outline-none focus:border-gold"
              placeholder="you@dsvconsult.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full border border-slate-300 p-3 rounded focus:outline-none focus:border-gold"
              placeholder="••••••••"
            />
          </div>

          {message && (
            <p className="text-sm text-red-600 bg-red-50 p-2 rounded">{message}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gold text-slate-900 font-bold py-3 rounded hover:bg-yellow-500 transition disabled:opacity-50"
          >
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>

        <p className="text-xs text-slate-400 text-center mt-6">
          Access restricted to authorized DSV personnel.
        </p>
      </div>
    </div>
  );
}
