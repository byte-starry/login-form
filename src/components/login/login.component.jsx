import React from "react"
import './login.style.scss'

class Login extends React.Component {
    constructor() {
      super();
      this.state = {
        name: " ",
        email: " ",
        password: " ",
      };
    }

    handleChange = (event) => {
        const {name,value} = event.target
        this.setState({[name]:value})
    }

   


    render(){
        return (
            <div className='log-in'>
                    <span>
                        Sign in with your email and password
                    </span>
                    <form >
                    <FormInput 
                            name='name'
                            placeholder='Name' 
                            type='name'
                            handleChange={this.handleChange}
                        />
                        <FormInput 
                            name='email'
                            placeholder='Email' 
                            type='email'
                            handleChange={this.handleChange}
                        />
                        <FormInput  
                            name='password'
                            placeholder='Password' 
                            type='password'
                            handleChange={this.handleChange}
                        />

                        <Button>
                            Log In
                        </Button>

                    </form>
            </div>
    )
    }
}

export default Login
