import './car_info.css';
import carImage from '../../images/clemme.jpg';

const CarInfo = () => {

    return(
        <div className = "car_list">
            <div className="car_list_row">
                <div className="car_list_col1">
                    <img src={carImage} width="650"/>
                </div>
                <div className="car_list_col2">
                    <h3>Audi RS7</h3>
                    <p>This project was designed for one of the biggest Swiss entertainment centers that 
                    grew in popularity in 2009. 
                    Everything was completed in less than a month.
                    </p>
                    <div className ="divade_line"></div>
                    <div className ="car_info">
                        <ul>
                            <li>&#10003; 4-door sedan</li>
                        </ul>
                        <ul>
                            <li>&#10003; Auto transmission</li>
                        </ul>
                        <ul>
                            <li>&#10003; 4cyl 2.1L engine</li>
                        </ul>
                        <ul>
                            <li>&#10003; Rear-wheel drive</li>
                        </ul>
                    </div>
                    <a className="rent">RENT NOW</a>
                </div>
            </div>
        </div>  
    )
}

export default CarInfo;