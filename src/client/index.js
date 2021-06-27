import{testIt} from './js/test.js'
import{appIt} from './js/app.js'
import './styles/style.scss'

testIt();
appIt();


//You will need to add the event listeners straight into this file
const button = document.getElementById('submit');

button.addEventListener('click', () => {
    alert('You did it')
    appIt()
    testIt()
});
