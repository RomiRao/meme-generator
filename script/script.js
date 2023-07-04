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
const filterGrayscale = document.getElementById('grayscale-range');
const filterSepia = document.getElementById('sepia-range');
const filterHue = document.getElementById('hue-range');
const filterSaturation = document.getElementById('saturation-range');
const filterNegative = document.getElementById('invert-range');
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
})