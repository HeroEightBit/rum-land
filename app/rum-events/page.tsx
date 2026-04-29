'use client';

const RumEvents = () => {
  function triggerBizEvent() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const dynatrace = (window as any).dynatrace;

    if (dynatrace?.sendBizEvent) {
      dynatrace.sendBizEvent('type', {
        prop: 'value',
        name: 'Example Biz Event',
        timestamp: Date.now(),
        url: 'rumland.heroeightbit.com',
        page_id: '117',
        'window.orientation': 'diagonal',
      });
    }

    console.log('Business event sent');
  }

  return (
    <div className="mx-auto min-h-screen w-full max-w-4xl px-6 py-20 text-slate-900 dark:text-slate-100">
      <header className="space-y-3">
        <p className="text-sm uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">RUM Events</p>
        <h1 className="text-4xl font-semibold sm:text-5xl">Business Event Example</h1>
        <p className="max-w-2xl text-lg text-slate-600 dark:text-slate-300">
          Send a Dynatrace business event from the browser and verify the payload in console output.
        </p>
      </header>

      <section className="mt-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-950">
        <h2 className="text-2xl font-semibold">Biz Events</h2>
        <p className="mt-3 text-slate-600 dark:text-slate-400">
          Method: <span className="font-mono">dynatrace.sendBizEvent</span>
        </p>
        <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center">
          <button
            type="button"
            onClick={triggerBizEvent}
            className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-500"
          >
            Trigger Biz Event
          </button>
          <p className="text-slate-500 dark:text-slate-400">
            Open the browser console to confirm the business event was sent.
          </p>
        </div>
      </section>
    </div>
  );
};

export default RumEvents;
