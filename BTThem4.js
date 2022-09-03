var next_btn = document.getElementById('next');
next_btn.onclick = function () {
    // Get data
    var date = document.getElementById('date').value*1;
    var month = document.getElementById('month').value*1;
    var year = document.getElementById('year').value*1;
    var error = document.getElementById('result1').innerHTML = 'Ngay khong xac dinh';
    
    // Handle data
        // Validate invalid date, month, year
    if ( date <= 0 || month <= 0 || year <= 0 || month > 12){
        error;
        // Validate days of months which have 31 days
    } else if ( (month == 1 || month == 3 || month == 5 || month ==7 || month == 8 || month == 10 || month == 12) && date > 31){
        error;
        // Validate days of month which have 30 days
    } else if ( (month == 4 || month == 6 || month == 9 || month == 11) && date > 30 ) {
        error;
        // Validate true value of months which have 31 days -> extend to next month
    } else if ( (month == 1 || month == 3 || month == 5 || month ==7 || month == 8 || month == 10) && date == 31 ) {
        date = 1;
        month += 1;
        document.getElementById('result1').innerHTML = 'Next day: ' + date + '/' + month + '/' + year;
        // Validate true value of months which have 30 days -> extend to next month
    } else if ( (month == 4 || month == 6 || month == 9 || month == 11) && date == 30 ) {
        date = 1;
        month += 1;
        document.getElementById('result1').innerHTML = 'Next day: ' + date + '/' + month + '/' + year;
        // Validate Dec 31th to extend to next year
    } else if ( month == 12 && date == 31 ) {
        date = 1;
        month = 1;
        year +=1;
        document.getElementById('result1').innerHTML = 'Next day: ' + date + '/' + month + '/' + year;
        // Validate days of Feb to extend to next month
    } else if ( month == 2 && date == 28) {
        date = 1;
        month = 3;
        document.getElementById('result1').innerHTML = 'Next day: ' + date + '/' + month + '/' + year;
        // Validate invalid date of Feb
    } else if ( month == 2 && date > 28 ){
        error;
        // Other days -> true value
    } else {
        date += 1;
        document.getElementById('result1').innerHTML = 'Next day: ' + date + '/' + month + '/' + year;
    }
    
}

var prev_btn = document.getElementById('prev');
prev_btn.onclick = function () {
    // Get data
    var date = document.getElementById('date').value*1;
    var month = document.getElementById('month').value*1;
    var year = document.getElementById('year').value*1;
    var error = document.getElementById('result1').innerHTML = 'Ngay khong xac dinh';
    
     // Handle data
        // Validate invalid date, month, year
    if ( date <= 0 || month <= 0 || year <= 0 || month > 12){
        error;
        // Validate days of months which have 31 days
    } else if ( (month == 1 || month == 3 || month == 5 || month ==7 || month == 8 || month == 10 || month == 12) && date > 31){
        error;
        // Validate days of months which have 30 days
    } else if ( (month == 4 || month == 6 || month == 9 || month == 11) && date > 30 ) {
        error;
          // Validate true value of months which have 31 days -> back to previous month 
    } else if ( (month == 1 || month == 3 || month == 5 || month ==7 || month == 8 || month == 10) && date == 1 ) {
        date = 31;
        month -= 1;
        document.getElementById('result1').innerHTML = 'Next day: ' + date + '/' + month + '/' + year;
         // Validate true value of months which have 30 days -> back to previous month
    } else if ( (month == 4 || month == 6 || month == 9 || month == 11) && date == 1 ) {
        date = 30;
        month -= 1;
        document.getElementById('result1').innerHTML = 'Next day: ' + date + '/' + month + '/' + year;
        // Validate Jan 1st to back to previous year
    } else if ( month == 1 && date == 1 ) {
        date = 31;
        month = 12;
        year -=1;
        document.getElementById('result1').innerHTML = 'Next day: ' + date + '/' + month + '/' + year;
        // Validate Mar 1st to back to Feb
    } else if ( month == 3 && date == 1) {
        date = 28;
        month = 2;
        document.getElementById('result1').innerHTML = 'Next day: ' + date + '/' + month + '/' + year;
        // Validate invalid date of Feb
    } else if ( month == 2 && date > 28 ){
        error;
        // Other days -> true value
    } else {
        date -= 1;
        document.getElementById('result1').innerHTML = 'Next day: ' + date + '/' + month + '/' + year;
    }
    
}

    
var check = document.getElementById('check');
check.onclick = function() {
    // Get data
    var month = document.getElementById('month_2').value*1;
    var year = document.getElementById('year_2').value*1;
    var date = 0;
    var error = document.getElementById('result2').innerHTML = 'Ngay khong xac dinh';

    // Handle data
        // Validate invalid datas
        if ( month <= 0 || year <= 0 || month > 12) {
            error;
        // Validate months ehich have 31 days
        } else if ( month == 1 || month == 3 || month == 5 || month ==7 || month == 8 || month == 10 || month == 12 ) {
            date = 31;
        // Validate months which have 30 days
        } else if ( month == 4 || month == 6 || month == 9 || month == 11 ) {
            date = 30;
        //  Validate days of Feb in even year
        } else if ( ((year % 4 == 0) && (year % 100 != 0)) || ( year % 400 == 0) && (month == 2) ) {
            date = 29;
        // Days of Feb in odd year
        } else {
            date = 28;
        }
    document.getElementById('result2').innerHTML = "Thang " + month + ' nam ' + year +' co ' + date + ' ngay'; 
}

var read = document.getElementById('read');
read.onclick = function () {
    // Get data
    var n = document.getElementById('number').value*1;
    var tram = Math.floor(n / 100);
    var chuc = Math.floor((n % 100) / 10);
    var donvi = Math.floor((n % 100) % 10);
    var tram_read;
    var chuc_read;
    var donvi_read;

    // Handle data
        // Validate invalid data
    if (n < 100 || n > 999) {
        document.getElementById('result3').innerHTML = 'Nhap lai';
        console.log("hello");
    } else {

        // Pronounce of hundreds row
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

        // Pronounce of dozens rows
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

        // Pronounce of units rows
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

    // Print out
    document.getElementById('result3').innerHTML = tram_read + chuc_read + donvi_read;
    }
}