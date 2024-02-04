import { styled } from '@mui/material/styles';
import Toolbar from "@mui/material/Toolbar";
import { createTheme } from '@mui/material/styles';
export const StyledToolbar = styled(Toolbar)({
    backgroundColor: "#300208",
    display: "flex",
    justifyContent: "space-between",
    height: "65px",
  });

  
export const theme = createTheme({
    palette: {
      ochre: {
        main: '#e50914',
        light: '#fff;',
        dark: '#141414',
        contrastText: '#808080',
      },
    },
  });
  
  