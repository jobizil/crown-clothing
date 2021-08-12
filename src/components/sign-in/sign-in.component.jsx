import { Component } from 'react'
import './sign-in.styles.scss'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import { auth, signInWithGoogle } from '../../firebase/firebase.utils'
class SignIn extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
    }
  }
  handleSubmit = async event => {
    event.preventDefault()
    const { email, password } = this.state
    try {
      await auth.signInWithEmailAndPassword(email, password)

      // Clear form field
      this.setState({ email: '', password: '' })
    } catch (error) {
      console.log(error)
    }
  }
  handleChange = event => {
    //   Get name and value off event (Sinc it is the input element itself)
    const { value, name } = event.target

    // Populate form name with assigned value.
    this.setState({ [name]: value })
  }
  render() {
    return (
      <div className='sign-in'>
        <h2> I already have an Account!</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='email'
            type='email'
            value={this.state.email}
            handleChange={this.handleChange}
            label='Email'
            autoComplete='off'
            required
          />
          <FormInput
            name='password'
            type='password'
            value={this.state.password}
            handleChange={this.handleChange}
            label='Password'
            autoComplete='off'
            required
          />
          <div className='buttons'>
            <CustomButton type='submit'>Sign In</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign In With Google
            </CustomButton>
          </div>
        </form>
      </div>
    )
  }
}
export default SignIn
