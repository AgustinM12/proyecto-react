

const Slide = ({ title, subtitle, listItems }) => {
    return (
        <div className="carousel-item px-5 py-2">
            <section>
                <div>
                    <h1 className="text-center">{title}</h1>
                    <h4 className="text-center">{subtitle}</h4>
                    <ul>
                        {listItems.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
            </section>
        </div>
    );
};

export default Slide;
