import React from 'react';
import classNames from 'classnames/bind';
import style from "./Footer.module.css";
import { FaMapMarkerAlt,FaPhone, FaEnvelope,FaFacebook,FaFacebookMessenger,FaInstagram} from "react-icons/fa";

const cx = classNames.bind(style);

function Footer() {
    return (
        <div>
            <div className={cx("bg-footer")}>
                <div className={cx("container","pt-5")}>
                    <div className={cx("row")}>
                        <div className={cx("col-lg-3", "col-md-3", "col-sm-6")}>
                            <div className={cx("footer-infor")}>
                                <h4 className={cx("pb-4")}>Về chúng tôi</h4>
                                <p>Cây cảnh mini</p>
                                <p>Cây để bàn</p>
                                <p>Cây phong thủy</p>
                                <p>Cây văn phòng</p>
                            </div>
                        </div>
                        <div className={cx("col-lg-3", "col-md-3", "col-sm-6")}>
                            <div className={cx("footer-infor")}>
                                <h4 className={cx("pb-4")}>Chính sách</h4>
                                <p>Chính sách hoàn trả và thanh toán</p>
                                <p>Chính sách vận chuyển</p>
                                <p>Chính sách bảo mật</p>
                                <p>Hợp tác kinh doanh</p>
                            </div>
                        </div>
                        <div className={cx("col-lg-3", "col-md-3", "col-sm-6")}>
                            <div className={cx("footer-infor")}>
                                <h4 className={cx("pb-4")}>Hỗ trợ khách hàng</h4>
                                <p>Hướng dẫn đặt hàng</p>
                                <p>Giá hợp ní</p>
                            </div>
                        </div>

                        <div className={cx("col-lg-3", "col-md-3", "col-sm-6")}>
                            <div className={cx("footer-infor")}>
                                <h4 className={cx("pb-4")}>Liên hệ</h4>
                                <div className={cx("d-flex")}>
                                    <FaMapMarkerAlt className={cx("footer-infor-icon")}/>
                                    <p className={cx("footer-p")}>Tầng 6, 266 Đội Cấn, Ba Đình, Hà Nội</p>
                                </div>
                                <div className={cx("d-flex")}>
                                    <FaPhone className={cx("footer-infor-icon")}/>
                                    <p className={cx("footer-p")}>1900 6750</p>
                                </div>
                                <div className={cx("d-flex")}>
                                    <FaEnvelope className={cx("footer-infor-icon")}/>
                                    <p  className={cx("footer-p")}>ego.deploy@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx("footer-link")}>
                <div className={cx("container")}>
                    <h4 className={cx("text-center","text-white","pt-2")}>Kết nối với chúng tôi</h4>
                    <div className={cx("text-white", "text-center", "icons")}>
                        <FaFacebook className={cx("mr-5")}/>
                        <FaFacebookMessenger className={cx("mr-5")}/>
                        <FaInstagram/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;