import React, { useEffect, useState } from 'react'
import * as newsService from "~/services/newsService";
import style from "./NewLeft.module.css";
import classNames from 'classnames/bind';
import {BsClockFill} from 'react-icons/bs';

const cx = classNames.bind(style);

function NewLeft() {
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
    <>
      {
        apiData.map((items, index) => {
          return items.id < 5 ? (
            <div className="col-md-6" key={index}>
              <div className={cx("card", "mb-4" ,"shadow-sm")}>
                <img className={cx("card-img-top")} src={items.images} alt="" />
                <div className="card-body">
                  <p className={cx("card-text", "text-header")}>
                    {items.title}
                  </p>
                  <p className={cx("card-text",)}>
                    <BsClockFill/>
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
    </>
  )
}

export default NewLeft