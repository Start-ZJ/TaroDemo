import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import { AtIcon } from 'taro-ui'
import './index.scss'
export default class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  componentWillMount() {

  }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  renderFooterDOM = (item) => {
    const { value, content, Icon } = item;
    const Icon2 = Icon;
    return (
      <View className='homeFooterSon' key={value}>
        {Icon2}
        <View className='homeFooterContent'>{content}</View>
      </View>)
  }
  render() {
    return (
      <View className='index'>
        <View className='homeBox'>
          <View className='homeCentent'>发布工单</View>
        </View>
      </View>
    )
  }
}
