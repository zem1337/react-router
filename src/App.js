import { useState } from 'react';
import './App.css';
import AddMovie from './Components/AddMovie';
import FilterMovie from './Components/FilterMovie';
import MovieList from './Components/MovieList';
import NavMovie from './Components/NavMovie';

function App() {
  const [movies,setMovies] = useState(
    [
      {title : 'Puss in Boots: The Last Wish', description :'Puss in Boots discovers that his passion for adventure has taken its toll when he learns that he has burnt through eight of his nine lives. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.',posterURL:'https://upload.wikimedia.org/wikipedia/en/thumb/7/78/Puss_in_Boots_The_Last_Wish_poster.jpg/220px-Puss_in_Boots_The_Last_Wish_poster.jpg',rating : 5, id : Math.random()},
      {title : 'The Boss Baby', description :'Seven-year-old Tim gets jealous when his parents give all their attention to his little brother. Tim soon learns that the baby can talk and the two team up to foil the plans of the CEO of Puppy Co.',posterURL:'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQoXtgMlVpiOtLWBSauHiGoZfQsMRVU3l4Ep2hJ8KDUEYqqFwMu',rating : 3, id : Math.random()},
      {title : 'How to Train Your Dragon', description :'Hiccup, a Viking, must kill a dragon to mark his passage into manhood and be initiated into his tribe. However, he ends up doing the exact opposite by befriending a deadly dragon, Night Fury.',posterURL:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0kylEqLF9BAOq_sT_250hBUBbA0X-OEMuBcy4mPfK1Rn6sDSq',rating : 5, id : Math.random()},
      {title : 'The Bad Guys', description :'When a group of animals get caught after committing several brazen thefts, they strike a deal with the authorities. An arrogant philanthropist is to help them turn themselves into model citizens.',posterURL:'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRmLUY5s6EEAHzEOQPF7Nv6tWElixl6kUmyvBPf7RezVPM3z_yd',rating : 4, id : Math.random()},
  
    ]
  )
  const [titre,setTitre] = useState('')
  const [etoile,setEtoile] = useState(0)
  return (
    <div>
      <NavMovie/>
      <AddMovie setMovies={setMovies} movies={movies}/>
      <FilterMovie setTitre={setTitre} setEtoile={setEtoile} titre={titre} etoile={etoile}/>
      <MovieList movies={movies} titre={titre} etoile={etoile} setMovies={setMovies}/>
    </div>
  );
}

export default App;