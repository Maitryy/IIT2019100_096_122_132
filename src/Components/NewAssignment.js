import React from 'react'

function NewAssignment() {

    async function uploadAction(e) {
        const data = new FormData();
        const imagedata = e.target.files[0];
        data.append('inputname', imagedata);
    
        await fetch("http://localhost:5000/uploadFile", {
            mode: 'no-cors',
            method: "POST",
            body: data
          }).then(function (res) {
            if (res.ok) {
              alert("Perfect! ");
            } else if (res.status == 401) {
              alert("Oops! ");
            }
          }, function (e) {
            alert("Error submitting form!");
          });
        console.log(data.get('inputname')); 
      }
    return (
        <div>
            <form encType="multipart/form-data" action="">
                <input type="file" name="fileName" defaultValue="fileName"></input>
                <button type="submit" value="upload" onClick={this.uploadAction.bind(this)}></button>
            </form>
            
        </div>
    )
}

export default NewAssignment
