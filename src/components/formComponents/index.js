import React from 'react';

export const SmallField = props => {
    return <section className="field">
        <label className="label">{props.label}</label>
        <section className="control has-icons-left">
            {props.inputType === 'long'
                ? <textarea
                        id={`${props.inputId}Input`}
                        className="input customScroll"
                        onBlur={() => props.onBlur(document.getElementById(`${props.inputId}Input`).value)}
                        placeholder={props.placeholder} required={props.required}></textarea>
                : <input
                    id={`${props.inputId}Input`}
                    className="input"
                    onBlur={() => props.onBlur(document.getElementById(`${props.inputId}Input`).value)}
                    type={props.inputType
                    ? `${props.inputType}`
                    : 'text'}
                    placeholder={props.placeholder} required={props.required}/>}
            <span className="icon is-small is-left">
                <i className={props.icon}></i>
            </span>
        </section>
    </section>
}

export const toggleField = params => {
    return (
        <section className='field'>
            <label className='label'>{params.label}</label>
            <section className='field is-grouped'>
                <span className='control'>
                    <span
                        className={`button ${params.state === true && 'is-danger'}`}
                        onClick={() => params.onClick(true)}>Yes</span>
                </span>
                <span className='control'>
                    <span
                        className={`button ${params.state === false && 'is-danger'}`}
                        onClick={() => params.onClick(false)}>No</span>
                </span>
            </section>
        </section>
    )
}

export class StackField extends React.Component {
    render() {
        return (
            <section className="field">
                <label className="label">{this.props.params.label}</label>
                <section className="field has-addons">
                    <p className="control is-expanded has-icons-left">
                        <input
                            id={`${this.props.params.inputId}Input`}
                            className="input"
                            type="text"
                            placeholder={this.props.params.placeholder}/>
                        <span className="icon is-small is-left">
                            <i className={this.props.params.icon}></i>
                        </span>
                    </p>
                    <p className="control">
                        <a
                            className="button is-danger"
                            onClick={() => {
                            this
                                .props
                                .params
                                .addItem(document.getElementById(`${this.props.params.inputId}Input`).value, this.props.params.storeName);
                            document
                                .getElementById(`${this.props.params.inputId}Input`)
                                .value = ''
                        }}>
                            {this.props.params.button}
                        </a>
                    </p>
                </section>
                <section className='panel'>
                    {this
                        .props
                        .params
                        .store
                        .map((item, i) => <section key={i}>
                            <span className='panel-block'>
                                <span
                                    className="panel-icon"
                                    onClick={() => this.props.params.removeItem(i, this.props.params.storeName)}>
                                    <i className="fas fa-times"></i>
                                </span>
                                {item}
                            </span>
                        </section>)}
                </section>
            </section>
        )
    }
}