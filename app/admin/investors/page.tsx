export default function AdminInvestors() {
  return (
    <div className="min-h-screen bg-slate-100 py-10">
      <div className="container mx-auto px-6 max-w-3xl">
        <h1 className="text-3xl font-bold mb-6">Investors & NDA Workflow</h1>
        <div className="bg-white p-6 rounded-lg shadow">
          <p className="text-slate-600 mb-4">
            Manage investor invitations and the automated NDA → materials flow.
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-sm text-slate-700">
            <li>Add investor (name, email, phone) linked to a client</li>
            <li>Send fact sheet email (Resend)</li>
            <li>On interest, create DocuSign envelope from the NDA template and store <code>envelope_id</code></li>
            <li>DocuSign webhook updates status to <code>completed</code> and triggers materials email with secure link</li>
          </ol>
          <p className="mt-6 text-sm text-slate-500">
            Use the <code>investors</code> and <code>nda_requests</code> tables. See <code>/api/webhooks/docusign</code> for the webhook stub.
          </p>
        </div>
      </div>
    </div>
  );
}
