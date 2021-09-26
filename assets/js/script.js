$(document).ready(function() {
    var init = false;
    var now = moment().format('LLLL');

    let now24 = moment().format('H');
    let now12 = moment().format('h');
    if(init) {
        now24 = 13;
        now12 = 1;
    }

    const currentDate = $('#currentDay');
    currentDate.text(now);

    var cal = new Date();
    var currentHour = cal.getHours();

    for (var i = 8; i < 18; i++){
        if (i < currentHour) {
            document.getElementById(i.toString()).classList.add('past');
    } else if(i === currentHour) {
        document.getElementById(i.toString()).classList.add('present');
    } else if (i > currentHour) {
        document.getElementById(i.toString()).classList.add('future');
    }
}

{
    $()
}


});