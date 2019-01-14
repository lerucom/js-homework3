export function calculateWallpaper(roomLength, roomWidth, roomHeight, wallpaperLength, wallpaperWidth) {
    let roomPerimeter = ((roomLength + roomWidth) * 2).toFixed(2); //Вычислим периметр комнаты
    let amountOfSheets = Math.ceil(roomPerimeter / wallpaperWidth); // всего полотнищ нужно
    //На сколько полотнищ хватит одного рулона?
    //Мастера рекомендуют прибавлять к высоте потолка дополнительный запас в 10 см. для удобства поклейки.
    let SheetsInOneWallpaper = Math.floor(wallpaperLength / roomHeight + 0.1);
    //Сколько рулонов обоев понадобится?
    return amountOfSheets / SheetsInOneWallpaper;
}

// calculateWallpaper(6, 5, 2.75, 10, 1.06); // получаем 7 рулонов обоев