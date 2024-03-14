import React from 'react';
import classNames from 'classnames/bind';
import style from "./Footer.module.css";
import {FaDolly, FaHeadset,FaRedo, FaPiggyBank} from "react-icons/fa";

const cx = classNames.bind(style);

function Footer() {
  return (
    <div>
        <div className={cx("footer")}>
                <div className={cx("container")}>
                    <div className={cx("row")}>
                        <div className={cx("col-lg-3", "col-md-3", "col-sm-6")}>
                            <div className={cx("footer-icon", "d-flex")}>
                                <FaDolly />
                                <p className={cx("infor")}>Freeship nội thành</p>
                            </div>
                        </div>
                        <div className={cx("col-lg-3", "col-md-3", "col-sm-6")}>
                            <div className={cx("footer-icon", "d-flex", "lt")}>
                                <FaHeadset />
                                <p className={cx("infor")}>Tư vấn sản phẩm 24/7</p>
                            </div>
                        </div>
                        <div className={cx("col-lg-3", "col-md-3", "col-sm-6")}>
                            <div className={cx("footer-icon", "d-flex")}>
                                <FaRedo />
                                <p className={cx("infor")}>Đổi trả nhanh chóng</p>
                            </div>
                        </div>
                        <div className={cx("col-lg-3", "col-md-3", "col-sm-6")}>
                            <div className={cx("footer-icon", "d-flex")}>
                                <FaPiggyBank />
                                <p className={cx("infor")}>Ưu đãi cực lớn</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Footer