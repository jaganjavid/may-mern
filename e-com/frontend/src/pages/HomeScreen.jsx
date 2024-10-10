

import Product from "../components/Product";
import { useGetProductsQuery } from "../slices/productsApiSlices";


const HomeScreen = () => {


  const { data:products, error, isLoading } = useGetProductsQuery();

  if(isLoading) return <p>Loading...</p>
  if(error) return <p>Error: {error}</p>
  

  return (
    <>
     
     <h2 className="text-5xl my-10">All Products</h2>

     <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
        {
            products.map((product) => (
                <Product key={product._id} product={product}/>
            ))
        }
     </div>
    </>
  )
}

export default HomeScreen