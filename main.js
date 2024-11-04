const content = document.getElementById("content");

//Trending
const getAllFilms = async () => {
    const filmsData = await fetch("https://ghibliapi.vercel.app/films");
    const films = await filmsData.json()

    films.forEach(film => {
        const newFilm = document.createElement ("div")
        const image = document.createElement ("img")
        const title = document.createElement ("h4")
        
        newFilm.classList.add("film")
        image.src = film.image;
        title.textContent = film.title

        newFilm.append (image, title )
        content.append (newFilm)

    });


}

getAllFilms();
