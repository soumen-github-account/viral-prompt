"use client"
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext()

export const AppContextProvider = ({children}) => {

    const [categories, setCategories] = useState([])
    const [prompts, setPrompts] = useState([])
    const [categoryLoading, setCategoryLoading] = useState(false)
    
    
    const getAllCategories = async() =>{
        try {
            setCategoryLoading(true)
            const res = await axios.get("/api/categories");
            if(res.data.success){
                setCategories(res.data.data);
                setCategoryLoading(false)
            }
        } catch (error) {
            console.log(error)
            setCategoryLoading(false)
        }
    }

    const getAllPrompt = async() => {
        try {
            const res = await axios.get("/api/prompts")
            if(res.data.success){
                setPrompts(res.data.data);
            }
        } catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {
        getAllCategories()
        getAllPrompt()
    }, [])

    const value = {
        categories, prompts, categoryLoading
    }

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => {
  return useContext(AppContext);
};