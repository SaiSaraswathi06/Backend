// function getUserDetails(id){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             resolve({userroll:"678"})
//         },2000);
//     })
// };
// const myfun=async()=>{
//     console.log("123");
//     const result= await getUserDetails("123");
//     console.log(result);
//     console.log("456")
// };
// myfun();
function getUserDetails(id) {
    return new Promise((resolve) => {
        console.log("getting user details by userID", id); // API call simulation
        resolve({ userroll: "678" });
    });
}

function getUserSubjects(userRoll) {
    return new Promise((resolve) => {
        console.log("getting user subjects by roll number", userRoll); // API call simulation
        resolve({ subid: "en-1" });
    });
}

function getUserMarks(userSubId) {
    return new Promise((resolve) => {
        console.log("getting user marks with subid", userSubId);
        resolve("Marks fetched successfully");
    });
}

async function fetchUserData() {
    const userRoll = await getUserDetails("123");
    const userSubId = await getUserSubjects(userRoll);
    const marks = await getUserMarks(userSubId);

    console.log("Final Output:", marks);
}

fetchUserData();
