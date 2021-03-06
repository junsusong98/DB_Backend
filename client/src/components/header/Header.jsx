import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import classes from './Header.module.css';
import mark from '../../images/mark.png'

const Header = ({theme}) => {

    const [userName, setUserName] = useState("")

    useEffect(() => {
        setUserName(localStorage.getItem("name"))
    }, [])

    return (
        <header
            className={`${classes.header} ${
                theme === 'light' ? `${classes.light}` : ''
            }`}
        >
            <div className="center">
                <div className={classes.upper}>
                    <h1 className={classes.logo}>
                        <Link to="/">CEO cinema</Link>
                    </h1>
                    <ul className={`${classes.menu} ${classes.menu1}`}>
                        <li>
                            <Link to={"/"}>
                <span>
                  <img src={mark}/>
                </span>{' '}

                            </Link>
                        </li>
                        <li>
                            <a href="##">
                <span>
                  Creative Enjoy Our Cinema
                </span>{' '}

                            </a>
                        </li>

                    </ul>
                    <ul className={`${classes.menu} ${classes.menu2}`}>
                        <li>

                            <Link to={"/market"}>새싹마켓</Link>
                        </li>
                        <li>
                            <Link to={"/contact"}>문의하기</Link>

                        </li>
                        {
                            !userName ? <li>
                                    <Link to={"/login"}>로그인</Link>
                                </li> :
                                <li>
                                    <Link to={"/"} onClick={() => {
                                        localStorage.removeItem("name")
                                        setUserName("")
                                    }
                                    }>로그아웃</Link>
                                </li>
                        }
                    </ul>
                </div>
                <nav className={classes.navigation}>
                    <ul className={classes.links}>
                        <li>

                            <Link to={"/movie/reserve"}>예매</Link>
                        </li>
                        <li>
                            <Link to={"/branch/1"}>영화관</Link>
                        </li>
                        <li>
                            <Link to={"/event"}>이벤트</Link>
                        </li>
                    </ul>
                    <ul className={`${classes.menu} ${classes.menu3}`}>
                        {
                            !userName && <li>
                                <Link to={"/register"}>
                <span>
                  <i className="fas fa-user"></i>
                </span>{' '}
                                    회원가입
                                </Link>
                            </li>
                        }

                        {!userName && <li>
                            <a href="##">
                                <span>
                                     <i className="fas fa-bookmark"></i>
                                        </span>{' '}
                                비회원 예매
                            </a>
                        </li>}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
