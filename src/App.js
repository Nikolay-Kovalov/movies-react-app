import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout/Layout';
import { lazy } from 'react';
// import Cast from './components/Cast/Cast';
// import Reviews from './components/Reviews/Reviews';



const Home = lazy(() =>  import('./pages/Home'));
const Movies = lazy(() =>  import('./pages/Movies') );
const MovieDetails = lazy(() => import('./pages/MovieDetails'));
const Cast = lazy(() => import('./components/Cast/Cast'));
const Reviews = lazy(()=> import('./components/Reviews/Reviews'))

function App() {

  return (
    <div className="app">
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home />}/>
          <Route path='movies' element={<Movies />}/>
          <Route path='movies/:movieId' element={<MovieDetails />}>
            <Route path='cast' element={<Cast/>} />
            <Route path='reviews' element={<Reviews/>} />
          </Route>
        </Route>
     </Routes>
    </div>
  );
}

export default App;
