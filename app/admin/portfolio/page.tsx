'use client';

import { useState } from 'react';
import { createClient } from '@/lib/supabase/client';

export default function AdminPortfolio() {
  const [form, setForm] = useState({ name: '', location: '', years: '', category: '', description: '', tags: '', current: false, website: '' });
  const [status, setStatus] = useState('');

  const supabase = createClient();

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Saving...');
    const tags = form.tags.split(',').map(t => t.trim()).filter(Boolean);
    const { error } = await supabase.from('portfolio_items').insert({
      name: form.name,
      location: form.location,
      years: form.years,
      category: form.category,
      description: form.description,
      tags,
      current: form.current,
      website: form.website || null,
    });
    setStatus(error ? `Error: ${error.message}` : 'Saved successfully');
    if (!error) setForm({ name: '', location: '', years: '', category: '', description: '', tags: '', current: false, website: '' });
  };

  return (
    <div className="min-h-screen bg-slate-100 py-10">
      <div className="container mx-auto px-6 max-w-3xl">
        <h1 className="text-3xl font-bold mb-6">Manage Portfolio</h1>
        <form onSubmit={submit} className="bg-white p-6 rounded-lg shadow space-y-4">
          <input placeholder="Company Name" value={form.name} onChange={e => setForm({...form, name: e.target.value})} required className="w-full border p-2 rounded" />
          <input placeholder="Location" value={form.location} onChange={e => setForm({...form, location: e.target.value})} className="w-full border p-2 rounded" />
          <input placeholder="Years" value={form.years} onChange={e => setForm({...form, years: e.target.value})} className="w-full border p-2 rounded" />
          <input placeholder="Category" value={form.category} onChange={e => setForm({...form, category: e.target.value})} className="w-full border p-2 rounded" />
          <textarea placeholder="Description" value={form.description} onChange={e => setForm({...form, description: e.target.value})} className="w-full border p-2 rounded" rows={3} />
          <input placeholder="Tags (comma separated)" value={form.tags} onChange={e => setForm({...form, tags: e.target.value})} className="w-full border p-2 rounded" />
          <input placeholder="Website URL" value={form.website} onChange={e => setForm({...form, website: e.target.value})} className="w-full border p-2 rounded" />
          <label className="flex items-center"><input type="checkbox" checked={form.current} onChange={e => setForm({...form, current: e.target.checked})} className="mr-2" /> Current Engagement</label>
          <button type="submit" className="bg-gold text-slate-900 font-bold py-2 px-6 rounded">Add Item</button>
          {status && <p className="text-sm">{status}</p>}
        </form>
      </div>
    </div>
  );
}
