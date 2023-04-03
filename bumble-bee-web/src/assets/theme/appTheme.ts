import {createTheme} from "@mui/material";
import {amber, orange } from "@mui/material/colors";

export const primaryFontSize = 14

const AppTheme = createTheme({
    palette: {
        primary: orange,
        secondary: amber,
    },
    typography: {
        fontWeightLight: 100,
        fontWeightRegular: 400,
        fontWeightBold: 700,
        fontSize: primaryFontSize,
        body1: {
            fontSize: primaryFontSize
        },
        body2: {
            fontSize: primaryFontSize - 2
        }
    }
})

export default AppTheme