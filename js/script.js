console.log('working');

var movies = [ 
    { 
        title: 'Nope',
        year: '2022',
        image: 'img/nope_poster.png',
        genre: 'Sci-Fi',
        blurb: 'The residents of a lonely gulch in inland California bear witness to an uncanny and chilling discovery.',
        starring: ['Daniel Kaluuya', 'Keke Palmer', 'Brandon Perea'], 
        rating: 'R15', 
        reviews: [
            {
            postedBy: 'OrangePeel', 
            review: 'I may be biased... but this is my greatest work to date', 
        }, 
        { 
            postedBy: 'HorrorJunkie3000', 
            review: 'This movie was so weird, I never want to ride a horse again', 
        }, 
        {
            postedBy: 'SuperSnob', 
            review: 'Impeccable Sci-Fi mystery, Peele has outdone himself', 
        },
    ],
        trailerUrl: 'https://www.youtube.com/watch?v=In8fuzj3gck&ab_channel=UniversalPictures',
       }, 

       { 
        title: 'Saint Maud', 
        year: '2019',
        image: 'img/saintmaud.jpeg',
        genre: 'Drama', 
        blurb: 'A pious nurse becomes dangerously obsessed with saving the soul of her dying patient.',
        starring: ['Morfydd Clark', 'Caoilfhionn Dunne', '	Jennifer Ehle'], 
        rating: 'R15', 
        reviews: [
            { 
                postedBy: 'cosmosPina', 
                review: 'This is a more sublime and subtle horror, that really creeps up on you. A movie about an individual that has issues ... a lot of issues, that she thinks are resolved or at least will not surface, because of her love to God and His acceptance of her (she hears and feels him).'
            }, 
            {
                postedBy: 'Bertaut74', 
                review: 'Set alight with an unshakable belief in the almighty, the power to feel his presence, a young carer endeavours to "never waste her pain" as the saviour of her terminally ill dependant.', 
            }, 
            {
                postedBy: 'SpinelessJelly', 
                review: 'This is one of those movies where a couple of critics overdo their reviews and all the others feel they have to do the same or they will look dumb. So it gets overhyped. What happens here is a perfectly decent movie gets so hyped you are always going to be disappointed because it cannot possibly live up to that hyped reviewers drivel. ', 
            },
        ],
        trailerUrl: 'https://www.youtube.com/watch?v=v-PjgYDrg70&ab_channel=RottenTomatoesClassicTrailers', 

       }, 

       { 
        title: 'Everything Everywhere All At Once', 
        year: '2022', 
        image: 'img/everything.jpg', 
        genre: 'Comedy', 
        blurb: 'An aging Chinese immigrant is swept up in an insane adventure, in which she alone can save the world by exploring other universes connecting with the lives she could have led.', 
        starring: ['Michelle Yeoh', 'Stephanie Hsu', 'Jamie-Lee Curtis'],
        rating: 'R15', 
        reviews: [
            {
                postedBy: 'A24SuperFan', 
                review: 'Profoundly deep, genuinely moving, utterly hilarious, highly imaginative and a visual feast.', 
            }, 
            {
                postedBy: 'ChadLadBroseph', 
                review: 'If you take drugs for the first time and imagined Jackie Chan was a female Dr. Strange in another universe this would be it.', 
            }, 
            {
                postedBy: 'SubXeroGravity', 
                review: 'It was everything everywhere all at once. Sometimes too many things, too many places at once and you can get lost, but it helps to focus on things.', 
            },
        ],
        trailerUrl: 'https://www.youtube.com/watch?v=wxN1T1uxQ2g&ab_channel=A24', 

       }, 
       
     { 
        title: 'After Yang',
        year: '2021', 
        image: 'img/afteryang.jpg', 
        genre: 'Drama',
        blurb: 'In a near future, a family reckons with questions of love, connection, and loss after their A.I. helper unexpectedly breaks down.',
        starring: ['Colin Farrell', 'Jodie Turner-Smith'], 
        rating: 'PG',
        reviews: [
            {
                postedBy: 'gillBill1901', 
                review: 'In what seems to be the near future, a married couple and their young daughter deal their "techno-sapien" android/nanny Yang ceasing to function. Very interesting concept and a must watch.', 
            }, 
            {
                postedBy: 'flagrantFlameThrower', 
                review: 'Beautifully shot, well acted, with deep and subtle symbolism, a bit slow', 
            }, 
            {
                postedBy: 'flatulentandfunny', 
                review: 'A dull, morose, pretentious & nonsensical turd', 
            },
        ],
        trailerUrl: 'https://www.youtube.com/watch?v=rYIQWua8f40&ab_channel=LionsgateMovies',

     },  
     { 
        title: 'Moonlight',
        year: '2016', 
        image: 'img/moonlight.jpg', 
        genre: 'Drama',
        blurb: 'A young African-American man grapples with his identity and sexuality while experiencing the everyday struggles of childhood, adolescence, and burgeoning adulthood.',
        starring: ['Mahershala Ali', 'Naomie Harris', 'Trevonte Rhodes'], 
        rating: 'R15',
        reviews: [
            {
                postedBy: 'dramallama', 
                review: 'Excellent Character Study with Fantastic Performances', 
            }, 
            {
                postedBy: 'gumptiousGilbert', 
                review: 'Atmospheric inner city coming of age story has major third act problems', 
            }, 
            {
                postedBy: 'fluorescentcupcake', 
                review: 'A tapestry of lyrical moments and finely wrought detail on a journey for self-identity', 
            },
        ],
        trailerUrl: 'https://www.youtube.com/watch?v=9NJj12tJzqc&ab_channel=A24',

     },  
     { 
        title: 'Bodies, Bodies, Bodies',
        year: '2022', 
        image: 'img/bodies.jpg', 
        genre: 'Comedy',
        blurb: 'When a group of rich 20-somethings plan a hurricane party at a remote family mansion, a party game turns deadly in this fresh and funny look at backstabbing, fake friends, and one party gone very, very wrong.',
        starring: ['Amandla Stenberg', 'Pete Davidson', 'Rachel Sennott'], 
        rating: 'R15',
        reviews: [
            {
                postedBy: 'creakybones', 
                review: 'A modern horror of sorts, no scares and mild action. Mostly focused on trying to study the breakdown of people in the wake of suspicion. As I was looking for some good scares, I left feeling disappointed. I should have kept my old ass at home.', 
            }, 
            {
                postedBy: 'floposaurusrex', 
                review: 'Well this movie was.. dull dull dull. I guess it had a few fun scenes but thats about it.', 
            }, 
            {
                postedBy: 'wopwopwop', 
                review: 'Smart, hilarious, cringy (but in the best way possible). The characters are of course absurdist representations of not only current youth but also humanity as a whole.', 
            },
        ],
        trailerUrl: 'https://www.youtube.com/watch?v=cTzGKsZjBOY&ab_channel=A24',

     },  
     { 
        title: 'Midsommar',
        year: '2019', 
        image: 'img/midsommar.jpg', 
        genre: 'Drama',
        blurb: 'A couple travels to Northern Europe to visit a rural hometowns fabled Swedish mid-summer festival. What begins as an idyllic retreat quickly devolves into an increasingly violent and bizarre competition at the hands of a pagan cult.',
        starring: ['Florence Pugh', 'Jack Reynor'], 
        rating: 'R18',
        reviews: [
            {
                postedBy: 'flowercrownhippie', 
                review: 'Came for the halloween costume inspiration, left absolutely horrified. 10/10', 
            }, 
            {
                postedBy: 'teabag99999', 
                review: 'Interesting concept, but ultimately unbelievable.', 
            }, 
            {
                postedBy: 'glitchwitch666', 
                review: 'Kind of hilarious. American naieveté at its best', 
            },
        ],
        trailerUrl: 'https://www.youtube.com/watch?v=1Vnghdsjmd0&ab_channel=A24',

     },  
     { 
        title: 'X',
        year: '2022', 
        image: 'img/xfilm.jpeg', 
        genre: 'Horror',
        blurb: 'In 1979, a group of young filmmakers set out to make an adult film in rural Texas, but when their reclusive, elderly hosts catch them in the act, the cast find themselves fighting for their lives.',
        starring: ['Mia Goth', 'Jenna Ortega', 'Brittany Snow', 'Scott Mescudi'], 
        rating: 'R18',
        reviews: [
            {
                postedBy: 'manontheMoon101010', 
                review: 'Full disclosure, Kid Cudi goes full commando in this', 
            }, 
            {
                postedBy: 'peppermintCandyyumyum', 
                review: 'It sets itself up as a smart take on the slasher films of the 70s and early 80s. As a bonus, the film within a film has the filmmakers making an "elevated" porn flick (as a bonus, actor Owen Campbell who plays the "Director" even looks a bit like Director Tobe Hooper).', 
            }, 
            {
                postedBy: 'tombkeeper5', 
                review: 'My expectations were quite high for this film ... After watching it , I just dont understand what all the hype is about ? To call it mediocre is to make a compliment !', 
            },
        ],
        trailerUrl: 'https://www.youtube.com/watch?v=_67iqeUPfB0&ab_channel=MovieTrailersSource',

     },    
     { 
        title: 'Red Rocket',
        year: '2021', 
        image: 'img/redrocket.jpg', 
        genre: 'Comedy',
        blurb: 'Mikey Saber is a washed-up porn star who returns to his small Texas hometown, not that anyone really wants him back.',
        starring: ['Simon Rex', 'Bree Elrod', 'Suzanna Son'], 
        rating: 'R18',
        reviews: [
            {
                postedBy: 'rocketman', 
                review: 'Effective cringe.', 
            }, 
            {
                postedBy: 'urbanshmurban', 
                review: 'I looked up Red Rocket on Urban Dictionary and hahaha isnt that an accurate movie title. The cinematography again was out of this world. A poor neighborhood in Texas somehow looked like a dream world.', 
            }, 
            {
                postedBy: 'holierthanyo', 
                review: 'Simon Rex proves that he is certainly an actor capable of drama films and someone to take seriously, but as the credits abruptly began to roll, I could not help but ponder what the meaning of the film was and why I spent over 2 hours investing in it!', 
            },
        ],
        trailerUrl: 'https://www.youtube.com/watch?v=Wfndmy-6e28&ab_channel=A24',

     },   
     { 
        title: 'Room',
        year: '2015', 
        image: 'img/room.jpg', 
        genre: 'Drama',
        blurb: 'Held captive for 7 years in an enclosed space, a woman and her young son finally gain their freedom, allowing the boy to experience the outside world for the first time.',
        starring: ['Brie Larson', 'Jacob Tremblay'], 
        rating: 'R15',
        reviews: [
            {
                postedBy: 'wowweeewowow', 
                review: 'I like it, very nice!', 
            }, 
            {
                postedBy: 'ZebraSafariQueen', 
                review: 'Joseph Fritzel 2.0. Warning to all - it is very creepy', 
            }, 
            {
                postedBy: 'FuturePastpresentz', 
                review: 'I wept.', 
            },
        ],
        trailerUrl: 'https://www.youtube.com/watch?v=Wfndmy-6e28&ab_channel=A24',

     },   
     { 
        title: 'Uncut Gems',
        year: '2019', 
        image: 'img/uc.jpg', 
        genre: 'Drama',
        blurb: 'With his debts mounting and angry collectors closing in, a fast-talking New York City jeweler risks everything in hope of staying afloat and alive.',
        starring: ['Adam Sandler', 'Julia Fox', 'Idina Menzel'], 
        rating: 'R15',
        reviews: [
            {
                postedBy: 'mrdeeds', 
                review: 'A hole in one!', 
            }, 
            {
                postedBy: 'foxymama3080', 
                review: 'You could tell who was Josh Sadies muse', 
            }, 
            {
                postedBy: 'CrazyCatLady', 
                review: 'Could use a few more cats in this film. Otherwise a pleasant watch', 
            },
        ],
        trailerUrl: 'https://www.youtube.com/watch?v=vTfJp2Ts9X8&ab_channel=A24',

     },  
     { 
        title: 'Good Time',
        year: '2017', 
        image: 'img/gtime.jpeg', 
        genre: 'Drama',
        blurb: 'After a botched bank robbery lands his younger brother in prison, Connie Nikas embarks on a twisted odyssey through New York Citys underworld to get his brother Nick out of jail.',
        starring: ['Robert Pattinson', 'Benny Safdie'], 
        rating: 'R15',
        reviews: [
            {
                postedBy: 'twihard', 
                review: 'It was refreshing to see Pattinson outside of the Twilight cinematic universe. I prefer him as a vampire, though.', 
            }, 
            {
                postedBy: 'foxymama3080', 
                review: 'You could tell who was Josh Sadies muse', 
            }, 
            {
                postedBy: 'smoothCriminal', 
                review: 'Not enough crime', 
            },
        ],
        trailerUrl: 'https://www.youtube.com/watch?v=AVyGCxHZ_Ko&ab_channel=A24',

     },  

]

