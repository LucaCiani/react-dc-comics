export default function Card({ title, customClass, customSrc }) {
    return (
        <div className="card">
            <img className={`card-img-${customClass}`} src={customSrc} alt="" />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
            </div>
        </div>
    );
}
