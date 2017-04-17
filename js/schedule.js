var WebCamp = window.WebCamp || {};

(function ($, WebCamp) {

    'use strict';

    var mainEventDate = null;
    var currentDate = null;
    var setStylesEnabled = false;

    function getClassForSectionInProgress(slotStartTime, slotEndTime) {

        const SECONDS_IN_HOUR = 3600;
        const SECONDS_IN_MINUTE = 60;
        const PAST_SLOT_CLASS = 'past';
        const ACTIVE_SLOT_CLASS = 'active-now';
        const FUTURE_SLOT_CLASS = 'future';

        var slotStart, slotEnd;
        var slotClass = FUTURE_SLOT_CLASS;
        var slotStartTimeParts = slotStartTime.split(':');
        var slotEndTimeParts = slotEndTime.split(':');

        var hours = currentDate.getHours();
        var minutes = currentDate.getMinutes();
        var currentTime = hours * SECONDS_IN_HOUR + minutes * SECONDS_IN_MINUTE;

        if (slotStartTimeParts.lenght < 2 || slotEndTimeParts.lenght < 2) {
            return '';
        }

        slotStart = slotStartTimeParts[0] * SECONDS_IN_HOUR + slotStartTimeParts[1] * SECONDS_IN_MINUTE;
        slotEnd = slotEndTimeParts[0] * SECONDS_IN_HOUR + slotEndTimeParts[1] * SECONDS_IN_MINUTE;

        if (currentTime >= slotEnd) {
            slotClass = PAST_SLOT_CLASS;

        } else if (currentTime >= slotStart) {
            slotClass = ACTIVE_SLOT_CLASS;
        }

        return slotClass;
    }

    var applySlotStyles = function applySlotStyles() {

        $("tr.slot").each(function(){
            var slotStarts = $(this).find(".slot-time").data("start-time");
            var slotEnds = $(this).find(".slot-time").data("end-time");
            var cellStyle = getClassForSectionInProgress(slotStarts, slotEnds);
            $(this).addClass(cellStyle);
          });
    }

    var init = function init(eventDate) {

        mainEventDate = new Date(eventDate);
        currentDate = new Date();

        var tmpEventDay = new Date(mainEventDate);
        var tmpCurrentDay = new Date(currentDate);

        tmpEventDay.setHours(0, 0, 0, 0);
        tmpCurrentDay.setHours(0, 0, 0, 0);

        if(tmpCurrentDay.getTime() == tmpEventDay.getTime()) {
            applySlotStyles();
        }
    }

    WebCamp.Schedule = {};
    WebCamp.Schedule.init = init;
    WebCamp.Schedule.setStyles = applySlotStyles;

}(jQuery, WebCamp));
