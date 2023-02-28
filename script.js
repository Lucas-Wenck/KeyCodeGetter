const content = document.querySelector('#main_content');
const clarification = document.createElement('h3');
clarification.setAttribute('id', 'message');
clarification.textContent = ``;
clarification.style.fontSize = `32px`;
content.appendChild(clarification);
window.addEventListener('keydown', function(e){
    const keycode = e.keyCode;
    const keyPress = e.code;
    console.log(e);
    key.style.fontSize = `100px`;
    document.getElementById('key').innerText = `The keycode of the ${keyPress} is ${keycode}`;
    this.document.getElementById('message').innerText = `This is the keycode of the key you just pressed!`;
})
