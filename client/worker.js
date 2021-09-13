let link = "https://www.bsse.tk";
let notificationBody =
  "We have a class right now. Soo please join ASAP efegerg greer.";
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
    notificationBody =
      "We have a Technical and Business Writing (Miss Afroz Ilyas) class at room CT-404. So please join ASAP.";
  } else if (hrs == 11 && min == 35) {
    notificationBody =
      "We have a Computer Networks (Dr.Ehtisham)  class at room CT-403. So please join ASAP.";
  } else if (hrs == 12 && min == 35) {
    notificationBody =
      "We have a Business Process Engineering (Dr.Hameedur Rahman) class at room CT-403. So please join ASAP.";
  } else if (hrs == 13 && min == 35) {
    notificationBody =
      "We have a Formal Methods in Software Engineering (Mr.Adnan) class at room CT-403. So please join ASAP.";
  }
}

if (day == 2) {
  if (hrs == 8 && min == 35) {
    notificationBody =
      "We have a Software Construction & Development (Ms.Arooj) class on zoom.So please join ASAP. Click on this notification to join the class.";
  } else if (hrs == 9 && min == 35) {
    notificationBody =
      "We have a Computer Networks (Dr.Ehtisham) class on zoom.So please join ASAP. Click on this notification to join the class.";
  } else if (hrs == 10 && min == 35) {
    notificationBody =
      "We have a Technical and Business Writing (Miss.Afroz Ilyas) class on zoom.So please join ASAP. Click on this notification to join the class.";
  } else if (hrs == 11 && min == 35) {
    notificationBody =
      "We have a Business Process Engineering (Dr.Hameedur Rahman) class on zoom.So please join ASAP. Click on this notification to join the class.";
  } else if (hrs == 13 && min == 35) {
    notificationBody =
      "We have a Formal Methods in Software Engineering (Mr.Adnan) class on zoom.So please join ASAP. Click on this notification to join the class.";

    link =
      "https://us04web.zoom.us/j/9656177621?pwd=dDQvN1UwMkV0NGpXdG9WRWJvSFpqZz09#success";
  }
}
if (day == 3) {
  if (hrs == 9 && min == 35) {
    notificationBody =
      "We have a Software Construction and Development (Ms.Arooj) class on zoom.So please join ASAP. Click on this notification to join the class.";
  } else if (hrs == 10 && min == 35) {
    notificationBody =
      "We have a Formal Methods in Software Engineering (Mr.Adnan) class on zoom.So please join ASAP. Click on this notification to join the class.";
  } else if (hrs == 11 && min == 35) {
    notificationBody =
      "We have a Software Construction and Development (Ms.Arooj) Lab at LAB-01.So please join ASAP.";
  }
}
if (day == 4) {
  if (hrs == 8 && min == 35) {
    notificationBody =
      "We have a Technical and Business Writing (Miss.Afroz Ilyas) class on zoom.So please join ASAP. Click on this notification to join the class.";
  } else if (hrs == 9 && min == 35) {
    notificationBody =
      "We have a Computer Networks (Dr.Ehtisham) class on zoom.So please join ASAP. Click on this notification to join the class.";

    link =
      "https://us04web.zoom.us/j/5764449003?pwd=ampRYmNmcE55SmdkWWlPZndVek1Ldz09#success";
  } else if (hrs == 10 && min == 35) {
    notificationBody =
      "We have a Business Process Engineering (Dr.Hameedur Rahman) class at room CT-403. So please join ASAP.";
  } else if (hrs == 11 && min == 35) {
    notificationBody =
      "We have a Computer Networks Lab (Fahad) Lab at LAB-01.So please join ASAP.";
  }
}

self.addEventListener("notificationclick", function (e) {
  var notification = e.notification;
  //   var primaryKey = notification.data.primaryKey;
  var action = e.action;
  console.log("notification clicked");

  if (action === "close") {
    notification.close();
  } else {
    clients.openWindow(link);
    notification.close();
  }
});

self.addEventListener("push", (e) => {
  const data = e.data.json();
  console.log(data);
  self.registration.showNotification(
    data.title, // title of the notification
    {
      body: notificationBody, //the body of the push notification
      // icon
    }
  );
});
