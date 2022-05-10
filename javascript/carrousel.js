(function(){

    console.log("vive le carrousel")
    let boite__carrousel = document.querySelector('.boite__carrousel')
    let boite__carrousel__ferme = document.querySelector('.boite__carrousel__ferme')
    let galerie__img = document.querySelectorAll('.galerie img')
    let boite__carrousel__navigation = document.querySelector('.boite__carrousel__navigation')
    console.log(galerie__img.length)

    /* creation d'un element img */
    let elmImg = document.createElement('img')
    /* ajout de la balise img dans boite carrousel */
    boite__carrousel.append(elmImg)
    /* On parcours chacunes des img de la galerie*/
    let index = 0

    for (const img of galerie__img) {
        let bouton = document.createElement('button')
        bouton.dataset.index = index++
        boite__carrousel__navigation.append(bouton)

        bouton.addEventListener('mousedown', function(){
            elmImg.setAttribute('src', galerie__img[this.dataset.index].getAttribute('src'))
        })

        img.addEventListener('mousedown', function(){
            console.log(this.tagName)
            boite__carrousel.classList.add('boite__carrousel__ouvrir')
            console.log(this.getAttribute('src'))
            elmImg.setAttribute('src', this.getAttribute('src'))
        })
    }

    boite__carrousel__ferme.addEventListener('mousedown', function(){
        boite__carrousel.classList.remove('boite__carrousel__ouvrir')
    })

})()
