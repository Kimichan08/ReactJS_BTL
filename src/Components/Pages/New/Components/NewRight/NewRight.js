import React, { useEffect, useState } from 'react'
import * as newsService from "~/services/newsService"
import style from "./NewRight.module.css";
import classNames from 'classnames/bind';
import {BsClockFill} from 'react-icons/bs';

const cx = classNames.bind(style);
function NewRight() {
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
        <div>
            {
                apiData.map((items, index) => {
                    return items.id > 4 ? (
                        <div className={cx('card', 'ml-3', 'mb-4')} key={index}>
                            <h4 className={cx("mb-4")}>BÀI VIẾT NỔI BẬT</h4>
                            <img src={items.images} className={cx("card-img-top","card-new")} alt="..." />
                            <div className={cx("card-body","card")}>
                                <a className={cx("card-title","text-header")} href>{items.title}</a>
                                <p className={cx("card-text", "text-truncation")}>
                                    {items.content}
                                </p>
                                <p className={cx("card-text")}>
                                    <BsClockFill />
                                    {items.dateTime}
                                </p>
                            </div>
                        </div>
                    ) :
                        <div key={index}></div>
                })
            }
        </div>
    )
}

export default NewRight