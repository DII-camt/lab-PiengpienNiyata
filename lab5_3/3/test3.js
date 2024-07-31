// function taskOne() {

//     setTimeout(function () {
//      console.log("this is task 1");}, 500); }

// function taskTwo() {
//      console.log("this is task 2"); }

// function taskThree() {
//     setTimeout(function() {
//      console.log("this is task 3"); }, 1000) }

//     taskOne();
//     taskTwo();
//     taskThree();

    function taskOne() {
        return new Promise((resolve) => {
          setTimeout(() => {
            console.log("this is task 1");
            resolve();
          }, 500);
        });
      }
      
      function taskTwo() {
        console.log("this is task 2");
      }
      
      function taskThree() {
        return new Promise((resolve) => {
          setTimeout(() => {
            console.log("this is task 3");
            resolve();
          }, 1000);
        });
      }
      
      async function runTasks() {
        await taskOne();
        taskTwo();
        await taskThree();
      }
      
      runTasks();

