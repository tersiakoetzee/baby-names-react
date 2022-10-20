


const Favorites = (props) => {
  const FavName = props.data.map((person, item) => {
    let babySex = person.sex === "m" ? "baby-boy" : "baby-girl";
    return (
      <li
        onClick={() => props.removeFavName(person)}
        key={item}
        className={`list-item ${babySex}`}
      >
        {person.name}
      </li>
    );
  });

  const message =
    FavName.length === 0
      ? ` Click to add your favorites names below`
      : null;
  return (
    <div className="favNamesList-wrapper">
      {
        <ul className="name-list">
          <span className="fav-list-tittle">Favorites: </span>
          <span className="fav-list-tittle">{message}</span>
          <li className="name-list-item">{FavName}</li>
        </ul>
      }
    </div>
  );
};

export default Favorites;
