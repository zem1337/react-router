import { useParams } from "react-router-dom";
import { IframeHTMLAttributes } from "react";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
const MoviePage=({movies})=>{
    const {space}= useParams()
    const found = movies.find(el=> el.id == space)
    return(
        <div>
            <h1>{found.title}</h1>
            <br/>
            <iframe width="909" height="386" src={found.trailer} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <br/>
            <p>{found.description}</p>
            <Button variant="primary" as={Link} to='/movies' >Go Back</Button>
        </div>
    )
}
export default MoviePage