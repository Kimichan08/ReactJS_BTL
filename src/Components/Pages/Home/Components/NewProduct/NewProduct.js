import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import * as productServices from "~/services/productService"
import style from "./NewProduct.module.css";
import { Link } from 'react-router-dom';

const cx = classNames.bind(style);

function NewProduct() {

    const [apiData, setapiData] = useState([]);

    const getApiData = () => {
        const getData = async () => {
            const data = await productServices.getAll()
            setapiData(data)
        }
        getData()
    }

    useEffect(() => {
        getApiData();
        window.scrollTo(0, 0)
    }, [])

    return (
        <div>
            <div className={cx("container")}>
                <div className={cx("row")}>
                    {
                        apiData.map((items, index) => {
                            return items.id < 9 ? (
                                <div className={cx('col-lg-3','col-md-3','col-sm-12')}>
                                    <div className={cx('card', 'd-inline-block', "mt-5")} key={index}>
                                        <img className="card-img-top" src={items.main_image} alt="Card cap" />
                                        <div className="card-body">
                                            <p className={cx('card-text', 'text-center')}>
                                                <Link to={`/details/${items.id}`} className={cx('text-product', 'text-decoration-none')}>
                                                    {items.prod_name}
                                                </Link>
                                            </p>
                                            <p className={cx('text-center','text-success','prices')}>{items.prices}.000</p>
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
        </div>
    )
}

export default NewProduct;