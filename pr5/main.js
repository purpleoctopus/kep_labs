document.write("<h3>Завдання 1</h3>")
let date1 = new Date(2021, 1, 20, 3, 12)
document.write("Дата: " + date1 + "<br><hr><br>")

document.write("<h3>Завдання 2</h3>")
function getWeekDay(date) {
    const days = ['НД', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ']
    return days[date.getDay()]
}
let date2 = new Date(2021, 1, 20)
document.write("День тижня: " + getWeekDay(date2) + "<br><hr><br>")

document.write("<h3>Завдання 3</h3>");
function getLastDayOfMonth(year, month) {
    let date = new Date(year, month + 1, 0);
    return date.getDate();
}
document.write("Останній день лютого 2020: " + getLastDayOfMonth(2020, 1) + "<br>");
document.write("Останній день лютого 2021: " + getLastDayOfMonth(2021, 1) + "<br><hr><br>");

document.write("<h3>Завдання 4</h3>");
function getSecondsToTomorrow() {
    let now = new Date();
    let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
    let diff = tomorrow - now;
    return Math.floor(diff / 1000); 
}
document.write("Секунд до завтра: " + getSecondsToTomorrow() + "<br><hr><br>");

document.write("<h3>Завдання 5</h3>");
function formatTime(date) {
    let diff = new Date() - date; 

    if (diff < 1000) {
        return "прямо зараз";
    } else if (diff < 60 * 1000) {
        return Math.floor(diff / 1000) + " сек. назад";
    } else if (diff < 60 * 60 * 1000) {
        return Math.floor(diff / (60 * 1000)) + " хв. назад";
    } else {
        let day = ("0" + date.getDate()).slice(-2);
        let month = ("0" + (date.getMonth() + 1)).slice(-2);
        let year = ("" + date.getFullYear()).slice(-2);
        let hours = ("0" + date.getHours()).slice(-2);
        let minutes = ("0" + date.getMinutes()).slice(-2);

        return `${day}.${month}.${year} ${hours}:${minutes}`;
    }
}
let date5 = new Date(new Date() - 10 * 60 * 1000); 
document.write(date5 + '<br>')
document.write("Форматована дата: " + formatTime(date5) + "<br><hr><br>")