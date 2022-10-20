

const BabyList = ({ data, handleClick }) => {
  return (
    <ul className="list">
      {data.map((name, item) => {
        let babySex = name.sex === "m" ? "babygirl" : "babyboy";
        return (
          <li
            onClick={() => handleClick(name)}
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
