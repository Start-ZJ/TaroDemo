import { Component } from 'react'
import { View, Picker } from '@tarojs/components'
import { AtIcon, AtInput, AtCalendar, AtList, AtListItem, AtTextarea } from 'taro-ui'
import './index.scss'
const userFooterAry = [{
  content: '首页',
  value: '10',
  Icon: <AtIcon value='bookmark' />,
  fun: () => {
    Taro.redirectTo({
      url: '/pages//index/index',
    })
  }
}, {
  content: '我的',
  value: '2',
  Icon: <AtIcon value='home' />
}];
const ListTitleLine = (props) => {
  const { label } = props;
  return (<View className='listTitleLine'>{label}</View>)
}
export default class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      personName: '',//发布人姓名
      showTimePicker: false,//是否显示时间选择器
      currentDate: '',//选择的时间
      where: '',//选择的地点
      content: '',//工作内容
      memo: '',//备注
    }
  }
  componentWillMount() {

  }
  /** @description 页脚  */
  renderFooterDOM = () => {
    return (
      <View className='homeFooter'>
        {userFooterAry.map(item => (
          <View className='homeFooterSon' key={item.value}>
            {item.Icon}
            <View className='homeFooterContent'>{item.content}</View>
          </View>
        ))}
      </View>
    )
  }
  /** @description 显示时间选择组件  */
  showTimeModal = () => {
    const { currentDate } = this.state;
    return (
      <View className='timeModal'>
        <View className='timeModal-box'>
          <AtCalendar
            currentDate={currentDate}
            onSelectDate={(SelectDate) => { this.setState({ showTimePicker: false, currentDate: SelectDate.value.end }); }}
          />
        </View>
      </View>
    )
  }
  render() {
    const { personName, showTimePicker, currentDate, where, content, memo } = this.state;
    return (
      <View className='userList'>
        <View className='homeBox'>
          <AtInput
            name='value'
            title='发布人姓名'
            type='text'
            placeholder='请输入发布人姓名'
            value={personName}
            onChange={(value) => { this.setState({ personName: value }); }}
          />
          <AtList>
            <AtListItem
              title='预定时间'
              arrow='right'
              extraText={currentDate ? currentDate : '点击选择时间'}
              onClick={() => { this.setState({ currentDate: '', showTimePicker: true }) }}
            />
          </AtList>
          <ListTitleLine label='地点' />
          <AtTextarea
            placeholder='请输入地点'
            value={where}
            onChange={(value) => { this.setState({ where: value }); }}
          />
          <ListTitleLine label='具体工作内容' />
          <AtTextarea
            placeholder='请输入工作内容'
            value={content}
            onChange={(value) => { this.setState({ content: value }); }}
          />
          <ListTitleLine label='备注信息' />
          <AtTextarea
            placeholder='请输入备注信息'
            value={memo}
            onChange={(value) => { this.setState({ memo: value }); }}
          />
        </View>
        {this.renderFooterDOM()}
        {showTimePicker ? this.showTimeModal() : null}
      </View>
    )
  }
}
