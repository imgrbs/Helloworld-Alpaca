import React from 'react'

class WhyPage extends React.Component {
  render() {
    return (
      <div className="row why-height">
        <div className="col-12 text-center">
          <div className="row">
            <div className="col-lg-6">
              <h1 className="what-text">What?</h1>
              <p> Hello World Lorem Ipsum คือ เนื้อหาจำลองแบบเรียบๆ
              ที่ใช้กันในธุรกิจงานพิมพ์หรืองานเรียงพิมพ์ มันได้กลายมาเป็นเนื้อหาจำลองมาตรฐาน
              ของธุรกิจดังกล่าวมาตั้งแต่ศตวรรษที่ 16 เมื่อเครื่องพิมพ์โนเนมเครื่องหนึ่งนำรางตัวพิมพ์มาสลับสับตำแหน่ง
              ตัวอักษรเพื่อทำหนังสือตัวอย่าง Lorem Ipsum อยู่ยงคงกระพันมาไม่ใช่แค่เพียงห้าศตวรรษ</p>
            </div>
            <div className="col-lg-6">
              <img style={{ height: '100%', width: '100%'}} src="../../static/img/alpaca.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default WhyPage