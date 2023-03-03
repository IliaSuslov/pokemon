export function ColoredRound({ type }) {
  const getColor = () => {
    switch (type) {
      case "grass":
        return "green";
      case "poison":
        return "lightgreen";
      case "fire":
        return "red";
      case "electric":
        return "yellow";
      case "flying":
        return "lightblue";
      case "water":
        return "blue";
      case "bug":
        return "#A8B820";
      case "ground":
        return "brown";
      case "fairy":
        return "pink";
      case "fighting":
        return "coral";
      case "psychic":
        return "#F85888";
      case "dragon":
        return "purple";
      case "ghost":
        return "#705898";
      case "steel":
        return "#B8B8D0";
      default:
        return "grey";
    }
  };
  return (
    <div
      style={{
        backgroundColor: getColor(),
        width: 10,
        height: 10,
        borderRadius: 5,
      }}
    ></div>
  );
}
