import React from 'react'
import styled from 'styled-components'

const Paragraph = styled.p`
  text-align: left;
  text-indent: 1em;
  font-size: 1em; 
  letter-spacing: 0.025em;
`

class WherePage extends React.Component {
  render() {
    return (
      <div name="where" id="where" className="row where-height">
        <div className="col-12 text-center col-lg-6">
          <img className="what-text" src="../../static/img/where.png" alt="where" />
          <Paragraph>
            สถานที่เราจะจัดกันที่ <b>ตึก CB2 ชั้น 3</b> โดยเราจะแบ่งห้องของแต่ละทีม ทั้งหมด 4 ทีมด้วยกัน และจะมีพี่ๆแต่ละทีมคอยดูแล และช่วยเหลือน้องอย่างเต็มที่จ้า
          </Paragraph>
          <Paragraph>
            พี่ๆ อัลปาการุ่นใหญ่ จะรอรับน้องๆที่ CB2 ชั้น 3 โดยเราจะแบ่งส่วนให้น้องๆ แต่ละทีมได้มีพื้นที่ในการวิ่งเล่นท่องไปกับเนื้อหาต่างๆ ที่พี่เตรียมไว้สอน
          </Paragraph>
        </div>
      </div>
    )
  }
}

export default WherePage