import { Link } from "react-router-dom"



const About = () => {
  return (
   <div className='about'>
    <h1>This is a about page</h1>

     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum odit doloremque dicta tempore debitis. Saepe amet quis rem nobis, repudiandae quam. Quae, numquam nulla. Consectetur obcaecati quas ea quis consequatur.</p>

     <Link to="/" className='btn btn-primary'>Go home</Link>
   </div>
  )
}

export default About