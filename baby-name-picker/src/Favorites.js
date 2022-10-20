


const Favorites = (props) => {
  const FavName = props.data.map((person, ind) => {
    let babySex = person.sex === "m" ? "baby-boy" : "baby-girl";
    return (
      <li
        onClick={() => props.removeFavName(person)}
        key={ind}
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
    <div className="favNames-wrapper">
      {
        <ul className="favList">
          <span className="fav-title">Favorites: </span>
          <span className="fav-message">{message}</span>
          <li className="name-list-item">{FavName}</li>
        </ul>
      }
    </div>
  );
};

export default Favorites;
