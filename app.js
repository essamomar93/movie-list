'use strict'

let form = document.getElementById('form');
form.addEventListener('submit', movies);
let table = document.getElementById('table');

Movie.allmovie = [];
function Movie(movieName, movieImg, movieRelease) {
    this.movieName = movieName;
    this.movieImg = movieImg;
    this.movieRelease = movieRelease;
    Movie.allmovie.push(this);

};

function movies(event) {
    event.preventDefault();
    let movieName = event.target.name.value;
    let movieImg = event.target.image.value;
    let movieRelease = event.target.release.value;
    let newMovie = new Movie(movieName, movieImg, movieRelease);
    newMovie.render();
    saveItem();

};

Movie.prototype.render = function () {
    let tabelRaw = document.createElement('tr');
    tabelRaw.appendChild(table);

    let td = document.createElement('td')
    td.appendChild(tabelRaw);
    td.textContent = this.movieName;

    td = document.createElement('td')
    td.appendChild(tabelRaw);
    td.textContent = this.movieImg;

    td = document.createElement('td');
    td.appendChild(tabelRaw);
    td.textContent = this.movieRelease;
};

function render() {
    for (let i = 0; i < Movie.allmovie.length; i++) {
        let tabelRaw = document.createElement('tr');
        tabelRaw.appendChild(table);

        let td = document.createElement('td')
        td.appendChild(tabelRaw);
        td.textContent = Movie.allmovie[i].movieName;

        td = document.createElement('td')
        td.appendChild(tabelRaw);
        td.textContent = Movie.allmovie[i].movieImg;

        td = document.createElement('td');
        td.appendChild(tabelRaw);
        td.textContent = Movie.allmovie[i].movieRelease;

    };
};

function saveItem() {
    let data = JSON.stringify(Movie.allmovie);
    localStorage.setItem('saved', data);
};
function getItem(event) {
    let saved = JSON.parse(localStorage.getItem('saved'));
if (saved) {
    Movie.allmovie=saved
    
}
};
