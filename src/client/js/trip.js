const tripLength = (start, end) => {
    const begin = new Date(start.replace(/-/g, ","));
    const finish = new Date(end.replace(/-/g, ","));

    let beginUnix = begin.getTime();
    let finishUnix = finish.getTime();

    let seconds = (finishUnix - beginUnix) / 1000;
    let minutes = seconds / 60;
    let hours = minutes / 60;
    let days = hours / 24;

    console.log("final answer issssss" + parseInt(days + 1));
    MyLib.newOptions.tripLength = parseInt(days + 1);

    tripLengthToUi(MyLib.newOptions.tripLength,
        MyLib.newOptions.place,
        MyLib.newOptions.state,
        MyLib.newOptions.country, )
}

export { tripLength }

//Function to render the tripLength to the DOM
const tripLengthToUi = (value, place, state, country) => {

    //Create div and append it at the top of the output
    const lengthHeader = document.createElement('p');

    let day = "";
    if (value > 1) {
        day = ' Days Trip';
    } else {
        day = ' Day Trip'
    }

    lengthHeader.textContent = value + day;
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
        stateCountry = state + ", " + country
    }
    const stCntry = document.createElement('p');
    stCntry.textContent = stateCountry;
    stCntry.setAttribute('id', 'state_country');
    placeLocation.insertAdjacentElement('afterend', stCntry);

}