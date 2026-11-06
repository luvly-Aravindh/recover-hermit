HERMIT HELP. Campaign 1 landing page (Leak Audit, page gate to WhatsApp). v10, 28 Oct 2026
Netlify: drag this folder (or the zip) into app.netlify.com > Sites > Add new site > Deploy manually.

WHAT IS IN THE ZIP
index.html       the landing page: page A (Leak Audit) with page B's "tool vs Hermit" block mid-page
not-a-fit.html   the honest no for stores under 100 orders a month (/not-a-fit)
config.js        the only file you need to edit (gate on/off, phone field on/off, number, texts)
netlify.toml, _redirects, robots.txt (blocks indexing for the preview; remove on hermithelp.in), favicon.webp

THE FLOW
1. Every big "Chat on WhatsApp" button opens a 15-second sheet: store link, WhatsApp number, order range.
   The sticky bar at the bottom stays one-tap (no sheet). "Skip this and just open WhatsApp" is on the sheet too.
2. Submit posts each form answer (including additional custom fields) to the Desk API; subject "New leak audit lead - Hermit";
   source "leak-audit-v10". It fires the Meta pixel Lead event, then:
   100+ orders  -> WhatsApp opens in the same tab with the text already typed:
                   "Hi Hermit Help, I saw the leak audit page. My store is {store}, {orders} orders a month. What would you set up first?"
                   and the pixel Contact event fires.
   Under 100    -> /not-a-fit (the honest no, three free fixes, "message us when you cross 100").
   If the backend is slow or down, the lead still goes to WhatsApp after 1.5 seconds. The handoff never waits on us.
3. In WhatsApp, the automation (see the Flows document, Campaign 1) skips the questions it already has and Aditya replies with the plan.

CONFIG SWITCHES (config.js)
GATE: "micro"   the sheet above.   GATE: "none"   every button is one-tap WhatsApp, nothing is recorded on our side.
GATE_PHONE: true asks for the WhatsApp number (so the people who never press send in WhatsApp can still be messaged).
GATE_PHONE: false asks only store link and order range.

PIXEL EVENTS (pixel 925531080169889)
PageView; InitiateCheckout (sheet opened); Lead (sheet submitted, content_category = order range); Contact (WhatsApp opened).
Optimise the campaign for Lead. Build the retargeting audience from PageView minus Lead, 7 days.

ONE TEST AFTER DEPLOY
Submit the sheet once with a real-looking store and the number 9999999999, orders 100 to 500. Check the desk inbox for the
row (subject "New leak audit lead - Hermit"). Then once with Under 100 and confirm /not-a-fit opens. Delete both rows.

BEFORE LAUNCH (not for the temporary preview)
- Replace sample reviews, faces, video cards and case-study stores with real, permitted content.
- Confirm with Aditya: reorder flow, chatbot, CRM in the Rs 3,499 scope; onboarding and priority-support scope at Rs 4,299;
  7-day go-live and first-month-free terms; Monday setup batch; integrations shown in the second logo row; order tagging.
- Switch the proof pill to a real feed or remove it.

CHANGE LOG
v12  One-line CTA microcopy, one line under the hero CTA, proof pill half size bottom-left, sticky bar = button + one liner, centred sections, award-medal guarantee badge.
v11  Lighter page: hero trust line, 5 pains, benefit carousel on mobile, brand marks on case cards, black-and-gold seal, bigger mobile type.
v10  Campaign 1 page. Page B's tool-vs-Hermit block added mid-page. Micro-gate before WhatsApp. not-a-fit.html back. Config switches.
v9   WhatsApp only, no booking.   v8  WhatsApp primary on both pages, number 7078284423.   v7  Two price points, positioning line.
