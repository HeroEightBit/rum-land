import Link from "next/link";

export default function Home() {

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1 className="text-6xl font-bold">Welcome to RUM Land</h1>
        <p className="mt-3 text-2xl">A playground for Real User Monitoring</p>
        <div className="mt-6 flex w-full max-w-3xl items-center justify-between">
          <h2 className="text-2xl font-semibold">Most Common RUM Elements Captured</h2>
          <ul>
            <li><Link href="/rum-api" className="hover:bg-gray-800 p-2 rounded transition">API Example and Usage</Link></li>
            <li><Link href="/rum-events" className="hover:bg-gray-800 p-2 rounded transition">RUM Events</Link></li>
          </ul>
          <div className="flex items-center space-x-4">
            <h3>Actions</h3>
            <div>Loading Action (refresh the page)</div>
            <div>Click Action (Automatic Action)</div>
            <button>Automatic Action</button>
            <h3>Information Collecting</h3>
            <div>User Tagging</div>
            <form action="collectUserTags" method="get"></form>
            <div>Error</div>
            <button>Error</button>
          </div>
        </div>
      </main>
    </div>
  );
}
