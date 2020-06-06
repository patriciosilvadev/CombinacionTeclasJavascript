function navegador() {
    console.log('ahora');
    location.reload();
}
setInterval(navegador, 1000)
document.addEventListener('keydown', (e) => {
    const key = e.which;
    console.log(key);
    if (e.ctrlKey && e.shiftKey && e.which === 65) {
        alert('bienvenido administrador');
        e.preventDefault();
    }
    if (e.which === 116) {
        e.preventDefault();
    }
});
// pressKey(32);
function pressKey(i) {
    var keyboardEvent = i;
    document.dispatchEvent(keyboardEvent);
}



