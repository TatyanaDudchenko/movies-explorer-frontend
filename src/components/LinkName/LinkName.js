import './LinkName.css';
import { Link } from 'react-router-dom';

function LinkName({ linkName, linkPath }) {
    return (
        <Link className='link' to={linkPath}>{linkName}</Link>
    );
}

export default LinkName;