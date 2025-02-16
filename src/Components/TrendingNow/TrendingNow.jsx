import React, { useState, useEffect } from "react";
import "./TrendingNow.css";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

const API_KEY = import.meta.env.VITE_API_KEY; // Secure API Key

const TrendingNow = () => {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState({});
  const [index, setIndex] = useState(0);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const API_KEY = "e1e701ddcbdcafe99dc448c2a6194cde";

  // Fetch Trending Movies
  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`
        );
        const data = await response.json();
        setMovies(data.results || []);
      } catch (error) {
        console.error("Error fetching movies:", error);
        setMovies([]);
      }
    };

    fetchTrendingMovies();
  }, []);

  // Fetch Movie Genres
  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`
        );
        const data = await response.json();
        const genreMap = {};
        data.genres.forEach((genre) => {
          genreMap[genre.id] = genre.name;
        });
        setGenres(genreMap);
      } catch (error) {
        console.error("Error fetching genres:", error);
      }
    };

    fetchGenres();
  }, []);

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % movies.length);
  };

  const handlePrev = () => {
    setIndex((prevIndex) => (prevIndex - 1 + movies.length) % movies.length);
  };

  const handleImageClick = (movie) => {
    setSelectedMovie(movie);
  };

  const closeModal = () => {
    setSelectedMovie(null);
  };

  return (
    <div className="trending-now">
      <h2 className="trending-title">Trending Now</h2>
      <div className="carousel-wrapper">
        <button className="custom-arrow prev" onClick={handlePrev}>
          <KeyboardArrowLeftIcon />
        </button>

        <div className="carousel-item-container">
          {movies.slice(index, index + 4).map((movie, i) => (
            <div
              key={movie.id}
              className="carousel-image-wrapper"
              onClick={() => handleImageClick(movie)}
            >
              <img
                className="carousel-image"
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
              <span className="movie-rank">{index + i + 1}</span>
            </div>
          ))}
        </div>

        <button className="custom-arrow next" onClick={handleNext}>
          <KeyboardArrowRightIcon />
        </button>
      </div>

      {selectedMovie && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeModal}>
              ✖
            </button>
            <img
              className="modal-image"
              src={`https://image.tmdb.org/t/p/w500${selectedMovie.backdrop_path}`}
              alt={selectedMovie.title}
            />
            <div className="modal-details">
              <h3 className="movie-title">{selectedMovie.title}</h3>
              <div className="movie-tags">
                <button>
                  {new Date(selectedMovie.release_date).getFullYear()}
                </button>
                <button>PG-13</button>
                <button>Movie</button>
                {/* Display Actual Genres */}
                {selectedMovie.genre_ids.map((genreId) => (
                  <button key={genreId}>{genres[genreId]}</button>
                ))}
              </div>
              <p className="movie-description">{selectedMovie.overview}</p>
              <button className="get-started-btn">
                Get Started <KeyboardArrowRightIcon />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TrendingNow;

























































// import React, { useState, useEffect } from "react";
// import "./TrendingNow.css";
// import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
// import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
// const apiKey = import.meta.env.VITE_API_KEY;

// const TrendingNow = () => {
//   const [movies, setMovies] = useState([]);
//   const [index, setIndex] = useState(0);
//   const [selectedMovie, setSelectedMovie] = useState(null);
//   const API_KEY = "e1e701ddcbdcafe99dc448c2a6194cde";

//   useEffect(() => {
//     const fetchTrendingMovies = async () => {
//       try {
//         const response = await fetch(
//           `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`
//         );
//         const data = await response.json();
//         if (data && data.results) {
//           setMovies(data.results);
//         } else {
//           setMovies([]);
//         }
//       } catch (error) {
//         console.error("Error fetching movies:", error);
//         setMovies([]);
//       }
//     };
//     fetchTrendingMovies();
//   }, []);

//   const handleNext = () => {
//     setIndex((prevIndex) => (prevIndex + 1) % movies.length);
//   };

//   const handlePrev = () => {
//     setIndex((prevIndex) => (prevIndex - 1 + movies.length) % movies.length);
//   };

//   const handleImageClick = (movie) => {
//     setSelectedMovie(movie);
//   };

//   const closeModal = () => {
//     setSelectedMovie(null);
//   };

//   return (
//     <div className="trending-now">
//       <h2 className="trending-title">Trending Now</h2>
//       <div className="carousel-wrapper">

//         <button className="custom-arrow prev" onClick={handlePrev}>
//           <KeyboardArrowLeftIcon />
//         </button>

//         <div className="carousel-item-container">
//           {movies.slice(index, index + 4).map((movie, i) => (
//             <div
//               key={movie.id}
//               className="carousel-image-wrapper"
//               onClick={() => handleImageClick(movie)}
//             >
//               <img
//                 className="carousel-image"
//                 src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
//                 alt={movie.title}
//               />
//               <span className="movie-rank">{index + i + 1}</span>
//             </div>
//           ))}
//         </div>

//         <button className="custom-arrow next" onClick={handleNext}>
//           <KeyboardArrowRightIcon /> </button>
//       </div>

//       {selectedMovie && (
//         <div className="modal-overlay" onClick={closeModal}>
//           <div className="modal-content" onClick={(e) => e.stopPropagation()}>
//             <button className="close-button" onClick={closeModal}>
//               ✖
//             </button>
//             <img
//               className="modal-image"
//               src={`https://image.tmdb.org/t/p/w500${selectedMovie.backdrop_path}`}
//               alt={selectedMovie.title}
//             />
//             <div className="modal-details">
//               <h3 className="movie-title">{selectedMovie.title}</h3>
//               <div className="movie-tags">
//                 <button>
//                   {new Date(selectedMovie.release_date).getFullYear()}
//                 </button>
//                 <button>PG-13</button>
//                 <button>Movie</button>
//                 <button>Thriller</button>
//               </div>
//               <p className="movie-description">{selectedMovie.overview}</p>
//               <button className="get-started-btn">Get Started  <KeyboardArrowRightIcon /></button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default TrendingNow;
