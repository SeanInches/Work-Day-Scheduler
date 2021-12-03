var moment = moment();


var currentDay = moment.format('dddd, MMMM Do YYYY');
$('#currentDay').text(currentDay);

var currentHour = moment.hour();


$(document).ready(function () {
    $('.saveBtn').on('click', function() {
        var text = $(this).parent().siblings().children('#form-1').val();
        var time = $(this).parent().parent().attr("id");
        localStorage.setItem(time, text);
        })})
    


function getLocalInput() { 
    var time9 = $("#time9").children().closest('td').children('#form-1').val(localStorage.getItem("time9"));
    var time10 = $("#time10").children().closest('td').children('#form-1').val(localStorage.getItem("time10"));
    var time11 = $("#time11").children().closest('td').children('#form-1').val(localStorage.getItem("time11"));
    var time12 = $("#time12").children().closest('td').children('#form-1').val(localStorage.getItem("time12"));
    var time1 = $("#time1").children().closest('td').children('#form-1').val(localStorage.getItem("time1"));
    var time2 = $("#time2").children().closest('td').children('#form-1').val(localStorage.getItem("time2"));
    var time3 = $("#time3").children().closest('td').children('#form-1').val(localStorage.getItem("time3"));
    var time4 = $("#time4").children().closest('td').children('#form-1').val(localStorage.getItem("time4"));
    var time5 = $("#time5").children().closest('td').children('#form-1').val(localStorage.getItem("time5"));


    var allTimes = [time9, time10, time11, time12, time1, time2, time3, time4, time5,];
    for (i = 0; i < allTimes.length; i++) {
        console.log(allTimes[i].val())
        $('.form-1').text(allTimes[i].val())
    }
}
getLocalInput();