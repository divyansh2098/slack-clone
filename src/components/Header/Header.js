import React from 'react'
import  {useSelector}  from 'react-redux'

//import icons
import Avatar from '@material-ui/core/Avatar';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import SearchIcon from '@material-ui/icons/Search';

import './Header.css'

function Header() {
  const user = useSelector(state=>state.user)
  return (
    <div className="header">
      <div className="header-left">
        <QueryBuilderIcon />
      </div>
      <div className="search">
        <input type="text" className="text" name="search" placeholder="Search"/>
        <SearchIcon />
      </div>
      <HelpOutlineIcon />
      <div className="header-right">
        <Avatar alt="Divyansh Singh" src={user.photoURL} />
      </div>
    </div>
  )
}

export default Header
