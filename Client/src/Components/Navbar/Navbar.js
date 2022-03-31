import { Link } from "react-router-dom";
import {Avatar} from '@material-ui/core'

export default function Navbar() {

  const user = null
  
  return (
    <div>
      <h1>Bookkeeper</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >


        {user ? (
         <div>
          <Avatar alt={user.result.name} src={user.result.imageURL}>{user.result.name.charAt(0)} </Avatar> 
          <p>{user.name}</p>
          <button>Logout</button>
        </div>
        
        ) : (
            <div>
              <button component={Link} to='/auth'>Sign In</button>
            </div>

        )}
      </nav>
    </div>
  );
}