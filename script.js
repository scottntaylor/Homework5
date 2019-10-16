// var today = new Date();
// var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
// var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
// var dateTime = date+' '+time;

// function liveTime(){
// console.log(dateTime);
// }

function time(){
    var t = new Date();
    var s = t.getSeconds();
    var m = t.getMinutes();
    var h = t.getHours();
    $("#date").html(h + ":" + m + ":" + s);
 }
 setInterval(time,1000);

 time();


// liveTime();

// $("#date").html(dateTime);


function createEvent() {
prompt("What event would you like to add?")
}
$(".eventSpace").on("click", createEvent);