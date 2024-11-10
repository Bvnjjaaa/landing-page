function esDispositivoMovil() {
    return /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
}

window.onload = function() {
    if (esDispositivoMovil()) {
        document.querySelector('.download-button').style.display = 'block';
    } else {
        document.querySelector('.qr-section').style.display = 'block';
    }
}
