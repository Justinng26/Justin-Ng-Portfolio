import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Contact = () => {
  return (
    <div>
        <h2>contact page</h2>
        <ul>
            <li>
                <Link to="/contact/esther">Esther</Link>
            </li>
            <li>
                <Link to="/contact/joe">Joe</Link>
            </li>
            <li>
                <Link to="/contact/safi">Safi</Link>
            </li>
            <li>
                <Link to="/contact/kristin">Kristin</Link>
            </li>
        </ul>

        <Outlet />
    </div>

    
  )
}

export default Contact;