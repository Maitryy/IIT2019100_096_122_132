import axios from 'axios';
import React, {useState } from 'react'
import { useHistory } from 'react-router';

function Schedule(props) {
    const [month,setMonth] = useState();
    const [classnum,setClassnum] = useState();
    const [topics,setTopics] = useState();
    const [days,setDays] = useState();
    console.log( "props are" , props);
    const history = useHistory();

     async function createSchedule(e){
         e.preventDefault();

        try {
            const course_id = props.match.params.id ;
            console.log(course_id);
            const newSchedule = {
                course_id,
                month,
                classnum,
                topics,
                days,
            };

            await axios.post("http://localhost:5000/course/Schedule", newSchedule);
             history.push("/HomeTeacher");

        } catch (err) {
         console.error(err);
         }
     }
    React.useEffect(() => {
        console.log("Hey there schedule")
    }, [])
    return (
        <div>
             <form className = "create"
                        onSubmit = {createSchedule}
                    >
                        <div className="prop">
                            <label >Month</label>
                        <input
                            type='string'
                            placeholder = 'month'
                            onChange = {(e) => setMonth(e.target.value)}
                            value= {month}
                        />
                        </div>

                        <div className="prop">
                            <label >Number of classes</label>
                        <input
                            type='string'
                            placeholder = 'classnum'
                            onChange = {(e) => setClassnum(e.target.value)}
                            value= {classnum}
                        />
                        </div>

                        <div className="prop">
                            <label >Topics to be covered</label>
                        <input
                            type='string'
                            placeholder = 'Topics'
                            onChange = {(e) => setTopics(e.target.value)}
                            value= {topics}
                        />
                        </div>

                        <div className="prop">
                            <label >Active Days</label>
                        <input
                            type='string'
                            placeholder = 'Days'
                            onChange = {(e) => setDays(e.target.value)}
                            value= {days}
                        />
                        </div>

                        <button className="btn btn-course" type = 'submit'>Submit</button>
                    </form>
        </div>
    )
}

export default Schedule
