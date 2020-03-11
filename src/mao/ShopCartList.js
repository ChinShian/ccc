import React, { useState, useEffect, useCallback, useRef } from 'react'
// import logo from '../logo.svg'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'react-bootstrap'
import Toast from 'react-bootstrap/Toast'
import { Link } from 'react-router-dom'
import MaoShopCartBTN from '../components/MaoShopCartBTN'
import MaoCartShopTotal from '../components/MaoCartShopTotal'
import {withRouter} from 'react-router-dom'

const dataItem=[{id:6,price:10},{id:2,price:20},{id:90,price:30},{id:4,price:40},{id:5,price:50}]
function ShopCartList(props) {
  const [mycart, setMycart] = useState([])
  const [loadcount, setLoadcount] = useState(false)
  console.log(props)
const dataList=[]
function getLocalStorage(){
  let getCart=localStorage.getItem('cart')?JSON.parse(localStorage.getItem('cart')):[]
  // console.log(getCart)
}
  // 數量增加按鈕
  // function a(e) {
  //   let getNum = +e.target.getAttribute('data-value') * 1
  //   let b = e.target.parentNode.children[1]
  //   b.value = +b.value + getNum
  // }
useEffect(()=>{
  getLocalStorage()
},[loadcount])
  for (let i = 0; i < dataItem.length; i++) {
    dataList.push(
      <li
        key={dataItem[i]}
        className="d-flex"
        style={{
          padding: '15px 0px',
          width: '900px',
          margin: '0px 15px',
          borderBottom: '2px solid #efefef',
          padding: '10px',
        }}
      >
        <img src="https://fakeimg.pl/125/" style={{ margin: '0px 20px' }} />
        <div
          className="d-flex flex-column justify-content-between"
          style={{ margin: '0px 50px' }}
        >
          <p style={{ fontSize: '18px' }}>
            <b>SONY 真無線降噪入耳式耳機WF-1000XM3</b>
          </p>
          <div className="d-flex justify-content-between">
            <p style={{ fontSize: '18px' }}>價格7000</p>
            <div
              className="d-flex justify-content-between align-items-center"
              style={{
                height: '30px',
                overflow: 'hidden',
                border: '1px solid #ddd',
                width: '85px',
              }}
            >
               <MaoShopCartBTN 
              addItems={dataItem[i]}
              count='-1'
              />
              <input
                placeholder="1"
                value='1'
                type="text"
                className="text-center w-50 m-0"
                style={{ outline: 'none', border: 'none',width:'30px'}}
              />
              {/* <button
                className="text-center"
                style={{ fontSize: '30px', background: '#ddd', width: '30%' }}
                data-value="1"
              >
                +
              </button> */}
              <MaoShopCartBTN
              addItems={dataItem[i]}
              count='1'
              />
            </div>
            <p style={{ fontSize: '18px' }}>
              <b>$7000</b>
            </p>
          </div>
        </div>
        <div
          className="d-flex flex-column justify-content-center text-left"
          style={{ margin: '0 auto' }}
        >
          <div
            className="border d-flex align-items-center"
            style={{ padding: '8px 20px', margin: '10px' }}
          >
            <img
              src="..\img\header-footer\heart.svg"
              style={{ marginRight: '10px' }}
              alt=""
            />
            <span>刪除</span>
          </div>
          <div
            className="border d-flex align-items-center"
            style={{ padding: '8px 20px', margin: '10px' }}
          >
            <img
              src="..\img\header-footer\search.svg"
              style={{ marginRight: '10px' }}
              alt=""
            />
            <span>下次購買</span>
          </div>
        </div>
      </li>
    )
  }

  const behavior = (
    <ul
      className="nav nav-tabs"
      id="myTab"
      role="tablist"
      style={{ width: '975px' }}
    >
      <li className="nav-item">
        <Link
          className="nav-link active"
          id="home-tab"
          data-toggle="tab"
          to="/CartList"
          role="tab"
          aria-controls="home"
          aria-selected="true"
        >
          購物車
        </Link>
      </li>
      <li className="nav-item">
        <Link
          className="nav-link"
          id="profile-tab"
          data-toggle="tab"
          to="/CartList"
          role="tab"
          aria-controls="profile"
          aria-selected="false"
        >
          收藏
        </Link>
      </li>
    </ul>
  )
  return (
    <>
      {behavior}
      <div
        className="d-flex justify-content-between"
        style={{ position: 'relative' }}
      >
        <ul
          className="list-unstyled bg-white"
          style={{ maxWidth: '975px', marginLeft: '1px' }}
        >
          {dataList}
          <li>
            <Link
              style={{
                border: '1px solid #000',
                maxWidth: '315px',
                margin: '30px auto',
                display: 'block',
                textAlign: 'center',
                padding: '10px',
                color: '#fff',
                background: '#000',
              }}
              to="/"
            >
              前往結帳
            </Link>
          </li>
        </ul>
        <MaoCartShopTotal />
      </div>
      {/* </div> */}

      {/* </div> */}
    </>
  )
}
export default withRouter(ShopCartList)
