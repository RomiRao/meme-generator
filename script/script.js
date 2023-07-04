// ------------ CALLING ELEMENTS ----------------

// Panel settings ------
const imagePanel = document.getElementById('image-panel');
const textPanel = document.getElementById('text-panel');
const modePanel = document.getElementById('mode-panel');

//Meme container and download button elements
const topText = document.getElementById('top-text-cont');
const bottomText = document.getElementById('bottom-text-cont');
const imageContainer = document.getElementById('image-container');

const download = document.getElementById('download-button');

//Image panel -------------
const inputURL = document.getElementById('input-url');
const inputImageBack = document.getElementById('image-back');
const inputLuminosity = document.getElementById('image-luminosity');

//filters
const filterBrightness = document.getElementById('bright-range');
const filterOpacity = document.getElementById('opacity-range');
const filterContrast = document.getElementById('contrast-range');
const filterBlur = document.getElementById('blur-range');
const filterGrayscale = document.getElementById('gray-range');
const filterSepia = document.getElementById('sepia-range');
const filterHue = document.getElementById('hue-range');
const filterSaturation = document.getElementById('saturation-range');
const filterInvert = document.getElementById('invert-range');
const buttonReset = document.getElementById('button-reset');


//Text panel ----------
//Text inputs
const inputTopText = document.getElementById('top-text');
const disableTopText = document.getElementById('disable-top-text');
const inputBottomText = document.getElementById('bottom-text');
const disableBottomText = document.getElementById('disable-bottom-text');

//Font inputs
const fontSelector = document.getElementById('font-selector');
const fontSize = document.getElementById('font-size');
const alignLeft = document.getElementById('align-left');
const alignCenter = document.getElementById('align-center');
const alignRight = document.getElementById('align-right');

//Colors
const fontColor = document.getElementById('font-color');
const fontBackground = document.getElementById('font-background');
const disableFontBack = document.getElementById('disable-font-background');

//Border 
const borderNone = document.getElementById('border-none');
const borderLight = document.getElementById('border-light');
const borderDark = document.getElementById('border-dark');

//Spacing and leading ----
const fontSpacing = document.getElementById('font-spacing');
const fontLeading = document.getElementById('font-leading');



//-------------- FUNCTIONS -------------------

//Adding image to container by url

inputURL.addEventListener('input', () => {
    imageContainer.style.backgroundImage = `url('${inputURL.value}')`
});

//Filters functions

const filters = () => {
    imageContainer.style.filter = `brightness(${filterBrightness.value}) opacity(${filterOpacity.value}) blur(${filterBlur.value}px) contrast(${filterContrast.value}%) grayscale(${filterGrayscale.value}%) hue-rotate(${filterHue.value}deg) sepia(${filterSepia.value}%) saturate(${filterSaturation.value}%) invert(${filterInvert.value})`
}

filterBrightness.addEventListener('input', () => filters());
filterOpacity.addEventListener('input', () => filters());
filterContrast.addEventListener('input', () => filters());
filterBlur.addEventListener('input', () => filters());
filterGrayscale.addEventListener('input', () => filters());
filterSepia.addEventListener('input', () => filters());
filterHue.addEventListener('input', () => filters());
filterSaturation.addEventListener('input', () => filters());
filterInvert.addEventListener('input', () => filters());


//Reset button

const deleteFilters = () => {
    imageContainer.style.filter = `brightness(0) opacity(0) blur(0px) contrast(0%) grayscale(0%) hue-rotate(0deg) sepia(0%) saturate(0%) invert(0)`;
}

buttonReset.addEventListener('click', () => deleteFilters())