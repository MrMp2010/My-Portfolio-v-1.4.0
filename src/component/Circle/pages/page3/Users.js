import { Link, useLocation } from "react-router-dom" 
import queryString from "query-string";

import { useState, useEffect } from "react"
import SkeletonLoading from "./SkeletonLoading"
import axios from "axios"

const Users = () => {
  const [users, setUsers] = useState([])

  const location = useLocation(); 
  const searchQuery = location.search; 
  console.log(searchQuery); 
  console.log(queryString.parse(searchQuery));

  const [loading, setLoading] = useState(true) 

  useEffect(() => {
    const fetchUser = async () => {
        const response = await axios.get("http://localhost:8000/users"); 
        console.log(response);
        setUsers(response.data);
        setLoading(false)
    }
    fetchUser();

  }, [])

  const handleCreate = async () => {
    const newUser = {
      avatar: "/photo4.jpg",
      first_name: "ali",
      last_name: "amiri",
      email: "aliamiri768@example.com"
    };
    const response = await axios.post("http://localhost:8000/users",newUser);
    setUsers((prevUsers) => [...prevUsers, response.data])
  }

  const handleUpdate =  async (user) => { 
    user.first_name= "updated"
    const response = await axios.put(`http://localhost:8000/users/${user.id}`, user)
    const updatedUser = [...users]
    const index = updatedUser.indexOf(user);
    updatedUser[index] = user
    setUsers(updatedUser)
   
  }  

  const handleDelete = async (user) => { 
    const response = await axios.delete(`http://localhost:8000/users/${user.id}`)
    const newUsers = users.filter((u)=> u.id !== user.id)
    setUsers(newUsers)
    
  }
  return (
    <>

    <div className="container mt-5">
      <div className="text-center mb-4">
        <button className="btn btn-lg btn-primary" onClick={handleCreate}>
          Create New User
        </button>
      </div>
      {
        loading ? ( 
          <SkeletonLoading/> 
        ) : (
          <div className="row">
            {users.map((user) => (
            <div className="col-md-4 col-sm-6 mb-4" key={user.id}>
              <div className="card text-center p-3">
                <img
                  src={user.avatar || "/placeholder.svg"}
                  className="card-img-top mx-auto"
                  style={{ borderRadius: "50%", width: "100px", height: "100px" }}
                />
                <div className="card-body">
                  <Link to={`/page3/users/${user.id}`}>
                  <h5 className="card-title">
                    {user.first_name} {user.last_name}
                  </h5>
                  </Link>  
                  <p className="card-text">{user.email}</p>
                  <div className="row">
                    <div className="col-6">
                      <button className="btn btn-info btn-sm w-100" onClick={() => handleUpdate(user)}>
                        Update
                      </button>
                    </div>
                    <div className="col-6">
                      <button className="btn btn-danger btn-sm w-100" onClick={() => handleDelete(user)}>
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        ))}
      </div>
        )
    } 
    </div>
    </>
  )
}

export default Users