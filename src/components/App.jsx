import { Navigate, Route, Routes} from "react-router-dom";
import { Movies } from "pages/Movies";
//import { NotFound } from "pages/NotFound";
import { Layout } from "./Layout/Layout";
import { lazy } from "react";
//import { Link } from './App.styled';

const Home = lazy(() => import('../pages/Home'));
const MovieDetalies = lazy(() => import('../pages/MovieDetalies'));
const Cast = lazy(() => import('../components/Cast/Cast'));
const Review = lazy(() => import('../components/Review/Review'));

export const App = () => {
  return (
    <div>
      
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Navigate to="home" />} />
          <Route path='home' element={<Home/>}/>
          <Route path='home/:movieId' element={<MovieDetalies />}>
            <Route path='cast' element={<Cast />} />
            <Route path='reviews' element={<Review/>}/>
          </Route>

          <Route path='movies' element={<Movies />} />
          <Route path='movies/:movieId' element={<MovieDetalies />}>
            <Route path='cast' element={<Cast />} />
            <Route path='reviews' element={<Review/>}/>
          </Route>
          {/* <Route path='*' element={<NotFound />} /> */}
        </Route>
      </Routes>
    </div>
  );
};
