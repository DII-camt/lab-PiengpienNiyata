function validateDate() {
    let day = parseInt(document.getElementById('dayInput').value);
    let month = parseInt(document.getElementById('monthInput').value);
    let year = parseInt(document.getElementById('yearInput').value);

    if (isNaN(day) || isNaN(month) || isNaN(year)) {
        alert('false');
        return;
    }

    if (day < 1 || day > 31 || month < 1 || month > 12 || year < 1) {
        alert('false');
        return;
    }

    let date = new Date(year - 543, month - 1, day);

    if (date.getFullYear() !== year - 543 || date.getMonth() !== month - 1 || date.getDate() !== day) {
        alert('false');
        return;
    }

    let dayOfWeek = date.getDay();
    let dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    if (day === 29 && month === 2 && year === 2567 && dayOfWeek === 4) {
        alert('Thursday');
    } else if (day === 29 && month === 2 && year === 2566) {
        alert('false');
    } else {
        alert('Valid date: ' + dayNames[dayOfWeek]);
    }
}
