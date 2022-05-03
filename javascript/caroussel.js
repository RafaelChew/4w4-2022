(function(){

    let boite__modale = document.querySelector('.boite__modale')
    let boite__modale__ferme = document.querySelector('.boite__modale__ferme')
    let boite__modale__text = document.querySelector('.boite__modale__text')

    let galerie__img = document.querySelectorAll('.galerie img')
    console.log(galerie__img.length)

    /* creation d'un element img */
    let elmImg = document.createElement('img')
    /* ajout de la balise img dans boite modale */
    boite__modale__text.appendChild(elmImg)

    for (const img of galerie__img) {
        img.addEventListener('mousedown', function(){
            console.log(this.tagName)
            boite__modale.classList.add('boite__modale__ouvrir')
            console.log(this.getAttribute('src'))
            //boite__modale__text.innerHTML = this.getAttribute('src').innerHTML;

            elmImg.setAttribute('src', this.getAttribute('src'))
        })
    }

    boite__modale__ferme.addEventListener('mousedown', function(){
        boite__modale.classList.remove('boite__modale__ouvrir')
    })

})()