// Get all filter inputs 
var genre = document.getElementById('genreSelect'); 
var rating = document.getElementById('ratingSelect'); 
var starring = document.getElementById('starringSelect'); 
// Get search inputs
var search = document.getElementById('searchBtn');
var searchInput = document.getElementById('searchInput'); 
var searchStarring = document.getElementById('searchStarring');


// Event Listeners 

genre.addEventListener('change', filterGenre); 
rating.addEventListener('change', filterRating);
starring.addEventListener('change', filterStarring);

// Straight Compare Search 
search.addEventListener('click', searchMovies); 
search.addEventListener('click', searchStarring);

// On KeyUp Search and Compare Check using include() - keyUP is a click event that will run a function every time you add that key
// Pass the event into the function
searchInput.addEventListener('keyup', function (event) { 
    var moviesOutput = document.getElementById('movieOutput'); 
    moviesOutput.innerHTML = '';
    var input = event.target.value; 
    for (var i=0; i < movies.length; i++) { 
        if (movies[i].title.toLowerCase().includes(input.toLowerCase())) {
            var movie = movies[i]; 
            moviesOutput.innerHTML += `
            <div class="col-3 mt-5">
            <div class="card">
                <img src="${movie.image}" class="card-img-top" alt="Nope Movie Poster">
                <div class="card-body">
                    <h5 class="card-title">${movie.title}</h5>
                    <h6 class="card-text">${movie.year}</h6>
                    <p class="card-text">${movie.rating}</p>
                    <a href="#" class="btn btn-primary">Read More</a>
                </div>
            </div>
        </div>
    `           
        }
    }
})

