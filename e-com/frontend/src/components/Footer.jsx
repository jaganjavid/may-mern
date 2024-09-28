import React from 'react'

const Footer = () => {
    return (
        <footer className="footer footer-center bg-base-300 text-base-content p-4 mt-20">
            <aside>
                <p>Copyright © {new Date().getFullYear()} - All right reserved by ECOM Industries Ltd</p>
            </aside>
        </footer>
    )
}

export default Footer