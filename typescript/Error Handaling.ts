try {
   
    function errorfunc(num1, num2) {
       
       if (typeof num1 == "number" && typeof num2 == "number") {
          console.log(num1 + num2);
       }
           throw new ReferenceError("Parameter are not type of number.");
    }
    errorfunc("11", 12);
 }
 catch (error) {
    console.log("Inside the catch block.");
    console.log("The error is " + error);
 }
 finally {
    console.log("Inside the finally block.");
 }