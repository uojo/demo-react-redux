export const Tag_load = 'redux-form-examples/account/LOAD'
export const Request_submit = 'Request_submit'
export const Request_complete_form1 = 'Request_complete_form1'

export const requestSubmit = payload => ({ type: Request_submit, payload })

export function form1_load1(data){
	return {
		type:Tag_load,
		data
	}
}

export function form1_load2(data){
	console.log(123);
	return {
		type:Tag_load,
		data
	}
}