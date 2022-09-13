let dados = []
let elementH1 = document.querySelector('h1')
let buttonLimpar = document.querySelector('.btn-azul')
elementH1.innerText = `${dados.length} monstros`

fetch('https://jsonplaceholder.typicode.com/users', {
  method: 'GET'
}).then(response => {
  return response.json()
})

buttonLimpar.addEventListener('click', () => {
  let articles = document.querySelectorAll('article')
  for (let i = 0; i < articles.length; i++) {
    articles[i].remove()
  }
  dados = []
  elementH1.innerText = `${dados.length} monstros`
})

async function renderizar() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const dadosJson = await response.json()

  dados = dadosJson.slice(0, 5)
  elementH1.innerText = `${dados.length} monstros`

  for (let objects of dados) {
    let elementArticle = document.createElement('article')
    elementArticle.classList.add('monstros')
    elementArticle.innerHTML = `
      <img src="https://robohash.org/${objects.id}?set=set2" alt="avatar" />
      <div>
      <h2>${objects.name}</h2>
      <p>${objects.email}</p>
        </div>
        `
    elementH1.insertAdjacentElement('afterend', elementArticle)
  }
}

renderizar()
