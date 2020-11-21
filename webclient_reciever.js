function connect(){
    webclient = new Paho.MQTT.Client("broker.hivemq.com",8000,"/mqtt", makeid(5));
    webclient.onConnectionLost = onConnectionLost;
    webclient.onMessageArrived = onMessageArrived;
    webclient.connect({onSuccess:onConnect});
  }
  
function onConnect() {
    webclient.subscribe("sensor__12345");
  }

function onConnectionLost(responseObject) {
    if (responseObject.errorCode !== 0) {
      console.log("onConnectionLost:"+responseObject.errorMessage);
    }
  }

function onMessageArrived(message) {
    console.log("onMessageArrived: "+message.payloadString);
    lastMsg = JSON.parse(message.payloadString);
  }

connect();

setTimeout(function(){
    updateSwitchStatus = JSON.parse(JSON.stringify(lastMsg));
},5000);