import React from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import './CourseField.css';
import CoursePurchase from './CoursePurchase';



const CourseField = (props) => {
    // console.log(props);
    const { image, courseName, instructor, price } = props.course
    return (

        <div className="course-field">
            <div className="course-img">
                <img src={image} alt="" />
            </div>
            <div className="course-details">
                <h3>{courseName}</h3>
                <h5>{instructor}</h5>
                <p>Course Price: ${price}</p>
                <Button variant="primary"
                onClick={() => props.handleEnrollCourse(props.course)}>Enroll Now</Button>
            </div>
        </div>


    );
};

export default CourseField;