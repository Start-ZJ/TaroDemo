import { Component } from 'react'
import Taro from '@tarojs/taro';
import { View } from '@tarojs/components'
import { DateTimePicker } from './../../components/index';
import { AtInput, AtList, AtListItem, AtTextarea } from 'taro-ui'
import './index.scss';
import moment from 'moment';
import axios from 'axios';
const ListTitleLine = (props) => {
  const { label, isMust = false } = props;
  return (<View className='listTitleLine'>{isMust && <View className='mustTip'>*</View>}{label}</View>)
}
export default class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      personName: '',//发布人姓名
      currentDate: undefined,//选择的时间
      where: '',//选择的地点
      content: '',//工作内容
      memo: '',//备注
    },
      this.refTime = null;
  }
  componentWillMount() {
  }
  /** @description 保存接口  */
  workOrderSaving = () => {
    const { personName, currentDate, where, content, memo } = this.state;
    if (personName?.length == '') {
      Taro.showToast({ title: '请输入发布人姓名', icon: 'none' });
      return
    }
    if (!currentDate) {
      Taro.showToast({ title: '请选择预定时间', icon: 'none' });
      return
    }
    if (where?.length == '') {
      Taro.showToast({ title: '请输入地点', icon: 'none' });
      return
    }
    if (content?.length == '') {
      Taro.showToast({ title: '请输入具体工作内容', icon: 'none' });
      return
    }
    let params = { personName, currentDate, where, content, memo };
    console.log('Index  params---->', params)
    // axios.post('').then().catch()
  }
  /** @description 表单元素  */
  renderBodyDom = () => {
    const { personName, currentDate, where, content, memo } = this.state;
    return (<View className='homeBox'>
      <AtInput
        maxLength={8}
        name='value'
        title='发布人姓名'
        type='text'
        required={true}
        placeholder='请输入发布人姓名'
        value={personName}
        onChange={(value) => { this.setState({ personName: value }); }}
      />
      <AtList>
        <AtListItem
          title='预定时间'
          arrow='right'
          required={true}
          extraText={currentDate ? currentDate : '点击选择时间'}
          onClick={() => { this.setState({ currentDate: undefined }, () => { this.refTime.openModal() }) }}
        />
      </AtList>
      <ListTitleLine isMust={true} label='地点' required={true} />
      <AtTextarea
        placeholder='请输入地点'
        value={where}
        required={true}
        onChange={(value) => { this.setState({ where: value }); }}
      />
      <ListTitleLine isMust={true} label='具体工作内容' />
      <AtTextarea
        placeholder='请输入工作内容'
        value={content}
        required={true}
        onChange={(value) => { this.setState({ content: value }); }}
      />
      <ListTitleLine label='备注信息' />
      <AtTextarea
        placeholder='请输入备注信息'
        value={memo}
        onChange={(value) => { this.setState({ memo: value }); }}
      />
    </View>)
  }
  /** @description 提交按钮  */
  renderButtonDom = () => {
    return (<View className='renderButtonDom'>
      <View className='renderButtonDomButton' onClick={(() => { this.workOrderSaving() })}>提交</View>
    </View >)
  }
  render() {
    return (
      <View className='userList'>
        {this.renderBodyDom()}
        {this.renderButtonDom()}
        <DateTimePicker
          ref={e => this.refTime = e}
          onOk={({ current }) => { this.setState({ currentDate: current }) }}
          initValue={moment(new Date, 'YYYY-MM-DD hh:mm')}
          wrap-class="my-class"
          select-item-class="mySelector"
        />
      </View>
    )
  }
}
