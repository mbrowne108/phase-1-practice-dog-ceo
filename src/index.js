const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

let dropdown = document.querySelector('select')

fetch(imgUrl)
.then(res => res.json())
.then(displayImages)

fetch(breedUrl)
.then(res => res.json())
.then(displayBreeds)

function displayImages(data) {
    data.message.forEach(el => {
        img = document.createElement('img')
        img.src = el
        document.querySelector('#dog-image-container').appendChild(img)
    })
    dropdown.addEventListener('change', breedFilter)
}

function displayBreeds(data) {
    for (const el in data.message) {
        breed = document.createElement('li')
        breed.innerText = el
        breed.style.display = "none"
        document.querySelector('#dog-breeds').appendChild(breed)
        breed.addEventListener('click', e => e.target.style.color = "red")
    }
}


function breedFilter(e) {
    let breedName = document.querySelectorAll('li')
    breedName.forEach(el => {
        if (el.innerText.charAt(0) === e.target.value) {
            console.log(el.innerText)
            el.style.display = ""
        } else {
            el.style.display = "none"
        }
    })
}
