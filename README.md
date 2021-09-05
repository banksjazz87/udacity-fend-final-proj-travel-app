# Travel Application
<hr/>
The use of this application is to provide users with valuable weather information pertaining to future vacations they may be planning.

## Features/Using the Application
-----
### Steps for using the Application
* Enter your target destination.
* Select the destination from a dropdown menu.
* Enter Start and End vacation dates.
* Click Submit.
### Application results
* You will be supplied with an image depicting if the weather is to be sunny, cloudy, rainy or snowy, as well as the high and low temperatures.
* A photo of the location you have entered will appear on the screen.
* If a photo of your location was unavailable, a picture of the country will automatically appear in its place.

## How To Run The Project
-----
1. If you don't already have node installed on your system you will first need to do this by going to https://nodejs.org/ and following their instructions for installation.

2. Import the repository from github, into the IDE of your choice.

3. In the terminal, type:
    >`npm install`

4. Once all of the packages are installed, in the terminal, type:
    >`npm run build-prod`

5. In the terminal, start the server by typing:
    >`npm run start`

6. Open your browser and go to: 
    >`localhost:3080`

## Dependencies 
----
Dependencies for this project includes:
* body-parser
* cors
* dotenv
* express
* webpack
* babel
* jest

## APIs Used
----
* http://www.geonames.org
* https://www.weatherbit.io this api ended up failing, due to a need for a monthly subscription to continue returning the data I needed.
* https://www.visualcrossing.com this is the new weather api I resorted to.
* https://pixabay.com

## Summary
----
This was the biggest application I have ever completed, and there are quite a few different moving parts.  If you find any bugs or you have any ways that you think you would like to see it improved, send me a message or a pull request.


