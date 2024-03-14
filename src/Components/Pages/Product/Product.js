import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import style from "./Product.module.css";
import portfolio_banner from '~/Assets/portfolio_banner.png'
import { Link } from "react-router-dom";
import * as productServices from '~/services/productService'
// import { useCart } from "react-use-cart";
// import Cart from "../Cart/Cart";55

const cx = classNames.bind(style);

function Product() {

  const [products, setProducts] = useState([]);
  const [filterKey, setFilterKey] = useState('');


  useEffect(() => {
    const filterByKey = async (filterKey) => {
      const data = await productServices.filterByKey(filterKey);
      setProducts(data);
    }
    filterByKey(filterKey);
  }, [filterKey])

  var _html = []

  const paginate = () => {
    for (let index = 1; index <= 2; index++) {
      _html.push(<li className="page-item" key={index}><a className="page-link" href="..." onClick={(e) => getDatas(index, e)}>{index}</a></li>)
    }
  }

  paginate();

  const getDatas = (index, e) => {
    e.preventDefault();
    const getData = async () => {
      const data = await productServices.getAll(index);
      setProducts(data)
    }
    getData();
    window.scrollTo(0, 0)
  }

  return (
    <>
      <div className={cx('bg-product', 'mt-2')}>
        <div>
          <img src={portfolio_banner} alt="" className="w-100" />
        </div>
        <div className='position-relative'>
          <p className={cx('text-uppercase', 'all-product')}>Tất cả sản phẩm</p>
        </div>
      </div>
      <div className="container pb-2 pt-3">

        <div className="row pb-3">
          <div className="col-lg-3 col-md-4 mb-3 mt-3">
            <div className="text-left ">
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-6 col-xs-6 col-6">
                  <h4 className="font-weight-bold" onClick={() => setFilterKey('')}>Loại cây</h4>
                  <span className={cx('btn', 'filterline', 'acc', 'mt-2')} name="Cây văn phòng" onClick={() => setFilterKey('category_id=1')}>Cây văn phòng</span>
                  <div className={cx('border-custom')}></div>
                  <br />
                  <span className={cx('btn', 'filterline', 'acc')} name="Thân cỏ" onClick={() => setFilterKey('category_id=2')}>Thân cỏ</span>
                  <div className={cx('border-custom')}></div>
                  <br />
                  <span className={cx('btn', 'filterline', 'acc')} name="Thân gỗ" onClick={() => setFilterKey('category_id=3')}>Thân gỗ</span>
                  <div className={cx('border-custom')}></div>
                  <br />
                  <span className={cx('btn', 'filterline', 'acc')} name="Thân lá" onClick={() => setFilterKey('category_id=4')}>Thân lá</span>
                  <div className={cx('border-custom')}></div>
                  <br />
                  <span className={cx('btn', 'filterline', 'acc')} name="Thân leo" onClick={() => setFilterKey('category_id=5')}>Thân leo</span>
                  <div className={cx('border-custom')}></div>
                  <br />
                </div>
                <div className="col-lg-12 col-md-12 col-sm-6 col-xs-6 col-6 mt-3">
                  <h4 className="font-weight-bold" onClick={() => setFilterKey('')}>Theo giá</h4>
                  <span className={cx('btn', 'filterline', 'acc')} onClick={() => setFilterKey('prices_gte=50&prices_lte=100')}>50.000 ~ 100.000</span>
                  <div className={cx('border-custom')}></div>
                  <br />
                  <span className={cx('btn', 'filterline', 'acc')} onClick={() => setFilterKey('prices_gte=100&prices_lte=150')}>100.000 ~ 150.000</span>
                  <div className={cx('border-custom')}></div>
                  <br />
                  <span className={cx('btn', 'filterline', 'acc')} onClick={() => setFilterKey('prices_gte=150&prices_lte=200')}>150.000 ~ 200.000</span>
                  <div className={cx('border-custom')}></div>
                  <br />
                  <span className={cx('btn', 'filterline', 'acc')} onClick={() => setFilterKey('prices_gte=200&prices_lte=250')}>200.000 ~ 250.000</span>
                  <div className={cx('border-custom')}></div>
                  <br />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-9 col-md-8 mt-3">
            <h4>Tất cả sản phẩm</h4>
            <div className="row">
              {products.map((product) => {
                return (
                  <div className="col-lg-3 col-sm-6 mt-3" key={product.id}>
                    <div className="card mb-3 shadow-sm">
                      <img className="card-img-top" src={product.main_image} alt="" />
                      <div className="card-body text-truncate text-center">
                        <p className={cx('card-text', 'text-center')}>
                          <Link to={`/details/${product.id}`} className={cx('text-product', 'text-decoration-none')}>
                            {product.prod_name}
                          </Link>
                        </p>
                        <p className={cx('text-center', 'text-success', 'prices')}>{product.prices}.000</p>
                      </div>

                    </div>
                  </div>

                )
              })}
            </div>
            
          </div>
        </div>
      </div>
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-end pr-5">
          <li className="page-item">
            <a className="page-link" href="..." aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          {
            _html.map(items => {
              return items;
            })
          }
          <li className="page-item">
            <a className="page-link" href="..." aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Product;
