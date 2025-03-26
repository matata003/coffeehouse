import { Link } from "react-router-dom";
const Navbar = () => {
    return ( 
        
        <section className="col-md-12">
            
            <nav className="navbar navbar-expand-lg navbar-light text-white bg-dark p-2">
                <Link to="#" className="navbar-brand text-white">Kahawa House</Link>
                <img src="images/logo.jpg " alt="logo" width="60px" class=" text-start"/>
                
                <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#myNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="myNavbar">
                    <div className="navbar-nav  ">
                        <Link to="/AddProduct" className="nav-link text-white">Add Product</Link>
                        <Link to="/" className="nav-link text-white">Home</Link>
                        <Link to="/SignUp" className="nav-link text-white">Register</Link>
                        <Link to="/SignIn" className="nav-link text-white">Log In</Link>
                    </div>
                </div> 
            </nav>
        </section>
     );
}

 
export default Navbar;