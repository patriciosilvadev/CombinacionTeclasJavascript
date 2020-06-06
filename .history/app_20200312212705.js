document.addEventListener('keydown', (e) => {
    const key = e.which;
    if (e.ctrlKey && e.shiftKey && e.which === 65) {
        alert('bienvenido administrador');
        e.preventDefault();
    }  
});