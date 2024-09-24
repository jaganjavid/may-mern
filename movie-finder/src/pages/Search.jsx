import { useSearchParams } from "react-router-dom"
import Card from "../components/Card"
import useFetch from "../hooks/useFetch"
import { useEffect } from "react"

const Search = ({apiPath}) => {


  const [searchParams] = useSearchParams();

  const queryTerm = searchParams.get("q");

  const {data:movies} = useFetch(apiPath, queryTerm);

  useEffect(() => {
    document.title = `${queryTerm} / CineBite`;
  });
  
  

  return (
    <main>


    <section>
      <p className="text-3xl text-gray-800">
        {movies.length === 0 ? `No Result Found for ( ${queryTerm} )` :  `Result for ( ${queryTerm} )`}
      </p>
    </section>


    <section className="max-w-7xl max-auto py-7">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
         
          {
            movies.map((movie) => (
              <Card key={movie.id} movie={movie}/>
            ))
          }
      </div>
    </section>
  </main>
  )
}

export default Search