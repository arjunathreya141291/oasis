import PropTypes from "prop-types";
import React, { createContext, useState } from "react";

const SearchTermContext = createContext();

const SearchTermProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("hi");

  const context = {
    searchTerm,
    setSearchTerm,
  };

  return (
    <SearchTermContext.Provider value={context}>
      {children}
    </SearchTermContext.Provider>
  );
};

SearchTermProvider.propTypes = {
  children: PropTypes.node,
};

export { SearchTermContext, SearchTermProvider };
