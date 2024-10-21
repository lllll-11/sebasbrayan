function showCarDetails(carId) {
    window.location.href = `car-details.html?car=${carId}`;
}

function getCarFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get('car');
}

function loadCarDetails() {
    const carId = getCarFromURL();

    if (carId === 'auto1') {
        document.getElementById('car-title').textContent = 'SUPRA';
        document.getElementById('car-image').src = 'm3.webp';
        document.getElementById('car-description').textContent = 'ES UN BUEN COCHE, CHACHI PISTACHI SE QUEDA CORTO';
    } else if (carId === 'auto2') {
        document.getElementById('car-title').textContent = 'LAMBO';
        document.getElementById('car-image').src = 'm2.webp';
        document.getElementById('car-description').textContent = 'ES UN BUEN COCHE, CHACHI PISTACHI SE QUEDA CORTO';
    } else if (carId === 'auto3') {
        document.getElementById('car-title').textContent = 'R300';
        document.getElementById('car-image').src = 'm4.webp';
        document.getElementById('car-description').textContent = 'ES UN BUEN COCHE, CHACHI PISTACHI SE QUEDA CORTO';
    }
}

if (window.location.pathname.includes('car-details.html')) {
    document.addEventListener('DOMContentLoaded', loadCarDetails);
}
