
import { useState } from "react";
import Input from "./Input";
import * as yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const schema = yup.object().shape({
  email: yup.string().email("ایمیل معتبر نیست").required("ایمیل اجباری است"),
  password: yup.string().min(4, "پسورد نباید کمتر از ۴ کاراکتر باشد").required("پسورد اجباری است"),
});

const Login = ({ onLogin }) => {
  const [account, setAccount] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState([]);
  const [sending, setSending] = useState(false);
  const navigate = useNavigate();

  async function validate() {
    try {
      const result = await schema.validate(account, { abortEarly: false });
      setErrors([]);
      return result;
    } catch (error) {
      setErrors(error.errors);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const result = await validate();

    if (result) {
      try {
        setSending(true);
        const response = await axios.post("http://localhost:8000/login", result);
        setSending(false);

        const token = response.data?.token || "3094i90fj2dlslf294-0gdkf";
        localStorage.setItem("token", token);

        if (onLogin) {
          onLogin();
        }

        navigate("/page3/dashbord");
      } catch (error) {
        setSending(false);
        setErrors(["پسورد یا ایمیل صحیح نمیباشد"]);
      }
    }
  }

  const handleChange = ({ currentTarget: input }) => {
    const newAccount = { ...account };
    newAccount[input.name] = input.value;
    setAccount(newAccount);
  };

  return (
    <>
      {errors.length !== 0 && (
        <div className="alert alert-danger">
          <ul>
            {errors.map((e, i) => (
              <li key={i}>{e}</li>
            ))}
          </ul>
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <h1 className="">Login Page</h1>
        <Input onChange={handleChange} value={account.email} name="email" label="Email:" type="email" />
        <Input onChange={handleChange} value={account.password} name="password" label="Password:" type="password" />
        <button type="submit" className="btn btn-primary" disabled={sending}>
          Login
        </button>
      </form>
    </>
  );
};

export default Login;