import { useParams } from "react-router-dom"; 
import { useState, useEffect } from "react"
import axios from "axios" 
import { Link } from "react-router-dom"
const User = () => { 
    const { id } = useParams();
    const [user,setUser] = useState({});
useEffect (() => {
    const fetchUser = async () => {
    const response = await axios.get(`http://localhost:8000/users/${id}`);
    setUser(response.data);
    }
    fetchUser();
} ,[])
         


return ( 
    <>
        <div className="col-md-4 col-sm-6 mb-4" key={user.id}>
            <div className="card text-center p-3">
                <img
                    src={user.avatar || "/placeholder.svg"}
                    className="card-img-top mx-auto"
                    style={{ borderRadius: "50%", width: "100px", height: "100px" }}
                />
                <div className="card-body">
                  <Link to={"/page3/users"}>
                    <h5 className="card-title">
                        {user.first_name} {user.last_name}
                    </h5>
                  </Link>  
                  <p className="card-text">{user.email}</p>
                </div>
            </div>
        </div>
    </>
    );    
}
 
export default User;