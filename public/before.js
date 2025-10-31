function handleTickInit(tick) {
   // create the countdown counter
   var counter = Tick.count.down('2025-11-16T11:00:00+07:00');

   counter.onupdate = function (value) {
      tick.value = value;
   };

   counter.onended = function () {
   };
}