import { Link } from "react-router-dom"



const Header = ( {text = "Review App", bgColor = "blue", textColor="#ffffff"} ) => {


  const headerStyle = {
    backgroundColor:bgColor,
    color:textColor
  }

  return (
    <header style={headerStyle}>
       <div className="container">
           <div>

              <Link to="/">
               <h2>{text}</h2>
              </Link>

              <Link to="/about">About Us</Link>
              
           </div>
       </div>
    </header>
  )

}

// Header.defaultProps = {
//   text: "Review App",
//   bgColor:"blue",
//   textColor:"#ffffff"

// }

export default Header














