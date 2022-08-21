import React from "react"
import { RootState } from "./shared/AuthedPage"

export const initialState = {
    auth: false
}

const OnlyContext = React.createContext<RootState>(initialState)

export default OnlyContext