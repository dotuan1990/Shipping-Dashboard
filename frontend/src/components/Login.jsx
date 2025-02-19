import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ()=>{
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("")
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Logging in with: ", {email, pass})
        navigate("/dashboard")
    }

    return (
        <div style={styles.container}>
            <h2>Login</h2>
            <form onSubmit={handleSubmit} style={styles.form}>
                <input 
                    type ="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    required
                    style={styles.input}/>
                <input
                    type="password"
                    placeholder="Enter Password"
                    value={pass}
                    onChange={(e)=>setPass(e.target.value)}
                    required
                    style={styles.input}/>
                <button type="submit" style={styles.button}>Login</button>
                <button type="button" onClick={() => navigate("/register")} style={styles.button}>Register</button>
            </form>
        </div>

    )
}
const styles = {
    container: {
      width: "100vw",
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#f5f5f5",
    },
    form: {
      display: "flex",
      flexDirection: "column",
      gap: "10px",
      padding: "20px",
      background: "#fff",
      borderRadius: "5px",
      boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
    },
    input: {
      padding: "10px",
      fontSize: "16px",
      border: "1px solid #ccc",
      borderRadius: "5px",
    },
    button: {
      padding: "10px",
      fontSize: "16px",
      backgroundColor: "#007bff",
      color: "white",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    }
  };
  
  export default Login;