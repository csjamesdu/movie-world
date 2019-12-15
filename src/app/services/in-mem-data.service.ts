import { InMemoryDbService } from 'angular-in-memory-web-api';


export class InMemoryDataService implements InMemoryDbService {

  createDb() {

    const moviesList = [
      {
        Title: 'Star Wars: Episode IV - A New Hope',
        Year: '1977',
        ID: 'cw0076759',
        Type: 'movie',
        Poster: 'http://ia.media-imdb.com/images/M/MV5BOTIyMDY2NGQtOGJjNi00OTk4LWFhMDgtYmE3M2NiYzM0YTVmXkEyXkFqcGdeQXVyNTU1NTcwOTk@._V1_SX300.jpg'
      },
      {
        Title: 'Star Wars: Episode V - The Empire Strikes Back',
        Year: '1980',
        ID: 'cw0080684',
        Type: 'movie',
        Poster: 'http://ia.media-imdb.com/images/M/MV5BMjE2MzQwMTgxN15BMl5BanBnXkFtZTcwMDQzNjk2OQ@@._V1_SX300.jpg'
      },
      {
        Title: 'Star Wars: Episode VI - Return of the Jedi',
        Year: '1983',
        ID: 'cw0086190',
        Type: 'movie',
        Poster: 'http://ia.media-imdb.com/images/M/MV5BMTQ0MzI1NjYwOF5BMl5BanBnXkFtZTgwODU3NDU2MTE@._V1._CR93,97,1209,1861_SX89_AL_.jpg_V1_SX300.jpg'
      },
      {
        Title: 'Star Wars: The Force Awakens',
        Year: '2015',
        ID: 'cw2488496',
        Type: 'movie',
        Poster: 'http://ia.media-imdb.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SX300.jpg'
      },
      {
        Title: 'Star Wars: Episode I - The Phantom Menace',
        Year: '1999',
        ID: 'cw0120915',
        Type: 'movie',
        Poster: 'http://ia.media-imdb.com/images/M/MV5BMTQ4NjEwNDA2Nl5BMl5BanBnXkFtZTcwNDUyNDQzNw@@._V1_SX300.jpg'
      },
      {
        Title: 'Star Wars: Episode III - Revenge of the Sith',
        Year: '2005',
        ID: 'cw0121766',
        Type: 'movie',
        Poster: 'http://ia.media-imdb.com/images/M/MV5BNTc4MTc3NTQ5OF5BMl5BanBnXkFtZTcwOTg0NjI4NA@@._V1_SX300.jpg'
      },
      {
        Title: 'Star Wars: Episode II - Attack of the Clones',
        Year: '2002',
        ID: 'cw0121765',
        Type: 'movie',
        Poster: 'http://ia.media-imdb.com/images/M/MV5BMTY5MjI5NTIwNl5BMl5BanBnXkFtZTYwMTM1Njg2._V1_SX300.jpg'
      }
    ];
    const responseWrapper = {Movies: moviesList};

    const singleWrapper = {
      Title: 'Star Wars: Episode III - Revenge of the Sith',
      Year: '2005',
      Rated: 'PG-13',
      Released: '19 May 2005',
      Runtime: '140 min',
      Genre: 'Action, Adventure, Fantasy',
      Director: 'George Lucas',
      Writer: 'George Lucas',
      Actors: 'Ewan McGregor, Natalie Portman, Hayden Christensen, Ian McDiarmid',
      Plot: 'During the near end of the clone wars, Darth Sidious has revealed himself and is ready to execute the last part of his plan to rule the Galaxy. Sidious is ready for his new apprentice, Lord...',
      Language: 'English',
      Country: 'USA',
      Awards: 'Nominated for 1 Oscar. Another 25 wins & 51 nominations.',
      Poster: 'http://ia.media-imdb.com/images/M/MV5BNTc4MTc3NTQ5OF5BMl5BanBnXkFtZTcwOTg0NjI4NA@@._V1_SX300.jpg',
      Metascore: '68',
      Rating: '7.6',
      Votes: '522,705',
      ID: 'cw0121766',
      Type: 'movie',
      Price: '125.5'
    };

    return {
      movies : responseWrapper,
      detail: singleWrapper
    };
  }
}
