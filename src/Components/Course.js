import React from 'react'
import '../bootstrap/bootstrap.css'
import './Course.css'
import image3 from '../images/pdf-logo.png'
import image2 from '../images/image-logo.png'
import image1 from '../images/video-logo.png'
function Courses() {

    return (
        <div className=' container' >

            <div className="jumbotron course">
                <h1 className="display-4">Software Engineering</h1>
                <p className="lead"> Much of the world's data resides in databases. SQL (or Structured Query Language) is a powerful language which is used for communicating with and extracting data from databases. A working knowledge of databases and SQL is a must if you want to become a data scientist.The purpose of this course is to introduce relational database concepts and help you learn and apply foundational knowledge of the SQL language. It is also intended to get you started with performing SQL access in a data science environment. </p>
                <hr className="my-4"/>
                <strong>
                <p>Course credits : 4</p>
                <p>Mentors: Sonali</p>
                </strong>
                
             </div>


            
            <div className='course_sudents row ml-2 mr-2'>
                <button className="btn btn-primary btn-lg btn-course">Find Your Class-mates</button>
                {/* <button className="btn btn-primary btn-lg btn-course">Post your Doubts</button> */}
            </div>
            <br/>
            <div className='course_doubts row ml-2 mr-2'>
                <button className="btn btn-primary btn-lg btn-course">Post your Doubts</button>
            </div> 


            <div className="card bg-dark text-white enroll-card">
                <img className=" enroll-card-img" src="https://images.unsplash.com/photo-1579547621309-5e57ab324182?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80"/>
                <div className="card-img-overlay">
                    <h1 className=" enroll-card-title card-title"> Announcements.. </h1>
                </div>
            </div>
            
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 mt-3">
                        <div className="card">
                            <div className="card-horizontal card-announcements">
                            <div className="img-square-wrapper">
                                    <img className="" src={image3} alt="Card image cap"/>
                                </div>
                                <div className="card-body">
                                    <h4 className="card-title explore-title">New Assignment</h4>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a className="card-text text-muted" href="https://uigradients.com/#Shalala">
                                    https://uigradients.com/#Shalala
                                    </a>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 mt-3">
                        <div className="card">
                            <div className="card-horizontal card-announcements">
                            
                                <div className="card-body">
                                    <h4 className="card-title explore-title">Recorded Video of Today's class </h4>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a className="card-text text-muted" href="https://uigradients.com/#Shalala">
                                    https://uigradients.com/#Shalala
                                    </a>
                                </div>
                                <div className="img-square-wrapper">
                                    <img className="" src={image1} alt="Card image cap"/>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 mt-3">
                        <div className="card">
                            <div className="card-horizontal card-announcements">
                            <div className="img-square-wrapper">
                                    <img className="" src={image2} alt="Card image cap"/>
                                </div>
                                <div className="card-body">
                                    <h4 className="card-title explore-title">Resources for class diagrams</h4>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a className="card-text text-muted" href="https://uigradients.com/#Shalala">
                                    https://uigradients.com/#Shalala
                                    </a>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='course_annoucements'>
                <h2>Annoucements</h2>
                 <input placeholder='text'  />
                <button><i></i>Add</button>
                <button>Cancel</button>
                <button>Post</button>
                {/* <div className='course_image'>
                    <h3>Upload_image</h3>
                    <img src='https://tse4.mm.bing.net/th?id=OIP.Tn0Iywitm52vLhVGfibGgAAAAA&pid=Api&P=0&w=315&h=178' />
                </div> */}
            </div>
        </div>
    )
}

export default Courses
