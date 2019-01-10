import {calculateWallpaper} from "../js/wallpaper";

test('calculate amount of wallpapers', () => {
    const roomLength = 6;
    const roomWidth = 5;
    const roomHeight = 2.75;
    const wallpaperLength = 10;
    const wallpaperWidth = 1.06;
    const result = calculateWallpaper(roomLength, roomWidth, roomHeight, wallpaperLength, wallpaperWidth);
    expect(result).toBe(7);
});

test('calculate amount of wallpapers', () => {
    const roomLength = 16.45;
    const roomWidth = 5.64;
    const roomHeight = 3.75;
    const wallpaperLength = 10;
    const wallpaperWidth = 1.06;
    const result = calculateWallpaper(roomLength, roomWidth, roomHeight, wallpaperLength, wallpaperWidth);
    expect(result).toBe(21);
});