import axios from 'axios';
import React, { useState } from 'react';

function NewAssignment() {
    const [file,setFile] = useState();

    async function Submit(e){
        e.preventDefault();
        const formData = new FormData();
        formData.append('myfile',file);
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };
        const x = axios.post("http://localhost:5000/uploadFile",formData,config)
            .then((response) => {
                alert("The file is successfully uploaded");
            }).catch((error) => {
        });
        console.log(x);
    }


    return (
        <div>
            New Assignment
            <form>
                <input type="string"
                placeholder = "Assignment Name"
                />
                <input type="string"
                placeholder = "Description"
                />
                <input type="string"
                placeholder = "Due Time"
                />
                <form onSubmit={Submit}>
                    <h1>File Upload</h1>
                    <input type="file" className="custom-file-input" onChange= {(e) => setFile(e.target.files) } files = {file} placeholder = "Select file"/>
                    <button className="upload-button" type="submit">Upload</button>
                </form>
                <button>Create Assignment</button>
            </form>            
        </div>
    )
}

export default NewAssignment
