import{useState}from"react";import{useNavigate}from"react-router-dom";import{api}from"../api";export default function Login(){let[email,setEmail]=useState(""),[password,setPassword]=useState(""),n=useNavigate();async function submit(e){e.preventDefault();try{let r=await api.post("/auth/login",{email,password});localStorage.setItem("token",r.data.token);localStorage.setItem("user",JSON.stringify(r.data.user));n(r.data.user.role==="admin"?"/admin":"/dashboard")}catch(e){alert(e.response?.data?.message||"Login failed")}}return <div className="form"><h1>Login</h1><form onSubmit={submit}><input placeholder="Email" onChange={e=>setEmail(e.target.value)}/><input type="password" placeholder="Password" onChange={e=>setPassword(e.target.value)}/><button>Login</button></form></div>}
<div className="login-container">

  <img
    src="/images/shivam-tech-logo.png"
    alt="Shivam Tech Institute"
    style={{ width: "120px", marginBottom: "15px" }}
  />

  <h1>Shivam Tech Institute</h1>

  <h2>Login</h2>

  {/* Keep your existing form */}
</div>
