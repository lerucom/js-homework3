export function calculateWallpaper(roomLength, roomWidth, roomHeight, wallpaperLength, wallpaperWidth) {
    const roomPerimeter = ((roomLength + roomWidth) * 2).toFixed(2);
    const amountOfSheets = Math.ceil(roomPerimeter / wallpaperWidth);
    //Мастера рекомендуют прибавлять к высоте потолка дополнительный запас в 10 см. для удобства поклейки.
    const sheetsInOneWallpaper = Math.floor(wallpaperLength / roomHeight + 0.1);

    return amountOfSheets / sheetsInOneWallpaper;
}