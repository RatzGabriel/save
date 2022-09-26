import React from 'react';
import { Field, reduxForm } from "redux-form";

class CreateItem extends React.Component{


    renderError=({error,touched})=>{
            if(touched && error){
                return (
                    <div>
                        <div>
                            {error}
                        </div>
                    </div>
                )
            }
        }
    renderInput=({input, label,meta})=>{
    const className = `field ${meta.error && meta.touched ? 'error':'touched'}`
    return (
        <div>
            <label>{label}</label>
            <input {...input}></input>
            {this.renderError(meta)}
            <div>{meta.error}</div>
        </div>
        )
    }

    onSubmit(formValues){
        console.log(formValues);
    }

    render(){
    return (
        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
            <Field name="title" component={this.renderInput} label="Enter Title:"/>
            <Field name="description" component={this.renderInput} label="Enter Description:"/>
            <button>Submit</button>
        </form>
    )
    }
}

const validate = (formValues)=>{
    const errors = {};
    if(!formValues.title){
        errors.title='You must enter a title';
    }
    if(!formValues.description){
        errors.description="You mus enter a description"
    }
    return errors;
}

export default reduxForm({
    form: 'createItem',
    validate
})(CreateItem);
