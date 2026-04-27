import { ActionNameResult } from '@dynatrace/dtrum-api-types';

export default function Home() {

  function triggerError() {
    // Simulate an error
    throw new Error("This is a simulated error for RUM testing.");
  }

  function handleCustomAction() {
    // Simulate a custom action
    if (window.dtrum) {
        const result = window.dtrum.actionName("Custom Action");
        switch(result) {
          case ActionNameResult.SUCCESS:
          // handle success...
          break;
          case ActionNameResult.ACTION_NOT_FOUND:
          // handle action not found...
          break;
          //etc...
        }
    } else {
        // handle missing dtrum api
        console.warn("Dynatrace RUM API is not available.");
    }

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1 className="text-6xl font-bold">Welcome to RUM Land</h1>
        <p className="mt-3 text-2xl">A playground for Real User Monitoring</p>
        <div className="mt-6 flex w-full max-w-3xl items-center justify-between">
          <h2 className="text-2xl font-semibold">Most Common RUM Elements Captured</h2>
          <div className="flex items-center space-x-4">
            <h3>Actions</h3>
            <div>Loading Action (refresh the page)</div>
            <div>Click Action (Automatic Action)</div>
            <button>Automatic Action</button>
            <div>Custom Action</div>
            <button>Custom Action</button>
            <h3>Information Collecting</h3>
            <div>User Tagging</div>
            <form action="collectUserTags" method="get"></form>
            <div>Error</div>
            <button onClick={triggerError}>Error</button>
          </div>
        </div>
      </main>
    </div>
  );
}
