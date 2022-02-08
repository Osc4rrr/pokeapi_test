const TypesList = ({ type }) => {
  return (
    <span
      style={{
        border: "0px solid black",
        display: "flex",
        justifyContent: "center",
        flexDirection: "row",
        textTransform: "capitalize",
      }}
    >
      {type.type.name}
    </span>
  );
};

export default TypesList;
