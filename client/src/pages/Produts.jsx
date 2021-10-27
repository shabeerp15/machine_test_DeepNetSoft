import axios from 'axios'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(255, 255, 255, 0.5),
        rgba(255, 255, 255, 0.5)
    );
    display: flex;
    justify-content: center;
`

const Wrapper = styled.div`
    width: 80%;
    padding: 20px;
`
const Table = styled.table`
    border: 1px solid #1c6ea4;
    background-color: #eeeeee;
    width: 100%;
    text-align: left;
    border-collapse: collapse;
`
const TableHead = styled.thead``
const TableTR = styled.tr``
const TableTH = styled.th`
    border: 1px solid #aaaaaa;
    padding: 3px 2px;
`
const TableBody = styled.tbody``
const TableTD = styled.td`
    border: 1px solid #aaaaaa;
    padding: 3px 2px;
    font-weight: 300;
    color: #757575;
`
const Button = styled.button`
    color: palevioletred;
    font-size: 1em;
    margin-bottom: 10px;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
`
const Image = styled.img`
    width: 40px;
    height: 40px;
    object-fit: cover;
`

const Produts = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const getProducts = async () => {
            const { data } = await axios.get('/product')
            setProducts(data)
        }
        getProducts()
    }, [])
    return (
        <Container>
            <Wrapper>
                <Link to='addProduct'><Button>Add Product</Button></Link>
                <Table>
                    <TableHead>
                        <TableTR>
                            <TableTH>Image</TableTH>
                            <TableTH>Title</TableTH>
                            <TableTH>Description</TableTH>
                            <TableTH>Categories</TableTH>
                            <TableTH>Price</TableTH>
                            <TableTH>Quantity</TableTH>
                        </TableTR>
                    </TableHead>
                    {products.map((product) => (
                        <TableBody key={product._id}>
                            <TableTR>
                                <TableTD>
                                    <Image
                                        src={product.img}
                                        alt='product image'
                                    />
                                </TableTD>
                                <TableTD>{product.title}</TableTD>
                                <TableTD>{product.desc}</TableTD>
                                <TableTD>{product.categories}</TableTD>
                                <TableTD>{product.price}</TableTD>
                                <TableTD>{product.count}</TableTD>
                            </TableTR>
                        </TableBody>
                    ))}
                </Table>
            </Wrapper>
        </Container>
    )
}

export default Produts
