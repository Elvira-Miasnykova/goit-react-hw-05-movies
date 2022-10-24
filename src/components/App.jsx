import { Route, Routes} from "react-router-dom";
import { Home } from "pages/Home";
//import { Movies } from "pages/Movies";
import { MovieDetalies } from "pages/MovieDetalies";
//import { NotFound } from "pages/NotFound";
import { Layout } from "./Layout";
import { Cast } from "./Cast/Cast";
import { Review } from "./Review/Review";
//import { Link } from './App.styled';

export const App = () => {
  return (
    <div>
      
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='/home' element={<Home />} />
          <Route path='/home/:movieId' element={<MovieDetalies />}>
            <Route path='cast' element={<Cast />} />
            <Route path='reviews' element={<Review/>}/>
          </Route>

          <Route path='/movies' element={<div>Movies</div>} />
          <Route path='/movies/:movieId' element={<MovieDetalies />} />
          {/* <Route path='*' element={<NotFound />} /> */}
        </Route>
      </Routes>
    </div>
  );
};
