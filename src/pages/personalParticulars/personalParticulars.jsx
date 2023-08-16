import { Component } from 'react'
import { View, Image } from '@tarojs/components'
import { AtList, AtListItem } from 'taro-ui'
import './index.scss';
const ListTitleLine = (props) => {
  const { label } = props;
  return (<View className='listTitleLine'>{label}</View>)
}
export default class PersonalParticulars extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  componentWillMount() {
  }
  renderUserInfoDom = () => {
    return (<View className='renderUserInfoDom'>
      <Image className='renderUserInfoDomUserInfoPng' src={require('./images/userInfo.png')} />
      <View className='renderUserInfoDom-User'>
        <View className='renderUserInfoDom-User-Text'>
          <View className='renderUserInfoDom-User-Text-Name'></View>
          <View className='renderUserInfoDom-User-Text-Mobile'></View>
        </View>
        <View className='renderUserInfoDom-User-Png'>
          <Image className='renderUserInfoDomUserInfoPng-User' src={'ss'} />
        </View>
      </View>
      <View className='renderUserInfoDom-BillInfo'>
        <View className='renderUserInfoDom-BillInfo-Item'>
          <View className='renderUserInfoDom-BillInfo-Label'>未开始</View>
          <View className='renderUserInfoDom-BillInfo-Num'>10</View>
        </View>
        <View className='renderUserInfoDom-BillInfo-Item'>
          <View className='renderUserInfoDom-BillInfo-Label'>进行中</View>
          <View className='renderUserInfoDom-BillInfo-Num'>10</View>
        </View>
        <View className='renderUserInfoDom-BillInfo-Item'>
          <View className='renderUserInfoDom-BillInfo-Label'>已结束</View>
          <View className='renderUserInfoDom-BillInfo-Num'>10</View>
        </View>
      </View>
    </View>)
  }
  renderEventLineDom = () => {
    return (<View>
      <AtList>
        <AtListItem title='未开始' arrow='right' onClick={() => { }} />
        <AtListItem title='进行中' arrow='right' onClick={() => { }} />
        <AtListItem title='已结束' arrow='right' onClick={() => { }} />
      </AtList>
    </View>)
  }
  render() {
    return (
      <View className='personalParticulars'>
        {this.renderUserInfoDom()}
        {this.renderEventLineDom()}
      </View>
    )
  }
}
