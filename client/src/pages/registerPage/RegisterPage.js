import React, {useState, useEffect} from 'react';
import Title from "../../components/Title/Title";
import {SigninBlock, SigninFormBlock} from "./registerStyles";
import axios from "axios";


const RegisterPage = ({error, onSubmit,history}) => {

    useEffect(() => {
        return () => {
        };
    }, []);

    const [inputs, setInputs] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        gender: '남성',
        dateEvent: '동의',
    });

    const handleChange = (e) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('/api/user',inputs)
            .then(res=>{
                if(res.data.success == 1){
                    history.push('/login')
                }else{
                    alert("회원가입실패")
                 }
            })
    };

    return (
        <>
        <Title title={"회원가입"} span={"회원가입"}/>
        <SigninBlock>
            <div className="tabs"></div>
            <SigninFormBlock>
                <div className="center">
                    <form onSubmit={handleSubmit}>
                        <div className="input-group">
                            <input
                                type="text"
                                name="name"
                                placeholder="이름을 입력해주세요"
                                value={inputs.name}
                                onChange={handleChange}
                            />
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
                            <input
                                type="password"
                                name="confirmPassword"
                                placeholder="비밀번호를 다시 한번 입력해주세요"
                                value={inputs.confirmPassword}
                                onChange={handleChange}
                            />
                            <div>
                                <select value={inputs.gender} onChange={handleChange} name="gender">
                                    <option value="남성">남성</option>
                                    <option value="여성">여성</option>
                                </select>
                                <select value={inputs.dateEvent} onChange={handleChange} name="dateEvent">
                                    <option value="동의">소개팅 이벤트에 동의</option>
                                    <option value="비동의">소개팅 이벤트에 동의하지 않음</option>
                                </select>
                            </div>
                        </div>
                        <button type="submit">회원가입</button>
                    </form>
                    {error && <p className="error-message">{error}</p>}
                </div>
            </SigninFormBlock>
        </SigninBlock>
        </>
    );
};

export default RegisterPage;