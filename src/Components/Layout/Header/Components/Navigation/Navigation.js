import React from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import style from "./Nav.module.css";
import logo from "~/Assets/logo.png";

const cx = classNames.bind(style);

function Navigation() {
    return (
        <div>
            <div className={cx("bg-navigation")}>
                <div className={cx("container", "p-3")}>
                    <div className={cx("row", 'align-items-center', 'justify-content-between')}>
                        <div className={cx("logo")}>
                            <Link to="/"><img src={logo} className={cx('card-img')} alt="..."/></Link>
                        </div>

                        <div className={cx("navigation")}>
                            <nav className={cx("navbar navbar-expand-lg navbar-light")}>
                                <button className={cx("navbar-toggler")} type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className={cx("navbar-toggler-icon")}></span>
                                </button>
                                <div className={cx("collapse navbar-collapse")} id="navbarNavAltMarkup">
                                    <div className={cx("navbar-nav")}>
                                        <Link to="/" className={cx("nav-link","navigation-link", "text-white")} href="#">Trang chủ</Link>
                                        <Link to="/product" className={cx("nav-link ","navigation-link", "text-white")} href="#">Tất cả sản phẩm<span className="sr-only">(current)</span></Link>
                                        <Link to="/new" className={cx("nav-link","navigation-link", "text-white")} href="#">Tin tức</Link>
                                        <Link to="/about" className={cx("nav-link","navigation-link", "text-white")} href="#">Về Ego Garden</Link>
                                        <Link to="/contact" className={cx("nav-link","navigation-link", "text-white")} href="#">Liên hệ</Link>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navigation