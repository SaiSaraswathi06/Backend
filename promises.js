function getUserDetails(id) {
    return new Promise((resolve, reject) => {
        console.log("fun1 called");
        resolve({ rollnumber: "roll-123" });
    });
}

function getUserSubjects(userRoll) {
    return new Promise((resolve, reject) => {
        console.log("fun2 called");
        resolve({ userSubId: "en-1" });
    });
}

function getUserMarks(userSubId) {
    return new Promise((resolve, reject) => {
        console.log("fun3 called");
        resolve(`getting user marks with subid`);
    });
}

getUserDetails("123")
    .then((result) => {
        return getUserSubjects(result.rollnumber);
    })
    .then((result) => {
        return getUserMarks(result.userSubId);
    })
    .then((result) => console.log(result))
    .catch((error) => console.log(error));
