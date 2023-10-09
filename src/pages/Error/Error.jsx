
import { Link } from 'react-router-dom';

function Error(){
   return(
      <div>
         This pages doesn't exist. Go <Link to='/'>home</Link>
      </div>
   )
};

export default Error;