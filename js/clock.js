$(document).ready(function() {
    let clock;
  
    // Grab the current date
    let currentDate = new Date();
  
    // Target future date/24 hour time/Timezone
    let targetDate = moment.tz("2024-10-19T09:00:00", "Asia/Taipei");
  
    // Calculate the difference in seconds between the future and current date
    let diff = targetDate.diff(currentDate, 'seconds');
  
    if (diff <= 0) {
      // If remaining countdown is 0
      clock = $(".clock").FlipClock(0, {
        clockFace: "DailyCounter",
        countdown: true,
        autostart: false
      });
      
    } else {
      // Run countdown timer
      clock = $(".clock").FlipClock(diff, {
        clockFace: "DailyCounter",
        countdown: true,
        callbacks: {
          stop: function() {
          }
        }
      });
      
      // Check when timer reaches 0, then stop at 0
      setTimeout(function() {
        checktime();
      }, 1000);
      
      function checktime() {
        t = clock.getTime();
        if (t <= 0) {
          clock.setTime(0);
        }
        setTimeout(function() {
          checktime();
        }, 1000);
      }
    }
  });