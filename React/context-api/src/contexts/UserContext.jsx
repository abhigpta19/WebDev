import { useState } from "react";
import { createContext } from "react";

export const UserContext = createContext(null);

export function UserProvider({children})
{
    const [name , setName] = useState(null);

    function login(name)
    {
        setName(name);
    }

    function logout()
    {
        setName(null);
    }

    return (
        <UserContext.Provider value={{name , login, logout}}>
            {children}
        </UserContext.Provider>
    );
}