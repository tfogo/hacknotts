'use strict';

$(document).ready(function(){
    $('#clock').countdown("2014/10/04 10:00:00", function(event) {
        var totalHours = event.offset.totalDays * 24 + event.offset.hours;
        $(this).html(event.strftime('T -' + totalHours + ':%M:%S'));
    });
});
