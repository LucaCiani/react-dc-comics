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
                <div className="container">
                    <div className="content"> next content</div>
                    <div className="shop"></div>
                </div>
            </main>
        </>
    );
}

export default App;
