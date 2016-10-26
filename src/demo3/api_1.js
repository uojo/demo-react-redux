import {param} from 'jquery'
import {Request_submit, Request_complete_form1} from './actions'
import fetch from 'isomorphic-fetch'

export default store => next => action => {
	console.warn('1/3.dispatching_api_1', action);
	// console.log(`%c1/3.dispatching:default`, `color: green`, action);
	
	if( action.type == Request_submit ){
		return fetch("//assets.dxycdn.com/docs/files/post_mirror.php",{
				method: "POST",
				body: param(action.payload),
				headers: { "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8" }
			})
			.then(response => response.json())
			.then(function(rsp){
				console.log("api.response",rsp);
				if(rsp.success){
					return next({
						type:Request_complete_form1,
						payload:rsp.result
					});
				}
			});
			
	}else{
		next(action);
	}
	
	// console.info('3/3.next state', store.getState());
	
}