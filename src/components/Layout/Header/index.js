import { useEffect, useState } from "react";
import {Link } from "react-router-dom";
import logo from '../../../assets/img/logo.jpg';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCartShopping, faSearch, faUser, faPhone, faLaptop, faHeadphones, faBox } from '@fortawesome/free-solid-svg-icons';
import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

const cx = classNames.bind(styles);
function Header() {
    const [scrollstyle, setScrollstyle] = useState("")

    useEffect(() => {
        window.onscroll = function myscroll() {
          if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
            setScrollstyle("scrollstyle")
          } else {
            setScrollstyle("");
          }
        };
    });
    const classes = cx('wrapper', {scrollstyle});

    return (
        <div className={classes}>
            <div className={cx('cps-container')}>
                <div className={cx('header')}>
                    <div className={cx('logo')}>
                        <Link to="/">
                            <img src={logo} alt="" className={cx('img-logo')}/>
                        </Link>                 
                        <div  className={cx('text')}>
                            <h3>NTH MOBILE</h3>
                        </div>
                    </div>
                    <div className={cx('nav')}>
                        <div className={cx('search')}>
                            <input type="text" placeholder="Search" className={cx('input-search')}/>
                            <button className={cx('btn-search')}>
                                <FontAwesomeIcon className={cx('icon-search')} icon={faSearch}/>
                            </button>
                        </div>
                        <div className={cx('nav-menu')}>
                            <a className={cx('menu')}>
                                <i className={cx('phone')}>
                                <FontAwesomeIcon icon={faPhone} />                   
                                </i>
                                <p className={cx('title')}>Điện thoại</p>
                            </a>
                            <a className={cx('menu')}>
                                <i className={cx('phone')}>
                                <FontAwesomeIcon icon={faLaptop} />                   
                                </i>
                                <p className={cx('title')}>Laptop</p>
                            </a>
                            <a className={cx('menu')}>
                                <i className={cx('phone')}>
                                <FontAwesomeIcon icon={faHeadphones} />                   
                                </i>
                                <p className={cx('title')}>Phụ kiện</p>
                            </a>
                            <a className={cx('menu')}>
                                <i className={cx('phone')}>
                                <FontAwesomeIcon icon={faBox} />                   
                                </i>
                                <p className={cx('title')}>Hàng cũ</p>
                            </a>
                            <a className={cx('menu')}>
                                <i className={cx('phone')}>
                                <FontAwesomeIcon icon={faCartShopping} />                   
                                </i>
                                <p className={cx('title')}>Giỏ hàng</p>
                            </a>
                            <a className={cx('menu')}>
                                <i className={cx('phone')}>
                                <FontAwesomeIcon icon={faUser} />                   
                                </i>
                                <p className={cx('title')}>Tài khoản</p>
                            </a>
                        </div>
                    </div>
                    <div className={cx('contact')}>
                        <button className={cx('btn-contact')}>
                            <FontAwesomeIcon className={cx('icon-contact')} icon={faFacebook}/>
                        </button>
                        <button className={cx('btn-contact')}>
                            <FontAwesomeIcon className={cx('icon-contact')} icon={faFacebook}/>
                        </button>
                        <button className={cx('btn-contact')}>
                            <FontAwesomeIcon className={cx('icon-contact')} icon={faFacebook}/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;