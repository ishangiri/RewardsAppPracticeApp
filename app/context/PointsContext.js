import { createContext, useState } from "react";

export const PointsContext = createContext();

function PointsProvider({children}){
 const [points, setPoints] = useState(0);
 const [name, setName] = useState("");

 const addPoints = (newPoints) => {
    setPoints((prev) => {
        return prev + newPoints;
    })
 }
   
 return(
    <PointsContext.Provider value={{points, setPoints, name, setName, addPoints}} >
        {children}
    </PointsContext.Provider>
 )
}

export default PointsProvider;