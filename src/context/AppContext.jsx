import { createContext, useState } from "react";
import { doctors } from "../assets/assets";
import { toast } from "react-toastify";

export const AppContext = createContext()

const AppContextProvider =(props)=>{
    const [appointments, setappointments] = useState([])
    const bookAppointment = (appointment) => {
        setappointments([...appointments, appointment]);
      }
    const cancelAppointment =  (id)=>{
        setTimeout( () => {
          toast.success("Appointment cancelled")
          setappointments(appointments.filter(p => p.id!== id))
        }, 400);
    }
    const currencySymbol = "$"
    const value = {
        doctors,
        currencySymbol,
        bookAppointment,
        appointments,
        cancelAppointment
    }
     return (
        <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
     )
}

export default AppContextProvider