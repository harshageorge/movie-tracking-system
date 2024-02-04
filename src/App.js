import React, { useState, useRef } from "react";
import { ThemeProvider } from '@mui/material/styles';
import AppBar from "@mui/material/AppBar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import Box from '@mui/material/Box';
import CloseIcon from '@mui/icons-material/Close';
import movieList from "./data/movies.json";
import Button from '@mui/material/Button';
import FALLBACK_IMAGE from '../src/assets/placeholder-image.png';
import { StyledToolbar } from "./styles";
import { theme } from "./styles/index";
import { Copyright } from "./components/footer";



export default function App() {

  const [movieData, setmovieData] = useState(movieList.slice(0, 1000));
  const [movieDataFiltered, setmovieDataFiltered] = useState([]);
  const genre = ["Drama", "Documentary", "Thriller", "Adventure", "Mystery", "Crime", "Comedy", "Fantasy", "Action"];
  const [search, setSearch] = useState(false);
  const nameRef = useRef();

  const handleSearch = () => {
    setSearch(true);
    const searchTerm = nameRef.current.value;
    const filteredItems = movieList.slice(0, 1000).filter((user) =>
      user.Title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setmovieData(filteredItems);
    setmovieDataFiltered(filteredItems);
  }

  const handleSearchClose = () => {
    setSearch(false);
    nameRef.current.value = "";
    setmovieDataFiltered([]);
    setmovieData(movieList.slice(0, 1000));
  }

  const filterMovie = (data) => {
  if (search&&movieDataFiltered.length) {
      const filteredItems = movieDataFiltered.filter((user) =>
        user.Genre.toLowerCase().includes(data.toLowerCase())
      );
      console.log(filteredItems);
      setmovieData(filteredItems);
    
    } else {
      const movieDataList = movieList.slice(0, 1000);
      const filteredItems = movieDataList.filter((user) =>
        user.Genre === data
      );
      setmovieData(filteredItems);
   }
  }

  const resetMovieList = () => {
    setmovieDataFiltered([]);
    setmovieData(movieList.slice(0, 1000));
    setSearch(false);
  }
  const onMediaFallback = event => event.target.src = FALLBACK_IMAGE;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <StyledToolbar> {/*toolbar*/}
          <Button onClick={() => resetMovieList()} size="large" sx={{ color: "ochre.main" }}>
            Movie Tracking System
          </Button>
          <Typography>
            <TextField
              InputLabelProps={{
                style: { color: '#fff' },
              }}
              sx={{ input: { color: '#fff' } }}
              id="standard-basic"
              label="Search"
              color="error"
              variant="standard"
              inputRef={nameRef}
            />
            <IconButton onClick={handleSearch} aria-label="clickable-button">
              <SearchIcon sx={{ color: "#fff" }} />
            </IconButton>
            {search && <IconButton onClick={handleSearchClose} aria-label="clickable-button">
              <CloseIcon sx={{ color: "#fff" }} />
            </IconButton>}
          </Typography>
        </StyledToolbar>
      </AppBar>
      <main >
        <Box
          sx={{
            bgcolor: "ochre.dark",
            pt: 1,
            // pb: 6,
            
          }}
        >
          <Container sx={{
            backgroundColor: "ochre.dark",
          }}>
            <Container sx={{ py: 2 }} maxWidth="sm">
              <Box component="span" m={2} sx={{
                height: "100%",
                display: "flex",
                flexDirection: "row",
              }}>
                <Grid container spacing={1}> {/*grid for displaying filter*/}
                  {genre.map((data) => {
                    return (
                      <Button variant="text" size="small" onClick={() => filterMovie(data)} sx={{ color: "ochre.light" }}>{data}</Button>
                    )
                  })}
                </Grid>
              </Box>
            </Container>
            <Container sx={{ py: 4 ,height:"100vh",backgroundColor:"ochre.dark"}} >
              <Grid container spacing={2}> {/*Card to display movie*/}
                {(movieData).map((data) => {
                  return (
                    <Grid item key={data.imdbId} xs={12} sm={6} md={3}>
                      <Card
                        raised
                        sx={{
                          maxWidth: 280,
                          minHeight: "100%",
                          margin: "0 auto",
                          padding: "0.1em",
                          backgroundColor: "#8d8c91"
                        }}
                      >
                        <CardMedia
                          component="img"
                          height="250"
                          image={data.Poster}
                          loading="lazy"
                          alt={"No image"}
                          sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
                          onError={onMediaFallback}
                        />
                        <CardContent sx={{ backgroundColor: "#8d8c91", textAlign: "center", boxSizing: "border-box", flexFlow: 1 }}>
                          <Typography gutterBottom variant="h9" component="div">
                            {data.Title}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  );
                })}
              </Grid>
            </Container>
          </Container>
        </Box>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'ochre.dark', p: 6 }} component="footer">
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}
