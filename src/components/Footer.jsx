import './Footer.css'

const footerLinks = [
    ['FAQ', 'Investor Relations', 'Privacy', 'Speed Test'],
    ['Help Centre', 'Jobs', 'Cookie Preferences', 'Legal Notices'],
    ['Account', 'Ways to Watch', 'Corporate Information', 'Only on Netflix'],
    ['Media Centre', 'Terms of Use', 'Contact Us'],
]

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footpanel">
                <p className="foot-head">Questions? Call <a href="tel:0008009191694">000-800-919-1694</a></p>

                <div className="lists">
                    {footerLinks.map((column, colIndex) => (
                        <ul key={colIndex}>
                            {column.map((link, linkIndex) => (
                                <li key={linkIndex}>
                                    <a href="#">{link}</a>
                                </li>
                            ))}
                        </ul>
                    ))}
                </div>

                <div className="foot-language">
                    <select className="foot-select">
                        <option>English</option>
                        <option>हिन्दी</option>
                    </select>
                </div>

                <p className="foot-copy">Netflix India</p>
            </div>
        </footer>
    )
}

export default Footer
