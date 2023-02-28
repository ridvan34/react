import {Link, Outlet} from "react-router-dom";
import {Fragment} from "react";
import logo from '../../assets/egricayir_logo.png';
import './navigation.styles.scss';

const Navigation = () => {
    return (
        <Fragment>
            <div className='navigation'>
                <Link className='logo-container' to='/'>
                    <img src={ logo } alt='logo' className='logo-image' />
                    {/* <img src={ require('../../assets/egricayir_logo.png') } alt='logo' /> */}
                </Link>
                <div className='nav-links-container'>
                    <Link className='nav-link' to='/shop'>
                        SHOP
                    </Link>
                    <Link className='nav-link' to='/sign-in'>
                        SIGN IN
                    </Link>
                </div>
            </div>
            <Outlet />
            <div>
                <h1>Footer</h1>
            </div>
        </Fragment>
    );
}

export default Navigation;