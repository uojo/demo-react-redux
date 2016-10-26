// 容器
import { bindActionCreators } from 'redux'
import React, { findDOMNode, Component } from 'react'

import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import {as1, as2} from '../actions/as1'


class App extends Component {
	constructor(props) {
		super(props)
	}
	
	//初始化渲染后触发，只执行一次
	componentDidMount() {
		// console.warn('[1]~lifecycle.初始化渲染后触发');
		
	}
	
	//每次接受新的props触发
	componentWillReceiveProps(nextProps) {
		// console.warn('lifecycle.每次接受新的props触发',nextProps);
		
	}
	
	fn1(){
		console.log( this.props );
		
		// 方式 1
		// this.props.history.push("/b");
		
		// 方式 2
		this.props.history.push({
			pathname: '/b',
			query: { q1: true },
			state: { s1: true }
		});
		// this.props.pushState(null, "#/b");
		
	}
	
	render() {
		// console.debug( this.props );
		
		return (
			<div>
				子容器-1：受 routes 触发
				<p> <a onClick={()=>this.props.as2()}> 执行 action </a> ：connect第二个参数可以是对象或函数</p>
				<p> <a onClick={this.fn1.bind(this)}>跳转路由</a> </p>
			</div>
		)
	};
	
}

//将reducers的return值注册到react的 props上
function mapStateToProps(state) {
	const { fn1 } = state;
	// console.log( "4.app.js~reducers->state=>props 将reducers的return值注册到react的 props", state );
	return {
		fn1
	};
}

//将state的 "指定值" 映射在props上，将 action的 "所有方法" 映射在props上
export default connect(mapStateToProps, {
	as1,
	as2,
})(App);
