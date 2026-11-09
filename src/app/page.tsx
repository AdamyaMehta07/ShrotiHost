export default function Home() {
  return (
    <main className="container-page py-16">
      <h1 className="text-4xl font-bold text-ink">Shroti Host</h1>
      <p className="mt-2 text-ink-soft">Design tokens ka test page.</p>

      <div className="mt-8 flex flex-wrap gap-3">
        <button className="rounded-(--radius-control) bg-brand-600 px-5 py-2.5 font-semibold text-white hover:bg-brand-700">
          Primary button
        </button>
        <button className="rounded-(--radius-control) border border-brand-600 px-5 py-2.5 font-semibold text-brand-700 hover:bg-brand-50">
          Secondary button
        </button>
      </div>

      <div className="mt-8 grid grid-cols-5 gap-2">
        <div className="h-16 rounded bg-brand-100" />
        <div className="h-16 rounded bg-brand-300" />
        <div className="h-16 rounded bg-brand-500" />
        <div className="h-16 rounded bg-brand-600" />
        <div className="h-16 rounded bg-brand-900" />
      </div>
    </main>
  );
}