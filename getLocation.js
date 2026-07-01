
const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 1000
};

function onFail(err) {
    console.error(err)
    alert("Error getting location: " + err.message)
}



export function registerLocationHandler(fn) {
    const watchId = navigator.geolocation.watchPosition(fn, onFail, options)

}