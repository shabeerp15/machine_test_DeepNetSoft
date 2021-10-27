import styled from 'styled-components'
import { Link as A, useHistory } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(255, 255, 255, 0.5),
        rgba(255, 255, 255, 0.5)
    );
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Wrapper = styled.div`
    width: 30%;
    padding: 20px;
    background-color: white;
`

const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
`

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0;
    padding: 10px;
    &:focus {
        outline: none;
    }
`

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    &:disabled {
        cursor: not-allowed;
    }
`

const Link = styled.a`
    margin: 5px 0px;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
`

const Error = styled.span`
    color: red;
`

const Login = () => {
    const history = useHistory()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)

    const details = { email, password }

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(details)

        try {
            const { data } = await axios.post('/user/login', details)
            console.log(data)
            history.push('/products')
        } catch (error) {
            setError(error.response.data)
        }
    }

    return (
        <Container>
            <Wrapper>
                <Title>SIGN IN</Title>
                <Form onSubmit={handleSubmit}>
                    <Input
                        type='email'
                        placeholder='Enter Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Input
                        type='password'
                        placeholder='Enter Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {error && <Error>{error}</Error>}
                    <Button>LOGIN</Button>
                    <A to='/'>
                        <Link>CREATE A NEW ACCOUNT</Link>
                    </A>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Login
