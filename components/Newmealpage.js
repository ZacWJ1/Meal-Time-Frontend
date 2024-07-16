import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import {Form, Button, Container, FormGroup} from 'react-bootstrap'

const Newmealpage = () => {

    //useState sets the state to whatever is in parentheses until user updates it
    const [meal, setMeal] =useState({
        author:'',
        mealName:'',
        protein:'',
        carb:'',
        veggie:'',
        calories:'',
        image:'',
        recipe:'',
    })

    //use navigate helps people get from page to page
    const navigate=useNavigate()

    //listening for user to do something,an event, and then update the useState function with what is below
    const handleChange = e =>{
        setMeal({...meal,[e.target.name]: e.target.value})
    }

    const handleSubmit = async e =>{
        e.preventDefault()
        await axios.post('http://localhost:5000/meals',meal)
        navigate('/')
    }

    //everything visually returned
    return(
        <Container className='mt-4'>
            <Form onSubmit={handleSubmit}>
            <FormGroup>
                <Form.Label>Author</Form.Label>
                <Form.Control type='text' name='author' placeholder='Author' onChange={handleChange}
                required/>
                </FormGroup>
                <FormGroup>
                <Form.Label>Meal Name</Form.Label>
                <Form.Control type='text' name='mealName' placeholder='Meal Name' onChange={handleChange}
                required/>
                </FormGroup>
                <FormGroup>
                <Form.Label>Protein</Form.Label>
                <Form.Control type='text' name='protein' placeholder='Protein' onChange={handleChange}/>   
                </FormGroup>
                <FormGroup>
                <Form.Label>Carb</Form.Label>
                <Form.Control type='text' name='carb' placeholder='Carb' onChange={handleChange}/>   
                </FormGroup>
                <FormGroup>
                <Form.Label>Veggie</Form.Label>
                <Form.Control type='text' name='veggie' placeholder='Veggie' onChange={handleChange}/>   
                </FormGroup>
                <FormGroup>
                <Form.Label>Calories</Form.Label>
                <Form.Control type='text' name='calories' placeholder='Calories' onChange={handleChange}/>  
                </FormGroup>
                <FormGroup>
                <Form.Label>Image URL</Form.Label>
                <Form.Control type='text' name='image' placeholder='Image URL' onChange={handleChange}/>    
                </FormGroup>
                <FormGroup>
                <Form.Label>Recipe</Form.Label>
                <Form.Control type='textarea' rows={5} name='recipe' placeholder='Recipe' onChange={handleChange}
                required />    
                </FormGroup>
                <Button variant='primary' type='submit'>
                    Create Meal
                </Button>
            </Form>
        </Container>
    )
}
export default Newmealpage;