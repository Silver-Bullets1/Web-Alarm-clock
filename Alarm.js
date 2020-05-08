"use strict";
var noon = 12;
var evening = 18;
var time;
var alarm=-1;
var oneSecond = 1000;
// Getting it to show the current time on the page

$(document).ready(function(){
    //display the time on the page
    var showCurrentTime = function()
    {
        var currentTime = new Date();
 
        var hours = currentTime.getHours();
        var minutes = currentTime.getMinutes();
        var seconds = currentTime.getSeconds();
        var meridian = "AM";
 
        // Set hours
	    if (hours >= noon)
	    {
		     meridian = "PM";
	    }
        if(hours <10)
        {
            hours = "0"+hours;
        }
        // Set Minutes
        if (minutes < 10)
        {
            minutes = "0" + minutes;
        }
 
        // Set Seconds
        if (seconds < 10)
        {
            seconds = "0" + seconds;
        }
 
        // put together the string that displays the time
        var clockTime = hours + ':' + minutes + ':' + seconds + " " + meridian;
        time = hours+":"+minutes;
        $("#clock").text(clockTime);
    };
    // Getting the clock to increment on its own and change out messages and pictures
    var updateClock = function() 
    {
        var hour = new Date().getHours();
        var messageText;//message text
        var image = new Image();
        if(time==alarm){//if now is time to alarm
            image = "IMG_8467.jpeg"; //change pic
            $("#logo").text("Now is time!");//change text to remind now is time
        }
        else if (hour < noon) //check if it's morning
            {
                image= "IMG_7464.jpeg"; //morning pic
                messageText = "Good morning!";
                if($("#logo").text()=="Now is time!"){ //if the alarmed is passed, reset the text and the text color 
                    $("#logo").css("color", "black");
                    $("#logo").text("When would you like to be waked meow?");
                }
            }
        else if (hour >= evening) //check if it's evening
            {
                image = "IMG_5056.jpeg"; //evening pic
                messageText = "Good evening!";
                if($("#logo").text()=="Now is time!"){
                    $("#logo").css("color", "black");
                    $("#logo").text("When would you like to be waked meow?");
                }
            }
        else
            {
                image = "IMG_5057.jpeg";
                messageText = "Good afternoon!";
                if($("#logo").text()=="Now is time!"){
                    $("#logo").css("color", "black");
                    $("#logo").text("When would you like to be waked meow?");
                }
            }
        $("#event").text(messageText); //change message text
        $("#catimage").attr("src",image); //change image 
        showCurrentTime();
 
};

// Getting the clock to increment once a second

setInterval(updateClock, oneSecond);

$("#set").click( //when the set button is clicked, read in the alarm and show reminder
    function(){
        alarm = $("#time").val();
        $("#logo").text("Your alarm is set to "+alarm+"!");
        $("#logo").css("color", "red");
        $("#time").val("");
    }
);

})


