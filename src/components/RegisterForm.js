import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { customInput, customSelect } from './fields';

class RegisterForm extends Component {
    render() {
        const { handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit}>
                <div>
                    <Field name="name" component={customInput} type="text" label="Name" />
                </div>
                <div>
                    <Field name="preference" component={customSelect} label="Preferred Formatting" />
                </div>
                <div>
                    <Field name="newsletter" component={customInput} type="checkbox" label="Sign up to Newsletter?" />
                </div>
                <button type="submit">Submit</button>
            </form>
        );
    }
}

export default reduxForm({ form: 'register' })(RegisterForm);