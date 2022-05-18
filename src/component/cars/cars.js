import './cars.css';
import carImage from '../../images/clemme.jpg';

const Cars = (props) => {
    const onCarRentsHandler = () => {
        props.carRentsHandler();
    }
    return(
        <div className="cars">
          <div className="cars_row">
               <div  className="cars_col">
                    <a onClick={onCarRentsHandler} className="courses-image">
                            <img src={carImage} width="330" className="img-responsive" alt=""/>
                    </a>
                    <div className="cars_detail">
                        <h3>Audi RS7</h3>
                        <p className="lead">  <small>from</small> <strong>$99</strong> <small>per weekend</small></p>
                        <p>Quaedam verba ingeniosa hic inseri necesse est et vivere.</p>
                    </div>

                    <div className="courses-info">
                        <a onClick={onCarRentsHandler}>Book Now</a>
                    </div>    
                </div>
                <div className="cars_col">
                    <a  onClick={onCarRentsHandler}className="courses-image">
                            <img src={carImage} width="330" className="img-responsive" alt=""/>
                    </a>
                    <div className="cars_detail">
                        <h3>Audi RS7</h3>
                        <p className="lead">  <small>from</small> <strong>$99</strong> <small>per weekend</small></p>
                        <p>Quaedam verba ingeniosa hic inseri necesse est et vivere.</p>
                    </div>

                    <div  className="courses-info">
                        <a onClick={onCarRentsHandler}>Book Now</a>
                    </div>    
                </div>
                <div className="cars_col">
                    <a onClick={onCarRentsHandler} className="courses-image">
                            <img src={carImage} width="330" className="img-responsive" alt=""/>
                    </a>
                    <div className="cars_detail">
                        <h3>Audi RS7</h3>
                        <p className="lead">  <small>from</small> <strong>$99</strong> <small>per weekend</small></p>
                        <p>Quaedam verba ingeniosa hic inseri necesse est et vivere.</p>
                    </div>

                    <div className="courses-info">
                        <a onClick={onCarRentsHandler}>Book Now</a>
                    </div>    
                </div>
                <div className="cars_col">
                    <a onClick={onCarRentsHandler} className="courses-image">
                            <img src={carImage} width="330" className="img-responsive" alt=""/>
                    </a>
                    <div className="cars_detail">
                        <h3>Audi RS7</h3>
                        <p className="lead">  <small>from</small> <strong>$99</strong> <small>per weekend</small></p>
                        <p>Quaedam verba ingeniosa hic inseri necesse est et vivere.</p>
                    </div>

                    <div className="courses-info">
                        <a onClick={onCarRentsHandler}>Book Now</a>
                    </div>    
                </div>
                <div className="cars_col">
                    <a onClick={onCarRentsHandler}className="courses-image">
                            <img src={carImage} width="330" className="img-responsive" alt=""/>
                    </a>
                    <div className="cars_detail">
                        <h3>Audi RS7</h3>
                        <p className="lead">  <small>from</small> <strong>$99</strong> <small>per weekend</small></p>
                        <p>Quaedam verba ingeniosa hic inseri necesse est et vivere.</p>
                    </div>

                    <div className="courses-info">
                        <a onClick={onCarRentsHandler}>Book Now</a>
                    </div>    
                </div>
                <div className="cars_col">
                    <a onClick={onCarRentsHandler} className="courses-image">
                            <img src={carImage} width="330" className="img-responsive" alt=""/>
                    </a>
                    <div className="cars_detail">
                        <h3>Audi RS7</h3>
                        <p className="lead">  <small>from</small> <strong>$99</strong> <small>per weekend</small></p>
                        <p>Quaedam verba ingeniosa hic inseri necesse est et vivere.</p>
                    </div>

                    <div className="courses-info">
                        <a onClick={onCarRentsHandler}>Book Now</a>
                    </div>    
                </div>
          </div>
          <div className="navi">
            
              <ul className="navi__row">
                <li className="navi__item"><a>1</a></li>
                <li className="navi__item"><a>2</a></li>
                <li className="navi__item"><a>3</a></li>
                <li className="navi__item"><a>5</a></li>
                <li className="navi__item"><a>→</a></li>
              </ul>

          </div>
     </div>
    )
}

export default Cars;