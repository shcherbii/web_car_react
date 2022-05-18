import './login.css';
import { useState, useEffect } from 'react';

const Login = (props) => {
    const [login, setLogin] = useState();
    const [password, setPassword] = useState();
    const [passwordValid, setPasswordValid] = useState(false);

    const onChangeLogin = (event) => {
        setLogin(event.target.value);
    }

    const onChangePassword = (event) => {
        setPassword(event.target.value);
    }
    
    useEffect(() => {
        setPasswordValid(false);
    }, [password])

    const sentRequest = async () => {
       if(password.length >= 5){
            const data = { "login":login, "password":password};
            console.log(data)
            const res = await fetch("http://127.0.0.1:5000/api/v1/user/login", 
            {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            },
            body:JSON.stringify(data)});
            let lol = '';
            if(res.ok){
                lol = await res.json();
                localStorage.setItem('token', lol);
                localStorage.setItem('login', login);
                window.location.reload();
            }else{
                localStorage.setItem('token', null);
                localStorage.setItem('login', null);
                alert("something is wrong")
            }  
            
            console.log(lol);
        }

    }
    return (
        <main className="main_login">
            <div className="main_head_login">
                <div className="main_section_login">
                    <div className="login">
                    <h2>Welcome back</h2>
                    <input id = "login" type="text" placeholder="Username" onChange={onChangeLogin}/>
                    <input id = "password" type="password" placeholder="Password" onChange={onChangePassword}/>
                    {passwordValid && <p>Please enter your password &gt; 4</p>}
                    <button type='submit' id = "log_button" onClick={sentRequest}>Login</button>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Login;