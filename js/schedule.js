var WebCamp = window.WebCamp || {};

(function ($, WebCamp) {

    'use strict';

    function getClassForSectionInProgress(slotStartTime, slotEndTime) {

        var slotStartTimeParts = slotStartTime.split(':');
        var slotEndTimeParts = slotEndTime.split(':');

        var secsInHour = 3600;
        var secsInMinute = 60;

        var slotStart = slotStartTimeParts[0]*secsInHour + slotStartTimeParts[1]*secsInMinute;
        var slotEnd = slotEndTimeParts[0]*secsInHour + slotEndTimeParts[1]*secsInMinute;

        var hours = 11;//new Date().getHours();
        var minutes = 35; //newDate.getMinutes();
        var currentTime = hours*secsInHour + minutes*secsInMinute;

        var slotClass = 'future';

        if (currentTime >= slotEnd) {
            slotClass = 'past';

        } else if (currentTime >= slotStart) {
            slotClass = 'active-now'
        }

        return slotClass;
    }

    var setSlotStyles = function setSlotStyles() {

        $("tr.slot").each(function(){
            var slotStarts = $(this).find(".slot-time").data("start-time");
            var slotEnds = $(this).find(".slot-time").data("end-time");
            var cellStyle = getClassForSectionInProgress(slotStarts, slotEnds);
            $(this).addClass(cellStyle);

          });
    }

    WebCamp.Schedule = {};
    WebCamp.Schedule.setStyles = setSlotStyles;

}(jQuery, WebCamp));
