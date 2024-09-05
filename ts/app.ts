// Main title
let mainTitle = document.getElementById("main-title")!;

// Main Input
let mainInput = document.getElementById("main-input")! as HTMLInputElement;
let mainInputValue : number = Number(mainInput.value); 

let cResult : number = 0;
let fResult : number = 0;
let kResult : number = 0;

// Main Buttons
let convertButton = document.getElementById("convert-button")!;
let resetButton = document.getElementById("reset-button")!;
let changeButton = document.getElementById("change-button")!;

// Result Section
let resultSection = document.querySelector(".result-section")! as HTMLElement;
let resultTitle : (null | HTMLElement) = null;
let result1Element : (null | HTMLElement) = null;
let result2Element : (null | HTMLElement) = null;

// Flags ( Starting type )
let isCelsius: boolean = true;
let isFahrenheit: boolean = false;
let isKelvin: boolean = false;

function changeContent(isC: boolean, isF: boolean, isK: boolean) {
    if (isC) {
        mainTitle.innerHTML = "Converter °C to °F and K";
        document.title = "Temp Conversion (°C to °F and K)";
        mainInput.setAttribute("placeholder", "Enter temp in °C");
    }

    if (isF) {
        mainTitle.innerHTML = "Converter °F to °C and K";
        document.title = "Temp Conversion (°F to °C and K)";
        mainInput.setAttribute("placeholder", "Enter temp in °F");
    }

    if (isK) {
        mainTitle.innerHTML = "Converter K to °C and °F";
        document.title = "Temp Conversion (K to °C and °F)";
        mainInput.setAttribute("placeholder", "Enter temp in K");
    }
}

function setResultSection(c : number, f : number, k : number, mainValue : number){
    resultSection.innerHTML = "";

    resultTitle = document.createElement("h2");
    resultTitle.innerHTML = "Results";
    resultSection.append(resultTitle);

    result1Element = document.createElement("h3");
    result2Element = document.createElement("h3");

    result1Element.classList.add("result-text");
    result2Element.classList.add("result-text");

    if(isCelsius){

        result1Element.innerHTML = `${mainValue} °C = ${f} °F`;
        result2Element.innerHTML = `${mainValue} °C = ${k} K`;
    
    } else if (isFahrenheit){
        
        result1Element.innerHTML = `${mainValue} °F = ${c} °C`;
        result2Element.innerHTML = `${mainValue} °F = ${k} K`;
    
    } else if (isKelvin){

        result1Element.innerHTML = `${mainValue} K = ${c} °C`;
        result2Element.innerHTML = `${mainValue} K = ${f} °F`;
    
    }

    resultSection.append(result1Element);
    resultSection.append(result2Element);
}

convertButton.addEventListener("click", function () {
    mainInputValue = Number(mainInput.value);

    if (isCelsius){
        cResult = mainInputValue;
        fResult = ( cResult * 9 / 5 ) + 32;
        kResult = ( cResult + 273.15 )
    } else if (isFahrenheit){
        fResult = mainInputValue;
        cResult = ( fResult - 32 ) * ( 5 / 9 );
        kResult = ( cResult + 273.15 );
    } else if (isKelvin){
        kResult = mainInputValue;
        cResult = kResult - 273.15
        fResult = ( cResult * 9 / 5 ) + 32;
    }

    setResultSection(cResult, fResult, kResult, mainInputValue);
})

resetButton.addEventListener("click", function () {
    mainInput.value = "";

    isCelsius = true;
    isFahrenheit = false;
    isKelvin = false;

    changeContent(isCelsius, isFahrenheit, isKelvin);
})

changeButton.addEventListener("click", function () {

    if (isCelsius) {
        isCelsius = false;
        isFahrenheit = true;
        isKelvin = false;
    } else if (isFahrenheit) {
        isCelsius = false;
        isFahrenheit = false;
        isKelvin = true;
    } else if (isKelvin) {
        isCelsius = true;
        isFahrenheit = false;
        isKelvin = false;
    }

    changeContent(isCelsius, isFahrenheit, isKelvin);

    // Log Section
    // console.log("C: " + isCelsius);
    // console.log("F: " + isFahrenheit);
    // console.log("K: " + isKelvin);
    // console.log("---------");

})