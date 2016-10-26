import * as Actions from './actions'



const reducer = (state = {
	step:0,
	data:null
}, action) => {
	console.debug("reducer_1", action, state );
	
	switch (action.type) {
		case Actions.Tag_load:
			return {
				data: action.data
			}
			
		case Actions.Request_complete_form1:
			return {
				step:1,
				data: action.payload
			}
			
		default:
			return state
	}
}

export default reducer;