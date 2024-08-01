function startClock() {
    setInterval(updateClock, 1000);
}

function updateClock() {
    let now = new Date();
    let clock = document.getElementById('clock');
    clock.textContent = now.toLocaleTimeString();
}
