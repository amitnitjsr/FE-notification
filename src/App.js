import React from 'react';
import './App.css';
// import * as PusherPushNotifications from "@pusher/push-notifications-web"

function App() {
  console.log("http://localhost:3001/service-worker.js")
  if (!('PushManager' in window)) {
    console.log('Push messaging isn\'t supported.');
  }
  //
  if (Notification.permission === 'denied') {
    console.log('The user has blocked notifications.');
  }

  window.PusherPushNotifications.init({
    instanceId: "6cae8eff-8376-450d-8526-36925d120699",
  })
    .then(beamsClient => {
      console.log(beamsClient);
      beamsClient
        .start()
        .then(() => beamsClient.addDeviceInterest('hello'))
        .then(() => console.log('Successfully registered and subscribed! Device ID:', beamsClient.deviceId))
    }).catch(console.error);
  return (
    <div className="App">

      <h1>Push
      test app
</h1>
    </div>
  );
}

export default App;
