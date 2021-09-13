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

let date;

date = new Date();
console.log(date);

let day = date.getDay();

console.log(day);

let hrs = date.getHours();
let min = date.getMinutes();

console.log("hrs ", hrs);
console.log("min ", min);
if (day == 1) {
  if (hrs == 8 && min == 35) {
    if ("serviceWorker" in navigator) {
      send().catch((err) => console.error(err));
    }
  } else if (hrs == 11 && min == 35) {
    if ("serviceWorker" in navigator) {
      send().catch((err) => console.error(err));
    }
  } else if (hrs == 12 && min == 35) {
    if ("serviceWorker" in navigator) {
      send().catch((err) => console.error(err));
    }
  } else if (hrs == 13 && min == 35) {
    if ("serviceWorker" in navigator) {
      send().catch((err) => console.error(err));
    }
  }
}
if (day == 1) {
  if (hrs == 8 && min == 35) {
    if ("serviceWorker" in navigator) {
      send().catch((err) => console.error(err));
    }
  } else if (hrs == 11 && min == 35) {
    if ("serviceWorker" in navigator) {
      send().catch((err) => console.error(err));
    }
  } else if (hrs == 12 && min == 35) {
    if ("serviceWorker" in navigator) {
      send().catch((err) => console.error(err));
    }
  } else if (hrs == 13 && min == 35) {
    if ("serviceWorker" in navigator) {
      send().catch((err) => console.error(err));
    }
  }
}
if (day == 2) {
  if (hrs == 8 && min == 35) {
    if ("serviceWorker" in navigator) {
      send().catch((err) => console.error(err));
    }
  } else if (hrs == 9 && min == 35) {
    if ("serviceWorker" in navigator) {
      send().catch((err) => console.error(err));
    }
  } else if (hrs == 10 && min == 35) {
    if ("serviceWorker" in navigator) {
      send().catch((err) => console.error(err));
    }
  } else if (hrs == 11 && min == 35) {
    if ("serviceWorker" in navigator) {
      send().catch((err) => console.error(err));
    }
  } else if (hrs == 13 && min == 40) {
    if ("serviceWorker" in navigator) {
      send().catch((err) => console.error(err));
    }
  }
}
if (day == 3) {
  if (hrs == 9 && min == 35) {
    if ("serviceWorker" in navigator) {
      send().catch((err) => console.error(err));
    }
  } else if (hrs == 10 && min == 35) {
    if ("serviceWorker" in navigator) {
      send().catch((err) => console.error(err));
    }
  } else if (hrs == 11 && min == 35) {
    if ("serviceWorker" in navigator) {
      send().catch((err) => console.error(err));
    }
  }
}
if (day == 4) {
  if (hrs == 8 && min == 35) {
    if ("serviceWorker" in navigator) {
      send().catch((err) => console.error(err));
    }
  } else if (hrs == 9 && min == 35) {
    if ("serviceWorker" in navigator) {
      send().catch((err) => console.error(err));
    }
  } else if (hrs == 10 && min == 35) {
    if ("serviceWorker" in navigator) {
      send().catch((err) => console.error(err));
    }
  } else if (hrs == 11 && min == 35) {
    if ("serviceWorker" in navigator) {
      send().catch((err) => console.error(err));
    }
  }
}

if ("serviceWorker" in navigator) {
  send().catch((err) => console.error(err));
}

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
