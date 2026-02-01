// ตั้งค่าการเชื่อมต่อ (ใช้ Websocket Port 8000 สำหรับหน้าเว็บ)
client = new Paho.MQTT.Client("broker.hivemq.com", 8884, "web_client_" + Math.random());

client.onMessageArrived = function (message) {
    console.log("Message Arrived: " + message.payloadString);
    document.getElementById("data").innerHTML = message.payloadString + " °C";
};

client.connect({
    useSSL: true, // <--- จุดสำคัญ: ต้องเป็น true เพื่อให้ทำงานบน GitHub ได้
    onSuccess: function () {
        console.log("Connected to Secure MQTT!");
        client.subscribe("Suvimol77");
        },
        onFailure: function (error) {
            console.log("Connect Failed: " + error.errorMessage);
    }
});