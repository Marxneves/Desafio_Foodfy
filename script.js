const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.cards');
const modal = document.querySelector('.modal');
const modalContent = document.querySelector('.modal-content');

const img = document.querySelectorAll('.card__image-container')

for(let card of cards){
    let imagemID = card.getAttribute('id')
    //console.log(imagemID);
    card.addEventListener('click',() =>{
        modalOverlay.classList.add('active');
        modalContent.innerHTML =   
                            `<img src=${imagemID} >
                            <h4 class='titulo'>${card.childNodes[3].textContent}</h4> 
                            <p class="feitopor">${card.childNodes[5].textContent}</p>`
    })
}

document.querySelector('.close-modal').addEventListener('click',() => {
    modalOverlay.classList.remove('active');
})
