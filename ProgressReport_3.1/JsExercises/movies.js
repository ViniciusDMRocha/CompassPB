const movies = [
    { title: 'a', year: 2018, rating: 4.5},
    { title: 'b', year: 2018, rating: 4.7},
    { title: 'c', year: 2018, rating: 3},
    { title: 'd', year: 2017, rating: 4.5},
    { title: 'e', year: 2018, rating: 5},
];

const titulos = movies
    .filter(function(m){
        return m.year === 2018 && m.rating >= 4.5;
    })
    .sort(function(a,b){
        return a.rating - b.rating;
    })
    .reverse()
    .map(function(m){
        return m.title;
    });
 
console.log(titulos);