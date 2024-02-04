# Movie-Tracking-System

## Technology Used

This project is developed using ReactJS and Material UI.

## Features

-   Fully responsive mobile first design.
-   Used CSS framework Material UI for fast design.
-   Search option to filter movie list.
-   Filter option provided to choose based on genre.
-   Design is inspired by my favourite video streaming service netflix.

## Challenges Faced

-  Load large amount of data containing images. This problem can be solved in the frontend by using virtualization libraries such as react-window and in the server side by using techniques such as implementing pagination. Here I have sliced the data and used only a portion from the json file.
-  Search input loss focus due to component rerendering when state value change occured, used useRef instead of    useState solved my issue to manage user input.
-  Some json objects doesn't load images. This issue solved in the Card media by adding onError funtion.
