import React from 'react'

const Header = () => {
  return (
    <div className="navbar bg-base-100">
    <div className="flex-1">
      <a className="btn btn-ghost text-xl">ECOM</a>
    </div>
    <div className="flex-none">
      <ul className="menu menu-horizontal px-1">
        <li><a>Cart (5)</a></li>
        <li>
          <details>
            <summary>Jagan</summary>
            <ul className="bg-base-100 rounded-t-none p-2">
              <li><a>Light</a></li>
              <li><a>Profile</a></li>
              <li><a>Logout</a></li>
            </ul>
          </details>
        </li>
      </ul>
    </div>
  </div>
  )
}

export default Header