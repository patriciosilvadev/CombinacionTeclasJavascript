function navegador() {
    console.log('ahora');    
     window.onload;
}
setInterval(navegador, 1000)
document.addEventListener('keydown', (e) => {
    const key = e.which;
    console.log(key);    
    if (e.ctrlKey && e.shiftKey && e.which === 65) {
        alert('bienvenido administrador');
        e.preventDefault();
    }  
    if(e.which === 116){
        e.preventDefault();
    }
});



   