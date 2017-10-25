let sizeOfPackage = document.getElementById('choice-mediaSize');
let packageSize = document.getElementById('which-mediaSize');
let packageType = document.getElementById('sizeFile');
let mediaRunningTime = document.getElementById('choice-mediaTime');
let runTimeHours = document.getElementById('which-mediaTime');
let runTimeMins = document.getElementById('mediaRunMin');
let mediaFormat = document.getElementById('quality');
let custMediaFormat = document.getElementById('customBitrate');
let specBandChoice = document.getElementById('choice-calc-type');
let bandWidthNum = document.getElementById('which-calc-type');
let bandType = document.getElementById('bandwidthSpeed');
let totalTimeChoice = document.getElementById('choice-transferTime');
let totalTimeHour = document.getElementById('which-transferTime-hour');
let totalTimeMin = document.getElementById('which-transferTime-minutes');
let customBitrate= document.getElementById('customBitrate');

$(document).ready(function() {
    $('#quality').bind('change', function() {
        var elements = $('div.customBitrateContainer').children().hide(); // hide all the elements
        var value = $(this).val();
        if (value === "-1") { // if somethings' selected
            elements.show(); // show the ones we want
        }
    }).trigger('change');
});

$( "#choice-calc-type" ).click(function() {
    $( "#specBand" ).hide( "slow", function() {
    });
});

$("button").click(function() {
    $('html,body').animate({
            scrollTop: $(".calcResults").offset().top},
        'slow');
});


var FormStuff = {
    init: function() {
        // kick it off once, in case the radio is already checked when the page loads
        this.applyConditionalRequired();
        this.bindUIActions();
    },

    bindUIActions: function() {
        // when a radio or checkboxg changes value, click or otherwise
        $("input[type='radio'], input[type='checkbox']").on("change", this.applyConditionalRequired);
    },

    applyConditionalRequired: function() {
        // find each input that may be hidden or not
        $(".require-if-active").each(function() {
            var el = $(this);
            // find the pairing radio or checkbox
            if ($(el.data("require-pair")).is(":checked")) {
                // if its checked, the field should be required
                el.prop("required", true);
            } else {
                // otherwise it should not
                el.prop("required", false);
            }
        });
    }

};

FormStuff.init();



$(function() {
    var moveLeft = 20;
    var moveDown = 10;
    $('i#questionModal1').hover(function(e) {
        $('div#pop-up1').show();
        //.css('top', e.pageY + moveDown)
        //.css('left', e.pageX + moveLeft)
        //.appendTo('body');
    }, function() {
        $('div#pop-up1').hide();
    });
    $('i#questionModal1').mousemove(function(e) {
        $("div#pop-up1").css('top', e.pageY + moveDown).css('left', e.pageX + moveLeft);
    });
});

$(function() {
    var moveLeft = 20;
    var moveDown = 10;
    $('i#questionModal2').hover(function(e) {
        $('div#pop-up2').show();
        //.css('top', e.pageY + moveDown)
        //.css('left', e.pageX + moveLeft)
        //.appendTo('body');
    }, function() {
        $('div#pop-up2').hide();
    });
    $('i#questionModal2').mousemove(function(e) {
        $("div#pop-up2").css('top', e.pageY + moveDown).css('left', e.pageX + moveLeft);
    });
});

$(function() {
    var moveLeft = 20;
    var moveDown = 10;
    $('i#questionModal3').hover(function(e) {
        $('div#pop-up3').show();
        //.css('top', e.pageY + moveDown)
        //.css('left', e.pageX + moveLeft)
        //.appendTo('body');
    }, function() {
        $('div#pop-up3').hide();
    });
    $('i#questionModal3').mousemove(function(e) {
        $("div#pop-up3").css('top', e.pageY + moveDown).css('left', e.pageX + moveLeft);
    });
});

function reset_all(){
    document.getElementById('form1').reset();
    document.getElementById('form2').reset();
    $('div.protip').hide();
    $('#mediaRunDiv').hide();
    $('#orMedia').hide();
    $('#customInput').hide();
    $('div.calcResults').hide();
    $( "#specBand" ).show();
}

function calc_mbs() {
    const totalmb = Number(packageSize.value) * Number(packageType.value);
    return totalmb;
}

function convertRunTimeToMins(){
    const totalMins = Number(runTimeMins.value) + Number(runTimeHours.value *60);
    return totalMins;
}

function calc_size(){
    const mins = convertRunTimeToMins();
    const seconds = mins * 60;
    if(custMediaFormat.value === "" && mediaFormat.value === '-1'){
        return (Number(custMediaFormat.value)* seconds)/8
    } else {
        return (Number(mediaFormat.value)* seconds)/8
    }
}

function bandwidthSpeed(){
    const totalBand = Number(bandWidthNum.value) * Number(bandType.value);
    return totalBand;
}

