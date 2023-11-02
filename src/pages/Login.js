import { useNavigate } from 'react-router-dom'



export default function Login() {
    const navigate = useNavigate()

    const handleFormSubmit = (e) => {
        e.preventDefault()
        const formData = {
            email: e.target.email.value,
            password: e.target.password.value

        }

        localStorage.setItem('myUser', JSON.stringify(formData))

        navigate('/')
    }
    return (

        <div className="container">
            <h2> Signup </h2>
            <form action="submit" onSubmit={(e) => handleFormSubmit(e)}>
                <label htmlFor=""> <span>Email:</span>
                    <input type='email' name='email'></input>

                </label>
                <br />
                <label htmlFor=""> <span>Password:</span>
                    <input type='password' name='password'></input>

                </label>
                <br />
                <button type='submit'>Login</button>

            </form>

        </ div>


    )


}