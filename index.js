function sayHello() {
    alert("Hello!");
}
function sayGoodbye() {
    alert("Goodbye :(");
}
function updateSum() {
    const numberOneInput = document.getElementById("number-1-input");
    const numberTwoInput = document.getElementById("number-2-input");
    const numberOne = Number(numberOneInput.value);
    const numberTwo = Number(numberTwoInput.value);
    const sum = numberOne + numberTwo;
    const sumElement = document.getElementById("sum-output");
    sumElement.innerText = sum;
}

function updatePro() {
    const numberOneInput = document.getElementById("number-1-input");
    const numberTwoInput = document.getElementById("number-2-input");
    const numberOne = Number(numberOneInput.value);
    const numberTwo = Number(numberTwoInput.value);
    const product = numberOne * numberTwo;
    const sumElement = document.getElementById("product-output");
    sumElement.innerText = product;
}


function openmoodle() {
    open("https://moodle.telt.unsw.edu.au");
}

function openmyunsw() {
    open("https://my.unsw.edu.au/portal/faces/oracle/webcenter/portalapp/pages/view1.jspx?_afrLoop=2828058607911751&_afrWindowMode=0&_adf.ctrl-state=17d9nz4oe5_4");
}

function openunswemail() {
    open("https://outlook.office.com/mail/");
}


function movingblock() {
    let id = null;
    const elem = document.getElementById("animate");
    let pos = 0;
    while (pos != 350) {
        pos++;
        elem.style.top = pos + "px";
        elem.style.left = pps + "px";
    }
}