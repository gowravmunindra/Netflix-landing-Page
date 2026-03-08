import './Header.css'

const Header = () => {
    return (
        <header className="header">
            <div className="bimage">
                <nav className="topbar">
                    <div className="nlogo1">
                        <div className="nlogo"></div>
                    </div>
                    <div className="nav-actions">
                        <div className="tab">
                            <select className="searchselect">
                                <option>English</option>
                                <option>हिन्दी</option>
                            </select>
                        </div>
                        <div className="signin">
                            <button className="sign">Sign In</button>
                        </div>
                    </div>
                </nav>

                <div className="hero-text">
                    <h1 className="heading">Unlimited movies, TV shows and more</h1>
                    <div className="subtext">
                        <p>Watch anywhere. Cancel anytime.</p>
                    </div>
                    <div className="heading1">
                        <p>Ready to watch? Enter your email to create or restart your membership.</p>
                    </div>
                    <div className="textbox">
                        <input className="box" type="email" placeholder="Email address" />
                        <button className="getstarted">Get Started &gt;</button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
