import React from 'react';
import { Link, Outlet } from "react-router-dom"

const Sidebar = () => {
  return <div>
    <ul>
    <li>
      <Link to="/admin/posts">Posts</Link>
      <Link to="/admin/users">Users</Link>
    </li>
  </ul>
  
  </div>
}

export default Sidebar;