function convertTransferTime(){
    const totalTransferTime = Number(totalTimeMin.value) + (Number(totalTimeHour.value) *60);
    return totalTransferTime;
}

function findFileSize(){
    let hours = Number(runTimeHours.value);
    let mins = Number(runTimeMins.value);
    let sec = ((hours*60)*60) + (mins*60);
    let size;
    if(mediaFormat.value != '-1'){
        size = (Number(mediaFormat.value) * sec)/8;
    } else {
        size = (Number(custMediaFormat.value) * sec)/8;
    }
    return {
        size: Number(size)
    }
}

function e(fileSize, bandwidth) {
    var t = bandwidth,
        e = fileSize,
        i = 8 * e,
        n = i / t,
        o = n / 60,
        a = o / 60,
        result = {hours: 0, minutes: 0, seconds: 0}
        ;
    if (a >= 1 ? (
        hours = Math.floor(a),
            mins = a - Math.floor(a),
            mins = 60 * mins,
            mins = Math.round(mins),
            result.hours = hours,
            result.minutes = mins
            ) : o >= 1 ? (
                mins = Math.round(o),
                    secs = o - Math.floor(o),
                    secs = 60 * secs, secs = Math.round(secs),
                    result.minutes = mins,
                    result.seconds = secs ) : (
                        secs = Math.round(n),
                        result.seconds = secs ),
        e >= 1024)
        var s = e / 1024,
        r = Math.round(100 * s) / 100,
        r = r + " Gbyte(s)";
    else var r = Math.round(e),
        r = r + " Mbyte(s)";
    a >= 1 ? (hours = Math.floor(a),
            mins = a - Math.floor(a),
            mins = 60 * mins,
            mins = Math.round(mins),
            result.hours = hours,
            result.minutes = mins,
            result.bandwidth = t ) : o >= 1 ? (
                mins = Math.round(o),
                    secs = o - Math.floor(o),
                    secs = 60 * secs,
                    secs = Math.round(secs),
                    result.fileSize = r,
                    result.minutes = mins,
                    result.seconds = secs,
                    result.bandwidth = t ) : 1 > o && (
                        secs = Math.round(n),
                            result.fileSize = r,
                            result.seconds = secs,
                            result.bandwidth = t )
    console.log(result, "result")
    return result;
}

