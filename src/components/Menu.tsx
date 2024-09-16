import { Link } from "react-router-dom";
import { NavMenu } from "../styled";

export default function Menu(){

    return(
        
           
            <NavMenu>
            <h1>secu<span>rity</span></h1>
            <section className="links">
                <Link to='/' >Home</Link>
                <span> | </span>
                <Link to='/sobre_nos'>Sobre nos</Link>
                </section>
            </NavMenu>
      
    )
}