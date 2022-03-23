import { Container, Grid, Typography } from "@mui/material";
import SearchBox from "../components/SearchBox";
import axios from "axios";
import { memo, useEffect, useState } from "react";
import ListPokemon from "../components/ListPokemon";
import PaginationMUI from "../components/PaginationMUI";

const Home = memo(() => {
  const initialUrl = localStorage.getItem("currentPage")
    ? localStorage.getItem("currentPage")
    : "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=25";
  const [currentUrl, setCurrentUrl] = useState(initialUrl);

  const [nextPage, setNextPage] = useState();
  const [pokemonListData, setPokemonListData] = useState([]);
  const [loading, setLoading] = useState(false);

  const initialPageFromHome = localStorage.getItem("currentPageFromHome")
    ? parseInt(localStorage.getItem("currentPageFromHome"))
    : 1;
  const [currentPageFromHome, setCurrentPageFromHome] =
    useState(initialPageFromHome);

  const handleSearch = (e) => {
    setLoading(true);
    e.preventDefault();
    const filtro = pokemonListData.filter((pokemon) => {
      return pokemon.name.includes(e.target.value.trim().toLowerCase());
    });

    if (filtro.length > 0 && e.target.value.trim().length > 2) {
      setPokemonListData(filtro);
    } else {
      getDataPokemonList();
    }

    setLoading(false);
  };

  const getDataPokemonList = async () => {
    setLoading(true);
    await axios
      .get(currentUrl)
      .then((response) => response)
      .then((data) => {
        let results = data.data.results;
        setNextPage(data.data.next);

        let envolves_from = null;
        let promisesArray = results.map((result) => {
          return axios.get(result.url).then(async (response) => {
            await axios.get(response.data.species.url).then((response) => {
              envolves_from = response.data.evolves_from_species;
            });
            response.data.envolves_from = envolves_from;

            return response.data;
          });
        });
        return Promise.all(promisesArray);
      })
      .then((data) => setPokemonListData(data));

    setLoading(false);
  };

  useEffect(() => {
    getDataPokemonList();
  }, [currentUrl]);

  const goToNextPage = (val) => {
    if (val === 1) {
      setCurrentPageFromHome(val);
      localStorage.setItem("currentPageFromHome", val);
      setCurrentUrl(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=25`);
      localStorage.setItem(
        "currentPage",
        `https://pokeapi.co/api/v2/pokemon/?offset=0&limit=25`
      );
    } else {
      setCurrentPageFromHome(val);
      localStorage.setItem("currentPageFromHome", val);
      setCurrentUrl(
        `https://pokeapi.co/api/v2/pokemon/?offset=${(val - 1) * 25}&limit=25`
      );

      localStorage.setItem(
        "currentPage",
        `https://pokeapi.co/api/v2/pokemon/?offset=${(val - 1) * 25}&limit=25`
      );
    }
  };

  return (
    <>
      <Container fixed>
        <SearchBox pokemon={pokemonListData} handleSearch={handleSearch} />

        {loading ? (
          <Typography variant="h5" style={{ textAlign: "center" }}>
            Loading...
          </Typography>
        ) : (
          <Grid container spacing={2}>
            {pokemonListData.map((poke) => (
              <Grid item lg={4} md={6} xs={12} key={poke.id}>
                <ListPokemon pokemon={poke} />
              </Grid>
            ))}
          </Grid>
        )}
        <PaginationMUI
          nextPage={nextPage}
          goToNextPage={goToNextPage}
          currentPageFromHome={currentPageFromHome}
        />
      </Container>
    </>
  );
});

export default Home;