searchStarring.addEventListener('keyup', function (event) {
    var starring = document.getElementById('starringSelect'); 
    
})



// Genre Filter Function 

function filterGenre() { 
    var moviesOutput = document.getElementById('movieOutput'); 
    moviesOutput.innerHTML = '';
    for (var i=0; i < movies.length; i++) { 
        var movie = movies [i];
        if (genre.value === movie.genre) { 
            moviesOutput.innerHTML += `
            <div class="col-3 mt-5">
            <div class="card">
                <img src="${movie.image}" class="card-img-top" alt="Nope Movie Poster">
                <div class="card-body">
                    <h5 class="card-title">${movie.title}</h5>
                    <h6 class="card-text">${movie.year}</h6>
                    <p class="card-text">${movie.rating}</p>
                    <a href="#" class="btn btn-primary">Read More</a>
                </div>
            </div>
        </div>
    `           
}
    } 
}

filterGenre();

// Rating Filter Function 

function filterRating() { 
    var moviesOutput = document.getElementById('movieOutput'); 
    moviesOutput.innerHTML = '';
    for (var i=0; i < movies.length; i++) { 
        var movie = movies [i];
        if (rating.value === movie.rating) { 
            moviesOutput.innerHTML += `
            <div class="col-3 mt-5">
            <div class="card">
                <img src="${movie.image}" class="card-img-top" alt="Nope Movie Poster">
                <div class="card-body">
                    <h5 class="card-title">${movie.title}</h5>
                    <h6 class="card-text">${movie.year}</h6>
                    <p class="card-text">${movie.rating}</p>
                    <a href="#" class="btn btn-primary">Read More</a>
                </div>
            </div>
        </div>
    `           
}
    } 
}

