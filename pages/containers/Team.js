import React from 'react'
import styled from 'styled-components'

import Modal from '../../components/Modal'

const Box = styled.div`
  margin: 1em 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  
  img {
    z-index: 3;
  }

  span {
    font-size: 35px;
    z-index: 3;
    cursor: pointer;
    color: ${props => props.color ? props.color : '#fff' };
  }
`
const Cloud = styled.img`
  height: 150px;
`

const CloudLeft = Cloud.extend`
  top: 7em;
  left: 0;
`

const AlpacaLeft = Cloud.extend`
  top: 2.5em;
  left: 5em;
`

const CloudRight = Cloud.extend`
  top: 19em;
  right: 0;
`

const AlpacaRight = Cloud.extend`
  top: 14.5em;
  right: 3em;
`


class TeamPage extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      oneOn : false,
      twoOn : false,
      threeOn : false,
      fourOn : false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(n) {
    switch (n) {
      case 1:this.setState({ oneOn: true });break;
      case 2:this.setState({ twoOn: true });break;
      case 3:this.setState({ threeOn: true });break;
      default:this.setState({ fourOn: true });break;
    }
  }

  

  render() {
    return (
      <div name="team" id="team" className="row team-height">
        <CloudLeft src="../../static/img/cleft.png" alt="cloud" className="cloud" />
        <AlpacaLeft src="../../static/img/joox1.png" alt="cloud" className="joox joox-left" />
        <CloudRight src="../../static/img/cright.png" alt="cloud" className="cloud" />
        <AlpacaRight src="../../static/img/joox2.png" alt="cloud" className="joox joox-right" />
        <div className="col-12 text-center">
          <img className="what-text" src="../../static/img/team.png" alt="team" />
        </div>
        <div className="col-12 text-center">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <Box onClick={() => { this.handleClick(1) }} color="#A56CFF">
                  <img className="team-logo-top" src="../../static/img/font.png" alt="" />
                  <span>Front-End</span>
                  <h5 className="animated infinite pulse">[Read More]</h5>
                </Box>
                <Modal pic={'al4.png'} title={'Hello-FrontEnd'} desc={`
                พบกับผู้สรรสร้างหน้าตาของเว็บให้ออกมาใช้งานได้จริง โดยพี่ๆ จะมี Workshop เทรนน้องๆ <br/>
                <b>แม้น้องจะไม่มีพื้นฐาน พี่ๆก็จะเป็นคนสอนน้อง ให้เป็นผู้สร้างหน้าเว็บ ดั่งพ่อมดเสกเวทมนต์</b> 
                ไม่ว่าจะเป็นเรื่อง HTML หรือการเขียน CSS จนถึงการ เขียน JavaScript ด้วย React Library! 
                ที่เป็นที่ต้องการของตลาดและสามารถใช้ทำงานได้จริง หรือแม้กระทั้งการจัดหน้าเว็บยังไงให้สวยงาม
                 และ น่าสนใจ มาเจอกันได้ที่<b>#HelloFrontEnd</b> 🙂
                `} handle={() => { this.setState({ oneOn : false}) }} on={this.state.oneOn} />
              </div>
              <div className="col-md-3">
                <Box onClick={() => { this.handleClick(2) }} color="#D4FF36">
                  <img className="team-logo-top" src="../../static/img/de.png" alt="" />
                  <span>Design</span>
                  <h5 className="animated infinite pulse">[Read More]</h5>
                </Box>
                <Modal pic={'al7.png'} title={'Hello-Design'} desc={`
                ถ้าน้องๆ เข้ามาใน <b>#HelloDesign</b> น้องๆ จะได้พบกับเนื้อหาที่พี่ๆ เตรียมไว้มากมาย ไม่ว่าจะเป็น การดราฟ การลงสี แสง และเงา ออกแบบตัวละคร รวมถึงมาทำความรู้จักกับ UX/UI ซึ่งเป็นทักษะที่น่าจับตามองในยุคนี้!! พิเศษสุดๆ กับการสอนใช้โปรแกรมตัวใหม่ที่กำลังมาแรงจากค่าย Adobe อย่าง <u>Experience Design</u> ที่จะทำให้การออกแบบเป็นเรื่องง่าย!
                <b>ถึงแม้ความรักจะออกแบบไม่ได้ แต่ #HelloDesign จะให้น้องทั้งความรักและความรู้ในการออกแบบสิ่งต่างๆ </b> แล้วเข้ามาเป็นส่วนหนึ่งในการสร้างสรรค์งานที่ไม่มีขอบเขตจำกัดไปด้วยกัน!
                `} handle={() => { this.setState({ twoOn : false}) }} on={this.state.twoOn} />
              </div>
              <div className="col-md-3">
                <Box onClick={() => { this.handleClick(3) }} color="#FF6666">
                  <img className="team-logo-top" src="../../static/img/game.png" alt="" />
                  <span>Game</span>
                  <h5 className="animated infinite pulse">[Read More]</h5>
                </Box>
                <Modal pic={'al8.png'} title={'Hello-Game'} desc={`หากน้องๆเป็นหนึ่งในผู้ที่ชื่นชอบเกม มาร่วมเป็นส่วนหนึ่งกับ <b>#HelloGame</b> แล้วน้องจะได้พับกบ เอ้ย พบกับ
                  <b>ประสบการณ์มากมายที่น้องอาจจะหาที่ไหนไม่ได้แล้วจากพี่ๆ </b> ทั้งการออกแบบและสร้างสรรค์เกมของตัวเองขึ้นมา
                  การเขียนโปรแกรมสำหรับเกม การทำ animation spritesheet ให้เกมมีชีวิตชีวา รวมถึงการวางแผนโครงสร้างภายในเกมและ
                  การเลือก sound ที่เหมาะสมสำหรับเกม <br />&nbsp; &nbsp; &nbsp;  ถ้าน้องๆเป็นหนึ่งในผู้ชื่นชอบเอกลักษณ์ของเกม <b>"อยากสร้างเกม"</b> มาเป็นส่วนหนึ่งกับพวกเราซิ`} handle={() => { this.setState({ threeOn : false}) }} on={this.state.threeOn} />
              </div>
              <div className="col-md-3">
                <Box onClick={() => { this.handleClick(4) }} color="#41E0A7">
                  <img className="team-logo-top" src="../../static/img/infra.png" alt="" />
                  <span>Infrastructure</span>
                  <h5 className="animated infinite pulse">[Read More]</h5>
                </Box>
                <Modal pic={'al6.png'} title={'Hello-Infra'} desc={`
                หากน้อง ๆ อยากใช้ Linux เป็น หรือมีเว็บแต่จะเอาขึ้นไปบน Internet 
                <b>#HelloInfra</b> จะพาน้อง ๆ ไปตะลุยลง ดัน Linux Command, YUM, NPM, และ NGINX ! 
                เพื่อให้น้อง ๆ ใช้งานเป็น และใช้กับงานจริงได้ หากคำที่พิมมาเมื่อกี้ไม่เคยเห็นไม่เคยได้ยิน 
                <b>ไม่ต้องกลัวว่าจะทำไม่ได้ พี่ ๆ จะพาน้อง ๆ ไล่ตั้งแต่บอสตัวเล็ก ไปจนตัวใหญ่ไม่ต้องกลัว HP หมดกันเลย ~ </b>
                `} handle={() => { this.setState({ fourOn : false}) }} on={this.state.fourOn} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default TeamPage