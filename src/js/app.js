import {calculateWallpaper} from "./lib.js";

// roomLength, roomWidth, roomHeight, wallpaperLength, wallpaperWidth
const roomLengthEl = document.getElementById('roomLength');
const roomWidthEl = document.getElementById('roomWidth');
const roomHeightEl = document.getElementById('roomHeight');
const wallpaperLengthEl = document.getElementById('wallpaperLength');
const wallpaperWidthEl = document.getElementById('wallpaperWidth');
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