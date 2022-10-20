const Gender = (props) => {
  const genderType =
    props.gender === "b"
      ? `Both Female & Male Names`
      : props.gender === "f"
      ? `Displaying girl names only`
      : `Displaying boy names only`;
  return (
    <div className="genderContainer">
      <form>
        <legend>{genderType}</legend>

        <label htmlFor="Both">
          <input
            type="radio"
            name="Both"
            value="b"
            checked={props.gender === "b" ? true : false}
            onChange={props.handleOnchange}
          />
          Both
        </label>

        <label htmlFor="Female">
          <input
            type="radio"
            name="Male"
            value="m"
            checked={props.gender === "m" ? true : false}
            onChange={props.handleOnchange}
          />
          Female
        </label>

        <label htmlFor="Male">
          <input
            type="radio"
            name="Female"
            value="f"
            checked={props.gender === "f" ? true : false}
            onChange={props.handleOnchange}
          />
          Male
        </label>
      </form>
    </div>
  );
};

export default Gender;
