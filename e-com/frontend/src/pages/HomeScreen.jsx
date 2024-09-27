import products from "../../products"

import Product from "../components/Product"

const HomeScreen = () => {


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