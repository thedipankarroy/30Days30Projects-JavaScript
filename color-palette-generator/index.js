// DOM ELEMENTS
let generateBtn = document.getElementById("generate");
let site = document.getElementById("palete");
let copy = document.getElementById("copy");


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
let Color, Color1, Color2, Color3;
let colorPalette;



// GENERATE BUTTON EVENT LISTENER
generateBtn.addEventListener("click", function () {
    // DELAY GENERATING COLOURS
    setTimeout(function () {
        // let randomColor = (Math.floor(Math.random()*(1677215 - 1048576 + 1)) + 1048576).toString(16);
        Color = chroma.random();
        Color1 = chroma.random();
        Color2 = chroma.average([Color, Color1]);
        Color3 = chroma.average([Color2, Color3]);

        // GENERATING THE COLORPALETTE USING CHROMA SCALE
        colorPalette = chroma.scale([Color, Color1, Color2, Color3]).mode("lrgb").colors(5);

        // SHOWING THE NAME OF THE COLORS
        firstColor.style.backgroundColor = colorPalette[0];
        secondColor.style.backgroundColor = colorPalette[1];
        thirdColor.style.backgroundColor = colorPalette[2];
        fourthColor.style.backgroundColor = colorPalette[3];
        fifthColor.style.backgroundColor = colorPalette[4];

        firstColor.textContent = colorPalette[0];
        secondColor.textContent = colorPalette[1];
        thirdColor.textContent = colorPalette[2];
        fourthColor.textContent = colorPalette[3];
        fifthColor.textContent = colorPalette[4];
    }, 200)
});



// CHANGING THE OUTPUT FORMAT

// TO RGB FORMAT
rgb.addEventListener("click", function () {
    firstColor.textContent = chroma(colorPalette[0]).css('rgb');
    secondColor.textContent = chroma(colorPalette[1]).css('rgb');
    thirdColor.textContent = chroma(colorPalette[2]).css('rgb');
    fourthColor.textContent = chroma(colorPalette[3]).css('rgb');
    fifthColor.textContent = chroma(colorPalette[4]).css('rgb');
})

// TO HEX
hex.addEventListener("click", function () {
    firstColor.textContent = chroma(colorPalette[0]).hex();
    secondColor.textContent = chroma(colorPalette[1]).hex();
    thirdColor.textContent = chroma(colorPalette[2]).hex();
    fourthColor.textContent = chroma(colorPalette[3]).hex();
    fifthColor.textContent = chroma(colorPalette[4]).hex();
})



// COPY
copy.addEventListener("click", function() {
    
})
