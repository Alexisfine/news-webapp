import React, {useMemo} from 'react'
import timg from '../assets/images/timg.jpg'
import './HomeHead.less'

const HomeHead = (props) => {
  let {today} = props
  let time = useMemo(() => {
    let [,month, day] = today.match(/^\d{4}(\d{2})(\d{2})$/),
    area = ['Zero','Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
    return {month: area[+month], day}
  }, [today])

  return (
    <header className="home-head-box">
        <div className="info">
            <div className="time">
                <span>{time.day}</span>
                <span>{time.month}</span>
            </div>
            <h2 className="title">News WebApp</h2>
        </div>
        <div className="picture">
            <img src={timg} alt=''/>
        </div>
    </header>
  )
}

export default HomeHead