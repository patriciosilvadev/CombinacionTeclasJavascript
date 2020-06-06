document.addEventListener('keydown', (e) => {
    const key = e.which;
    if (e.ctrlKey && e.shiftKey && e.which === 83) {
        alert("You pressed Ctrl + Shift + s");
        e.preventDefault();
    }  
});