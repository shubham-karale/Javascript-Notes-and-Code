/*Write a function getWeekDay(date) to show the weekday
 in short format: ‘MO’, ‘TU’, ‘WE’, ‘TH’, ‘FR’, ‘SA’, ‘SU’.
*/


// let date = new Date(2012, 0, 3);  // 3 Jan 2012
// alert( getWeekDay(date) );        // should output "TU"

 function getWeekDay(date) {
     let days = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
        return days[date.getDay()];
 }

    let date = new Date();  // 3 Jan 2022
    console.log( getWeekDay(date) );        // should output "TU"
//------------------------------------------------------------------------------------------------------------------

//European countries have days of the week starting with Monday (number 1), then Tuesday (number 2) and till Sunday (number 7). Write a function getLocalDay(date) that returns the “European” day of week for date.
//
// let date = new Date(2012, 0, 3);  // 3 Jan 2012
// alert( getLocalDay(date) );       // tuesday, should show 2

function getLocalDay(newdate)
{
    let day = newdate.getDay();
    if(day==0)
    {
        day = 7;
    }
    return day;
}

let newdate = new Date(2012,0,3);
console.log(getLocalDay(newdate));

//------------------------------------------------------------------------------------------------------------------

// Create a function getDateAgo(date, days) to return the day of month days ago from the date.
//
//     For instance, if today is 20th, then getDateAgo(new Date(), 1) should be 19th and getDateAgo(new Date(), 2) should be 18th.
//
//     Should work reliably for days=365 or more:
//
//     let date = new Date(2015, 0, 2);
//
// alert( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
// alert( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
// alert( getDateAgo(date, 365) ); // 2, (2 Jan 2014)

function getDateAgo(date, days)
{
    let date1 = new Date(date);
    date1.setDate(date.getDate()-days);
    return date1.getDate();

}

let date1 = new Date(2015, 0, 2);
console.log(getDateAgo(date1, 1));
console.log(getDateAgo(date1, 2));