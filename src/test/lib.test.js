import {calculateWallpaper} from "../js/lib.js";

test('If roomLength = 6, roomWidth = 5, roomHeight = 2.75, wallpaperLength = 10, wallpaperWidth = 1.06, then result = 7', () => {
    const roomLength = 6;
    const roomWidth = 5;
    const roomHeight = 2.75;
    const wallpaperLength = 10;
    const wallpaperWidth = 1.06;
    const result = calculateWallpaper(roomLength, roomWidth, roomHeight, wallpaperLength, wallpaperWidth);
    expect(result).toBe(7);
});