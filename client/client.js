const publicVapidKey =
  "BMk2ttWF69EgQzUMAmiCe2WuzVX7tdo18kjxffHjHTFEXxBxg0-ZIKqyYzLtI_b7hTqD_4N8e_Xj1ytsFb8PGE0";

function urlBase64ToUint8Array(base64String) {
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding)
    .replace(/\-/g, "+")
    .replace(/_/g, "/");

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}

//check if the serveice worker can work in the current browser

// setInterval(() => {
//   if ("serviceWorker" in navigator) {
//     send().catch((err) => console.error(err));
//   }
// }, 2000);

async function send() {
  //register service worker
  const register = await navigator.serviceWorker.register("/worker.js", {
    scope: "/",
  });

  //register push
  const subscription = await register.pushManager.subscribe({
    userVisibleOnly: true,

    //public vapid key
    applicationServerKey: urlBase64ToUint8Array(publicVapidKey),
  });

  console.log(subscription);

  //Send push notification
  await fetch("/subscribe", {
    method: "POST",
    body: JSON.stringify(subscription),
    headers: {
      "content-type": "application/json",
    },
  });
}
