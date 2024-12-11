

const endpoint = 'https://jsonplaceholder.typicode.com/photos?_limit=6'

const note = document.querySelector('p')
const row = document.querySelector('.row')
const btnClose = document.querySelector('.btn-close')
const overlay = document.querySelector('.overlay')




btnClose.addEventListener ('click', closeOverlay)



axios.get(endpoint)
  .then(response =>{
    row.innerHTML = ''
    response.data.forEach(card => printCard(card));
    const userCard = document.querySelectorAll('.user-card');
    console.log(userCard)
    imgOverlay = '';

    for (let card of userCard){
      let image = card.children[1].src;
      console.log(image)
      card.addEventListener('click', (event) => {  
        console.log(image)
        overlay.classList.remove('d-none')
        let imageOver = `<img src="${image}" alt="img" class=" mx-auto d-block">`;
        document.querySelector('.img-overlay').innerHTML = imageOver
      })
    }
  })

  function printCard(card){
    const {title, url} = card;
    const titleCapitalize = title.split(' ')
    const capitalizedWords = titleCapitalize.map( word => {
      const firstLetter = word.charAt(0).toUpperCase();
      return `${firstLetter}${word.substring(1).toLowerCase()}`
    })
    const capitalizedString = capitalizedWords.join(' ')
  
  
    row.innerHTML += 
        `<div class="col col-12 col-md-6 col-lg-4">
          <div class="user-card">
            <img src="img/pin.svg" alt="pin">
            <img class="image" src="${url}" alt="foto">
            <p">${capitalizedString}</p>
          </div>
        </div>`;
  
    
  }

  function closeOverlay() {
    overlay.classList.add('d-none')
  }  