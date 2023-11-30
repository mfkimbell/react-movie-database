# react-movie-database

![Untitled](https://github.com/mfkimbell/react-movie-database/assets/107063397/db5f7e1c-8035-4880-825d-96d19988601a)


**Tools used:**
* `React JS` for creating a user interface with reusable renderable components
* `Bootstrap` to simplify css styling
* `Lodash` for easier array manipulation
* `Node` package manager
* `Axios` to make api calls from the front-end
* `.NET CORE Web API` allow api calls to go from front-end to back-end
* `Entity Framework Core` allow for models to faciliate CRUD operations for sql tables
* `Microsoft SQL Server` to store data
* `Docker` containerization of the application

  A C# and React JS  GUI that connects to
                      Microsoft Sql Server using
                      .NET Entity Framework CORE to do CRUD operations
                      to manipulate movie data. The user can add, like, delete,
                      and sort data in various ways, and these changes with be
                      reflected in the sql database and the GUI.
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

We're using Entity Framework Core instead of making specific SQL calls, so here is a snippet of the Route, Model (for the sql table), and API call that is made when you add a book (however this is just one of many API routes and calls):

![fjkdsl](https://github.com/mfkimbell/react-movie-database/assets/107063397/cc26e0ed-cb15-42e2-aaa7-6021a8922927)


After rendering it looks like this. Each of the headings can be clicked and reclicked to sort by the headings *ascending* and *descending* order:

![slide1](https://github.com/mfkimbell/react-movie-database/assets/107063397/82f06e45-274a-4f57-a7c0-bf6d8524f94d)

Shown below is sorting by stock:

![slide2](https://github.com/mfkimbell/react-movie-database/assets/107063397/575bb757-4f59-4547-af02-42060a514a2e)

When the numbers in the pagination component are clicked, the next "page" of results are rendered instead:

![pagination](https://github.com/mfkimbell/react-movie-database/assets/107063397/6b201280-98cd-4a36-9edb-fa463286710c)


When categories are clicked, only books belonging to that category are displayed:

![slide 3](https://github.com/mfkimbell/react-movie-database/assets/107063397/cb7a7a0c-bc37-4cbc-99f9-608d502532c4)

When you click "Add Movie" it renders a form that the user can fill out to add a movie to the database:

![addbook](https://github.com/mfkimbell/react-movie-database/assets/107063397/939022cc-eb7d-4de5-ac30-31c73e6ad57d)

Here is it shown in Sql Server:

![add](https://github.com/mfkimbell/react-movie-database/assets/107063397/fa0f9db4-59c3-4c1d-ac72-1761f92904d2)

It's currently "liked", the user can choose to click the like button:

![like](https://github.com/mfkimbell/react-movie-database/assets/107063397/a5cdede1-958e-42f9-b0b2-9c805551525d)

We can see in the database, it's "liked" status has been changed to "false":

![data](https://github.com/mfkimbell/react-movie-database/assets/107063397/c999f954-533c-42ee-81f7-ed656e3c6a7c)

Now we will delete "Avengers" from the database: 

![delete](https://github.com/mfkimbell/react-movie-database/assets/107063397/288004a8-c318-472e-89b9-160c71795446)

We can see it has been removed from the database:

![fdsfd](https://github.com/mfkimbell/react-movie-database/assets/107063397/99a9f090-1cb6-470e-9ded-f286a3d1365b)

