import React from 'react'

class WhenPage extends React.Component {
  render() {
    return (
      <div id="when" className="row when-height">
        <div style={{ height:'250px' }} className="col-12 text-center col-lg-6">
          <img className="flip alpaca" src="../../static/img/al8.png" alt="alpaca" />
        </div>
        <div className="col-12 text-center col-lg-6">
          <img className="what-text" src="../../static/img/when.png" alt="when" />
          <p>
            Hello World Lorem Ipsum คือ เนื้อหาจำลองแบบเรียบๆ ที่ใช้กันในธุรกิจงานพิมพ์หรืองานเรียงพิมพ์ มันได้กลายมาเป็นเนื้อหาจำลองมาตรฐาน ของธุรกิจดังกล่าวมาตั้งแต่ศตวรรษที่ 16 เมื่อเครื่องพิมพ์โนเนมเครื่องหนึ่งนำรางตัวพิมพ์มาสลับสับตำแหน่ง ตัวอักษรเพื่อทำหนังสือตัวอย่าง Lorem Ipsum อยู่ยงคงกระพันมาไม่ใช่แค่เพียงห้าศตวรรษ
          </p>
        </div>
      </div>
    )
  }
}

export default WhenPage