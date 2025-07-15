export default function Footer() {
    return (
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
    );
}
