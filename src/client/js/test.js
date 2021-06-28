function testIt(){
    let button = document.querySelector('button');
    button.addEventListener('click', () => {
        alert('this is working, batman');
    });
}

export{testIt}