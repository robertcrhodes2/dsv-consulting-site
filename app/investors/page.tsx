'use client';

import { useState } from 'react';

export default function Investors() {
  const [unlocked, setUnlocked] = useState(false);
  const [code, setCode] = useState('');

  const unlock = () => {
    if (code === 'DSV2026') setUnlocked(true);
    else alert('Invalid access code.');
  };

  return (
    <section className="py-20 bg-slate-900 text-white min-h-screen">
      <div className="container mx-auto px-6 max-w-3xl text-center">
        <h2 className="text-4xl font-bold mb-4">Private Investor Materials</h2>
        <div className="w-24 h-1 bg-gold mx-auto mb-12" />
        <p className="text-slate-300 mb-8">Access is restricted to qualified investors who have received an invitation and completed the required NDA.</p>

        {!unlocked ? (
          <div className="bg-slate-800 p-10 rounded-lg border border-slate-700">
            <p className="mb-6">Enter the access code provided in your invitation email:</p>
            <input
              type="password"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="Access Code"
              className="w-full max-w-xs mx-auto px-4 py-3 rounded text-slate-900 mb-4 block"
            />
            <button onClick={unlock} className="bg-gold text-slate-900 px-8 py-3 font-bold uppercase">Unlock Materials</button>
            <p className="text-xs text-slate-400 mt-6">Demo code: <span className="font-mono">DSV2026</span></p>
          </div>
        ) : (
          <div className="mt-12 text-left space-y-6">
            <div className="bg-slate-800 p-6 rounded border-l-4 gold-accent">
              <h3 className="text-xl font-bold text-gold mb-2">1-Page Investor Fact Sheet</h3>
              <p className="text-slate-300">Download the current fact sheet.</p>
              <a href="#" className="inline-block mt-3 text-gold underline">Download PDF</a>
            </div>
            <div className="bg-slate-800 p-6 rounded border-l-4 gold-accent">
              <h3 className="text-xl font-bold text-gold mb-2">Confidential Offering Materials</h3>
              <p className="text-slate-300">Full document library available after NDA execution.</p>
              <a href="#" className="inline-block mt-3 text-gold underline">View Library</a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
