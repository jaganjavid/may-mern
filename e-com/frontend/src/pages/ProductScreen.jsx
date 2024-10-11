import { useParams, Link } from "react-router-dom";
import Rating from "../components/Rating";
import { useGetProductDetailsQuery } from "../slices/productsApiSlices";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { addToCart } from "../slices/cartSlice";


const ProductScreen = () => {

  const { id: productId } = useParams();
  const [qty, setQyt] = useState(1);
  const dispatch = useDispatch();


  const { data:product, error, isLoading } = useGetProductDetailsQuery(productId);

  
  const addToCartHandler = () => {
    dispatch(addToCart({...product,qty}));
  }
 
  if(isLoading) return <p>Loading...</p>
  if(error) return <p>Error: {error}</p>


  return (
    <div className="container mx-auto px-4">
      <Link to="/">
        <button className="btn btn-neutral">Go Back</button>
      </Link>

      <div className="grid md:grid-cols-2 gap-10 mt-8">
        <div className="md:col-span-1 flex justify-center">
          <img className="max-w-full h-auto" src={product.image} alt={product.name} />
        </div>

        <div className="md:col-span-1 flex flex-col justify-center">
          <div className="card w-full">
            <div className="card-body">
              <h2 className="card-title text-3xl font-bold ">
                {product.name}
              </h2>
              <p className="text-lg ">{product.description}</p>
              <p className="text-2xl font-semibold  mt-4">${product.price}</p>

              <div className="flex mt-4">
                <Rating value={product.rating} text={`${product.numReviews} reviews`} />
              </div>

              <p className=" mt-2">
                {product.countInStock > 0 ? "In stock" : "No stock"}
              </p>

              {product.countInStock > 0 && (
                <div className="mt-4">
                  <h4 className="text-lg font-medium">Qty</h4>
                  <form className="mt-2">
                    <select className="select select-primary w-full max-w-xs"
                    onChange={(e) => setQyt(Number(e.target.value))}>
                      {
                        [...Array(product.countInStock).keys()].map((item) => (
                          <option key={item + 1}>{item + 1}</option>
                        ))
                      }
                    </select>
                  </form>
                </div>
              )}

              <div className="card-actions mt-6">
                <button
                  onClick={addToCartHandler}
                  disabled={product.countInStock === 0}
                  className="btn btn-primary w-full max-w-xs"
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default ProductScreen