import React from "react";
import SearchInput from "../components/SearchInput/SearchInput";
import SearchResults from "../components/SearchResults/SearchResults";
import CountryDetails from "../components/CountryDetails/CountryDetails";

const Home = () => {
  return (
    // <div className="grid grid-cols-2">
    <div className="py-20 px-4  justify-center">
      <SearchInput />
      <SearchResults />
      <CountryDetails />
    </div>
  );
};

export default Home;
