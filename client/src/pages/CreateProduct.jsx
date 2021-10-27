import axios from 'axios'
import React, { useState } from 'react'
import { useHistory } from 'react-router'
import styled from 'styled-components'

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(255, 255, 255, 0.5),
        rgba(255, 255, 255, 0.5)
    );
    background-size: cover;
    display: flex;
    justify-content: center;
`

const Wrapper = styled.div`
    width: 80%;
    padding: 20px;
    background-color: white;
`
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 10px;
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
`
const HR = styled.hr`
    margin-bottom: 10px;
`

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    max-width: 50%;
    margin: 10px 0;
    padding: 10px;
    &:focus {
        outline: none;
    }
`
const Button = styled.button`
    width: 20%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
    align-items: center;
    &:disabled {
        cursor: not-allowed;
    }
`
const Error = styled.span`
    color: red;
`

const CreateProduct = () => {
    const [name, setName] = useState('')
    const [desc, setDesc] = useState('')
    const [url, setUrl] = useState('')
    const [category, setCategory] = useState('')
    const [price, setPrice] = useState('')
    const [error, setError] = useState(null)
    const history = useHistory()

    const product = { title: name, desc, img: url, categories: category, price }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await axios.post('/product', product)
            history.push('/products')
        } catch (error) {
            setError(error.response.data)
        }
    }

    return (
        <Container>
            <Wrapper>
                <Title>ADD PRODUCT</Title>
                <HR />
                <Form onSubmit={handleSubmit}>
                    {error && <Error>{error}</Error>}
                    <Input
                        placeholder='Product Name'
                        required
                        onChange={(e) => setName(e.target.value)}
                    />
                    <Input
                        placeholder='Product Description'
                        required
                        onChange={(e) => setDesc(e.target.value)}
                    />
                    <Input
                        placeholder='Image URL'
                        type='text'
                        defaultValue='https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/image_nodes/rose-peach.jpg?itok=hnIK5mr5'
                        onChange={(e) => setUrl(e.target.value)}
                    />
                    <Input
                        placeholder='Enter Category'
                        required
                        onChange={(e) => setCategory(e.target.value)}
                    />
                    <Input
                        placeholder='Enter Price'
                        type='number'
                        required
                        onChange={(e) => setPrice(e.target.value)}
                    />
                    <Button>Create New</Button>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default CreateProduct
