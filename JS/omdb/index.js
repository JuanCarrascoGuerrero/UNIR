const API_KEY = '7da6b168'


const paintMovieList = (movieList) =>{
    console.log(movieList)
    const wrapper = document.querySelector('.movieList__wrapper')
    const movieListItemTpl = wrapper.querySelector('.movie__list')
    movieList.forEach(movie => {
        const movieListEl = movieListItemTpl.content.cloneNode(true)
        movieListEl.querySelector('movie__list-item-title').src = movie.Poster
        movieListEl.querySelector('movie__list-item-img').textContent = movie.Title
        wrapper.append(movieListEl)
    });
}


document.addEventListener('DOMContentLoaded',()=>{

const searchForm = document.querySelector('.nombre__pelicula')
searchForm.addEventListener('submit', (event)=>{
    event.preventDefault()

    const formData = new FormData(event.target)
    const query = formData.get('query')

    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}=${query}`)
    .then(res=>{
        res.json()
    }).then(
        searchinfo =>{
            paintMovieList(searchinfo.Search)
        }
    )
    

})




});