filterRating();

// Starring Filter Function

// Loop within the movies, then do a for loop within starring

function filterStarring () { 
    var moviesOutput = document.getElementById('movieOutput'); 
    moviesOutput.innerHTML = '';
    for (var i=0; i < movies.length; i++) { 
        var movie = movies [i]; 
        // for loop within movies 
        // j is the value within starring e.g. actor, the for loop is then checking how many iterations of that variable are within the length of the array
        for (var j=0; j<movies[i].starring.length; j++){ 
            var movie = movies[i]; 
            // stars variable will populate 
            var stars = movies[i].starring[j]; 
           if (starring.value === stars) { 
            moviesOutput.innerHTML += `
                    <div class="col-3 mt-5">
                <div class="card">
                    <img src="${movie.image}" class="card-img-top" alt="Nope Movie Poster">
                    <div class="card-body">
                        <h5 class="card-title">${movie.title}</h5>
                        <h6 class="card-text">${movie.year}</h6>
                        <p class="card-text">${movie.rating}</p>
                        <a href="#" class="btn btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        `
           }
        }

    }
}

filterStarring();


function getAllMovies() { 
    var moviesOutput = document.getElementById('movieOutput'); 
    for (var i=0; i < movies.length; i++) { 
        var movie = movies [i];
        moviesOutput.innerHTML += `
                    <div class="col-3 mt-5">
                <div class="card">
                    <img src="${movie.image}" class="card-img-top" alt="${movie.title} Movie Poster">
                    <div class="card-body">
                        <h5 class="card-title">${movie.title}</h5>
                        <h6 class="card-text">${movie.year}</h6>
                        <p class="card-text">${movie.rating}</p>
                        <a href="#" class="btn" value="${i}" data-bs-toggle="modal" data-bs-target="#movieModal">Read More</a>
                    </div>
                </div>
            </div>
        `
    }
}

getAllMovies();

// Search Movies Function 

function searchMovies () { 
    var moviesOutput = document.getElementById('movieOutput'); 
    moviesOutput.innerHTML = '';
    var searchValue = searchInput.value; 
    for (var i=0; i<movies.length; i++) { 
        var movie = movies[i];
        if (searchValue.toLowerCase() == movie.title.toLowerCase()) { 
            moviesOutput.innerHTML += `
                    <div class="col-3 mt-5">
                <div class="card">
                    <img src="${movie.image}" class="card-img-top" alt="Nope Movie Poster">
                    <div class="card-body">
                        <h5 class="card-title">${movie.title}</h5>
                        <h6 class="card-text">${movie.year}</h6>
                        <p class="card-text">${movie.rating}</p>
                        <a href="#" class="btn btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        `
        }
    }
}

// Search Starring Function 

// function searchStarring () { 
//     var moviesOutput = document.getElementById('movieOutput'); 
//     moviesOutput.innerHTML = '';
//     var searchValue = searchStarring.value; 
//     for (var i=0; i<starring.length; i++) { 
//         var stars = starring[i]; 

// }
// }