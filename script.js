
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

    
    function setColor9() {
        if (timeCurrent > 9) {
            $('#hour-9').addClass('past');
        } else if (timeCurrent = 9) {
            $('#hour-9').addClass('present');
        } else {
            $('#hour-9').addClass('future');
        }
    };
    function setColor10() {
        if (timeCurrent > 10) {
            $('#hour-10').addClass('past');
        } else if (timeCurrent = 10) {
            $('#hour-10').addClass('present');
        } else {
            $('#hour-10').addClass('future');
        }
    };
    function setColor11() {
        if (timeCurrent > 11) {
            $('#hour-11').addClass('past');
        } else if (timeCurrent = 11) {
            $('#hour-11').addClass('present');
        } else {
            $('#hour-11').addClass('future');
        }
    };
    function setColor12() {
        if (timeCurrent > 12) {
            $('#hour-12').addClass('past');
        } else if (timeCurrent = 12) {
            $('#hour-12').addClass('present');
        } else {
            $('#hour-12').addClass('future');
        }
    };
    function setColor13() {
        if (timeCurrent > 13) {
            $('#hour-13').addClass('past');
        } else if (timeCurrent = 13) {
            $('#hour-13').addClass('present');
        } else {
            $('#hour-13').addClass('future');
        }
    };
    function setColor14() {
        if (timeCurrent > 14) {
            $('#hour-14').addClass('past');
        } else if (timeCurrent = 14) {
            $('#hour-14').addClass('present');
        } else {
            $('#hour-14').addClass('future');
        }
    };
    function setColor15() {
        if (timeCurrent > 15) {
            $('#hour-15').addClass('past');
        } else if (timeCurrent = 15) {
            $('#hour-15').addClass('present');
        } else {
            $('#hour-15').addClass('future');
        }
    };
    function setColor16() {
        if (timeCurrent > 16) {
            $('#hour-16').addClass('past');
        } else if (timeCurrent = 16) {
            $('#hour-16').addClass('present');
        } else {
            $('#hour-16').addClass('future');
        }
    };
    function setColor17() {
        if (timeCurrent > 17) {
            $('#hour-17').addClass('past');
        } else if (timeCurrent = 17) {
            $('#hour-17').addClass('present');
        } else {
            $('#hour-17').addClass('future');
        }
    };

    setColor9();
    setColor10();
    setColor11();
    setColor12();
    setColor13();
    setColor14();
    setColor15();
    setColor16();
    setColor17();
}

//store the input and time
    saveBtn9.on('click', function(){
        var eventTextNine = $("#eventtext9").val();
        var timeNine = $("#nine").text();

        localStorage.setItem("timeslot9", JSON.stringify(timeNine));
        localStorage.setItem("activity9", JSON.stringify(eventTextNine));
    });
    saveBtn10.on('click', function(){
        var eventTextTen = $("#eventtext10").val();
        var timeTen = $("#ten").text();

        localStorage.setItem("timeslot10", JSON.stringify(timeTen))
        localStorage.setItem("activity10", JSON.stringify(eventTextTen))
    });
    saveBtn11.on('click', function(){
        var eventText11 = $("#eventtext11").val();
        var timeEleven = $("#eleven").text();

        localStorage.setItem("timeslot11", JSON.stringify(timeEleven))
        localStorage.setItem("activity11", JSON.stringify(eventText11))
    });
    saveBtn12.on('click', function(){
        var eventText12 = $("#eventtext12").val();
        var timeTwelve = $("#twelve").text();

        localStorage.setItem("timeslot12", JSON.stringify(timeTwelve))
        localStorage.setItem("activity12", JSON.stringify(eventText12))
    });
    saveBtn13.on('click', function(){
        var eventText13 = $("#eventtext13").val();
        var timeThirteen = $("#thirteen").text();

        localStorage.setItem("timeslot13", JSON.stringify(timeThirteen))
        localStorage.setItem("activity13", JSON.stringify(eventText13))
    });
    saveBtn14.on('click', function(){
        var eventText14 = $("#eventtext14").val();
        var timeFourteen = $("#fourteen").text();

        localStorage.setItem("timeslot14", JSON.stringify(timeFourteen))
        localStorage.setItem("activity14", JSON.stringify(eventText14))
    });
    saveBtn15.on('click', function(){
        var eventText15 = $("#eventtext15").val();
        var timeFifteen = $("#fifteen").text();

        localStorage.setItem("timeslot15", JSON.stringify(timeFifteen))
        localStorage.setItem("activity15", JSON.stringify(eventText15))
    });
    saveBtn16.on('click', function(){
        var eventText16 = $("#eventtext16").val();
        var timeSixteen = $("#sixteen").text();

        localStorage.setItem("timeslot16", JSON.stringify(timeSixteen))
        localStorage.setItem("activity16", JSON.stringify(eventText16))
    });
    saveBtn17.on('click', function(){
        var eventText17 = $("#eventtext17").val();
        var timeSeventeen = $("#seventeen").text();

        localStorage.setItem("timeslot17", JSON.stringify(timeSeventeen))
        localStorage.setItem("activity17", JSON.stringify(eventText17))
    });


    jQuery(window).on("load", showActivity());
  });
  