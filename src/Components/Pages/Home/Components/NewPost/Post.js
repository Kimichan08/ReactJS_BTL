import React, { useEffect, useState } from 'react';
import * as newsService from "~/services/newsService";
import classNames from 'classnames/bind';
import style from './Post.module.css';
import { BsClockFill } from 'react-icons/bs';

const cx = classNames.bind(style);

function Post() {

  const [apiData, setapiData] = useState([]);

  const getApiData = () => {
    const getData = async () => {
      const data = await newsService.getAll()
      setapiData(data)
    }
    getData()
  }

  useEffect(() => {
    getApiData()
  }, [])

  return (
    <div className={cx('container', 'mt-5')}>
      <h4 className={cx('text-uppercase', 'font-weight-bold')}>Bài viết mới</h4>
      <div className='row'>
        {
          apiData.map((items, index) => {
            return items.id < 4 ? (
              <div className="col-lg-4 col-md-4 col-sm-6 mt-3" key={index}>
                <div className={cx("card", "mb-4", "shadow-sm","mt-3")}>
                  <img className={cx("card-img-top")} src={items.images} alt="" />
                  <div className="card-body">
                    <p className={cx("card-text", "text-header")}>
                      {items.title}
                    </p>
                    <p className={cx("card-text",)}>
                      <BsClockFill />
                      {items.dateTime}
                    </p>
                    <p className="text-truncate">
                      {items.content}
                    </p>
                    <br />
                  </div>
                </div>
              </div>
            ) : (
              <div key={index}></div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Post