/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import style from './Register.module.css';
import classNames from 'classnames/bind';

// import formik + yup
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { register } from '~/services/user.service';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(style);

const initialValues = {
    // trong này là mấy cái trường ở form.
    name: "",
    phone: "",
    email: "",
    password: ""
}

const validationSchema = Yup.object().shape({
    // validate các trường ở đây
    name: Yup.string().required("Vui lòng nhập Họ tên"),
    phone: Yup.string().required("Vui lòng nhập số điện thoại"),
    email: Yup.string().required("Vui lòng nhập email").email("Email không đúng định dạng"),
    password: Yup.string().required("Vui lòng nhập mật khẩu").min(6, "Mật khẩu tối thiếu 6 ký tự")

    // string() -> kiểu dữ liệu của input
    // require() -> bắt buộc phải nhập khi submit
    // email() -> validate định dạng email
    // min max() -> độ dài ký tự của input
})

function Register() {
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues,
        // giá trị khởi tạo của form
        validationSchema,
        // validate
        onSubmit: async (user) => {
            let response = await register(user);
            response.status === 201 && navigate("/login");
            // có dữ liệu r thì thêm mới
        }
    });

    return (
        <div className={cx('container', 'mt-5', 'd-block')}>
            <h3 className='text-center text-uppercase font-weight-bold'>Đăng ký</h3>
            <div className=''>
                <form onSubmit={formik.handleSubmit} className={cx('form-submit')}>
                    <div className={cx("mt-3")}>
                        <label className="mb-0 mr-2 font-weight-bold">
                            Họ và tên
                        </label>
                        <input
                            name="name" type="text" placeholder='Họ và tên'
                            className={cx("form-control", "form-input", "mt-2")}
                            onChange={formik.handleChange}
                            value={formik.values.name}
                        // 2 way binding. -> chắc thầy giải thích r

                        />
                    </div>
                    {/* nếu có lỗi thì showw ở đây */}
                    <span className={cx("err")}>
                        {formik.errors.name ? formik.errors.name : ""}
                    </span>


                    <div className={cx("mt-3")}>
                        <label className="mb-0 mr-2 font-weight-bold">
                            Số điện thoại
                        </label>
                        <input placeholder='Số điện thoại'
                            className={cx("form-control", "form-input", "mt-2")}
                            onChange={formik.handleChange}
                            value={formik.values.phone}
                            name="phone"
                        />
                    </div>
                    <span className={cx("err")}>
                        {formik.errors.phone ? formik.errors.phone : ""}
                    </span>

                    <div className={cx('form-submit', 'mt-3')}>
                        <label className="mb-0 mr-2 font-weight-bold d-block">
                            Email
                        </label>
                        <input
                            name="email" type="email "
                            className={cx("form-control", "form-input", "mt-2")}
                            onChange={formik.handleChange} placeholder="Email"
                            value={formik.values.email}
                        />
                    </div>
                    <span className={cx("err")}>
                        {formik.errors.email ? formik.errors.email : ""}
                    </span>

                    <div className={cx("mb-2", "mt-4")}>
                        <label className="mb-0 mr-2 font-weight-bold d-block">
                            Mật khẩu
                        </label>
                        <input
                            name="password" type="password"
                            className={cx("form-control", "form-input", "mt-2")}
                            onChange={formik.handleChange} placeholder="Mật khẩu"
                            value={formik.values.password}
                        />
                    </div>
                    <span className={cx("err")}>
                        {formik.errors.password ? formik.errors.password : ""}
                    </span>
                    <button
                        type="submit"
                        className={cx("btn", "text-uppercase", "btn-button", "mb-5", "mt-2")}
                    >
                        Đăng ký
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Register;
