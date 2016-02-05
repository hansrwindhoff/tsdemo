define(["require", "exports"], function (require, exports) {
    "use strict";
    function myLog() {
        console.log("Hello from module");
    }
    exports.myLog = myLog;
});
