import React, { findDOMNode, Component } from 'react'
import { Field, reduxForm } from 'redux-form'

const validate = values => {
  console.warn("form2.js~validate",values);
  const errors = {}
  if (!values.username) {
    errors.username = 'Required'
  } else if (values.username.length > 15) {
    errors.username = 'Must be 15 characters or less'
  }
  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  if (!values.age) {
    errors.age = 'Required'
  } else if (isNaN(Number(values.age))) {
    errors.age = 'Must be a number'
  } else if (Number(values.age) < 18) {
    errors.age = 'Sorry, you must be at least 18 years old'
  }

  // 返回 errors 对象，其中包含 某字段错误时的文本
  // 注意：只执行一次

  return errors
}

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type}/>
      {touched && error && <span>{error}</span>}
    </div>
  </div>
)

const data = {  // used to populate "account" reducer when "Load" is clicked
  username: 'Jane',
  email: 'xxx'
}

class FormA extends Component {
	
	//初始化渲染后触发，只执行一次
	componentDidMount() {
		console.warn('[1]~lifecycle.form4.js~初始化渲染后触发', this.props);
		this.props.initialize(data);
		
	}
	
	//每次接受新的props触发
	componentWillReceiveProps(nextProps) {
		console.warn('lifecycle.form4.js~每次接受新的props触发',nextProps);
		// nextProps.initialize(data);
	}
	
	
	render() {
		console.debug( "6.form4.js~render 更新组件视图", this.props );
		
		const { handleSubmit, pristine, reset, submitting } = this.props
		
		return (
			<form onSubmit={handleSubmit}>
			  <h5>同步校验 sync validation</h5>
			  <Field name="username" type="text" component={renderField} label="Username"/>
			  <Field name="email" type="email" component={renderField} label="Email"/>
			  <Field name="age" type="number" component={renderField} label="Age"/>
			  <div>
				<button type="submit" disabled={submitting}>Submit</button>
				<button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
			  </div>
			</form>
		)
	};
}


export default reduxForm({
  form: 'form4',  // a unique identifier for this form
  validate
})(FormA)
