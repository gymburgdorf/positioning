
import {WS} from "https://mint.gymburgdorf.ch/dev/demo/ws_demo_marius/WS.js"

import { registerLocationHandler } from "./getLocation.js";

let ws = null;

let groupName = "provgroup";
groupInput.value = groupName
groupInput.addEventListener("input", (event)=> {
    groupName = event.target.value
})
let userName = "provuser";
userInput.value = userName
userInput.addEventListener("input", (event)=> {
    userName = event.target.value
})
async function connect() {
    ws = await WS.connect(groupName, userName);
    app.classList.add("connected")
    ws.onMessage(renderData);
    ws.onUserStatus(showUsers);
    ws.getUsers();
}
function renderData(friendData) {
    console.log({friendData});
    let { user, lat, lng } = JSON.parse(friendData.data);
    window.userPositions = window.userPositions || {};
    window.userPositions[user] = { lat, lng };
    let target = document.getElementById("wherefriend")
    let entry = document.getElementById("friend-" + user);
    if (entry) {
        entry.textContent = `${user} - Lat: ${lat}, Lng: ${lng}`;
    } else {
        target.insertAdjacentHTML('beforeEnd', `<div id="friend-${user}">${user} - Lat: ${lat}, Lng: ${lng}</div>`);
    }
}
connectButton.addEventListener("click", connect)

function showUsers(users) {
    console.log(users)
    window.userlist = users
}

function sendData(data) {
                    
    if (ws) {
        ws.sendToAll(JSON.stringify({ user: userName, lat: data.coords.latitude, lng: data.coords.longitude }));
    }
}

registerLocationHandler(sendData);