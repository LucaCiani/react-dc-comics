import comics from "../data/comics";
import Card from "./Card";

export default function Main() {
    return (
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
                                <Card
                                    customClass="top"
                                    customSrc={comic.thumb}
                                    title={comic.title}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <section className="shop">
                <div className="container">
                    <div className="row row-cols-5 align-items-center g-5">
                        <div className="col">
                            <Card
                                customClass={"custom"}
                                customSrc={"/buy-comics-digital-comics.png"}
                                title={"DIGITAL COMICS"}
                            />
                        </div>
                        <div className="col">
                            <Card
                                customClass={"custom"}
                                customSrc={"/buy-comics-merchandise.png"}
                                title={"DC MERCHANDISE"}
                            />
                        </div>
                        <div className="col">
                            <Card
                                customClass={"custom"}
                                customSrc={"/buy-comics-subscriptions.png"}
                                title={"SUBSCRIPTION"}
                            />
                        </div>
                        <div className="col">
                            <Card
                                customClass={"custom"}
                                customSrc={"/buy-comics-shop-locator.png"}
                                title={"COMIC SHOP LOCATOR"}
                            />
                        </div>
                        <div className="col">
                            <Card
                                customClass={"custom"}
                                customSrc={"/buy-dc-power-visa.svg"}
                                title={"DC POWER VISA"}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
