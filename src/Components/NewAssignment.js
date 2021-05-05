import React from 'react';

function NewAssignment() {

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
                <form>
                    <input type="file"/>
                    <button className="upload-button" type="submit">Upload File</button>
                </form>
            </form>            
        </div>
    )
}

export default NewAssignment
