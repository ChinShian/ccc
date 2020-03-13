import React ,{useEffect ,useState}from 'react'
import SideFilter from './components/SideFilter'
import Bread from './components/Bread'
import { BrowserRouter as Router, Route, Link, Switch ,withRouter } from 'react-router-dom'
import '../css/main.css'
import './css/GetCoupon.scss'
import CouponItem from './components/CouponItem'

//redux
import { connect } from 'react-redux'
//action
import { bindActionCreators } from 'redux'
import {formServerCouponData,getCoupon} from '../actions/index'

function GetCoupon(props) {

  const [loaded,setLoaded] = useState(false)

  useEffect(()=>{
      props.formServerCouponData()
      setLoaded(true)
  },[])

 //篩選功能
  const filterNum = props.vendor.length

  const filterCouponItem = props.data.map((val,ind)=>{
    if(props.vendor.indexOf(val.cp_vendor) > -1){
      return <CouponItem key={ind} data={props.data[ind]} />
    }
  })

//全部顯示
  const allCouponItem = props.data.map((val,ind)=>{
    return <CouponItem key={ind} data={val} />
  })

//取得品牌list
 let vendorList = []
 for(let i=0;i<props.data.length;i++){
   if(vendorList.indexOf(props.data[i].cp_vendor) === -1){
    vendorList.push(props.data[i].cp_vendor)
   }
 }
  console.log('vlist',vendorList)

  return (
    <>
      <Bread />
      <div className="row wrap">
        {/* <!-- 側邊篩選欄 --> */}
        <SideFilter list={vendorList}/>
        {/* <!-- 右邊coupon --> */}
        <div className="col col-sm-9">
          <div className="row">
            {/* <!-- 領取 --> */}
            {filterNum?filterCouponItem:allCouponItem}
          </div>
        </div>
      </div>
    </>
  )
}

// 選擇對應的reducer
const mapStateToProps = store => {
  return { data: store.getCouponData ,
            vendor: store.filterCoupon,}
}

//action
const mapDispatchToProps = dispatch =>{
  return bindActionCreators({
    formServerCouponData,getCoupon
  },dispatch)
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(GetCoupon))
