let dados = [
  {
    id: 1,
    name: 'Bertie Yates',
    email: 'Sincere@april.biz',
    image: 'https://robohash.org/1?set=set2'
  },
  {
    id: 2,
    name: 'Hester Hogan',
    email: 'Shanna@melissa.tv',
    image: 'https://robohash.org/2?set=set2'
  },
  {
    id: 3,
    name: 'Larry Little',
    email: 'Nathan@yesenia.net',
    image: 'https://robohash.org/3?set=set2'
  },
  {
    id: 4,
    name: 'Sean Walsh',
    email: 'Julianne.OConner@kory.org',
    image: 'https://robohash.org/4?set=set2'
  },
  {
    id: 5,
    name: 'Lola Gardner',
    email: 'Lucio_Hettinger@annie.ca',
    image: 'https://robohash.org/5?set=set2'
  }
]

let elementH1 = document.querySelector('h1')

for (let objects of dados) {
  let elementArticle = document.createElement('article')
  elementArticle.classList.add('monstros')
  elementArticle.innerHTML = `
    <img src="${objects.image}" alt="avatar" />
    <div>
    <h2>${objects.name}</h2>
    <p>${objects.email}</p>
    </div>
    `
  elementH1.insertAdjacentElement('afterend', elementArticle)
}

let buttonLimpar = document.querySelector('.btn-azul')

buttonLimpar.addEventListener('click', () => {
  let articles = document.querySelectorAll('article');
  for (let i = 0; i < articles.length; i++) {
    articles[i].remove();
  }
})
