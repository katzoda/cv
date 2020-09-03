
// 1. forEach on a string
//*********************************************************
var html, newHtml, htmlPT, element, letter;

element = dom_strings.bottomPT;

htmlPT = '<input id = "pt_&" type="number" class="add__pt" placeholder="PT%">'
//pt_block = htmlPT.repeat(numPT);
// for (var i = 1; i <= numPT; i++) {
//     // htmlPT = htmlPT.replace("%", i);
//     // htmlPT = htmlPT.replace("&", i);
//     // newHtml = newHtml + htmlPT;
//
// };

htmlPT.forEach((current, i) => {
    if (current === "&" || current === "%") {
        current = i;
        newHtml = newHtml + current;
    }
    else {
        newHtml = newHtml + current;
    }
});



html = '<div class="add add_pt_container"><div class="add__container"><h2>Enter the value in desired Currency:</h2>' + newHtml.slice(9) + '<input type="number" class="add__value" placeholder="Stop Loss/Contract"><button class="add__btn"><i class="ion-ios-checkmark-outline"></i></button></div></div>'

document.querySelector(element).insertAdjacentHTML("beforeend", html);
console.log(newHtml.slice(9));
