import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () =>{
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    const navigate = useNavigate()

    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log("Registering user:", { name, email, pass });
        navigate("/login")
    }

    return (
        <div style={styles.container}>
            <h2>Register</h2>
            <form onSubmit={handleSubmit} style={styles.form}>
                <input
                    type="text"
                    placeholder="Full Name"
                    value={name}
                    onChange={(e)=> setName(e.target.value)}
                    required
                    style={styles.input}></input>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={ (e) => setEmail(e.target.value)}
                    required
                    style={styles.input}></input>
                <input
                    type="password"
                    placeholder="Password"
                    value={pass}
                    onChange={ (e) => setPass(e.target.value)}
                    required
                    style={styles.input}></input>
                <button type="submit" style={styles.button}>Register</button>
                <button
                    type="button"
                    onClick={() => navigate("/")}
                    style={styles.loginButton}>Back to Login</button>
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
    },
    loginButton: {
      padding: "10px",
      fontSize: "16px",
      backgroundColor: "#6c757d",
      color: "white",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      marginTop: "10px",
    }
  };
  
  export default Register;