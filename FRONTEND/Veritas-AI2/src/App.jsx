// import React from 'react';
// import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
// import './App.css';
// import Header from './components/Header/Header';
// import Footer from './components/Footer/Footer';

// // Corrected import paths for consistency (using lowercase 'pages')
// import HomePage from './Pages/HomePage/HomePage';
// import CategoriesPage from './pages/CategoriesPage/CategoriesPage';


// const SearchResults = () => {
//   const { query } = useParams();
//   return (
//     <main>
//       <h1>Search Results</h1>
//       <p>You searched for: <strong>{query}</strong></p>
//     </main>
//   );
// };

// function App() {
//   return (
//     <BrowserRouter>
//       <div className="App">
//         <Header />
        
//         {/* Key Change: The <main> tag is removed from here. */}
//         {/* Each page component will now provide its own <main> tag. */}
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/categories" element={<CategoriesPage />} />
//           <Route path="/search/:query" element={<SearchResults />} />
//         </Routes>
        
//         <Footer />
//       </div>
//     </BrowserRouter>
//   );
// }

// export default App;


import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

// Pages
import HomePage from './Pages/HomePage/HomePage';
import CategoriesPage from './Pages/CategoriesPage/CategoriesPage';
import SearchResults from './Pages/SearchResults/SearchResults'; 

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/search/:query" element={<SearchResults />} />
        </Routes>
        
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
