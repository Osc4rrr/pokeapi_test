const AbilitiesList = ({ ability }) => {
  return (
    <span
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "row",
        textTransform: "capitalize",
      }}
    >
      {ability.name}
    </span>
  );
};

export default AbilitiesList;
