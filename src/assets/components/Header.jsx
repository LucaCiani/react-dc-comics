import Navbar from "./Navbar";

export default function Header() {
    return (
        <header>
            <div className="container">
                <div className="header-flex">
                    <div>
                        <img className="logo" src="/dc-logo.png" alt="logo" />
                    </div>
                    <Navbar />
                </div>
            </div>
        </header>
    );
}
