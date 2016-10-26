// 容器
import { extend } from 'jquery';
import { bindActionCreators } from 'redux';
import React, { findDOMNode, Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import * as Actions from '../actions/layout'

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
		};
		
	}
	
	//初始化渲染后触发，只执行一次
	componentDidMount() {
		console.warn('lifecycle[1].初始化渲染后触发');
		
	}
	
	//每次接受新的props触发
	componentWillReceiveProps(nextProps) {
		console.warn('lifecycle[>1].每次接受新的props触发',nextProps);
		
	}
	
	render() {
		console.debug( "6.Layout.js~render 更新组件视图", this.props );
		
		// 来自继承
		const {children} = this.props;
		
		// 自己的 UI 属性
		// const {} = this.state;
		
		return (
			<div>
				
				<ol>
					<li><a href="#/a"> 路由A </a></li>
					<li><a href="#/b"> 路由B </a></li>
				</ol>
				
				{children}
			</div>
		)
	};
}

//将reducers的return值注册到react的 props上
function mapStateToProps(state) {
	console.log( "4.connect[>0]~reducers->state=>props 将reducers的return值注册到react的 props", state );
	// const {  } = state.da1;
	
	return {
		
	};
}

//将action的所有方法绑定到props上
function mapDispatchToProps(dispatch) {
	let actions = bindActionCreators(Actions, dispatch);
	// console.warn("connect[1]~action.*=>props 将action的所有方法绑定到 props", actions);
	return {
		actions
	};
}

//将state的 "指定值" 映射在props上，将 action的 "所有方法" 映射在props上
export default connect(mapStateToProps, mapDispatchToProps)(App);
