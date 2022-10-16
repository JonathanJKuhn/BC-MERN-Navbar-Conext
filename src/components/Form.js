import React, { useContext } from 'react'
import {default as Fm } from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import MyContext from '../context/MyContext'

const Form = () => {
    const context = useContext(MyContext)
    const {name,setName} = context

    const handleSubmit = (e) => {
        e.preventDefault()
        setName(e.target.formName.value)
    }

    return (
        <Container>
            <Fm onSubmit={handleSubmit}>
                <Fm.Group className='my-3 justify-content-center' as={Row} controlId='formName'>
                    <Fm.Label column sm={2} className='text-center'>Your Name:</Fm.Label>
                    <Col sm={5}>
                    <Fm.Control type='text' placeholder={name}/>
                    </Col>
                </Fm.Group>
            </Fm>
        </Container>
    )
}

export default Form