import React from 'react';
import classNames from 'classnames/bind';
import style from './Review.module.css';
import banner_t_03 from "~/Assets/banner_t_03.png";
import banner_t_04 from "~/Assets/banner_t_04.png";

const cx = classNames.bind(style);


function Review() {
  return (
    <div>
      <div className={cx("container", "mt-4")}>
        <div className={cx("banner")}>
          <div className={cx("banner-img")}>
            <img src={banner_t_03} className={cx("w-100")} alt="..." />
          </div>
          <div className={cx("banner-img")}>
            <img src={banner_t_04} className={cx("w-100")}  alt="..."/>
          </div>
        </div>
      </div>
      <div className={cx('bg-review')}>
        <div className={cx('container', 'mt-5')}>
          <div className={cx('row')}>
            <div className={cx('col-lg-3', 'col-md-3', 'col-sm-12')}>
              <div className={cx('card', 'mt-5', 'mb-5')}>
                <div className="card-body">
                  <h5 className="card-title"><span className='text-success'>Khánh Linh</span>- Sinh viên</h5>
                  <p className="card-text">
                    Đã nhiều lần mua cây cảnh tại đây và cảm thấy rất ưng về chất lượng sản phẩm, mua cây mà còn được tặng cả phân bón cây luôn nhé, chủ shop dễ thương cực kỳ nạ.
                  </p>
                </div>
              </div>
            </div>
            <div className={cx('col-lg-3', 'col-md-3', 'col-sm-12')}>
              <div className={cx('card', 'mt-5', 'mb-5')}>
                <div className="card-body">
                  <h5 className="card-title"><span className='text-success'>Ngọc Ánh</span>- Marketting</h5>
                  <p className="card-text">
                    Em hay mua cây tại đây để tặng sinh nhật bạn, lần nào bạn cũng ưng nhé, chưa thấy cây nào trồng bị chết cả, chỉ được cái là sống rất khỏe bạn cứ khoe em hoài ấy ạ.
                  </p>
                </div>
              </div>
            </div>
            <div className={cx('col-lg-3', 'col-md-3', 'col-sm-12')}>
              <div className={cx('card', 'mt-5', 'mb-5')}>
                <div className="card-body">
                  <h5 className="card-title"><span className='text-success'>Thị Hải</span>- Văn phòng</h5>
                  <p className="card-text">
                    Vừa rồi lên nhà mới mình có qua shop mua thử ít cây về để tiểu cảnh, ai cũng khen mua cây ở đâu đẹp thế lại còn xanh nữa, bữa nào em dẫn bạn đến đây mua nhiều nhiều nữa.
                  </p>
                </div>
              </div>
            </div>
            <div className={cx('col-lg-3', 'col-md-3', 'col-sm-12')}>
              <div className={cx('card', 'mt-5', 'mb-5')}>
                <div className="card-body">
                  <h5 className="card-title"><span className='text-success'>Vân Anh</span>- Sinh viên</h5>
                  <p className="card-text">
                  Em hay mua cây tại đây để tặng sinh nhật bạn, lần nào bạn cũng ưng nhé, chưa thấy cây nào trồng bị chết cả, chỉ được cái là sống rất khỏe bạn cứ khoe em hoài ấy ạ.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Review