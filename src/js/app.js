import {calculateWallpaper} from "./lib.js";

// roomLength, roomWidth, roomHeight, wallpaperLength, wallpaperWidth
const roomLengthEl = document.getElementById('room-length');
const roomWidthEl = document.getElementById('room-width');
const roomHeightEl = document.getElementById('room-height');
const wallpaperLengthEl = document.getElementById('wallpaper-length');
const wallpaperWidthEl = document.getElementById('wallpaper-width');
const resultEl = document.getElementById('result');
const calculateEl = document.getElementById('calculate');

function reactToClick() {
    const roomLength = parseFloat(roomLengthEl.value);
    const roomWidth = parseFloat(roomWidthEl.value);
    const roomHeight = parseFloat(roomHeightEl.value);
    const wallpaperLength = parseFloat(wallpaperLengthEl.value);
    const wallpaperWidth = parseFloat(wallpaperWidthEl.value);
    resultEl.textContent = calculateWallpaper(roomLength, roomWidth, roomHeight, wallpaperLength, wallpaperWidth);
}

calculateEl.addEventListener('click', reactToClick);