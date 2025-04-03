const cards = document.querySelectorAll('.card');


cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
       cards.forEach(siblings => {
        if(siblings !== card){
            siblings.classList.add('blur')
        }
       })
    })
})

cards.forEach(card => {
    card.addEventListener('mouseleave', ()=> {
        cards.forEach(siblings => {
            siblings.classList.remove('blur')
        })
    })
})


