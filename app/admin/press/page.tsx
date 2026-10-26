'use client';

import { useState } from 'react';
import { createClient } from '@/lib/supabase/client';

export default function AdminPress() {
  const [form, setForm] = useState({ title: '', body: '', date: '', distribute: false });
  const [status, setStatus] = useState('');

  const supabase = createClient();

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Saving...');
    const { error } = await supabase.from('press_releases').insert({
      title: form.title,
      body: form.body,
      date: form.date,
      distributed: form.distribute,
    });
    setStatus(error ? `Error: ${error.message}` : 'Saved successfully. Distribution stub ready.');
    if (!error) setForm({ title: '', body: '', date: '', distribute: false });
  };

  return (
    <div className="min-h-screen bg-slate-100 py-10">
      <div className="container mx-auto px-6 max-w-3xl">
        <h1 className="text-3xl font-bold mb-6">Manage Press Releases</h1>
        <form onSubmit={submit} className="bg-white p-6 rounded-lg shadow space-y-4">
          <input placeholder="Title" value={form.title} onChange={e => setForm({...form, title: e.target.value})} required className="w-full border p-2 rounded" />
          <input placeholder="Date" value={form.date} onChange={e => setForm({...form, date: e.target.value})} className="w-full border p-2 rounded" />
          <textarea placeholder="Body" value={form.body} onChange={e => setForm({...form, body: e.target.value})} required className="w-full border p-2 rounded" rows={4} />
          <label className="flex items-center"><input type="checkbox" checked={form.distribute} onChange={e => setForm({...form, distribute: e.target.checked})} className="mr-2" /> Distribute to LinkedIn & X</label>
          <button type="submit" className="bg-gold text-slate-900 font-bold py-2 px-6 rounded">Publish</button>
          {status && <p className="text-sm">{status}</p>}
        </form>
        <p className="mt-6 text-sm text-slate-500">Distribution is stubbed. Wire an API route to X API v2 and LinkedIn API when ready.</p>
      </div>
    </div>
  );
}
