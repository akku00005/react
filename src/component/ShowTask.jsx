import axios from 'axios';
import React, { useState, useEffect } from 'react';
import SessionManager from './helper';
import { Link } from 'react-router-dom';


function ShowTask() {
  const [field, setField] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let data =  SessionManager.session.getUserData()
    const fetchField = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/task/${data._id}`);
      
        if (Array.isArray(response.data.data)) {
            setField(response.data.data);
        } else {
          console.error('error');
          
        }
      } catch (err) {
        console.log("Error:", err);
        alert("Error IN tasks");
      } finally {
        setLoading(false);
      }
    };

    fetchField();
  }, []);

  if (loading) {
    return (
      <div className="loading-container">
        <p>Loading tasks...</p>
      </div>
    );
  }



 

async function doDelete(index, id) {
 
    if (index >= 0 && index < field.length) {
        try {
          
            const response = await axios.delete(`http://localhost:5000/task/${id}`);
            
            if (response.status === 201) {
              
                 const updatedField = field.filter((id, i) => i !== index);
                 setField(updatedField);
                console.log(` deleted successfully.`);
            } else {
                console.error('Failed to delete item on server.');
            }
        } catch (error) {
            console.error('Error deleting item from server:', error);
        }
    } else {
        console.error('Invalid index provided for deletion:', index);
    }
}

  
  return (
 
   
    <div className="tasks-container">
      
      <h1 className="tasks-header"> Field List</h1>

      {field.length === 0 ? (
        <p>No tasks available.</p>
      ) : (
        <div className="task-list">
          {field.map((field, index) => (
            <div className="task-item" key={field.id}>
              <h3>{index + 1}. 
                <br />
                {"Title : " +field.title}</h3>
              <p><strong>description : </strong> {field.description}</p>
              <p><strong>status : </strong> {field.status}</p>
             
              <button className="edit"><Link to={`/doEdit?id=${field._id}`}>update</Link></button>
              <button className="delete" onClick={() => doDelete(index,field._id)}>Delete</button>
            </div>
          ))}
        </div>
      )}
    </div>
   
  );
}

export default ShowTask;