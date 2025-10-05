
function sayHello(name) {
  console.log(`👋 أهلاً ${name}! مرحباً بك في ورشة GitHub.`);
}

function showTime() {
  const now = new Date();
  console.log(`⏰ الوقت الآن هو: ${now.toLocaleTimeString()}`);
}

showTime();

function sayBye(name) {
  console.log(`👋 إلى اللقاء ${name}`);
}
sayBye("...");

showTime();