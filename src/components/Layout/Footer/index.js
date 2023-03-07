import React from 'react';
import {Link } from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import { faHome, faPhone } from '@fortawesome/free-solid-svg-icons';


const cx = classNames.bind(styles);
function Footer() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx("cps-container")}>
                <div className={cx("footer-top")}>
                    <div className={cx("footer-name")}>
                        <h2>NTH Mobile</h2>
                    </div>
                    <div className={cx("footer-about")}>
                        <h2>Thông tin cửa hàng</h2>
                        <ul>
                            <li>
                                <a>
                                    <FontAwesomeIcon className={cx('icon-footer')} icon={faHome}/>
                                    &nbsp;
                                    <span>Địa chỉ: 24/367/100 CV2 Trâu Quỳ, Gia Lâm, Hà Nội</span>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <FontAwesomeIcon className={cx('icon-footer')} icon={faPhone}/>
                                    &nbsp;
                                    <span>Hotline: 0999999999</span>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <FontAwesomeIcon className={cx('icon-footer')} icon={faPhone}/>
                                    &nbsp;
                                    <span>Tư vấn trả góp: 0924865898</span>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <FontAwesomeIcon className={cx('icon-footer')} icon={faPhone}/>
                                    &nbsp;
                                    <span>Hỗ trợ kỹ thuật: 0393939393</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className={cx("footer-policy")}>
                        <h2>Chính sách cửa hàng </h2>
                        <p>Chính sách bảo mật </p>
                        <p>Chính sách vận chuyển</p>
                        <p>Chính sách đổi trả</p>
                        <p>Chính sách bảo hành</p>
                    </div>
                    <div className={cx("footer-introduce")}>
                        <h2>Giới thiệu</h2>
                        <ul>
                            <li>
                                <a>Về chúng tôi </a>
                            </li>
                            <li>
                                <a>Các sản phẩm mới</a>
                            </li>
                            <li>
                                <a>Sản phẩm hot</a>
                            </li>
                            <li>
                                <a>Ưu đãi</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={cx("footer-bot")}>     
                <p>Copyright © 2023 NTH MOBILE. All rights reserved.</p>
            </div>
        </div>
    );
}

export default Footer;


