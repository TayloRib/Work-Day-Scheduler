
$(function () {

    $("#currentDay").text(dayjs().format('MMMM DD, YYYY [-] h:mm a'))

//variables for activity text per hour
    var savedText9 = $("#eventtext9");
    var savedText10 = $("#eventtext10");
    var savedText11 = $("#eventtext11");
    var savedText12 = $("#eventtext12");
    var savedText13 = $("#eventtext13");
    var savedText14 = $("#eventtext14");
    var savedText15 = $("#eventtext15");
    var savedText16 = $("#eventtext16");
    var savedText17 = $("#eventtext17");

//variables for buttons per hour
    var saveBtn9 = $("#ninebtn");
    var saveBtn10 = $("#tenbtn");
    var saveBtn11 = $("#elevenbtn");
    var saveBtn12 = $("#twelvebtn");
    var saveBtn13 = $("#thirteenbtn");
    var saveBtn14 = $("#fourteenbtn");
    var saveBtn15 = $("#fifteenbtn");
    var saveBtn16 = $("#sixteenbtn");
    var saveBtn17 = $("#seventeenbtn");

    
    var timeCurrent = dayjs().format("HH");
    var hourBlocks = $(".time-block")
 
//show stored activity 
function showActivity(){
    var activity9 = JSON.parse(localStorage.getItem("activity9"));
    savedText9.text(activity9);
    var activity10 = JSON.parse(localStorage.getItem("activity10"));
    savedText10.text(activity10);
    var activity11 = JSON.parse(localStorage.getItem("activity11"));
    savedText11.text(activity11);
    var activity12 = JSON.parse(localStorage.getItem("activity12"));
    savedText12.text(activity12);
    var activity13 = JSON.parse(localStorage.getItem("activity13"));
    savedText13.text(activity13);
    var activity14 = JSON.parse(localStorage.getItem("activity14"));
    savedText14.text(activity14);
    var activity15 = JSON.parse(localStorage.getItem("activity15"));
    savedText15.text(activity15);
    var activity16 = JSON.parse(localStorage.getItem("activity16"));
    savedText16.text(activity16);
    var activity17 = JSON.parse(localStorage.getItem("activity17"));
    savedText17.text(activity17);

  
    function timeCompare(){
            // hourblocks is an array of all elements that have the "time-block" class
            // on each of those elements, I want to run a function
        hourBlocks.each(function() {
            // the fucntion looks for that element's child div element and takes the id of it
            // the parseInt turns that ID into a number and assigns it to a variable
            var blockTime =parseInt( $(this).children('div').attr("id"));
            // the timeCurrent variable is compared to the assigned variable,
            // and depending on the comparator, it applies a class
            // "this" refers to the div element that has the time-block class
            if (timeCurrent > blockTime) {
                $(this).children(".description").addClass('past');
            } else if (timeCurrent >=  blockTime) {
                $(this).children(".description").addClass('present');
            } else {
                $(this).children(".description").addClass('future');
            }
        });
    }
    timeCompare();
}

//store the input and time
    saveBtn9.on('click', function(){
        var eventTextNine = $("#eventtext9").val();
        var timeNine = $("#9").text();

        localStorage.setItem("timeslot9", JSON.stringify(timeNine));
        localStorage.setItem("activity9", JSON.stringify(eventTextNine));
    });
    saveBtn10.on('click', function(){
        var eventTextTen = $("#eventtext10").val();
        var timeTen = $("#10").text();

        localStorage.setItem("timeslot10", JSON.stringify(timeTen))
        localStorage.setItem("activity10", JSON.stringify(eventTextTen))
    });
    saveBtn11.on('click', function(){
        var eventText11 = $("#eventtext11").val();
        var timeEleven = $("#11").text();

        localStorage.setItem("timeslot11", JSON.stringify(timeEleven))
        localStorage.setItem("activity11", JSON.stringify(eventText11))
    });
    saveBtn12.on('click', function(){
        var eventText12 = $("#eventtext12").val();
        var timeTwelve = $("#12").text();

        localStorage.setItem("timeslot12", JSON.stringify(timeTwelve))
        localStorage.setItem("activity12", JSON.stringify(eventText12))
    });
    saveBtn13.on('click', function(){
        var eventText13 = $("#eventtext13").val();
        var timeThirteen = $("#13").text();

        localStorage.setItem("timeslot13", JSON.stringify(timeThirteen))
        localStorage.setItem("activity13", JSON.stringify(eventText13))
    });
    saveBtn14.on('click', function(){
        var eventText14 = $("#eventtext14").val();
        var timeFourteen = $("#14").text();

        localStorage.setItem("timeslot14", JSON.stringify(timeFourteen))
        localStorage.setItem("activity14", JSON.stringify(eventText14))
    });
    saveBtn15.on('click', function(){
        var eventText15 = $("#eventtext15").val();
        var timeFifteen = $("#15").text();

        localStorage.setItem("timeslot15", JSON.stringify(timeFifteen))
        localStorage.setItem("activity15", JSON.stringify(eventText15))
    });
    saveBtn16.on('click', function(){
        var eventText16 = $("#eventtext16").val();
        var timeSixteen = $("#16").text();

        localStorage.setItem("timeslot16", JSON.stringify(timeSixteen))
        localStorage.setItem("activity16", JSON.stringify(eventText16))
    });
    saveBtn17.on('click', function(){
        var eventText17 = $("#eventtext17").val();
        var timeSeventeen = $("#17").text();

        localStorage.setItem("timeslot17", JSON.stringify(timeSeventeen))
        localStorage.setItem("activity17", JSON.stringify(eventText17))
    });


    jQuery(window).on("load", showActivity());
  });
  