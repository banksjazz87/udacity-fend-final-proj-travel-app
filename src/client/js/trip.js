/**
 * 
 * @param {*} start, date. 
 * @param {*} end, date.
 * @details this function mainly converts the dates into unix time and then converts it down to number of days.
 * @returns the unix time, and then updates the newOptions object with a key of tripLength.  tripLengthToUi() is then called. 
 */
const tripLength = (start, end) => {
    const begin = new Date(start.replace(/-/g, ","));
    const finish = new Date(end.replace(/-/g, ","));

    let beginUnix = begin.getTime();
    let finishUnix = finish.getTime();

    let seconds = (finishUnix - beginUnix) / 1000;
    let minutes = seconds / 60;
    let hours = minutes / 60;
    let days = hours / 24;

    MyLib.newOptions.tripLength = parseInt(days + 1);

    return tripLengthToUi(MyLib.newOptions.tripLength,
        MyLib.newOptions.place,
        MyLib.newOptions.state,
        MyLib.newOptions.country, )
}

/**
 * 
 * @param {*} value 
 * @param {*} place 
 * @param {*} state 
 * @param {*} country 
 * @details takes 4 parameters supplied by the newOptions object, and then updates the UI with the information pulled from the newOptions object.
 * @returns an updated UI with the trip length.
 */
const tripLengthToUi = (value, place, state, country) => {

    //Create div and append it at the top of the output
    const lengthHeader = document.createElement('p');

    lengthHeader.textContent = value + ' Day Vacation';
    lengthHeader.setAttribute('id', "length_header");
    const output = document.getElementById('output_container');
    output.insertAdjacentElement('afterbegin', lengthHeader);

    const placeLocation = document.createElement('p');
    placeLocation.textContent = place;
    placeLocation.setAttribute('id', 'place_location')
    lengthHeader.insertAdjacentElement('afterEnd', placeLocation)

    let stateCountry = "";
    if (state === "") {
        stateCountry = country;
    } else {
        stateCountry = `${state}, ${country}`;
    }
    const stCntry = document.createElement('p');
    stCntry.textContent = stateCountry;
    stCntry.setAttribute('id', 'state_country');
    placeLocation.insertAdjacentElement('afterend', stCntry);

}

export { tripLength }