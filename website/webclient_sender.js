

function connect(){
  webclient_s = new Paho.MQTT.Client("broker.hivemq.com",8000,"/mqtt", "webclient_ms");
  webclient_s.onConnectionLost = onConnectionLost;
  webclient_s.onMessageArrived = onMessageArrived;
  webclient_s.connect({onSuccess:onConnect});
}



function onConnectionLost(responseObject) {
  if (responseObject.errorCode !== 0) {
	console.log("onConnectionLost:"+responseObject.errorMessage);
	alert("You can't control the switches anymore! But you can surely watch the status here. If you wish to control the switch back reload the page!")
  }
}



connect();
setInterval (function pubMess(){
	payLoad = JSON.stringify(updateSwitchStatus);
	message = new Paho.MQTT.Message(payLoad);
	message.destinationName = "sensor__12346";
	message.qos = 0;
	message.retained = true;
	webclient_s.send(message);
},1000)

function turnBulb(){
	updateSwitchStatus.bulb =  updateSwitchStatus.bulb^true;
	if(updateSwitchStatus.bulb){ 
		document.getElementById("bulb").style.backgroundColor = "green";
		//document.getElementById("bulb").innerHTML = "Yey! Bulb is On!";
	}
	else {
		document.getElementById("bulb").style.backgroundColor = "red";
		//document.getElementById("bulb").innerHTML = "Ok! Bulb is Off now!";
	}
	
}
function turnFan(){
	updateSwitchStatus.fan =  updateSwitchStatus.fan^true;
	if(updateSwitchStatus.fan){ 
		document.getElementById("fan").style.backgroundColor = "green";
		//document.getElementById("fan").innerHTML = "Yey! fan is On!";
	}
	else {
		document.getElementById("fan").style.backgroundColor = "red";
		//document.getElementById("fan").innerHTML = "Ok! fan is Off now!";
	}
}
function turnSocket(){
	updateSwitchStatus.socket =  updateSwitchStatus.socket^true;
	if(updateSwitchStatus.socket){ 
		document.getElementById("socket").style.backgroundColor = "green";
		//document.getElementById("socket").innerHTML = "Yey! socket is On!";
	}
	else {
		document.getElementById("socket").style.backgroundColor = "red";
		//document.getElementById("socket").innerHTML = "Ok! socket is Off now!";
	}
}
function turnBulbOut(){
	updateSwitchStatus.outsideBulb =  updateSwitchStatus.outsideBulb^true;
	if(updateSwitchStatus.outsideBulb){ 
		document.getElementById("outsideBulb").style.backgroundColor = "green";
		//document.getElementById("outsideBulb").innerHTML = "Yey! Bulb outside is On!";
		
	}
	else {
		document.getElementById("outsideBulb").style.backgroundColor = "red";
		//document.getElementById("outsideBulb").innerHTML = "Ok! Bulb outside is Off now!";	
	}
}

setInterval(function(){
	
	if(lastMsg.bulb) document.getElementById("img_bulb").src = "Bulb_on.png";
	else document.getElementById("img_bulb").src = "Bulb_off.png";
	
	if(lastMsg.fan) document.getElementById("img_fan").src = "fan_on.png";
	else document.getElementById("img_fan").src = "fan_off.png";
	
	if(lastMsg.socket) document.getElementById("img_socket").src = "socket_on.png";
	else document.getElementById("img_socket").src = "socket_off.png";
	
	if(lastMsg.outsideBulb) document.getElementById("img_outBulb").src = "out_on.png";
	else document.getElementById("img_outBulb").src = "out_off.png";
},500)