import {useState} from "react"
import 'react'

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submithandler = (e) => {
        e.preventDefault();
        console.log(email);
        console.log(password);

        setEmail("");
        setPassword("");
    }
    return (
        <div className='h-screen w-screen flex items-center justify-center'>
            <div className='border-2 border-emerald-600 p-20 rounded-xl'>
                <form
                    onSubmit={(e) => {
                        submithandler(e);
                    }}
                    className="flex flex-col items-center justify-center">
                    <input
                        required value={email}
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }}
                        className="outline-none bg-black bg-transparent text-white border-emerald-600 border-2 py-4 px-5 rounded-full placeholder:text-gray-400"
                        type="email" placeholder=" Enter your email"/>
                    <input required value={password}
                           onChange={(e)=>{
                             setPassword(e.target.value)
                           }}
                           className="mt-4 outline-none bg-black bg-transparent text-white border-emerald-600 border-2 py-4 px-5 rounded-full placeholder:text-gray-400"
                           type="password" placeholder="Enter your password"/>
                    <button
                        className=" mt-7 text-white text-xl outline-none bg-emerald-600 py-4 px-10 h-15 rounded-full">Log
                        in
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Login;