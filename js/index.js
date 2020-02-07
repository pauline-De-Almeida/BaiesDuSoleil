var nombre = 1;

function changerIm (n) { /*n est à montrer*/
    afficher(document.getElementById("img"+n));
    cacher(document.getElementById("img"+getAutre(n)));
    nombre = getAutre(n);
    console.log("passe, n = " + nombre)
}

function cacher (im) {
    console.log("chacher : " + im);
    im.classList.add("cache");
    im.classList.remove("affiche");
}

function afficher (im) {
    console.log("afficher : " + im);
    im.classList.remove("cache");
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
