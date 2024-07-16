import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import {Card, Container} from 'react-bootstrap'

const Mealpage = () => {


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

const {id}= useParams()

useEffect(()=>{
    const fetchMeal =async()=>{
        const res =await axios.get(`http://localhost:5000/meals/${id}`)
        setMeal(res.data)
    }
    fetchMeal()
},[id])//means that if this id changes useEffect will run again and call fetchMeal

    return(
        <Container className='mt-4'>
            <Card>
                <div style ={{maxHeight: '500px', overflow: 'hidden'}}>
                    <Card.Img className='img-fluid' variant='top' src={meal.image} alt={meal.mealName} />
                </div>
                <Card.Body>
                    <Card.Title>{meal.mealName}</Card.Title>
                    <Card.Subtitle className='mb-2 text-muted'>By: {meal.author}</Card.Subtitle>
                    <Card.Text>{meal.protein}</Card.Text>
                    <Card.Text>{meal.carb}</Card.Text>
                    <Card.Text>{meal.veggie}</Card.Text>
                    <Card.Text>{meal.calories}</Card.Text>
                    <Card.Text>{meal.recipe}</Card.Text>
                </Card.Body>
            </Card>
        </Container>
    )
    }
export default Mealpage