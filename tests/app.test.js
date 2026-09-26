const { getSystemName } = require("../src/app");

if (getSystemName() !== "Library Management System") {
    throw new Error("LMS system name test failed");
}

console.log("LMS test passed");