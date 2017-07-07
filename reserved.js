import React, { PropTypes } from 'react'
import { FormControl } from 'react-bootstrap'
import { passwordInstructions, passwordConfirmationInstructions, validatePasswordLength } from '../constants/validation'

export const DoublePasswordFormFields = React.createClass({
  propTypes: {
    firstFieldLabel: PropTypes.string,
    secondFieldLabel: PropTypes.string,
    setPassword: PropTypes.func,
    setEnableSubmit: PropTypes.func
  },
  getInitialState() {
    return {
      password: '',
      passwordConfirmation: '',
      enableSubmit: false,
      passwordInputStatus: '',
      passwordConfirmationInputStatus: ''
    }
  },
  setEnableSubmit({
    password = this.state.password,
    passwordConfirmation = this.state.passwordConfirmation}) {
    const enableSubmit = validatePasswordLength(password) &&
                         password == passwordConfirmation
    this.setState({enableSubmit})
    this.props.setEnableSubmit(enableSubmit)
    if (enableSubmit) {
      this.setState({
        passwordInputStatus: '',
        passwordConfirmationInputStatus: ''
      })
      this.props.setPassword(password)
    }
  },
  handlePasswordChange({target: {value}}) {
    this.setState({password: value})
    this.setEnableSubmit({password: value})
  },
  handlePasswordFocus() {
    this.setState({passwordInputStatus: 'instruction'})
  },
  handlePasswordBlur() {
    const password = this.state.password
    this.setState({
      passwordInputStatus: (validatePasswordLength(password) || password === '') ? '' : 'error'
    })
  },
  handlePasswordConfirmationChange({target: {value}}) {
    this.setState({passwordConfirmation: value})
    this.setEnableSubmit({passwordConfirmation: value})
    this.updatePasswordConfirmationMessages(value)
  },
  updatePasswordConfirmationMessages(value) {
    const slicedPassword = this.state.password.slice(0, value.length)
    if (value === this.state.password) {
      this.setState({passwordConfirmationInputStatus: 'success'})
    } else if (value !== slicedPassword) {
      this.setState({passwordConfirmationInputStatus: 'error'})
    } else { this.setState({passwordConfirmationInputStatus: 'instruction'}) }
  },
  handlePasswordConfirmationFocus({target: {value}}) {
    this.updatePasswordConfirmationMessages(value)
  },
  handlePasswordConfirmationBlur({target: {value}}) {
    this.setState({
      passwordConfirmationInputStatus: value !== this.state.password ? 'error' : ''
    })
  },
  render() {
    const {firstFieldLabel, secondFieldLabel} = this.props
    return (
      <div>
        <div className="form-row password-field">
          <label className="form-field-label">{firstFieldLabel}</label>
          <FormControl type="password"
                       onChange={this.handlePasswordChange}
                       onFocus={this.handlePasswordFocus}
                       onBlur={this.handlePasswordBlur}
                       className={`account-form-fillable ${this.state.passwordInputStatus}`}
                       />
          <div className="password-input-status">
            {this.state.passwordInputStatus !== '' && (
               <div className={`form-input-status ${this.state.passwordInputStatus}`}>
                 {passwordInstructions[this.state.passwordInputStatus]}
               </div>
             )}
          </div>
        </div>

        <div className="form-row password-field">
          <label className="form-field-label">{secondFieldLabel}</label>
          <FormControl type="password"
                       onChange={this.handlePasswordConfirmationChange}
                       onFocus={this.handlePasswordConfirmationFocus}
                       onBlur={this.handlePasswordConfirmationBlur}
                       className={`account-form-fillable ${this.state.passwordConfirmationInputStatus}`}
                       />
          <div className="password-input-status">
            {this.state.passwordConfirmationInputStatus !== '' && (
              <div className={`form-input-status ${this.state.passwordConfirmationInputStatus}`}>
                {passwordConfirmationInstructions[this.state.passwordConfirmationInputStatus]}
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
})
