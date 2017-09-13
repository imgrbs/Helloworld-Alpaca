import React from 'react'

class WhyPage extends React.Component {

  render() {
    return (
      <div name="what" id="what" className="row why-height">
        <div className="col-12 text-center">
          <div className="row">
            <div className="col-lg-6">
              <img className="what-text" src="../../static/img/what.png" alt="what" />
              <p>
                HelloWorld #Alpaca เปรียบเหมือนเทือกเขาที่พร้อมต้อนรับเหล่าอัลปากาตัวน้อยที่พึ่งเข้ามายังฝูงคณะ SIT ทั้ง IT และ CS  มาผจญภัยด้วยกัน โดยเราจะมีอัลปาการุ่นใหญ่ อย่างพี่ๆ Alchemist มาต้อนรับน้องๆเพื่อไปฝึกฝนในด้านต่างๆที่น้องๆสนใจ  ไม่ว่าจะเป็น ทีม Hello-FrontEnd, ทีม Hello-Design ,ทีม Hello-Game และ ทีม Hello-Infra พี่ๆ อัลปากาพร้อมที่จะต้อนรับน้องๆในทุกวันอังคารและวันพฤหัสบดี เพื่อฝึกฝนให้น้องๆได้เป็นอัลปากาที่มีความสง่างาม ควบคู่ไปกับความรู้  มาเข้าร่วมเป็นส่วนหนึ่งของฝูงเพื่อ ป่าวประกาศศักยภาพในเทือกเขา SIT ที่พวกเราเหล่าอัลปากาได้ถือครองอยู่“เส้นใยจากพระเจ้า” ไม่ใช่ใครจะมีก็ได้ มีเพียงAlpacaเท่านั้น ที่จะได้รับสมยานามนี้…  
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