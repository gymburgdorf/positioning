
const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 1000
};


export function registerLocationHandler(fn) {
    const watchId = navigator.geolocation.watchPosition(fn, onFail, options)

}