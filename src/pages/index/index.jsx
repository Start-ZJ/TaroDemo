import { Component } from 'react'
import { View, Text, Image, Button } from '@tarojs/components'
import { AtIcon } from 'taro-ui'
import Taro from '@tarojs/taro'
import './index.scss'
const userFooterAry = [{
  content: '发布工单',
  value: '1',
  Icon: <AtIcon value='bookmark' />,
  fun: () => {
    Taro.redirectTo({
      url: '/pages/userList/userList'
    })
  }
}, {
  content: '我的',
  value: '2',
  Icon: <AtIcon value='home' />,
  fun: () => {
    Taro.redirectTo({
      url: '/pages/personalParticulars/personalParticulars'
    })
  }
}];
const adminFooterAry = [{
  content: '单据汇总',
  value: '3',
  Icon: <View className='at-icon at-icon-folder' />
}, {
  content: '设置',
  value: '4',
  Icon: <View className='at-icon at-icon-settings' />
}];
export default class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      type: 'user'
    }
  }
  componentWillMount() {
    wx.login({
      success(res) {
        if (res.code) {
          console.log('Index  success  res.code---->', res.code)
          // 拿到code 请求 自定义 下文 2中 服务端（开发者服务器） 获取 openid、session_key、unionid
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    })
    wx.getUserInfo({
      success: function (res) {
        console.log('Index  componentWillMount  res---->', res)
        var userInfo = res.userInfo
        var nickName = userInfo.nickName
        var avatarUrl = userInfo.avatarUrl
        var gender = userInfo.gender //性别 0：未知、1：男、2：女
        var province = userInfo.province
        var city = userInfo.city
        var country = userInfo.country
      }
    })
  }
  componentDidMount() { }
  componentWillUnmount() { }
  componentDidShow() { }
  componentDidHide() { }
  renderFooterDOM = (item) => {
    const { value, content, Icon, fun } = item;
    const Icon2 = Icon;
    return (
      <View className='homeFooterSon' key={value} onClick={() => { fun ? fun() : null }}>
        {Icon2}
        <View className='homeFooterContent'>{content}</View>
      </View>)
  }
  tobegin = (res) => {
    console.log('Index  res---->', res)
    // 保存用户信息微信登录
    // Taro.setStorage({
    //   key: "userinfo",
    //   data: res.detail.userInfo
    // });
  }
  render() {
    const { type } = this.state;
    const footerAry = type === 'user' ? userFooterAry : adminFooterAry;
    return (
      <View className='index'>
        <View className='homeBox'>
          {/* <View className='homeBody'>
            <Image className='homeBodyPng' src={require('./images/background.png.jpg')} />
          </View> */}
          {<Button
            className='btn'
            openType='getUserInfo'
            // onGetUserInfo={this.tobegin}
            type='primary'
            lang='zh_CN'
          >
            开启缘分
          </Button>}
          {/* <Button openType="getPhoneNumber" bindgetphonenumber="getPhoneNumber">s</Button> */}
          <Button
            className='login-buttoNor'
            type="primary"
            open-type="getUserInfo"
            onGetUserInfo={this.tobegin}
          >微信获取用户信息</Button>
          <View className='homeFooter'>
            {footerAry.map(item => this.renderFooterDOM(item))}
          </View>
        </View>
      </View >
    )
  }
}
