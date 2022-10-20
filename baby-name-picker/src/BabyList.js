

const BabyList = ({ data, item }) => {
  return (
    <ul className="list">
      {data.map((name, click) => {
        let babySex = name.sex === "m" ? "baby-boy" : "baby-girl";
        return (
          <li
            onClick={() => click(name)}
            key={item}
            className={`list-item ${babySex}`}
          >
            {name.name}
          </li>
        );
      })}
    </ul>
  );
};

export default BabyList;
