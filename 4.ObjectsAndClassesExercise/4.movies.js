function movies(inputStrArray) {
    let objMovie = [];

    inputStrArray
        .forEach(strElement => {
            if (strElement.includes('addMovie')) {
                const movie = strElement.replace('addMovie ', '');
                if ((objMovie.filter(el => el.name === movie)).length === 0) {
                    objMovie.push({name: movie})
                }
            } else if (strElement.includes('directedBy')) {
                const [movie, director] = strElement.split(' directedBy ');
                for (let element of objMovie) {
                    if (element.name === movie) {
                        element['director'] = director;
                    }
                }
            } else if (strElement.includes('onDate')) {
                const [movie, date] = strElement.split(' onDate ');
                for (let element of objMovie) {
                    if (element.name === movie) {
                        element['date'] = date;
                    }
                }
            }
        });

    objMovie = objMovie
        .filter(movie => movie.director && movie.date)   
        .forEach(movie => 
            console.log(JSON.stringify(movie))
        )
}

movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
])


movies([
    'addMovie The Avengers',
    'addMovie Superman',
    'The Avengers directedBy Anthony Russo',
    'The Avengers onDate 30.07.2010',
    'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo'
    ])