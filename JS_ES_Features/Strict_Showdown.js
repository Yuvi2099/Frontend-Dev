(function () {

try {
    function demo(a, a) {
        total = 10;
        delete total;
        console.log("non-strict ok");
    }
    demo(5, 10);
} catch (err) {
    console.log("non-strict error:", err.message);
}

try {
    "use strict";
    function demo(a, a) {
        let total = 10;
        delete total;
        console.log("strict ok");
    }
    demo(5, 10);
} catch (err) {
    console.log("strict error:", err.message);
}

})();
