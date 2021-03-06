// define a counter
var counter = (function() {
  'use strict';  
  var _counter = 0;
  
  return function() {
    return ++_counter;
  };
})();

// demo
document.getElementById('count').onclick = function() {
  'use strict';  
  document.getElementById('demo').innerHTML = counter();
};

// define a counter factory
var makeCounter = function() {
  'use strict';  
  var privateCounter = 0;
  
  function changeBy(val) {
    privateCounter += val;
  }
  
  return {
    increment: function() {
      changeBy(1);
    },
    decrement: function() {
      changeBy(-1);
    },
    value: function() {
      return privateCounter;
    }
  };
};

// demo
var Counter1 = makeCounter();
var Counter2 = makeCounter();
//alert(Counter1.value()); /* 提示 0 */
Counter1.increment();
Counter1.increment();
//alert(Counter1.value()); /* 提示 2 */
Counter1.decrement();
//alert(Counter1.value()); /* 提示 1 */
//alert(Counter2.value()); /* 提示 0 */
