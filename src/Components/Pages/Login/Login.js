/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useState } from 'react';
import style from './Login.module.css';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { getUsers } from '~/services/user.service';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux/es/exports';
import { saveUserToLocalStorage } from '~/redux/actions/UserAction';

const cx = classNames.bind(style);

const initValues = {
  email: "",
  password: ""
}

const validate = Yup.object().shape({
  email: Yup.string().required("Vui lòng nhập email").email("Email không đúng định dạng"),
  password: Yup.string().required("Vui lòng nhập mật khẩu")
});


function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const formik = useFormik({
    initialValues: initValues,
    validationSchema: validate,
    onSubmit: async data => {
      let response = await getUsers();
      let users = response.data;
      let findUser = users.filter(u => {
        return data.email === u.email && data.password === u.password;
      });
      let user = findUser[0];
      if (user) {
        dispatch(saveUserToLocalStorage(user));
        navigate("/");
      } else {
      
        setError("Email hoac mat khau khong chinh xac")
      
      }
    }
  })

  return (
    <div className={cx('container', 'mt-5', 'd-block')}>
      <h3 className='text-center text-uppercase font-weight-bold'>Đăng nhập</h3>
      <span className={cx("err")}>
        {error}
      </span>
      <div className=''>
        <form onSubmit={formik.handleSubmit} className={cx('form-submit')}>
          <div className={cx('form-submit', 'mt-3')}>
            <label className="mb-0 mr-2 font-weight-bold d-block">
              Email
            </label>
            <input
              name="email"
              className={cx("form-control", "form-input", "mt-2")}
              placeholder="Email"
              value={formik.values.email}
              onChange={formik.handleChange}
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
              placeholder="Mật khẩu"
              value={formik.values.password}
              onChange={formik.handleChange}
            />
          </div>
          <span className={cx("err")}>
            {formik.errors.password ? formik.errors.password : ""}
          </span>
          <button
            type="submit"
            className={cx("btn", "text-uppercase", "btn-button", "mb-4", "mt-2")}
          >
            Đăng nhập
          </button>
        </form>
        <div className={cx('text-center', 'mb-4')}>
          <span>Chưa có tài khoản? Đăng ký </span>
           <Link to={"/register"} className='text-danger text-decoration-none'>tại đây</Link>
        </div>
      </div>
    </div>
  )
}

export default Login;