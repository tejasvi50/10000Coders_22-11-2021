import React from "react";
import image from "./assets/images/web-dev/web5.png"
 class MainContent extends React.Component{
     render(){
         return(
             <>
            <section class="container-fluid">           
            <div class="row bg-warning my-4 mx-1 g-3 col-12">
            <div class="col col-md-6  ">
            <img src={image} alt="code" class="w-100 h-100 p-3 col-12" />
            </div>
            <div  class="  col-md-6 ">
            <p class="p-3 ms-0 col-12 " ><b>The easiest way to  learn  &  practice  modern JavaScript.Learn in an interactive environment.The easiest way to  learn  &  practice  modern JavaScript.Learn in an interactive environment.The easiest way to  learn  &  practice  modern JavaScript.Learn in an interactive environment.The easiest way to  learn  &  practice  modern JavaScript.Learn in an interactive environment.The easiest way to  learn  &  practice  modern JavaScript.Learn in an interactive environment.The easiest way to  learn  &  practice  modern JavaScript.Learn in an interactive environment.The easiest way to  learn  &  practice  modern JavaScript.Learn in an interactive environment.The easiest way to  learn  &  practice  modern JavaScript.Learn in an interactive environment.The easiest way to  learn  &  practice  modern JavaScript.Learn in an interactive environment.The easiest way to  learn  &  practice  modern JavaScript.Learn in an interactive environment.The easiest way to  learn  &  practice  modern JavaScript.Learn in an interactive environment.</b></p>
            </div>
            </div>
            <div class="row bg-light m-5 ">
            <div class="col-sm-12  p-3 col-md-12 col">
            <h1 class="p-3 text-success">What you will learn</h1>
            <p class="p-3 text-secondary">This course covers the fundamentals of JavaScript. It is the best way to learn JavaScript in 2022. The entire course was re-written in 2021.</p>
            <p  class="p-3 text-secondary">The lessons & challenges will guide you through these topics step by step and its project-based approach will help you reinforce these concepts.</p>
            <p  class="p-3 text-secondary">The course assumes that you are familiar with the basics such as variables, functions, arrays, objects, classes as well as some HTML & CSS experience.</p>
            </div>
            {/* <ul class="col-sm-12 col-md-4 col-12 p-4 m-5 ms-5 ps-5 col ">
                <li  class="p-2 ">Arrays</li>
                <li  class="p-2">Arrow functions</li>
                <li  class="p-2">Arrays of Objects</li>
                <li  class="p-2">Functions</li>
                <li  class="p-2">Objects</li>
                <li  class="p-2">Classes</li>
            </ul> */}
            </div>
            
            <div class=" p-5 my-3 bg-warning  d-flex flex-column align-items-center">
            <h1 class=" p-5">The easiest way to  learn  &  practice  modern JavaScript</h1>
            <h5>Join more than 80,000 learners</h5>
            </div>
            </section>
            </>

            );
            }
            }
    export default MainContent;