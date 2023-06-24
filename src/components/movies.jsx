import React, { Component } from "react";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";
import ListGroup from "./common/listGroup";
import { getGenres } from "../services/GenreService";
import MoviesTable from "./moviesTable";
import _ from "lodash";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import axios from "axios";

//imrc cc

class Movies extends Component {

  

  state = {
    movies: [],
    genres: [],
    pageSize: 4,
    currentPage: 1,
    sortColumn: { path: "title", order: "asc" },
    hi: {hi: console.log("this is called again")},
    movie: "",
    id: "",
    title: "",
    genre: "",
    stock: 2,
    rate: 2.5,
    liked: false,
    add: "false",
    field: "A",
    form2: <p></p>


  };



  async componentDidMount() {
    

      
      fetch('https://localhost:7086/api/Movie').then(resp=>resp.json())
      .then(resp=>
   
    this.setState({
      
      movies: resp})
    );
       
    console.log("in component1", this.state);  
      
    const genres = [{ _id: "", name: "All Genres" }, ...getGenres()];
    
    
    this.setState({
      ...this.state,
      genres: genres,
    });
    console.log("in component2", this.state);
  }


  

  handleDelete = (movie) => {
    console.log("movie deleted", movie);
    const movies = this.state.movies.filter((m) => m.title !== movie.title);
    this.setState({ movies: movies }); //key value
    this.state.id=movie.id;
    const data={
      "id": this.state.id,
      
    };
  // let movie3 =JSON.stringify(movie2);
  //   fetch('https://localhost:7086/api/Movie', movie3);
  
    let url1='https://localhost:7086/api/Movie';
    let url2="/"
    let url3 = url1.concat(url2);
    let url4 = url3.concat(this.state.id);
    console.log("url4",url4);
    axios.delete(url4);
  };

  handleLike = (movie) => {
    let url1='https://localhost:7086/api/Movie';
    let url2="/"
    let url3 = url1.concat(url2);
    let url4 = url3.concat(movie.id);

   movie.isLiked=!movie.isLiked;
   console.log("movie",movie.id);

   
 
    
  // let movie3 =JSON.stringify(movie2);
  //   fetch('https://localhost:7086/api/Movie', movie3);
  
    
    axios.put(url4,movie);
    
  };

  handlePageChange = (page) => {
    console.log(page);
    this.setState({ currentPage: page });
  };

  handleGenreSelect = (genre) => {
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };

  handleSort = sortColumn => {
    this.setState({ sortColumn });
  };

  handleAdd = () =>{
    this.state.add = !this.state.add;
    console.log(this.state)

    this.setState({field: "b"});
   
    let form2=<></>
    console.log(this.state.add,"howdy");

    if (1==1) {
    this.setState({form2: <div>
      <>Id:     </>
<input

onChange={(e) => this.state.id=e.target.value}
label="Id" style={{marginLeft: "29px"}}
/>
<br></br>
<>Title: </>
<input

onChange={(e) => this.state.title=e.target.value}
label="Title" style={{marginLeft: "13px"}}
/>
<br></br>
<>Genre: </>
<input

onChange={(e) => this.state.genre=e.target.value}
label="Title" 
label="Genre" 
/>
<br></br>
<>Stock: </>
<input


onChange={(e) => this.state.stock=e.target.value}
label="Title" style={{marginLeft: "5px"}}
label="Stock" 
/>
<br></br>
<>Liked: </>
<input

onChange={(e) => this.state.liked=e.target.value}
label="Liked" style={{marginLeft: "5px"}}
/>
<br></br>
<br></br>
<button class="btn btn-primary" style={{marginTop: "-10px"}} onClick={() =>  {
    console.log("hi");
    let liked = false;
    if (this.state.liked == "true") {
      liked = true;
    };
    if (this.state.liked == "false") {
      liked = false;
    };
    const data={
      "id": this.state.id,
      "title": this.state.title,
      "genre": this.state.genre,
      "numberInStock": this.state.stock,
      "dailyRentalRate": this.state.rate,
      "isLiked": liked,
    };
  // let movie3 =JSON.stringify(movie2);
  //   fetch('https://localhost:7086/api/Movie', movie3);
  
    const url='https://localhost:7086/api/Movie';
    axios.post(url,data);
    window.location.reload();
    
    
   
    
}}
  
  > Submit </button>
</div>});
     

    }
  
   
};



  render() {
    
    const { length: count } = this.state.movies;
    const {
      pageSize,
      currentPage,
      sortColumn,
      movies: allMovies,
      selectedGenre,
    } = this.state;

    if (count === 0) return <p>There are no movies in the database</p>;
    console.log("selected genre -", selectedGenre);

    const filtered =
      selectedGenre && selectedGenre.name !== "All Genres"
        ? allMovies.filter((m) => m.genre === selectedGenre.name)
        : allMovies;

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const movies = paginate(sorted, currentPage, pageSize, selectedGenre);

    console.log("form",this.state.form2);
    

    return (
      <div className="row">
        <div className="col-3">
          <ListGroup
            items={this.state.genres}
            onItemSelect={this.handleGenreSelect}
            selectedItem={this.state.selectedGenre}
          ></ListGroup>
        </div>
        <div className="col" >
          <div className="row" ><p>Showing {filtered.length} movies in the database   </p>
          
                <button onClick={()=>{this.handleAdd()}} className="btn btn-primary btn-sm" style = {{marginLeft: '30.2em', marginBottom: '0.7em'}}>Add Movie</button>
                   
          
            </div>
          
          
         
          <MoviesTable
            movies={movies}
            sortColumn={sortColumn}
            onLike={this.handleLike}
            onDelete={this.handleDelete}
            onSort={this.handleSort}
          ></MoviesTable>
          {}
          <Pagination
            itemsCount={filtered.length}
            pageSize={pageSize}
            onPageChange={this.handlePageChange}
            currentPage={currentPage}
          ></Pagination>
          {this.state.form2}
         
        </div>
      </div>
    );
  }
}

export default Movies;
