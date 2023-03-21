import twitterlogo from '../assets/twitter-logo.svg'
import {User, DotsThreeCircle, FileText, BookmarkSimple, Envelope, Bell, Hash, House, Pencil} from 'phosphor-react'
import './Sidebar.css'
import { NavLink } from 'react-router-dom'


export function Sidebar(){
    return(
        <aside className='sidebar'>
        <img className='logo' src={twitterlogo} alt="Logo" />

        <nav className='main-navigation'>
          <NavLink to="/">
            <House weight='fill'/>
           <span>Home</span>
          </NavLink>
          <a href="">
            <Hash />
           <span>Explorer</span>
            </a>
          <a href="">
            <Bell/>
           <span>Notifications</span>
            </a>
          <a href="">
            <Envelope/>
           <span>Messages</span>
            </a>
          <a href="">
            <BookmarkSimple/>
           <span>Bookmark</span>
            </a>
          <a href="">
            <FileText/>
           <span>Lists</span>          
           </a>
          <a href="">
            <User/>
           <span>Profiles</span>
            </a>
          <a href="">
          <DotsThreeCircle/>
         <span>More</span>       
         </a>
        </nav>

        <button className='new-tweet' type='button'>
          <Pencil/>
         <span>Tweet</span>
        </button>
      </aside>
    )
}