var next_btn = document.getElementById('next');
next_btn.onclick = function () {
    var date = document.getElementById('date').value*1;
    var month = document.getElementById('month').value*1;
    var year = document.getElementById('year').value*1;
    var error = document.getElementById('result1').innerHTML = 'Ngay khong xac dinh';
    
    if ( date <= 0 || month <= 0 || year <= 0 || month > 12){
        error;
    } else if ( (month == 1 || month == 3 || month == 5 || month ==7 || month == 8 || month == 10 || month == 12) && date > 31){
        error;
    } else if ( (month == 4 || month == 6 || month == 9 || month == 11) && date > 30 ) {
        error;
    } else if ( (month == 1 || month == 3 || month == 5 || month ==7 || month == 8 || month == 10) && date == 31 ) {
        date = 1;
        month += 1;
        document.getElementById('result1').innerHTML = 'Next day: ' + date + '/' + month + '/' + year;
    } else if ( (month == 4 || month == 6 || month == 9 || month == 11) && date == 30 ) {
        date = 1;
        month += 1;
        document.getElementById('result1').innerHTML = 'Next day: ' + date + '/' + month + '/' + year;
    } else if ( month == 12 && date == 31 ) {
        date = 1;
        month = 1;
        year +=1;
        document.getElementById('result1').innerHTML = 'Next day: ' + date + '/' + month + '/' + year;
    } else if ( month == 2 && date == 28) {
        date = 1;
        month = 3;
        document.getElementById('result1').innerHTML = 'Next day: ' + date + '/' + month + '/' + year;
    } else if ( month == 2 && date > 28 ){
        error;
    } else {
        date += 1;
        document.getElementById('result1').innerHTML = 'Next day: ' + date + '/' + month + '/' + year;
    }
    
}

var prev_btn = document.getElementById('prev');
prev_btn.onclick = function () {
    var date = document.getElementById('date').value*1;
    var month = document.getElementById('month').value*1;
    var year = document.getElementById('year').value*1;
    var error = document.getElementById('result1').innerHTML = 'Ngay khong xac dinh';
    
    if ( date <= 0 || month <= 0 || year <= 0 || month > 12){
        error;
    } else if ( (month == 1 || month == 3 || month == 5 || month ==7 || month == 8 || month == 10 || month == 12) && date > 31){
        error;
    } else if ( (month == 4 || month == 6 || month == 9 || month == 11) && date > 30 ) {
        error;
    } else if ( (month == 1 || month == 3 || month == 5 || month ==7 || month == 8 || month == 10) && date == 1 ) {
        date = 31;
        month -= 1;
        document.getElementById('result1').innerHTML = 'Next day: ' + date + '/' + month + '/' + year;
    } else if ( (month == 4 || month == 6 || month == 9 || month == 11) && date == 1 ) {
        date = 30;
        month -= 1;
        document.getElementById('result1').innerHTML = 'Next day: ' + date + '/' + month + '/' + year;
    } else if ( month == 1 && date == 1 ) {
        date = 31;
        month = 12;
        year -=1;
        document.getElementById('result1').innerHTML = 'Next day: ' + date + '/' + month + '/' + year;
    } else if ( month == 3 && date == 1) {
        date = 28;
        month = 2;
        document.getElementById('result1').innerHTML = 'Next day: ' + date + '/' + month + '/' + year;
    } else if ( month == 2 && date > 28 ){
        error;
    } else {
        date -= 1;
        document.getElementById('result1').innerHTML = 'Next day: ' + date + '/' + month + '/' + year;
    }
    
}

    
var check = document.getElementById('check');
check.onclick = function() {
    var month = document.getElementById('month_2').value*1;
    var year = document.getElementById('year_2').value*1;
    var date = 0;
    var error = document.getElementById('result2').innerHTML = 'Ngay khong xac dinh';

        if ( month <= 0 || year <= 0 || month > 12) {
            error;
        } else if ( month == 1 || month == 3 || month == 5 || month ==7 || month == 8 || month == 10 || month == 12 ) {
            date = 31;
        } else if ( month == 4 || month == 6 || month == 9 || month == 11 ) {
            date = 30;
        } else if ( ((year % 4 == 0) && (year % 100 != 0)) || ( year % 400 == 0) && (month == 2) ) {
            date = 29;
        } else {
            date = 28;
        }
    document.getElementById('result2').innerHTML = "Thang " + month + ' nam ' + year +' co ' + date + ' ngay'; 
}

var read = document.getElementById('read');
read.onclick = function () {
    var n = document.getElementById('number').value*1;
    var tram = Math.floor(n / 100);
    var chuc = Math.floor((n % 100) / 10);
    var donvi = Math.floor((n % 100) % 10);
    var tram_read;
    var chuc_read;
    var donvi_read;

    if (n < 100 || n > 999) {
        document.getElementById('result3').innerHTML = 'Nhap lai';
        console.log("hello");
    } else {

    switch (tram) {
        case 1:
            tram_read = 'Mot tram '
            break;
        case 2:
            tram_read = 'Hai tram '
            break;
        case 3:
            tram_read = 'Ba tram '
            break;
        case 4:
            tram_read = 'Bon tram '
            break;
        case 5:
            tram_read = 'Nam tram '
            break;
        case 6:
            tram_read = 'Sau tram '
            break;
        case 7:
            tram_read = 'Bay tram '
            break;
        case 8:
            tram_read = 'Tam tram '
            break;
        case 9:
            tram_read = 'Chin tram '
            break;
    }

    switch (chuc) {
        case 1:
            chuc_read = 'muoi '
            break;
        case 2:
            chuc_read = 'hai muoi '
            break;
        case 3:
            chuc_read = 'ba muoi '
            break;
        case 4:
            chuc_read = 'bon muoi '
            break;
        case 5:
            chuc_read = 'nam muoi '
            break;
        case 6:
            chuc_read = 'sau muoi '
            break;
        case 7:
            chuc_read = 'bay muoi '
            break;
        case 8:
            chuc_read = 'tam muoi '
            break;
        case 9:
            chuc_read = 'chin muoi '
            break;
    }

    switch (donvi) {
        case 1:
            donvi_read = 'mot '
            break;
        case 2:
            donvi_read = 'hai'
            break;
        case 3:
            donvi_read = 'ba'
            break;
        case 4:
            donvi_read = 'bon'
            break;
        case 5:
            donvi_read = 'nam'
            break;
        case 6:
            donvi_read = 'sau'
            break;
        case 7:
            donvi_read = 'bay'
            break;
        case 8:
            donvi_read = 'tam' 
            break;
        case 9:
            donvi_read = 'chin'
            break;
    }


    document.getElementById('result3').innerHTML = tram_read + chuc_read + donvi_read;
    }
}