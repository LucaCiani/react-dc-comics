import comics from "./assets/data/comics";

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
                <div className="jumbotron"></div>
                <div className="content">
                    <div className="container">
                        <div>
                            <span className="current-series h3 p-1">
                                CURRENT SERIES
                            </span>
                        </div>
                        <div className="row row-cols-6 py-5">
                            {comics.map((comic) => (
                                <div className="col" key={comic.id}>
                                    <div className="card">
                                        <img
                                            className="card-img-top"
                                            src={comic.thumb}
                                            alt=""
                                        />
                                        <div className="card-body">
                                            <h5 className="card-title">
                                                {comic.title}
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <section className="shop">
                    <div className="container">
                        <div className="row row-cols-5 align-items-center g-5">
                            <div className="col">
                                <div className="card">
                                    <img
                                        className="card-img-custom"
                                        src="/buy-comics-digital-comics.png"
                                        alt="tablet"
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            DIGITAL COMICS
                                        </h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card">
                                    <img
                                        className="card-img-custom"
                                        src="/buy-comics-merchandise.png"
                                        alt="t-shirt"
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            DC MERCHANDISE
                                        </h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card">
                                    <img
                                        className="card-img-custom"
                                        src="/buy-comics-subscriptions.png"
                                        alt="subsription"
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            SUBSCRIPTION
                                        </h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card">
                                    <img
                                        className="card-img-custom"
                                        src="/buy-comics-shop-locator.png"
                                        alt="locator"
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            COMIC SHOP LOCATOR
                                        </h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card">
                                    <img
                                        className="card-img-custom"
                                        src="/buy-dc-power-visa.svg"
                                        alt="credit card"
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            DC POWER VISA
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <footer>
                <div className="big-footer">
                    <div className="container">
                        <div className="footer-nav">
                            <div className="footer-row">
                                <div className="footer-col">
                                    <h2>DC COMICS</h2>
                                    <span>Characters</span>
                                    <span>Comics</span>
                                    <span>Movies</span>
                                    <span>TV</span>
                                    <span>Games</span>
                                    <span>Videos</span>
                                    <span>News</span>
                                    <h2>SHOP</h2>
                                    <span>Shop DC</span>
                                    <span>Shop DC Collectibles</span>
                                </div>
                                <div className="footer-col">
                                    <h2>DC</h2>
                                    <span>Term Of Use</span>
                                    <span>Privacy policy (New)</span>
                                    <span>Ad Choices</span>
                                    <span>Advertising</span>
                                    <span>Jobs</span>
                                    <span>Subscription</span>
                                    <span>Talent Workshops</span>
                                    <span>CPSC Certificates</span>
                                    <span>Ratings</span>
                                    <span>Shop Help</span>
                                    <span>Contact Us</span>
                                </div>
                                <div className="footer-col">
                                    <h2>SITES</h2>
                                    <span>DC</span>
                                    <span>MAD Magazine</span>
                                    <span>DC Kids</span>
                                    <span>DC Universe</span>
                                    <span>DC Power Visa</span>
                                </div>
                            </div>
                            <img
                                className="big-logo"
                                src="/dc-logo-bg.png"
                                alt="big logo"
                            />
                        </div>
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
