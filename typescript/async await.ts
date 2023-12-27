async function samplePromise() {
    const new_promise = new Promise(function (resolve, reject) {
       resolve("Successfully resolved");
    });
    return new_promise;
 }
 
 async function executeAsync() {
    try {
       let response = await samplePromise();
       console.log(response);
    } catch (err) {
       console.log("Error is " + err);
    }
 }
 console.log("Before calling a function");
 executeAsync();
 console.log("After calling a function");