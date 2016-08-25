// ==UserScript==
// @name         MSM Reservation
// @namespace    http://tampermonkey.net/
// @updateURL    
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://scheduling.msmnyc.edu/*
// @grant        none
// ==/UserScript==

(function() {
  'use strict';

  var roomidDict = {
    331 : 79,
    332 : 78
  };

  var roomid = 332;

  if ($(location).attr('pathname') == '/RoomRequest.aspx') {
    $('#ctl00_pc_BookDate_box').val('8/17/2016 Tue');
    $('#ctl00_pc_StartTime_box').val('9:00 AM');
    $('#ctl00_pc_EndTime_box').val('12:00 PM');
    $('#ctl00_pc_GetData').click();

    while(true) {
    

        setTimeout(function(){
            $('img[data-roomid="' + roomidDict[roomid] + '"]').click();

            setTimeout(function() {
                $('#ctl00_pc_submitReservation').click();
            }, 500);
        }, 500);
    }

  }

})();
