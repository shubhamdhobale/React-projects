import React, { useState } from 'react'
import Card from './Card';
import './Cards.css';

const Cards = (props) => {

let courses = props.courses;
let category = props.category;

const [likedCourses , setlikedCourses] = useState([]);

function getCourses() {
  if (category === "All") {
    let allCourses = [];
    Object.values(courses).forEach(array => {
      array.forEach(courseData => {
        allCourses.push(courseData);
      })
    })
    return allCourses;
  }
  else{
    return courses[category];
  }

}

  return (
    <div className='cards'>
      {
        getCourses().map( (course) => (
          <Card key={course.id} course = {course} likedCourses = {likedCourses} setlikedCourses = {setlikedCourses}/>
        ))
      }
    </div>
  )
} 

export default Cards