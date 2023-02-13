import {  Button, Card } from "react-bootstrap"
import Rating from '@mui/material/Rating';
import { useState } from "react";
import { Link } from "react-router-dom";
const MovieCard=({el,movies,setMovies})=>{
    const [showMore, setShowMore] = useState(false);
    const handleDelete =(a)=> setMovies(movies.filter(el=> el.id !== a))
    return(
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={el.posterURL} style={{height:'420px',width:'285px'}}/>
        <Card.Body>
          <Card.Title><Link to={`/movie/${el.id}`}>{el.title}</Link></Card.Title>
          <Card.Text>
          {showMore ? el.description : `${el.description.substring(0,45)}`}
          <button className="btn" onClick={()=>setShowMore(!showMore)} >{showMore ? "Show Less" : "Show more"}</button>
        
          </Card.Text>
          <Rating name="read-only" value={el.rating} readOnly />
          <br/>
          <Button variant="primary" onClick={()=>handleDelete(el.id)}>Delete</Button>
        </Card.Body>
      </Card>
    )
}

export default MovieCard