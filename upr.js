console.log("Before promise");

new Promise(function (resolve, reject) {
    console.log("Promise started");
    setTimeout(function () {
        console.log("Promise resolved");
        resolve("done");
    }, 2000);
    console.log("Promise finished");
})
    .then(function (result) {
        console.log("Then returned: " + result);
    })
    .catch(function (error) {
        console.log("Catch eror: " + error);
    });
console.log("After promise");