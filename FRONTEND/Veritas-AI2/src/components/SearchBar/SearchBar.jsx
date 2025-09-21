// import React, { useState } from "react";
// import { FaSearch } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";
// import styles from "./SearchBar.module.css";

// const SearchBar = () => {
//   const [query, setQuery] = useState("");
//   const navigate = useNavigate();

//   const handleChange = (e) => setQuery(e.target.value);

//   const handleKeyDown = (e) => {
//     if (e.key === "Enter" && query.trim() !== "") {
//       navigate(`/search/${encodeURIComponent(query)}`);
//     }
//   };

//   const handleClick = () => {
//     if (query.trim() !== "") {
//       navigate(`/search/${encodeURIComponent(query)}`);
//     }
//   };

//   return (
//     <div className={styles.searchContainer}>
//       <FaSearch className={styles.searchIcon} onClick={handleClick} />
//       <input
//         type="text"
//         value={query}
//         onChange={handleChange}
//         onKeyDown={handleKeyDown} // ✅ use onKeyDown (onKeyPress is deprecated)
//         className={styles.searchInput}
//         placeholder="Search or type a news"
//       />
//     </div>
//   );
// };

// export default SearchBar;
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import styles from "./SearchBar.module.css";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => setQuery(e.target.value);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && query.trim() !== "") {
      navigate(`/search/${encodeURIComponent(query)}`);
    }
  };

  const handleClick = () => {
    if (query.trim() !== "") {
      navigate(`/search/${encodeURIComponent(query)}`);
    }
  };

  return (
    <div className={styles.searchContainer}>
      <FaSearch className={styles.searchIcon} onClick={handleClick} />
      <input
        type="text"
        value={query}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        className={styles.searchInput}
        placeholder="Search or type a news"
      />
    </div>
  );
};

export default SearchBar;
