let result;
function determineNumber() {    console.log("numberValue");
    let number = parseFloat(document.getElementById("number").value);    if (number > 0) {
        result = "Число положительное";    } else if (number < 0) {
        result = "Число отрицательное";    } else {
        result = "Число равно нулю";    }
    document.getElementById("result").innerText = "Результаты вычислений: " + result;}
function send() {
    let textCondition = document.getElementsByTagName("p")[0].innerText;    document.getElementsByName("formulation")[0].value = textCondition;
    document.getElementsByName("result")[0].value = result;    document.getElementById("UserEnter").submit();
}
function determine_send() {
    determineNumber();}
document.addEventListener("DOMContentLoaded", function () {
    const elementDetermine = document.getElementById("determine");    const elementSend = document.getElementById("send");
    elementDetermine.addEventListener("click", determine_send);    elementSend.addEventListener("click", send);
});