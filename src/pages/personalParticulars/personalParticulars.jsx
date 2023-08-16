import { Component } from 'react'
import { View, Picker } from '@tarojs/components'
import {  } from 'taro-ui'
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
  render() {
    return (
      <View className='personalParticulars'>personalParticulars
      </View>
    )
  }
}
