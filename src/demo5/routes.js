import React from 'react'
import { Route } from 'react-router'
import Layout from './containers/Layout'
import C1 from './containers/C1'
import C2 from './containers/C2'
import { IndexRoute } from 'react-router';
// console.log(123)
export default (
	<Route path="/" component={Layout}>
		<Route path="/a" component={C1} />
		<Route path="/b" component={C2} />
	</Route>
)
