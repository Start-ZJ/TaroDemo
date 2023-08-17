import { Component } from 'react'
import { View, Image } from '@tarojs/components'
import { AtList, AtListItem } from 'taro-ui'
import './index.scss';
const UserInfoList = [{
  label: '未开始',
  value: 10
}, {
  label: '进行中',
  value: 10
}, {
  label: '已结束',
  value: 10
}]
export default class PersonalParticulars extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userName: '坐看海潮听水',
      mobile: 13325715337,
      userPng: ''
    }
  }
  componentWillMount() {
  }
  renderUserInfoDom = () => {
    const { mobile, userName, userPng } = this.state;
    return (<View className='renderUserInfoDom'>
      <Image className='renderUserInfoDomUserInfo-Png' src={require('./images/userInfo.png')} />
      <View className='renderUserInfoDom-User'>
        <View className='renderUserInfoDom-User-Text'>
          <View className='renderUserInfoDom-User-Text-Name'>{userName}</View>
          <View className='renderUserInfoDom-User-Text-Mobile'>{`手机号码：${mobile}`}</View>
        </View>
        <View className={userPng?.length === 0 ? 'renderUserInfoDom-User-UserTwo' : 'renderUserInfoDom-User-UserOne'}>
          {userPng?.length === 0 ? <View className='renderUserInfoDom-User-text'>{userName.substring(userName?.length - 2, userName?.length)}</View> : <Image className='renderUserInfoDomUserInfoPng-User' src={userPng} />}
        </View>
      </View>
      <View className='renderUserInfoDom-BillInfo'>
        {UserInfoList.map((item, index) => (
          <View className='renderUserInfoDom-BillInfo-Item' key={index}>
            <View className='renderUserInfoDom-BillInfo-Label'>{item.label}</View>
            <View className='renderUserInfoDom-BillInfo-Num'>{item.value}</View>
          </View>))}
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
