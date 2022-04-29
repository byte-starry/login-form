import './loginInput.style.scss'

const LoginInput = ({handleChange,...otherProps}) => {
    return(
        <div className='group'>
            <input 
                {...otherProps}
                onChange={handleChange}
                className='form-input'
            />
        </div>
    )
}



export default LoginInput