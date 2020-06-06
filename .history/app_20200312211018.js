document.addEventListener('keydown', (event) => {
    const key = event.which;
    switch (key) {
        case 39:
            player.direction = "r";
            break;
        case 37:
            player.direction = "l";
            break;
        case 38:
            player.direction = "t";
            break;
        case 40:
            player.direction = "d";
            break;
    }
});