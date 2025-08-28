function App() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow p-8">
        <h1 className="text-3xl font-bold mb-2">Superior Drive</h1>
        <p className="text-slate-600 mb-6">Drive Superior, Anytime.</p>

        <div className="grid gap-4">
          <a
            href="http://localhost:4000/api/health"
            className="inline-block px-4 py-2 rounded-xl border hover:bg-slate-100 transition"
            target="_blank"
          >
            Check API Health
          </a>

          <div className="border rounded-xl p-4">
            <h2 className="font-semibold mb-2">Quick Start</h2>
            <ol className="list-decimal ml-5 space-y-1 text-sm text-slate-700">
              <li>Run backend: <code>npm run dev</code> in <em>/api</em></li>
              <li>Run frontend: <code>npm run dev</code> here</li>
              <li>Click “Check API Health” to confirm connection</li>
            </ol>
          </div>

          <p className="text-xs text-slate-500">
            Phase 1 scaffold — Phase 2 will add database & real cars.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
