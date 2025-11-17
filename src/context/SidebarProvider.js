import { createContext, useEffect, useState } from "react";
import { setStateSidebar, getStateSidebar } from '../helpers/helpers'

export const SidebarContext = createContext()

export const SidebarProvider = ({ children }) => {
    const [sidebarStatus, setSidebarStatus] = useState(false)

    useEffect(() => {
        const status = getStateSidebar()
        setSidebarStatus(status || false)
    }, [])

    const changeStatus = (statusChange) => {
        setSidebarStatus(statusChange)
        setStateSidebar(statusChange)
    }

    return (
        <SidebarContext.Provider
            value={{
                sidebarStatus,
                changeStatus
            }}
        >
            {children}
        </SidebarContext.Provider>
    )
}