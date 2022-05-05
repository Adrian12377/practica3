import {Link, Outlet} from 'react-router-dom';

function Barra() {
    return(
        <div>
        <ul>
            <li>
                <Link to='/'>
                Home
                </Link>
            </li>
            <li>
            <Link to='/about'>
                About
            </Link>
            </li>
            <li>
            <Link to='/contacto'>
                Contact
            </Link>
            </li>
        </ul>
        <section>
            <Outlet/>
        </section>
        </div>
    );
}

export default Barra;