import axios from "axios"
import { useEffect } from "react"

axios.defaults.headers.common['token'] = localStorage.getItem("token");
const Dashbord = () => {

  const fetchData = async () => {
    console.log("dashbord");
    const response = await axios.get("http://localhost:8000/token");
    console.log(response);
  };

  useEffect (() => {
      fetchData(); 
  },[])

    return (
        <>
            <h1>Dashbord</h1>
        </>
     );
}

export default Dashbord;