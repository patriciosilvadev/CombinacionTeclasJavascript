document.addEventListener('keydown', (e) => {
    const key = e.which;
    if (e.which === 65 && e.which === 68 && e.which === 77  && e.which === 73  && e.which === 78) {
        alert('bienvenido administrador');
        e.preventDefault();
    }  
});