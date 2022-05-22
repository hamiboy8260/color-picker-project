import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage,faPalette, faPaperclip, faT, faTrash } from "@fortawesome/free-solid-svg-icons";

export default function Nav() {

    return (

   
        

         <nav className="nav">
            <NavLink to="/"><p><FontAwesomeIcon icon={faT}/></p></NavLink>
            <NavLink to="/create"><p><FontAwesomeIcon icon={faImage}/> </p> </NavLink>
            <NavLink to="/tippy" ><p><FontAwesomeIcon icon={faPalette}/></p> </NavLink>
            <NavLink to="/favorite"><p><FontAwesomeIcon icon={faPaperclip}/></p></NavLink>
            <NavLink to="/myPosts"><p><FontAwesomeIcon icon={faTrash}/></p></NavLink>
         </nav>


  


    

     
        
    

      
    );
} 