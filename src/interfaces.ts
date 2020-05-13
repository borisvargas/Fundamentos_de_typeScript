// INTERFACES
/* Las interfaces una forma poderosa de definir 'contratos' tanto para tu proyecto, como para el codigo externo */

// Funcion para mostrar una Fotografia
export {}

enum PhotoOrientation {
    Landscape,
    Portrait,
    Square,
    Panorama
}
interface Picture {
    title: string;
    date: string;
    orientation: PhotoOrientation
}
function showPicture(picture: Picture) {
    console.log(`[title: ${picture.title}, date: ${picture.date}, orientation: ${picture.orientation}]`);
}
let myPic = {
    title: 'Test title',
    date: '2020-03',
    orientation: PhotoOrientation.Landscape
}
showPicture(myPic);
showPicture({
    title: 'Test Title',
    date: '2020-03',
    orientation: PhotoOrientation.Portrait,
    // extra: 'test'   // --> Error
}); // objecto anonimo


interface PictureConfig {
    title: string;
    date: string;
    orientation: PhotoOrientation
}
function generatePicture(config: PictureConfig) {
    const pic = {
        title: 'Default',
        date: '2020-03'
    };
    if (config.title) {
        pic.title = config.title;
    }
}
