import React, {useState, useEffect} from 'react';
import Title from "../../components/Title/Title";
import {SigninBlock, SigninFormBlock} from "../registerPage/registerStyles";
import axios from "axios";
import {alertService} from "../../components/Alert/alert.service";


const LoginPage = ({error, onSubmit,history}) => {

    useEffect(() => {
        return () => {
        };
    }, []);

    const [inputs, setInputs] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('/api/user/login',inputs)
            .then(res => {
                if(res.data.success == 1){
                    setInputs({
                        email: '',
                        password: '',
                    })
                    localStorage.setItem("name",res.data.name)
                    history.push('/')
                }else{
                    alert("로그인실패")
                }


            })
    };

    return (
        <>
            <Title title={"로그인"} span={"로그인"}/>
            <SigninBlock>
                <div className="tabs"></div>
                <SigninFormBlock>
                    <div className="center">
                        <form onSubmit={handleSubmit}>
                            <div className="input-group">
                                
                                <input
                                    type="text"
                                    name="email"
                                    placeholder="이메일을 입력해주세요"
                                    value={inputs.email}
                                    onChange={handleChange}
                                />
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="비밀번호를 입력해주세요"
                                    value={inputs.password}
                                    onChange={handleChange}
                                />
                            </div>
                            <button type="submit">로그인</button>
                        </form>
                        {error && <p className="error-message">{error}</p>}
                    </div>
                </SigninFormBlock>
            </SigninBlock>
        </>
    );
};

export default LoginPage;