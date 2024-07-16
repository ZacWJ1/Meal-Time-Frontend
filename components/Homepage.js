import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link} from 'react-router-dom'
import {Card, Button, Container, Row, Col} from 'react-bootstrap'


const Homepage=()=>{
    const [meals, setMeals] =useState([])

    useEffect(()=>{
        const fetchMeals =async()=>{
            const res =await axios.get(`http://localhost:5000/meals`)
            setMeals(res.data)
        }
        fetchMeals()
},[])

const handleDelete= async (id) => {
    try{
        await axios.delete(`http://localhost:5000/meals/${id}`)//remove from DB
        setMeals(meals.filter((meal) => meal._id !==id))//remove item from state    
    } catch (error) {
        console.error('Error deleting post', error)
    }
}

return (
  
    <Container>
        <Row>
            {meals.map((meal)=>(
                <Col md={4} className='mb-4 mt-4' key={meal._id}>
                    <Card style={{width:'18-rem'}}>
                    <Card.Img  variant='top' src={meal.image} alt={meal.mealName} />
                    <Card.Body>
                    <Card.Title>{meal.mealName}</Card.Title>
                    <Card.Subtitle className='mb-2 text-muted'>By: {meal.author}</Card.Subtitle>
                    <Card.Text>Calories: {meal.calories}</Card.Text>
                    <Link to ={`/meals/${meal._id}`}>
                        <Button variant='primary' className='mr-2'>See Recipe!</Button>
                    </Link>
                    <Button variant='danger' onClick={() => handleDelete(meal._id)}>Delete</Button>
                    </Card.Body>
                    
                    </Card>
                </Col>
            ))}
        </Row>
    </Container>
)
}
export default Homepage