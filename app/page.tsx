import Link from "next/link";

export default function Home() {

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-start py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1 className="text-6xl font-bold">Welcome to RUM Land</h1>
        <p className="mt-3 text-2xl">A playground for Real User Monitoring</p>
        <div className="mt-6 flex w-full flex-col gap-10">
          <section className="flex flex-col items-start space-y-4">
            <h2 className="text-2xl font-semibold">Most Common RUM Elements Captured</h2>
            <ul className="space-y-2">
              <li><Link href="/rum-api" className="rounded px-3 py-2 transition hover:bg-gray-800 hover:text-white">API Example and Usage</Link></li>
              <li><Link href="/rum-events" className="rounded px-3 py-2 transition hover:bg-gray-800 hover:text-white">RUM Events</Link></li>
            </ul>
          </section>
          <div className="grid w-full gap-6 md:grid-cols-2">
            <section className="space-y-3 rounded-3xl border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900">
              <h3 className="text-xl font-semibold">Actions</h3>
              <div className="space-y-3">
                <div>Loading Action (refresh the page)</div>
                <div>Click Action (Automatic Action)</div>
                <button className="rounded bg-slate-900 px-4 py-2 text-white transition hover:bg-slate-700">Automatic Action</button>
              </div>
            </section>
            <section className="space-y-3 rounded-3xl border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900">
              <h3 className="text-xl font-semibold">Information Collecting</h3>
              <div className="space-y-3">
                <div>User Tagging</div>
                <form action="collectUserTags" method="get" className="space-y-2">
                  <button className="rounded bg-slate-900 px-4 py-2 text-white transition hover:bg-slate-700">Collect User Tags</button>
                </form>
                <div>Error</div>
                <button className="rounded bg-red-600 px-4 py-2 text-white transition hover:bg-red-500">Error</button>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
