import React, { useState, useRef, useEffect } from 'react'
import { FaBars } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'

const Navbar = () => {
    const [showLinks, setShowLinks] = useState(false);
    const linkContainerRef = useRef(null);
    const linksRef = useRef(null);

    // getBoundingClientRect check the height of the links and set the container accordingly
    // we are setting the height depending on how many links we have
    useEffect(() => {
        const linksHeight = linksRef.current.getBoundingClientRect().height;
        if (showLinks) {
            linkContainerRef.current.style.height = `${linksHeight}px`;
        }
        else {
            linkContainerRef.current.style.height = `0px`;

        }
    }, [showLinks])
    return (
        <nav>
            <div className='nav-center'>
                <div className='nav-header'>
                    <img src={logo} alt='logo' />
                    <button className='nav-toggle' onClick={() => setShowLinks(!showLinks)}>
                        <FaBars />
                    </button>
                </div>
                {/* we can add show-container class conditionally */}
                <div className='links-container' ref={linkContainerRef}>
                    <ul className='links' ref={linksRef}>
                        {links.map(({ id, url, text }) => {
                            return <li key={id}> <a href={url}>{text}</a> </li>
                        })}
                    </ul>
                </div>
                <ul className='social-icons'>
                    {social.map(({ id, url, icon }) => {
                        return <li key={id}> <a href={url}>{icon}</a> </li>
                    })}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar