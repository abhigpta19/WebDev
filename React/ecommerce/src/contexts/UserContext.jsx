import { createContext, useState } from "react";

export const UserContext = createContext(null);

export function UserProvider({children})
{
    const [name , setName] = useState(null);

    function login(nam)
    {
        setName(nam);
    }

    function logout()
    {
        setName(null);
    }

    return (
        <UserContext.Provider value={{name,login,logout}}>
            {children}
        </UserContext.Provider>
    );
}