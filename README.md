# react-movie-database


**Tools used:**
* `react` for creating a user interface with reusable renderable components
* `bootstrap` to simplify css styling
* `lodash` for easier array manipulation
* `node` package manager

The layout of this project goes as follows. There is a fake movie database stored in a javascript object. Those movies are passed into the database and manipulated in state. 

---

The ui is organized into these main components:

`Movies` is the main component that acts as a container for all other components. 

---

`ListGroup` allows the user to change genre designation
`Pagination` allows the user to cycle through the "pages" of movies
`MoviesTable` holds the list of each movie and its data

---

`LikeButton` allows the user to like movies
`TableHeader` allows the user to sort data by the following headers:
* title
* genre
* stock
* rate

---

This is the organization of the components:

<img width="416" alt="Screenshot 2023-05-10 at 7 34 07 PM" src="https://github.com/mfkimbell/react-movie-database/assets/107063397/a9baa6c8-43ff-4eb9-a688-89831f24e176">

And this is what it looks like rendered:

<img width="1409" alt="Screenshot 2023-05-10 at 7 18 11 PM" src="https://github.com/mfkimbell/react-movie-database/assets/107063397/0803110d-7eee-49fc-a03a-7f0b36852989">
