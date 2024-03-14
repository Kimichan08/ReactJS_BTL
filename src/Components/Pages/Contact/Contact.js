/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import style from './Contact.module.css';
import classNames from 'classnames/bind';
import { useForm } from 'react-hook-form';

const cx = classNames.bind(style);

function Contact() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => console.log(data);
  window.scrollTo(0, 0)
  return (
    <div className={cx('container', 'mt-5')}>
      <h4>LIÊN HỆ</h4>
      <div className={cx('row')}>
        <div className={cx('col-lg-8')}>

          <form onSubmit={handleSubmit(onSubmit)}>
              <div className={cx( "mt-3")}>
                <label className="mb-0 mr-2 font-weight-bold" htmlFor="name">
                  Họ và tên
                </label>
                <input
                  id="name"
                  className={cx("form-control","form-input","mt-2")}
                  {...register("name", { required: true })}
                />
              </div>
              <span className={cx("err")}>
                {errors.name?.type === "required" && <p>Bạn chưa điền họ và tên</p>}
              </span>

              <div className={cx( "mb-2")}>
                <label className="mb-0 mr-2 font-weight-bold" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  className={cx("form-control","form-input","mt-2")}
                  {...register("email", { required: true })}
                />
              </div>
              <span className={cx("err")}>
                {errors.email && <p>Bạn chưa nhập email</p>}
              </span>

              <div className={cx("mb-2")}>
                <label className="mb-0 mr-2 font-weight-bold" htmlFor="Phone">
                  Nội dung
                </label>
                <textarea
                  id="text" rows="5"
                  className={cx("form-control","form-input","mt-2")}
                  {...register("text", { required: true })}
                ></textarea>
              </div>
              <span className={cx("err")}>
                {errors.text && <p>Bạn chưa nhập nội dung</p>}
              </span>

              <button
                type="submit"
                className={cx("btn", "text-uppercase","btn-button")}
                href="#"
              >
                Gửi phản hồi
              </button>
            </form>
        </div>
        <div className={cx('col-lg-4','mb-3')}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7447.808543203733!2d105.815878!3d21.036516!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x87ab3917166a0cd5!2zUGjhuqduIG3hu4FtIHF14bqjbiBsw70gYsOhbiBow6BuZyAtIFNhcG8gUE9T!5e0!3m2!1svi!2sus!4v1658298521707!5m2!1svi!2sus" width="370" height="480" className={cx('map')} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>
  )
}

export default Contact;