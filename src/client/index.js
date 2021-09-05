import { postData } from './js/post.js'

import { keysInfo } from './js/app.js'

import { geonamesApi } from './js/geoCall.js'
import { clearOptions } from './js/geoCall.js'
import { displayedGeo } from './js/geoCall.js'
import { newOptions } from './js/geoCall.js'
import { currentOptions } from './js/geoCall.js'
import { clearItems } from './js/geoCall.js'

import { weatherbit } from './js/weatherbitCall.js'
import { startDate } from './js/weatherbitCall.js'
import { endDate } from './js/weatherbitCall.js'
import { weatherCall } from './js/weatherbitCall.js'

import { returnGeo } from './js/eventListeners.js'
import { submitFunction } from './js/eventListeners.js'
import { clearFunction } from './js/eventListeners'

import { pixCall } from './js/pixabayCall.js'

import { tripLength } from './js/trip.js'

import './styles/style.scss'
import './styles/library.scss'
import './styles/queries.scss'

const cloudy = new URL('./assets/cloudy_clipArtLibrary.jpeg',
    import.meta.url);
const logo = new URL('./assets/pixaby_logo.png',
    import.meta.url);
const rain = new URL('./assets/rain_clipartLibrary.jpeg',
    import.meta.url);
const snow = new URL('./assets/snow_clipartLibrary.jpeg',
    import.meta.url);
const sunny = new URL('./assets/sunny_clipartLibrary.jpeg',
    import.meta.url);

export {
    keysInfo,
    postData,
    geonamesApi,
    clearOptions,
    displayedGeo,
    weatherbit,
    startDate,
    endDate,
    returnGeo,
    weatherCall,
    submitFunction,
    pixCall,
    clearFunction,
    clearItems,
    tripLength,
    newOptions,
    currentOptions,
    cloudy,
    logo,
    rain,
    snow,
    sunny
}


//Event listener added to the search button
returnGeo();

//Event listener added to the submit button
submitFunction();

//This event listener will clear the current options menu
clearFunction();