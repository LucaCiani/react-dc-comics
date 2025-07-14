function App() {
    return (
        <>
            <header>
                <div className="container">
                    <div className="header-flex">
                        <div>
                            <img
                                className="logo"
                                src="/dc-logo.png"
                                alt="logo"
                            />
                        </div>
                        <div>
                            <nav className="header-nav">
                                <span href="#">CHARACTERS</span>
                                <span className="comics" href="#">
                                    COMICS
                                </span>
                                <span href="#">MOVIES</span>
                                <span href="#">TV</span>
                                <span href="#">GAMES</span>
                                <span href="#">COLLECTIBLES</span>
                                <span href="#">VIDEOS</span>
                                <span href="#">FANS</span>
                                <span href="#">NEWS</span>
                                <span href="#">SHOP</span>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
            <main>
                <div className="content">
                    <div className="container">next content</div>
                </div>
                <div className="shop">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <img
                                    className="shop-img"
                                    src="/buy-comics-digital-comics.png"
                                    alt="tablet"
                                />
                                <span>DIGITAL COMICS</span>
                            </div>
                            <div className="col">
                                <img
                                    className="shop-img"
                                    src="/buy-comics-merchandise.png"
                                    alt="t-shirt"
                                />
                                <span>DC MERCHANDISE</span>
                            </div>
                            <div className="col">
                                <img
                                    className="shop-img"
                                    src="/buy-comics-subscriptions.png"
                                    alt="subsription"
                                />
                                <span>SUBSCRIPTION</span>
                            </div>
                            <div className="col">
                                <img
                                    className="shop-img"
                                    src="/buy-comics-shop-locator.png"
                                    alt="locator"
                                />
                                <span>COMIC SHOP LOCATOR</span>
                            </div>
                            <div className="col">
                                <img
                                    className="shop-img"
                                    src="/buy-dc-power-visa.svg"
                                    alt="credit card"
                                />
                                <span>DC POWER VISA</span>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <footer>
                <div className="footer-nav">
                    <div className="container">
                        <div></div>
                        <div></div>
                    </div>
                </div>
                <div className="container">
                    <div className="small-footer">
                        <div>
                            <button className="sign-up" type="button">
                                SIGN-UP NOW!
                            </button>
                        </div>
                        <div className="social">
                            <span className="follow-us">FOLLOW US</span>
                            <img src="/footer-facebook.png" alt="facebook" />
                            <img src="/footer-twitter.png" alt="twitter" />
                            <img src="/footer-youtube.png" alt="youtube" />
                            <img src="/footer-pinterest.png" alt="pinterest" />
                            <img src="/footer-periscope.png" alt="periscope" />
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default App;
