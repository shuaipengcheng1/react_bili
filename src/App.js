
/* 
@2021 
use 
React+Redux+React-redux+prop-types+Antd+react-thunk+react-router-dom
Ajax + Node.js(express) 
language
Es6 + jsx

*/




import React, { Component } from 'react'
import Top_nav from './Component/Top_nav/index';
import Redux from './Component/Nav/index'
import Text from './Component/Text/index'
import Ad from './Component/Ad/index'
export default class App extends Component {
  render() {

    return (
      <div>
        <Top_nav />
        <Redux/>
        <Text/>
        <Ad/>
      </div>
    )
  }
}
