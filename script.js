const content = document.querySelector('#main_content');
const clarification = document.createElement('h3');
clarification.setAttribute('id', 'message');
clarification.textContent = ``;
clarification.style.alignSelf = `center`;
clarification.style.fontSize = `32px`;
content.appendChild(clarification);
window.addEventListener('keydown', function(e){
    const keycode = e.keyCode;
    console.log(keycode);
    key.style.fontSize = `200px`;
    document.getElementById('key').innerText = `${keycode}`;
    this.document.getElementById('message').innerText = `This is the keycode of the key you just pressed!`;
})
