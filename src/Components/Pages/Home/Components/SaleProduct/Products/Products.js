import React, { useEffect, useState } from 'react'
import * as productService from "~/services/productService";
import {Link} from 'react-router-dom';

function Products() {
  const [apiData, setapiData] = useState([]);

  const getApiData = () => {
    const getData = async () => {
      const data = await productService.getAll()
      setapiData(data)
    }
    getData()
  }

  useEffect(() => {
    getApiData();
  }, [])
  return (
    <>
      {
        apiData.map((items, index) => {
          return items.id < 4 ? (
            <div className="card col-md-3 mt-5 mb-5 d-inline-block mr-5" key={index}>
              <img className="card-img" src={items.main_image} alt="Card cap" />
              <div className="card-body">
                <h6 className='card-title text-success text-truncate'>
                  <Link to={`/details/${items.id}`} className='text-decoration-none text-success'>
                    {items.prod_name}
                  </Link>
                </h6>
                <p className="card-text text-center">{items.prices}.000</p>
              </div>
            </div>
          ) :
            <div key={index}></div>
        })
      }
    </>
  )
}

export default Products