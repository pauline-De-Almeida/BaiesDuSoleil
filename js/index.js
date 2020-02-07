var nombre = 1;

function changerIm (n) { /*n est le current*/
    afficher(document.getElementById("img"+n), n);
cacher(document.getElementById("img"+getAutre(n)), getAutre(n));
    nombre = getAutre(n);
    console.log("passe, n = " + nombre)
}

function cacher (im, n) {
    console.log("chacher : " + im);
    im.classList.add("cache");
    document.getElementById("page"+n).classList.remove("pageActive");
    im.classList.remove("affiche");
}

function afficher (im, n) {
    console.log("afficher : " + im);
    im.classList.remove("cache");
    document.getElementById("page"+n).classList.add("pageActive");
    console.log("activation : " + document.getElementById("page"+n));
    im.classList.add("affiche");
}

function getAutre (n) {
    if (n === 2)
        return 1;
    return 2;
}
function init () {
    setInterval(function modifIm () {
        let cach = document.getElementsByClassName("cache");
        let aff = document.getElementsByClassName("affiche");
        afficher(cach[0]);
        cacher(aff[0]);
        console.log("modification");
        }, 1000);
}
