import { Children, createContext, useContext } from "react"
import { ThemeContext } from "../Context/ThemeProvider"

export const StyleContext = createContext()


const StyleProvider = ({ children }) => {
    const theme = useContext(ThemeContext)

    const dark = { backgroundColor: '#2F2E34', color: 'white' }
    const light = { backgroundColor: 'White', color: '#2F2E34' }

    const style = theme ? light : dark

    return (
        <StyleContext.Provider value={style}>
            {children}
        </StyleContext.Provider>
    )
}

export default StyleProvider