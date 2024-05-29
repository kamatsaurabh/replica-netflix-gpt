import { useState } from "react";
import { Header } from "./Header"
const initialState = {
    email:"",
    name:"" 
};
export const TestLogin=()=>{
    
    const [state,setState] = useState(initialState);

    let {email,name} =state; 

    function onInputChange (e){
        let {name,value} = e.target;
        setState({...state,[name]:value});
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log('!!!!!!!!!',state); 
    }
    return(
        <div>
            <Header />
            <div className="absolute">
                <img
                    src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg"
                    alt="logo"
                />
            </div>
            <form 
            onSubmit={handleSubmit}
            className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
            >
                <input 
                type="text" 
                placeholder="Email Address" 
                className="p-4 my-4 w-full bg-gray-700"
                value={email}
                name='email'
                onChange={onInputChange}
                />

                <input 
                 type="password"
                 placeholder="Password" 
                 className="p-4 my-4 w-full bg-gray-700"
                 value={name}
                 name="name"
                 onChange={onInputChange}
                />
                <button type="submit" className="p-4 my-6 bg-red-700 w-full rounded-lg">Sign In</button>
            </form>
        </div>
    )
}