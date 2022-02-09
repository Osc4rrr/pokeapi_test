import { Container, Grid, Typography } from "@mui/material";
import SearchBox from "../components/SearchBox";
import axios from "axios";
import { memo, useEffect, useState } from "react";
import ListPokemon from "../components/ListPokemon";

const Home = memo(() => {
  const [pokemonListData, setPokemonListData] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = (e) => {
    setLoading(true);
    e.preventDefault();
    const filtro = pokemonListData.filter((pokemon) => {
      return pokemon.name.includes(e.target.value.trim().toLowerCase());
    });

    if (filtro.length > 0 && e.target.value.trim().length > 0) {
      setPokemonListData(filtro);
    } else {
      getDataPokemonList();
    }

    setLoading(false);
  };

  const getDataPokemonList = async () => {
    setLoading(true);
    await axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=25")
      .then((response) => response)
      .then((data) => {
        let results = data.data.results;
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
  }, []);

  return (
    <Container fixed>
      <SearchBox pokemon={pokemonListData} handleSearch={handleSearch} />

      {loading ? (
        <Typography variant="h5" style={{ textAlign: "center" }}>
          Loading...
        </Typography>
      ) : (
        <Grid container spacing={2}>
          {pokemonListData.map((poke) => (
            <Grid item lg={4} md={6} xs={12} key={poke.order}>
              <ListPokemon pokemon={poke} />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
});

export default Home;
