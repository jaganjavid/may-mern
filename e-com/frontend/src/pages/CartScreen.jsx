import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";



const CartScreen = () => {

  const dispatch = useDispatch();
  const {cartItem} = useSelector((state) => state.cart);


  
  return (
    <div className="container mx-auto px-4 mt-4">
         <h1 className="text-5xl font-bold mb-10 text-center">My Cart</h1> 


         {cartItem.length === 0 ? (
           <div className="alert alert-warning shadow-lg">
             <div>
               <span className="text-lg">There are no items in cart</span>
             </div>
           </div>
         ) : (
          <div>
            {cartItem.map((item) => (
              <div className="grid grid-cols-3 gap-5 items-center mb-4" key={item._id}>
                 <div className="col-span-1">
                  <Link>
                    <img src={item.image} alt="" />
                  </Link>
                 </div>
                 <div className="col-span-2">
                  <div className="card shadow-xl">
                    <div className="card-body">
                      {item.name}
                      <p>Price ${item.price}</p>
                    </div>
                  
                  </div>
                 </div>
              </div>
            ))}
          </div>
         )}
    </div>
  )
}

export default CartScreen