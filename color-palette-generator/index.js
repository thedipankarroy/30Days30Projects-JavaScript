// DOM ELEMENTS
let generateBtn = document.getElementById("generate");
let site = document.getElementById("palete");
let copy = document.getElementById("copy");
let body = document.getElementById("body");

// CONVERT ELEMENTS
let rgb = document.getElementById("rgb");
let hex = document.getElementById("hex");

// PALLETE COLORS
let firstColor = document.getElementById("color1");
let secondColor = document.getElementById("color2");
let thirdColor = document.getElementById("color3");
let fourthColor = document.getElementById("color4");
let fifthColor = document.getElementById("color5");

// GLOBAL VARIABLES
let primary;
let colorPalette;

// MAIN FUNCTIONS WHICH GENERATES COLORS
function generation ()
{
    // DELAY GENERATING COLOURS
    setTimeout(function () {
        // let randomColor = (Math.floor(Math.random()*(1677215 - 1048576 + 1)) + 1048576).toString(16);
        primary = chroma.random();
        

        // GENERATING THE COLORPALETTE USING CHROMA SCALE
        colorPalette = chroma.scale(["white", primary]).mode("lrgb").colors(7);

        // SHOWING THE NAME OF THE COLORS
        firstColor.style.backgroundColor = chroma(colorPalette[1]);
        secondColor.style.backgroundColor = chroma(colorPalette[2]);
        thirdColor.style.backgroundColor = chroma(colorPalette[3]);
        fourthColor.style.backgroundColor = chroma(colorPalette[4]);
        fifthColor.style.backgroundColor = chroma(colorPalette[5]);

        firstColor.textContent = colorPalette[1];
        secondColor.textContent = colorPalette[2];
        thirdColor.textContent = colorPalette[3];
        fourthColor.textContent = colorPalette[4];
        fifthColor.textContent = colorPalette[5];


        body.style.backgroundColor =  chroma(colorPalette[3]).brighten();

        body.style.color = chroma(colorPalette[3]).darken(2);
        rgb.style.color = chroma(colorPalette[3]).darken(2);
        hex.style.color = chroma(colorPalette[3]).darken(2);
        generateBtn.style.color = chroma(colorPalette[3]).darken(2);

        rgb.style.borderColor = chroma(colorPalette[3]).darken(2);
        hex.style.borderColor = chroma(colorPalette[3]).darken(2);
        generateBtn.style.borderColor = chroma(colorPalette[3]).darken(2);
        console.table(colorPalette);
    }, 300)
}
function hexConvert () 
{
    firstColor.textContent = chroma(colorPalette[0]).hex();
    secondColor.textContent = chroma(colorPalette[1]).hex();
    thirdColor.textContent = chroma(colorPalette[2]).hex();
    fourthColor.textContent = chroma(colorPalette[3]).hex();
    fifthColor.textContent = chroma(colorPalette[4]).hex();
}
function rgbConvert () 
{
    firstColor.textContent = chroma(colorPalette[0]).css('rgb');
    secondColor.textContent = chroma(colorPalette[1]).css('rgb');
    thirdColor.textContent = chroma(colorPalette[2]).css('rgb');
    fourthColor.textContent = chroma(colorPalette[3]).css('rgb');
    fifthColor.textContent = chroma(colorPalette[4]).css('rgb');
}

// GENERATE BUTTON EVENT LISTENER
generateBtn.addEventListener("click", generation);


// ON PAGE LOAD
window.addEventListener("load", function () {
    generation();
})


// BOX SHADOW ON GENERATE BUTTON
generateBtn.addEventListener("mouseout", function () {
    generateBtn.style.boxShadow = 'none';
});
generateBtn.addEventListener("mouseover", function () {
    generateBtn.style.boxShadow = '0px 5px 28px 7px' + colorPalette[2];
}, 100);

// RGB AND HEX
rgb.addEventListener("click", rgbConvert)
hex.addEventListener("click", hexConvert)
