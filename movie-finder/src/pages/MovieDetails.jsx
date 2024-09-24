import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { options } from "../utils/Options";
import BackUp from "../assets/backup.jpg";


const MovieDetails = () => {

  const params = useParams();
  const [data, setData] = useState({});

  const { id, original_title, overview, poster_path, genres,vote_average,vote_count} = data;
  const image = poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : BackUp;

  useEffect(() => {
    document.title = `${original_title} / CineBite`;
  });

  useEffect(() => {
    async function fetchMovie() {
      const response = await fetch(`https://api.themoviedb.org/3/movie/${params.id}?language=en-US`, options);
      const json = await response.json();

      setData(json);
    }

    fetchMovie();
  }, [])

  return (
    <main className="pt-24">
      <section className="flex justify-around flex-wrap py-5 items-center">
        <div className="max-w-sm pr-5">
          <img className="rounded" src={image} alt="" />
        </div>
        <div className="max-w-2xl text-gray-700 text-lg">
          <h1 className="text-4xl font-bold my-3 text-center lg:text-left">{original_title}</h1>
          <p className="my-4 text-center lg:text-left">
            {overview}
          </p>
          <p className="my-7 flex flex-warp gap-4 justify-center lg:justify-start">
            {genres ? (genres.map((genre) => (
              <span className="mr-2 border border-gray-700 rounded p-2">
                {genre.name}
              </span>
            ))) : ""}
          </p>


          <div className="flex items-center justify-center lg:justify-start">
            <svg className="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <p className="ms-2 text-sm font-bold text-gray-90">{vote_average}</p>
            <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
            <a href="#" className="text-sm font-medium text-gray-900 underline hover:no-underline ">{vote_count} reviews</a>
          </div>

        </div>
      </section>
    </main>
  )
}

export default MovieDetails