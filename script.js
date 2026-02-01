// ตั้งค่าการเชื่อมต่อ (ใช้ Websocket Port 8000 สำหรับหน้าเว็บ)
client = new Paho.MQTT.Client("broker.hivemq.com", 8000, "web_client_" + Math.random());

client.onMessageArrived = function (message) {
    console.log("Message Arrived: " + message.payloadString);
    document.getElementById("data").innerHTML = message.payloadString + " °C";
    };

    client.connect({
        onSuccess: function () {
            console.log("Connected!");
            client.subscribe("Suvimol77"); // ต้องตรงกับที่ ESP8266 ส่งมา
        }
    });