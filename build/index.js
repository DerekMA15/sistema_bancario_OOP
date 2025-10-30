//console.log('Hello, world');
// typescript === javascript
function showinfo(date, options = {}) {
    console.log(date.toLocaleDateString());
    if (options.displayDay) {
        {
            console.log('Day:', date.getDate());
        }
    }
    if (options.displayMonth) {
        console.log('Month:', date.getMonth() + 1);
    }
    if (options.displayYear) {
        console.log('Year:', date.getFullYear());
    }
}
showinfo(new Date(), { displayDay: true, displayMonth: true, displayYear: true });
export {};
