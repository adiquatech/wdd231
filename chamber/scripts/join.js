const memberLevels = "https://adiquatech.github.io/wdd231/chamber/data/company-member-level.json";
const memberLevelsCard = document.querySelector("#member-card")
const mydialog = document.querySelector("#mydialog");
const mytitle = document.querySelector("#mydialog h2");
const myclose = document.querySelector("#mydialog button");
myclose.addEventListener("click", () => mydialog.close());
const myinfo = document.querySelector("#mydialog p");

function displayMemberLevels(memberLevels){
    console.log(memberLevels)

}