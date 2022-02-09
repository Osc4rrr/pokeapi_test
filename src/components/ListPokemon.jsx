import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Fade,
  Typography,
} from "@mui/material";
import { memo } from "react";
import { useNavigate } from "react-router-dom";

const ListPokemon = memo(({ pokemon }) => {
  const navigate = useNavigate();

  return (
    <Fade in={true}>
      <Card
        sx={{ boxShadow: 3 }}
        style={{
          display: "flex",
          width: "auto",
          height: "280px",
          justifyContent: "space-between",
          margin: "5px",
          backgroundColor: "rgba(192,192,192,0.2)",
        }}
      >
        <Box
          style={{
            width: "auto",
            margin: "10px",
          }}
        >
          {/** Name of the pokemon and more here */}
          <CardContent>
            <Typography
              variant="h6"
              style={{
                textTransform: "uppercase",
                fontWeight: "lighter",
              }}
            >
              {pokemon.name}{" "}
            </Typography>

            <Typography variant="subtitle2">#{pokemon.id}</Typography>

            <Typography variant="subtitle2">Type(s):</Typography>
            <Box
              style={{
                display: "flex",
                justifyContent: "start",
              }}
            >
              {pokemon.types.map((type) => (
                <Box key={type.type.name}>
                  <CardMedia
                    component="img"
                    image={`https://firebasestorage.googleapis.com/v0/b/pokeapiimages.appspot.com/o/${type.type.name}_type.png?alt=media&token=67138a31-fa96-4446-bd15-a3eb1ba6076e`}
                    alt="img-pokemon"
                    style={{
                      width: "25px",
                      objectFit: "contain",
                      marginRight: "5px",
                    }}
                  ></CardMedia>
                  <Typography
                    variant="subtitle2"
                    style={{ marginRight: "5px", textTransform: "capitalize" }}
                  >
                    {type.type.name}
                  </Typography>
                </Box>
              ))}
            </Box>

            <Typography
              variant="subtitle2"
              style={{
                textTransform: "capitalize",
                fontWeight: "lighter",
              }}
            >
              {pokemon.envolves_from
                ? `Envolves From: ${pokemon.envolves_from.name}`
                : ""}
            </Typography>

            <Button
              variant="outlined"
              size="small"
              style={{ fontSize: "15px", marginTop: "10px" }}
              onClick={() => navigate(`/${pokemon.id}`)}
            >
              More
            </Button>
          </CardContent>
        </Box>

        {/** The image here */}
        <CardMedia
          style={{
            width: "200px",
            objectFit: "contain",
          }}
          component="img"
          image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
          alt="img-pokemon"
        />
      </Card>
    </Fade>
  );
});

export default ListPokemon;
