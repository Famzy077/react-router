import { Link } from "react-router-dom"

const  Home = () =>{
  return (
    <div>
      <h1>Hey You, Welcome to home page</h1>
      <nav>
        <ul>
          <li><Link to={'/'}>Home</Link></li>
          <li><Link to={'/Blog'}>Blog</Link></li>
          <li><Link to={'/Profile'}>Profile</Link></li>
          <li><Link to={'/About'}>About</Link></li>
          <li><Link to={'/LogOut'}>LogOut</Link></li>
        </ul>
      </nav>
    </div>
  )
}    

export default Home