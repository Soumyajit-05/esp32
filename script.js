function send(cmd) {
  const ip = document.getElementById('esp32-ip').value.trim();
  const url = http://${ip}/${cmd};
  fetch(url, { method: 'GET' })
    .then(() => showResult('Sent: ' + cmd))
    .catch(() => showResult('Send failed'));
}
function showResult(msg) {
  document.getElementById('result').textContent = msg;
}
