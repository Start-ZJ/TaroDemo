import { Component } from 'react'
import { View, Picker } from '@tarojs/components'
import { DateTimePicker } from './../../components/index';
import { AtIcon, AtInput, AtCalendar, AtList, AtListItem, AtTextarea } from 'taro-ui'
import './index.scss';
import axios from 'axios';
import moment from 'moment';
const ListTitleLine = (props) => {
  const { label } = props;
  return (<View className='listTitleLine'>{label}</View>)
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
      message.info('请输入人员姓名！');
      return
    }
    if (!currentDate) {
      message.info('请选择预定时间！');
      return
    }
    if (where?.length == '') {
      message.info('请输入地点！');
      return
    }
    if (content?.length == '') {
      message.info('请输入具体工作内容！');
      return
    }
    let params = { personName, currentDate, where, content, memo };
    console.log('Index  params---->', params)
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
        placeholder='请输入发布人姓名'
        value={personName}
        onChange={(value) => { this.setState({ personName: value }); }}
      />
      <AtList>
        <AtListItem
          title='预定时间'
          arrow='right'
          extraText={currentDate ? currentDate : '点击选择时间'}
          onClick={() => { this.setState({ currentDate: undefined }, () => { this.refTime.openModal() }) }}
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
    </View>)
  }
  /** @description 提交按钮  */
  renderButtonDom = () => {
    return (<View className='renderButtonDom'>
      <View className='renderButtonDomButton' onClick={(() => { })}>提交</View>
    </View >)
  }
  render() {
    return (
      <View className='userList'>
        {this.renderBodyDom()}
        {this.renderButtonDom()}
        <DateTimePicker
          ref={e => this.refTime = e}
          onOk={({ current }) => {  this.setState({ currentDate: current }) }}
          initValue={moment(new Date, 'YYYY-MM-DD hh:mm')}
          wrap-class="my-class"
          select-item-class="mySelector"
        />
      </View>
    )
  }
}
