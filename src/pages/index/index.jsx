import { Component } from 'react'
import { View, Text, Image } from '@tarojs/components'
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
  render() {
    const { type } = this.state;
    const footerAry = type === 'user' ? userFooterAry : adminFooterAry;
    return (
      <View className='index'>
        <View className='homeBox'>
          <View className='homeBody'>
            <Image className='homeBodyPng' src={require('./images/background.png.jpg')} />
          </View>
          <View className='homeFooter'>
            {footerAry.map(item => this.renderFooterDOM(item))}
          </View>
        </View>
      </View>
    )
  }
}
