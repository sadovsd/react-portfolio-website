import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Header = ( {children} ) => {
    
    const location = useLocation();
    const [activeLink, setActiveLink] = useState(location.pathname);

    useEffect(() => {
        // Set active link to current pathname when the component mounts
        setActiveLink(location.pathname);
    }, [location.pathname]);

    const style = {
        display: 'inline-block',
        margin: 10,
        marginBottom: 30
    };

    const linkStyle = {
        textDecoration: 'none',
        color: 'inherit',
    };

    const handleLinkClick = (link) => {
        setActiveLink(link);
        console.log('active link is..', link)
    };
    

    return(
        <div>
            <div className='text-[25px] mt-8'>
                <h2 style={style}>
                    <Link
                    to='/' 
                    className={`header-link ${activeLink === '/' ? 'active' : ''}`} 
                    style={linkStyle} 
                    onClick={() => handleLinkClick('/')}>
                        Home
                    </Link>
                </h2>
                {/* <h2 style={style}>
                    <Link 
                    to='/jokes' 
                    className={`header-link ${activeLink.startsWith('/jokes') ? 'active' : ''}`} 
                    style={linkStyle} 
                    onClick={() => handleLinkClick('/jokes')}>
                        Jokes
                    </Link>
                </h2> */}
                <h2 style={style}>
                    <Link 
                    to='/resume' 
                    className={`header-link ${activeLink.startsWith('/resume') ? 'active' : ''}`} 
                    style={linkStyle} 
                    onClick={() => handleLinkClick('/resume')}>
                        Resume
                    </Link>
                </h2>
                <h2 style={style}>
                    <Link 
                    to='/projects' 
                    className={`header-link ${activeLink.startsWith('/projects') ? 'active' : ''}`} 
                    style={linkStyle} 
                    onClick={() => handleLinkClick('/projects')}>
                        Projects
                    </Link>
                </h2>
                <h2 style={style}>
                    <Link 
                    to='/applications' 
                    className={`header-link ${activeLink.startsWith('/applications') ? 'active' : ''}`} 
                    style={linkStyle} 
                    onClick={() => handleLinkClick('/applications')}>
                        Applications
                    </Link>
                </h2>
            </div>
            {children}
        </div>
    )
}

export default Header;
