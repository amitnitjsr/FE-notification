
// import * as PushNotifications from '@pusher/push-notifications-web'

import * as PusherPushNotifications from "@pusher/push-notifications-web";
importScripts("https://js.pusher.com/beams/service-worker.js");

PusherPushNotifications.init({
    instanceId: '906db85a-7c53-4e33-9c67-806734039e98',
})
    .then(beamsClient =>
        beamsClient
            .start()
            .then(() => beamsClient.addDeviceInterest('hello'))
            .then(() => console.log('Successfully registered and subscribed! Device ID:', beamsClient.deviceId)),
    )
    .catch(error => {
        console.log('error', error)
    });