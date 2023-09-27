import React from 'react'
import {FcLike,FcLikePlaceholder} from "react-icons/fc";
import './Card.css';
import { toast } from 'react-toastify';

const Card = (props) => {

    let course = props.course;
    let likedCourses = props.likedCourses;
    let setlikedCourses = props.setlikedCourses;

function clickHandler(){
    if (likedCourses.includes(course.id)) {
        setlikedCourses( (prev) => prev.filter((cid) => (cid !== course.id) ) );
        toast.warning("Like Removed");
    }
    else{
        if (likedCourses.length === 0) {
            setlikedCourses([course.id]);
        }
        else{
            setlikedCourses( (prev) => [...prev , course.id]);
        }
        toast.success("Liked Succussfully");
    }
}

  return (
    <div className='card'>
        <div className='image'>
            <img src={course.image.url} alt=''/>

            <div className='like-button'>
            <button onClick={clickHandler}>
               {
                likedCourses.includes(course.id) ? 
                ( <FcLike fontSize="1.50rem"/>) : 
                ( <FcLikePlaceholder fontSize="1.50rem"/>)
               }
            </button>
        </div>
        </div>
       
        <div>
            <h2>{course.title}</h2>
            <p>{
                course.description.length > 100 ? 
                (course.description.substr(0,100)) + "..." : 
                (course.description)
            }</p>
        </div>
    </div>
  )
}

export default Card