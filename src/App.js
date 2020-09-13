import React, { useState } from 'react';
import './App.css';
import CourseField from './components/CourseField';
import CoursePurchase from './components/CoursePurchase';
import Header from './components/Header/Header';
import fakeData from './DataStore/fakeData';



function App() {
  const first12 = fakeData.slice(0, 12);
  const [courses, setCourses] = useState(first12);
  const [cart, setCart] = useState([]);
  const handleEnrollCourse = (course) =>{
    console.log("Enrolled Course",course);
    const newCart =[...cart, course];
    setCart(newCart);
  }
  return (
  <div>
    <Header></Header>
    <div className="TheWholeCourse">
      <div className="CourseField">
        {
          courses.map(cr => <CourseField 
            handleEnrollCourse = {handleEnrollCourse}
            course={cr}></CourseField>)
        }
      </div>
      <div className="PurchaseField">
          <CoursePurchase cart={cart}></CoursePurchase>
      </div>
    </div>
  </div>  
  );
}

export default App;
