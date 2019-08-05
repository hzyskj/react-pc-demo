import React, { Component } from 'react'
import { Divider } from 'antd';
export default class Foot extends Component {
  render() {
    const {isMobile} = this.props;
    return (
        <div className="container f-content ">
            <div className="col-md-20 col-sm-20">
                <div className="f-footer-link">
                  <a href="https://www.baidu.com" target="_blank" rel="noopener noreferrer">111111</a> <Divider type="vertical" /> 
                  <a href="https://www.baidu.com" target="_blank" rel="noopener noreferrer">2222</a> <Divider type="vertical" /> 
                  <a href="https://www.baidu.com" target="_blank" rel="noopener noreferrer">333</a> 
                </div>
                <div className="f-footer-des"> ©1997-{new Date().getFullYear()}  烟祭版权所有 <Divider type="vertical" /> 
                意见反馈：<a href="https://www.baidu.com">qq：1852242056</a></div>
            </div>
            {!isMobile&&
              <div className="col-md-4 col-sm-4 f-tar f-footer-code" >
                <img src="" width="100px" height="100px" alt= "烟祭图片" />
              </div>}
        </div>
    )
  }
}
