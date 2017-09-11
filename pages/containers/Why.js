import React from 'react'

class WhyPage extends React.Component {
  render() {
    return (
      <div id="what" className="row why-height">
        <div className="col-12 text-center">
          <div className="row">
            <div className="col-lg-6">
              <img className="what-text" src="../../static/img/what.png" alt="what" />
              <p>
                HelloWorld #Alpaca คือ กิจกรรมการเรียนการสอนที่พี่ๆ Alchemist ได้เตรียมมาเพื่อน้องๆปี 1 คณะ SIT ทั้งน้องๆ IT และน้องๆ CS ได้มาพัฒนาความสามารถ ในด้านต่างๆที่น้องๆสนใจ น้องสามารถที่จะเลือกทีมจะเข้าศึกษาได้ ไม่ว่าจะเป็น ทีม Hello-FrontEnd, ทีม Hello-Design ,ทีม Hello-Game และ ทีม Hello-Infra พี่ๆทุกคนยินดีที่จะต้อนรับน้องๆเข้ามาร่วมกันเป็นส่วนหนึ่งในงานนี้นะคะ
              </p>
            </div>
            <div className="col-lg-6">
              <img style={{ height: '100%', width: '100%' }} src="../../static/img/al7.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default WhyPage