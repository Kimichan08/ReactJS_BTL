import React, { useEffect, useState } from 'react';
import style from './Favorite.module.css';
import classNames from 'classnames/bind';
import * as productService from "~/services/productService";
import {Link} from 'react-router-dom';

const cx = classNames.bind(style);

function Favorite() {

  const [apiData, setapiData] = useState([]);

  const getApiData = () => {
    const getData = async () => {
      const data = await productService.getAll(2)
      setapiData(data)
    }
    getData()
  }

  useEffect(() => {
    getApiData();
  }, [])

  return (
    <div className={cx('container')}>
      <h4 className={cx('mt-5', 'text-uppercase', 'font-weight-bold')}>Có thể bạn thích</h4>
      <div className={cx('row')}>
        {
          apiData.map((items, index) => {
            return items.id > 11 ? (
              <div className={cx('col-lg-3','col-md-3','col-sm-1')}>
                <div className={cx('card', 'd-inline-block', "mt-3")} key={index}>
                  <img className="card-img-top" src={items.main_image} alt="Card cap" />
                  <div className="card-body">
                    <p className={cx('card-text', 'text-center')}>
                      <Link to={`/details/${items.id}`} className={cx('text-product', 'text-decoration-none')}>
                        {items.prod_name}
                      </Link>
                    </p>
                    <p className={cx('text-center', 'text-success','prices')}>{items.prices}.000</p>
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

export default Favorite