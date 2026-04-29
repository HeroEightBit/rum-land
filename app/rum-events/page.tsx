'use client';

const RumEvents = () => {
    function triggerBizEvent() {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const dynatrace = (window as any).dynatrace;

        if (dynatrace?.sendBizEvent) {
            dynatrace.sendBizEvent("type", {
                prop: "value",
                name: "Example Biz Event",
                timestamp: Date.now(),
                url: "rumland.heroeightbit.com",
                "page_id": "117",
                "window.orientation": "diagonal"
            });
        }

        //Sending a business event
        console.log("Business event sent");
    }

    return (
        <div>   
            <h1>Rum Events</h1>
            <div>
                <h3>Biz Events</h3>
                <p>Method: sendBizEvent</p>
                <button onClick={triggerBizEvent}>Trigger Biz Event</button>
            </div>
        </div>
    )
}

export default RumEvents