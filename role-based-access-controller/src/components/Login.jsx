import { useState, useEffect, React } from "react";

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

function Login(){
return(
<div className="container">
    <h2>Login</h2>
    <form> 
        <div>
            <input 
            type="email"
            placeholder="Enter email"
            value={email} />
        </div>

        <div>
            <input 
            type="password"
            placeholder="Enter password"
            value={password} />
        </div>
    </form>
</div>
)
}