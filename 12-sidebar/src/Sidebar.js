import React from 'react'
import logo from './logo.svg'
import { FaTimes } from 'react-icons/fa'
import { social, links } from './data'
import { useGlobalContext } from './context'

const Sidebar = () => {
    const {closeSideBar,isSideBarOpen} = useGlobalContext();
  return (
      <aside className={`${isSideBarOpen?'sidebar show-sidebar':'sidebar'}`}>
          <div className='sidebar-header'>
              <img src={logo} className='logo' alt='logo'/>
              <button className='close-btn' onClick={closeSideBar}>
                  <FaTimes/>
              </button>
          </div>

          <ul className='links'>
              {links.map(({id,url,text,icon})=>{
                  return <li key={id}>  <a href={url}>{icon}{text}</a>  </li>
              })}
          </ul>

          <ul className='social-icons'>
              {social.map(({id,url,icon})=>{
                  return <li key={id}>  <a href={url}>{icon}</a>  </li>
              })}
          </ul>
      </aside>
  )
}

export default Sidebar