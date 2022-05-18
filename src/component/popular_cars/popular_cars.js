import './popular_cars.css';
import porsche from "../../images/file.jpg";

const PopularCars = (props) => {

    const page = () => {
        props.carsHandler();
    }

    return (
        <div className="popular">
            <div className="popular_section">
                <div className="popular_section_title">
                      <h1>Popular Cars</h1>
                </div>
                <div className="popular_section_content">
 
                    <div className = "grid" >
                        <a onClick={page}>
                            <div className="grid-item">
                                <img src={porsche} alt="" width="360" height="260"/>
                                <div className="overlay">
                                    <p className="centered" >SEE MORE</p>
                                </div>
                                <h3 >Porsche</h3>
                            </div>
                        </a>
                        <a onClick={page}>
                            <div className="grid-item">
                                <img src={porsche} alt="" width="360" height="260"/>
                                <div className="overlay">
                                    <p className="centered" >SEE MORE</p>
                                </div>
                                <h3 >Porsche</h3>
                            </div>
                        </a>
                        <a onClick={page}>
                            <div className="grid-item">
                                <img src={porsche} alt="" width="360" height="260"/>
                                <div className="overlay">
                                    <p className="centered" >SEE MORE</p>
                                </div>
                                <h3 >Porsche</h3>
                            </div>
                        </a>
                        <a onClick={page}>
                            <div className="grid-item">
                                <img src={porsche} alt="" width="360" height="260"/>
                                <div className="overlay">
                                    <p className="centered" >SEE MORE</p>
                                </div>
                                <h3 >Porsche</h3>
                            </div>
                        </a>
                        <a onClick={page}>
                            <div className="grid-item">
                                <img src={porsche} alt="" width="360" height="260"/>
                                <div className="overlay">
                                    <p className="centered" >SEE MORE</p>
                                </div>
                                <h3 >Porsche</h3>
                            </div>
                        </a>
                        <a onClick={page}>
                            <div className="grid-item">
                                <img src={porsche} alt="" width="360" height="260"/>
                                <div className="overlay">
                                    <p className="centered" >SEE MORE</p>
                                </div>
                                <h3 >Porsche</h3>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
              
        </div>
    )
}

export default PopularCars;