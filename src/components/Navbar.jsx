import React from 'react'
import { FaSignInAlt, FaSignOutAlt, FaUserAlt, FaImages, FaPlusCircle } from 'react-icons/fa'
import { GrGallery } from 'react-icons/gr';
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { selectIsAuthenticated } from '../store/auth/selectors'
import { logout } from '../store/auth/slice'
import Routes from '../Routes'


const Navbar = () => {
    const isAuthenticated = useSelector(selectIsAuthenticated)
    const dispatch = useDispatch();
    return (
        <>
            <nav className='navbar navbar-expand bg-light'>
                <ul className='navbar-nav'>
                    <span className='navbar-brand'>GALLERY App</span>
                    <li className='nav-item'>
                        <Link className='nav-link text-dark' to='/'>
                           <FaImages /> Galerije:
                        </Link>
                    </li>
                    {!isAuthenticated && (
                        <li className='nav-item'>
                            <Link className='nav-link text-dark' to='/login'>
                                <FaSignInAlt /> Uloguj se
                            </Link>
                        </li>
                    )}
                    {!isAuthenticated && (
                        <li className='nav-item'>
                            <Link className='nav-link text-dark' to='/register'>
                              <FaUserAlt/>  Registracija
                            </Link>
                        </li>
                    )}
                    {isAuthenticated && (
                        <li className='nav-item'>
                            <Link className='nav-link text-dark' to='/my-galleries'>
                            <FaImages />  Moje galerije
                            </Link>
                        </li>
                    )}
                    {isAuthenticated && (
                        <li className='nav-item'>
                            <Link className='nav-link text-dark' to='/create'>
                               <FaPlusCircle/> Kreiraj galeriju
                            </Link>
                        </li>
                    )}
                    {isAuthenticated && (
                        <li className='nav-item'>
                            <button className='btn' onClick={() => dispatch(logout())}>
                               <FaSignOutAlt/> Izloguj se
                            </button>
                        </li>
                    )}
                </ul>
            </nav>
            <Routes />
        </>
    )
}

export default Navbar;