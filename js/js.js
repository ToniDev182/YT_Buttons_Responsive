let player;

// Función llamada cuando la API de YouTube se ha cargado
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '390',
        width: '640',
        videoId: 'WBB-cGMXOew', // El ID del video que proporcionaste
        playerVars: {
            'controls': 0, // Desactiva los controles predeterminados
            'rel': 0, // Evita mostrar videos relacionados al final
            'modestbranding': 1 // Reduce el branding de YouTube, para que el reproductor esta mas limpio. Eliminación del logo de YouTube,  Ocultación de la barra de navegación de YouTube.
           
        }
    });
}

// Funciones para los botones
function playVideo() {
    player.playVideo();
}

function pauseVideo() {
    player.pauseVideo();
}

function muteVideo() {
    player.mute();
}

function unmuteVideo() {
    player.unMute();
}
