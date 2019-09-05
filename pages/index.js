import React, { useState, useEffect } from "react";
import Router from "next/router";
import qs from "qs";
import { Head, findResultsState, ShipSearch } from "../components/search";
import Layout from "../components/layout";

const updateAfter = 700;

const searchStateToUrl = searchState =>
  searchState ? `${window.location.pathname}?${qs.stringify(searchState)}` : "";

function Home(props) {
  const [state, setState] = useState();
  const onSearchStateChange = searchState => {
    clearTimeout(setState);
    setTimeout(() => {
      const href = searchStateToUrl(searchState);
      Router.push(href, href, {
        shallow: true
      });
    }, updateAfter);
    setState({ searchState });
  };

  useEffect(() => {
    setState({ searchState: qs.parse(window.location.search.slice(1)) });
    return () => {
      setState({ searchState: qs.parse(window.location.search.slice(1)) });
    };
  }, []);

  return (
    <Layout>
      <ShipSearch
        resultsState={props.resultsState}
        onSearchStateChange={onSearchStateChange}
        searchState={
          state && state.searchState ? state.searchState : props.searchState
        }
      />
    </Layout>
  );
}

Home.getInitialProps = async params => {
  const searchState = await qs.parse(
    params.asPath.substring(params.asPath.indexOf("?") + 1)
  );
  const resultsState = await findResultsState(ShipSearch, { searchState });
  return { resultsState, searchState };
};

export default Home;
