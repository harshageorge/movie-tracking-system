import Typography from "@mui/material/Typography";

export function Copyright() {
    return (
      <Typography variant="body2" color="ochre.contrastText" align="center">
        {'Copyright © '}
        {'HarshaGeorge '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }