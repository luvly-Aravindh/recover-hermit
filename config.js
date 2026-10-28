/* Hermit Help, Campaign 1 landing config. Edit here, nothing else needs touching. */
window.HH = {
  SOURCE: "leak-audit-v10",
  SUBJECT: "New leak audit lead - Hermit",
  GATE: "micro",            // "micro" = store link + orders (+ number) before WhatsApp. "none" = every button is one-tap.
  GATE_PHONE: true,         // false hides the WhatsApp-number field (two fields only)
  DESK_URL: "https://deskbackend.getnos.io/v1/lead",
  DESK_KEY: "lh_xuils9BcFK0KkRxT1CUibTKSv8hQGPn3RvM1IbRF-Vo",
  NOTFIT: "not-a-fit.html",
  WHATSAPP: "917078284423",
  WHATSAPP_TEXT: "Hi Hermit Help, I saw the leak audit page. I run a Shopify/WooCommerce store and want to plug my cart and COD leaks. Can we talk?",
  WHATSAPP_TEXT_GATE: "Hi Hermit Help, I saw the leak audit page. My store is {store}, {orders} orders a month. What would you set up first?"
};

var submitting = false;

window.submitLead = async function(fields) {
  if (submitting) return { duplicate: true, skipped: true };
  submitting = true;
  try {
    var res = await fetch(window.HH.DESK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + window.HH.DESK_KEY
      },
      body: JSON.stringify({
        form: "contact",
        honeypot: fields.honeypot || "",
        ...fields
      }),
      keepalive: true
    });

    var data = {};
    try {
      data = await res.json();
    } catch {
      data = {};
    }

    if (data && data.duplicate) return data;
    if (!res.ok) {
      throw new Error((data && data.message) || "Lead submit failed (" + res.status + ")");
    }
    return data;
  } finally {
    submitting = false;
  }
};
