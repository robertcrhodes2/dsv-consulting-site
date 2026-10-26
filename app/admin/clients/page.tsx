export default function AdminClients() {
  return (
    <div className="min-h-screen bg-slate-100 py-10">
      <div className="container mx-auto px-6 max-w-3xl">
        <h1 className="text-3xl font-bold mb-6">Clients & Document Library</h1>
        <div className="bg-white p-6 rounded-lg shadow">
          <p className="text-slate-600 mb-4">
            This section manages clients and their private investor document libraries.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm text-slate-700">
            <li>Create a client record</li>
            <li>Upload fact sheets, offering memoranda, and financials to the <code>investor-docs</code> Supabase Storage bucket</li>
            <li>Documents are private by default; signed URLs are generated after NDA completion</li>
          </ul>
          <p className="mt-6 text-sm text-slate-500">
            Wire the form to the <code>clients</code> and <code>documents</code> tables from the schema. File uploads use the Supabase Storage client.
          </p>
        </div>
      </div>
    </div>
  );
}
