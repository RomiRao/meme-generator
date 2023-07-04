// ------------ CALLING ELEMENTS ----------------

// Panel settings ------
const imagePanelButton = document.getElementById('image-panel-button');
const textPanelButton = document.getElementById('text-panel-button');
const modePanelButton = document.getElementById('mode-panel-button');

//Meme container and download button elements
const topText = document.getElementById('top-text-cont');
const bottomText = document.getElementById('bottom-text-cont');
const imageContainer = document.getElementById('image-container');

const downloadButton = document.getElementById('download-button');
const memeContainer = document.getElementById('meme-container');


//Image panel -------------
const imagePanel = document.getElementById('image-panel');

//Image
const inputURL = document.getElementById('input-url');
const inputImageBack = document.getElementById('image-back');
const inputBlendMode = document.getElementById('image-blend');

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
const textPanel = document.getElementById('text-panel');

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
const fontPadding = document.getElementById('font-spacing');
const fontLeading = document.getElementById('font-leading');



//-------------- FUNCTIONS -------------------

//Hide and show panels
imagePanelButton.addEventListener('click', () => {
    imagePanel.classList.remove('hidden');
    textPanel.classList.add('hidden');
});

textPanelButton.addEventListener('click', () => {
    textPanel.classList.remove('hidden');
    imagePanel.classList.add('hidden');
});


//Download image
downloadButton.addEventListener('click', () => downloadMeme());

const downloadMeme = () => {
// Crear un elemento <a>
let enlace = document.createElement('a');
// El título
enlace.download = "Canvas como imagen.jpg";
// Convertir la imagen a Base64 y ponerlo en el enlace
enlace.href = memeContainer.toDataURL("image/jpeg", 1);
// Hacer click en él
enlace.click();
}

//
//IMAGE PANEL
//

//Adding image to container by url

inputURL.addEventListener('input', () => {
    imageContainer.style.backgroundImage = `url('${inputURL.value}')`
});

//Background color/blend mode image

let colorNameImage = document.getElementById('color-name-image');

inputImageBack.addEventListener('input', () => {
    imageContainer.style.backgroundColor = inputImageBack.value
    colorNameImage.innerText = inputImageBack.value.toUpperCase()
});

