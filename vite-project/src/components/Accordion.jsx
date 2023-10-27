
function Accordion({ title, itemList }) {

    return (

        <div className="accordion-item">
            <h4 className="accordion-header">
                <button className="accordion-button collapsed" type="button"
                    data-bs-toggle="collapse" data-bs-target="#flush-collapseOne"
                    aria-expanded="false" aria-controls="flush-collapseOne">
                    {title}
                </button>
            </h4>
            <div id="flush-collapseOne" className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">
                    <ul >

                        {itemList.map((item, num) => (
                            <li key={num}>{item}</li>
                        ))}

                    </ul>
                </div>
            </div>
        </div>

    )
}

export default Accordion