function totalCalculations(){
    let firstResult;
    let secondResult;
    let transferTime;
    let totalTransferSize;
    let bandwidth;
    let mediaRun;
    let resultHours;
    let resultMins;
    let secondsResult;
    firstResult = sizeOfPackage.checked ? calc_mbs() :  calc_size();
    secondResult = specBandChoice.checked ? (bandwidthSpeed()) :  convertTransferTime();
    if(sizeOfPackage.checked && firstResult >= 100000) {
        $('div.protip').show();
    }

    if(sizeOfPackage.checked && specBandChoice.checked) {
        //firstResult is the size * 1/1024/ 1,048,576 => mbs
        let Mbytes = Number(firstResult);
        //secondResult == bandwidth
        let result = e(Mbytes, secondResult);
        //View for Mbytes
        totalTransferSize = Mbytes;
        //convert mins and hrs
        resultHours = result.hours;
        resultMins = result.minutes;
        secondsResult = result.seconds;
        bandwidth = result.bandwidth;
    } else if(sizeOfPackage.checked && totalTimeChoice.checked){
        let mbytes = firstResult * 8;
        let minutes = convertTransferTime();
        let seconds = minutes * 60;
        bandwidth = Math.round((mbytes/ seconds)*100)/1001;
        mbytes =  mbytes /8;
        let result = e(mbytes, bandwidth);
        resultHours = result.hours;
        resultMins = result.minutes;
        secondsResult = result.seconds;
        totalTransferSize = mbytes;

    } else if(mediaRunningTime.checked && specBandChoice.checked){
        const temp = findFileSize();
        let Mbytes = Number(temp.size);
        let result = e(Mbytes, secondResult);
        let totalRun = ((Number(runTimeHours.value)*60) + (Number(runTimeMins.value)));

        //View for Mbytes
        totalTransferSize = Mbytes;
        //convert mins and hrs
        resultHours = result.hours;
        resultMins = result.minutes;
        secondsResult = result.seconds;
        //MEDIA FORMAT
        if(mediaFormat.value != '-1'){
            let mediaType = $("#quality option:selected").html();
            $(".mediaRunH4").text(Math.round(totalRun) + " minutes of " + mediaType + " files");
        } else {
            $('#customInput').show();
            let customBitrate = custMediaFormat.value;
            $(".mediaRunH4").text(Math.round(totalRun) + " minutes");
            $("#customInput").text("of media with custom bitrate of " + customBitrate + " Mbps");
        }
        $('#mediaRunDiv').show();
        $('#orMedia').show();
        bandwidth = secondResult;
    } else if(mediaRunningTime.checked && totalTimeChoice.checked){
        $('#mediaRunDiv').show();
        $('#orMedia').show();
        const temp = findFileSize();
        let mbytes = Number(temp.size);

        let minutes = convertTransferTime();
        let seconds = minutes * 60;

        bandwidth = ((mbytes*8)/ seconds);
        console.log(bandwidth, seconds, mbytes, temp);
        let result = e(mbytes, bandwidth);
        let totalRun = ((Number(runTimeHours.value)*60) + ((Number(runTimeMins.value))));

        //View for Mbytes
        totalTransferSize = mbytes;
        //convert mins and hrs
        resultHours = result.hours;
        resultMins = result.minutes;
        secondsResult = result.seconds;
        totalTransferSize = mbytes;


        if(mediaFormat.value != '-1'){
            let mediaType = $("#quality option:selected").html();
            if(totalRun > 59){
                let hrs = Math.floor(totalRun/60);
                let mn = Math.round(totalRun - (hrs * 60));
                $(".mediaRunH4").text( hrs + " hours " + mn +  " minutes of " + mediaType + " files");

            } else {
                $(".mediaRunH4").text(Math.round(totalRun) + " minutes of " + mediaType + " files");
            }
        } else {
            $('#customInput').show();
            let customBitrate = Number(custMediaFormat.value);
            $(".mediaRunH4").text(Math.round(totalRun) + " minutes");
            $("#customInput").text("of media with custom bitrate of " + customBitrate + " Mbps");
        }
    }
    // convert min decimal to seconds

    let seconds = secondsResult;

    if(resultHours > 0){
        $(".transferTime").text(resultHours + ' hours and ' + resultMins + ' minutes ' + seconds + " seconds");
    }
     else {
        $(".transferTime").text(resultMins + ' minutes ' + seconds + " seconds");
    }
    //Converts totalTransferSize(mbytes) to appropriate text output"
    if(totalTransferSize < 1024){
        totalTransferSize = (Math.round(Number(totalTransferSize)*10)/10);
        $(".totalFileSize").text(totalTransferSize + ' MB');
    } else if( totalTransferSize >= 1048576){
        totalTransferSize = (Math.round((Number(totalTransferSize)/1048576)*10)/10);

        $(".totalFileSize").text(totalTransferSize + ' TB');
    } else {
        totalTransferSize = (Math.round((Number(totalTransferSize)/1024)*10)/10);
        $(".totalFileSize").text(totalTransferSize + ' GB');
    }

    //converts bandwidth speed to appropriate suffix
    if(bandwidth < 1000){
        $(".bandSpeed").text(bandwidth + ' Mbits/sec');
    } else {
        bandwidth = (Math.round((bandwidth/1000)*100))/100;
        $(".bandSpeed").text(bandwidth + ' Gbits/sec');
    }
    if(mediaFormat.value != '-1'){
        $('#customBitrate').value = '';
        $('#customInput').hide();
    }

    $('div.calcResults').show();
}

$('#calculate').on('click',function () {
    let disable = true;
    let captcha = document.getElementById('tempCatcha').checked;
    let section1 = false;
    let section2 = false;
    if(sizeOfPackage.checked){
        if(packageSize.value != '' || packageSize.value != '0'){
            section1 = true;
        } else {
            alert("Incomplete Input: Cannot Calculate; Package Size");
        }
    } else if(mediaRunningTime.checked){
        if(runTimeHours.value != '' || runTimeMins.value != '' && mediaFormat.value != '0'){
            if(mediaFormat.value === '-1' && custMediaFormat.value === '' || custMediaFormat.value === '0'){
                section1 = false;
                alert("Incomplete Input: Cannot Calculate; (Invalid Custom FormatFormat)");
            } else {
                section1 = true
            }
        } else {
            alert("Incomplete Input: Cannot Calculate; Need Media Format");
        }
    }
    if(specBandChoice.checked){
        if(bandWidthNum.value != '' || bandWidthNum.value != '0'){
            section2 = true;
        }else {
            alert("Incomplete Input: Cannot Calculate; Specific Bandwidth ");
        }
    } else if(totalTimeChoice.checked) {
        if(totalTimeHour.value != '' || totalTimeMin.value != ''){
            section2 = true;
        }
    }

    if (captcha && section1 && section2){
        disable = false;
        totalCalculations();
    } else {
        if(!section1){
            alert("Missing Input in section1");
            console.log("Missing input in section1");
        }
        if(!section2){
            alert("Missing Input in section2");
            console.log("Missing input in section2")
        }
        if(!captcha){
            alert("Missing Input in Recaptcha");
            console.log("Missing input in Recaptcha")
        }
    }

    section1 = false;
    section2 = false;
    captcha = false;
});




