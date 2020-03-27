import React, {useRef, useEffect, useState, useChain} from 'react'
// import { Container, Row, Col } from 'react-bootstrap'
import {useTransition, animated} from 'react-spring'

function AdSlide(props){
    //外層是section bk-ads

    const [blockTxtHeight, setBlockTxtHeight] = useState(0)

    const blockTextRef = useRef(null)

    useEffect(()=>{
        const height = blockTextRef.current.clientHeight;
        setBlockTxtHeight(height)
    },[blockTextRef.current])

    const Blocktransitions = useTransition(props.show, null, {
        trail: 400,
        from: {right: 0, width: '100%', height: '100%', background: 'black', position: 'absolute', top: 0, transform: 'translateX(-100%)'},
        enter: {transform: 'translateX(0%)'},
        leave: {transform: 'translateX(100%)'}
    })

    // useChain(open ? [])

    // console.log(props)
    return(
        <div className={`bk-ad`}>
            <div className={`bk-ad-block`}>
                <div className="bk-block-num">
                    #{props.num}
                </div>
                <div className="bk-block-text">
                    <span className="bk-h3">
                        {props.data.blockTitle}
                    </span>
                    <span className="bk-h5">
                        {props.data.blockSubTitle}
                    </span>
                </div>
            </div>
            <div className={`bk-ad-slide`}>
                <div className="bk-ad-img"></div>
            </div>
            <div 
            className={`bk-ad-text`} 
            ref={blockTextRef}
            style={{marginTop: `-${blockTxtHeight/2}px`}}
            >
                {Blocktransitions.map(({item, key, props})=>{
                    // console.log(item)
                    return !item && (<animated.div className='bk-text-blocker' style={props}>
                    </animated.div>)
                })}
                    <h3>{props.data.title}</h3>
                    <h6 className="bk-white">
                        {props.data.subTitle}
                    </h6>
                    <p>
                        {props.data.content}
                    </p>
                    <button className="bk-btn-white">
                        {props.data.btnTxt}
                    </button>
            </div>
        </div>
    )
}

export default AdSlide