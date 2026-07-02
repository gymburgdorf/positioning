
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

//let x1 = 7.6
//let x2 = 7.7
//let y1 = 47
//let y2 = 47.1

export function getDisatnce(y1, x1,  y2, x2) {
    let dx = x2 - x1
    let dy = y2 - y1
    let factorA = 360 / dx
    let factorB = 360 / dy 
    let b = 40008 / factorB
    let radiusEarth = 40075 / (2 * Math.PI)
    let average = (x1 + x2)/2
    let radiusCircle = Math.cos(average) * radiusEarth 
    let circumfrenceCircle = radiusCircle * (2 * Math.PI)
    let a = circumfrenceCircle / factorA
    let cSquare = Math.pow(a,2) + Math.pow(b,2)
    let c = Math.sqrt(cSquare)
    return c
}
console.log(getDisatnce(y1, x1, y2, x2))