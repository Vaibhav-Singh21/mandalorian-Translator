var inputTxt = document.querySelector("#inputText");
var translateBtn = document.querySelector(".button");
var outputMsg = document.querySelector(".outputText");

var serverURL = "https://api.funtranslations.com/translate/mandalorian.json" ;

function getTranslationURL(text) {
    return serverURL + "?" + "text=" + text;
}

function errHandler(error) {
    console.log("error occured, "+ error);
    alert("Server is down!! try again after some time");
}

translateBtn.addEventListener("click", function clickHandler() {
    var text = inputTxt.value; //taking input

    fetch(getTranslationURL(text)).then(response => response.json()).then(json => {
        outputMsg.innerText = (json.contents.translated)
    }).catch(errHandler);
    
});