inputBlendMode.addEventListener('input', () => {
    imageContainer.style.backgroundBlendMode = inputBlendMode.value
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
    imageContainer.style.filter = `brightness(1) opacity(1) blur(0px) contrast(100%) grayscale(0%) hue-rotate(0deg) sepia(0%) saturate(100%) invert(0)`;
}

buttonReset.addEventListener('click', () => deleteFilters());

// 
//TEXT PANEL
//

//Top text input
inputTopText.addEventListener('input', () => {
    topText.innerText = inputTopText.value
});

disableTopText.addEventListener('click', () => {
    if (disableTopText.checked) {
        topText.classList.add('hidden')
    } else {
        topText.classList.remove('hidden')
    }
});

//Bottom text input
inputBottomText.addEventListener('input', () => {
    bottomText.innerText = inputBottomText.value
});

disableBottomText.addEventListener('click', () => {
    if (disableBottomText.checked) {
        bottomText.classList.add('hidden')
    } else {
        bottomText.classList.remove('hidden')
    }
});

//Font selection
fontSelector.addEventListener('input', () => {
    topText.style.fontFamily = fontSelector.value
    bottomText.style.fontFamily = fontSelector.value
});

fontSize.addEventListener('input', () => {
    topText.style.fontSize = `${fontSize.value}px`;
    bottomText.style.fontSize = `${fontSize.value}px`;
});

alignLeft.addEventListener('click', () => {
    topText.style.textAlign = 'left' ;
    bottomText.style.textAlign = 'left';
});
alignCenter.addEventListener('click', () => {
    topText.style.textAlign = 'center' ;
    bottomText.style.textAlign = 'center';
});
alignRight.addEventListener('click', () => {
    topText.style.textAlign = 'right' ;
    bottomText.style.textAlign = 'right';
});


//Text colors
const colorText = document.getElementById('color-text');
const textBackground = document.getElementById('color-text-background');


fontColor.addEventListener('input', () => {
    topText.style.color = fontColor.value
    bottomText.style.color = fontColor.value
    colorText.innerText = fontColor.value.toUpperCase()
});

fontBackground.addEventListener('input', () => {
    topText.style.backgroundColor = fontBackground.value
    bottomText.style.backgroundColor = fontBackground.value
    textBackground.innerText = fontBackground.value.toUpperCase()
});

// disableFontBack
disableFontBack.addEventListener('click', () => {
    if (disableFontBack.checked) {
        bottomText.style.backgroundColor = 'transparent'
        topText.style.backgroundColor = 'transparent'
        bottomText.style.position = 'absolute'
        topText.style.position = 'absolute'
    } else {
        topText.style.backgroundColor = fontBackground.value
        bottomText.style.backgroundColor = fontBackground.value
        bottomText.style.position = 'static'
        topText.style.position = 'static'
    }
});

//Text border
borderNone.addEventListener('click', () => {
    topText.style.textShadow = 'none';
    bottomText.style.textShadow = 'none';
});

borderLight.addEventListener('click', () => {
    topText.style.textShadow = 'rgb(255, 255, 255) 2px 2px, rgb(255, 255, 255) -2px 2px, rgb(255, 255, 255) 2px -2px, rgb(255, 255, 255) -2px -2px';
    bottomText.style.textShadow = 'rgb(255, 255, 255) 2px 2px, rgb(255, 255, 255) -2px 2px, rgb(255, 255, 255) 2px -2px, rgb(255, 255, 255) -2px -2px';
});

borderDark.addEventListener('click', () => {
    topText.style.textShadow = 'rgb(0, 0, 0) 2px 2px, rgb(0, 0, 0) -2px 2px, rgb(0, 0, 0) 2px -2px, rgb(0, 0, 0) -2px -2px';
    bottomText.style.textShadow = 'rgb(0, 0, 0) 2px 2px, rgb(0, 0, 0) -2px 2px, rgb(0, 0, 0) 2px -2px, rgb(0, 0, 0) -2px -2px';
});


//Text padding
fontPadding.addEventListener('input', () => {
    topText.style.padding = `${fontPadding.value}px 30px`;
    bottomText.style.padding = `${fontPadding.value}px 30px`;
});

//Text leading line-height
fontLeading.addEventListener('input', () => {
    topText.style.lineHeight = fontLeading.value;
    bottomText.style.lineHeight = fontLeading.value;
});


//***********************************************
//Light MODE
//***********************************************

const darkModeIcon = document.getElementById('dark-mode-icon');
const body = document.getElementById('body');
const header = document.getElementById('header');
const darkModeSpan = document.getElementById('dark-mode-span')

const modoOscuro = () => {
    //general light mode
    body.classList.toggle('body-light-m');
    header.classList.toggle('header-light-m');
    imagePanel.classList.toggle('aside-light-m');
    textPanel.classList.toggle('aside-light-m');
    darkModeIcon.classList.toggle('fa-solid');
    darkModeIcon.classList.toggle('fa-regular');
    modePanelButton.classList.toggle('is-light-hover');
    imagePanelButton.classList.toggle('is-light-hover');
    textPanelButton.classList.toggle('is-light-hover');
    
    if (darkModeSpan.innerText == 'Dark mode') {
        darkModeSpan.innerText = 'Light mode'
    } else {
        darkModeSpan.innerText = 'Dark mode'
    }

    //filters light mode
    filterBrightness.classList.toggle('light-slide-bar');
    filterOpacity.classList.toggle('light-slide-bar');
    filterContrast.classList.toggle('light-slide-bar');
    filterBlur.classList.toggle('light-slide-bar');
    filterGrayscale.classList.toggle('light-slide-bar');
    filterSepia.classList.toggle('light-slide-bar');
    filterHue.classList.toggle('light-slide-bar');
    filterSaturation.classList.toggle('light-slide-bar');
    filterInvert.classList.toggle('light-slide-bar');
    buttonReset.classList.toggle('input-light-m');
    buttonReset.classList.toggle('is-light-hover');
    

    //Inputs light mode
//image
    inputURL.classList.toggle('input-light-m');
    inputImageBack.classList.toggle('input-light-m');
    inputBlendMode.classList.toggle('input-light-m');
    //hover
    inputURL.classList.toggle('is-light-hover');
    inputImageBack.classList.toggle('is-light-hover');
    inputBlendMode.classList.toggle('is-light-hover');

//Text
    inputTopText.classList.toggle('input-light-m');
    disableTopText.classList.toggle('input-light-m');
    inputBottomText.classList.toggle('input-light-m');
    disableBottomText.classList.toggle('input-light-m');
    //hover
    inputTopText.classList.toggle('is-light-hover');
    disableTopText.classList.toggle('is-light-hover');
    inputBottomText.classList.toggle('is-light-hover');
    disableBottomText.classList.toggle('is-light-hover');

//Font inputs
    fontSelector.classList.toggle('input-light-m');
    fontSize.classList.toggle('input-light-m');
    alignLeft.classList.toggle('input-light-m');
    alignCenter.classList.toggle('input-light-m');
    alignRight.classList.toggle('input-light-m');
    //hover
    fontSelector.classList.toggle('is-light-hover');
    fontSize.classList.toggle('is-light-hover');
    alignLeft.classList.toggle('is-light-hover');
    alignCenter.classList.toggle('is-light-hover');
    alignRight.classList.toggle('is-light-hover');

//Colors
    fontColor.classList.toggle('input-light-m');
    fontBackground.classList.toggle('input-light-m');
    disableFontBack.classList.toggle('input-light-m');
    //hover
    fontColor.classList.toggle('is-light-hover');
    fontBackground.classList.toggle('is-light-hover');
    disableFontBack.classList.toggle('is-light-hover');

//Border 
    borderNone.classList.toggle('input-light-m');
    borderLight.classList.toggle('input-light-m');
    borderDark.classList.toggle('input-light-m');
    //hover
    borderNone.classList.toggle('is-light-hover');
    borderLight.classList.toggle('is-light-hover');
    borderDark.classList.toggle('is-light-hover');

//Spacing and leading ----
    fontPadding.classList.toggle('input-light-m');
    fontLeading.classList.toggle('input-light-m');
    //hover
    fontPadding.classList.toggle('is-light-hover');
    fontLeading.classList.toggle('is-light-hover');
}
    
    modePanelButton.addEventListener('click', () => modoOscuro());

