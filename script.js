var today = new Date();
var date = (today.getMonth()+1)+'-'+today.getDate()+ '-' +today.getFullYear();
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
    $("#date").html("The Time is " + h + ":" + m + ":" + s + " " + "and Today is " + date);
 }
 setInterval(time,1000);

 time();

// var textinput = document.getElementsByClassName("textinput")


 function saveToStorage(textinput){
     localStorage.setItem("event", JSON.stringify(textinput))
   console.log(JSON.parse(localStorage.getItem("event")))
 }


 $("#saveBtn").on("click",function(){
    var textinput = ($(this).prev().find("textarea").val());
    // //  console.log($(this).prev().val());
     saveToStorage(textinput);
    $(this).siblings(".inputText").children("textinput").html(" " + textinput);
     console.log($(this).prev().find("textarea").val());


    //  localStorage.getItem("event")
    //  $(".textinput").html("event");
 });

 console.log(localStorage)


 // Color coding based on time//

 $(".textinput").each(function (el, element) {

    var currentId = parseInt($(this).attr("id"));
    
    var curTime = parseInt(today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds());
    
    if (currentId === curTime) {
        $(this).addClass('present');
    }
    if (currentId < curTime) {
        $(this).addClass('past');
    }
    if (currentId > curTime) {
        $(this).addClass('future');
    }
});
;


