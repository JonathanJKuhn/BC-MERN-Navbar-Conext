import React, {useContext} from 'react'
import Container from 'react-bootstrap/Container'
import { default as Nb } from 'react-bootstrap/Navbar'
import MyContext from '../context/MyContext'

const Navbar = () => {
    const context = useContext(MyContext)
    const {name} = context

    return (
        <Nb bg="primary" variant='dark'>
            <Container className='justify-content-end'>
                <Nb.Brand>Hi {name}</Nb.Brand>
            </Container>
        </Nb>    
    )
}

export default Navbar