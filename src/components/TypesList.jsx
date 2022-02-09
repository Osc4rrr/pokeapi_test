const TypesList = ({ type }) => {
  return (
    <span
      style={{
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
