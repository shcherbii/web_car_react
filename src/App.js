import './App.css';
import Header from './component/header/header';
import CarsTitle from './component/title/cars/cars_title';
import HomeTitle from './component/title/home/home_title';
import PopularCars from './component/popular_cars/popular_cars';
import Footer from './component/footer/footer';
import Cars from './component/cars/cars';
import RentCar from './component/title/rent_car/rent_car';
import CarInfo from './component/car_info/car_info';
import Login from './component/login/login';
import Register from './component/register/register'
import Account from './component/account/account'
import {useEffect, useState} from 'react';


function App() {
  const [isHome, setIsHome] = useState(true);
  const [isCars, setIsCars] = useState(false);
  const [isRentCars, setIsRentCars] = useState(false);
  const [isLogin, setLogin] = useState(false);
  const [isRegister, setRegister] = useState(false);
  const [isAccount, setAccount] = useState(false);

  const [isLoginAcount, setLoginAcount] = useState(false);
  let token = localStorage.getItem('token');
  
  // console.log(typeof(token));
  useEffect(() => {
    if(token !== 'null'){
      setLoginAcount(true);
    }else{
      setLoginAcount(false);
    }
  }, isLoginAcount, token);

  const LogOut = () => {
    setLoginAcount(false);
    localStorage.setItem('token', "null");
    localStorage.setItem('login', "null");
    window.location.reload();
  }

  const homeHandler = () => {
    setIsHome(true);
    setIsCars(false);
    setIsRentCars(false);
    setLogin(false);
    setRegister(false);
    setAccount(false);
  }
  const carsHandler = () => {
    setIsCars(true);
    setIsHome(false);
    setIsRentCars(false);
    setLogin(false);
    setRegister(false);
    setAccount(false);
  }

  const carRentsHandler = () => {
    setIsRentCars(true);
    setIsHome(false);
    setIsCars(false);
    setLogin(false);
    setRegister(false);
    setAccount(false);
  }

  const loginHandler = () => {
    setLogin(true);
    setIsHome(false);
    setIsCars(false);
    setIsRentCars(false);
    setRegister(false);
    setAccount(false);
  }

  const RegisterHandler = () => {
    setRegister(true);
    setLogin(false);
    setIsHome(false);
    setIsCars(false);
    setIsRentCars(false);
    setAccount(false);
  }

  const AccountHandler = () => {
    setAccount(true);
    setRegister(false);
    setLogin(false);
    setIsHome(false);
    setIsCars(false);
    setIsRentCars(false);
  }
  return (
    <div>
      <Header homeHandler={homeHandler} carsHandler={carsHandler} isLoginAcount={isLoginAcount} loginHandler={loginHandler} LogOut={LogOut} RegisterHandler={RegisterHandler} AccountHandler={AccountHandler}/>

      {isHome && <HomeTitle/>}
      {isHome && <PopularCars carsHandler={carsHandler}/>}

      {isCars && <CarsTitle/>}
      {isCars && <Cars carRentsHandler={carRentsHandler}/>}

      {isRentCars && <RentCar/>}
      {isRentCars && <CarInfo/>}

      {isLogin && <Login/>}

      {isRegister && <Register/>}

      {isAccount && <Account LogOut={LogOut}/>}
      <Footer/>
    </div>
  );
}

export default App;
