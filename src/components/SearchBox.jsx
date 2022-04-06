import "./SearchBox.css";

const SearchBox = ({ onChange, placeholder }) => {
  return (
    <input
      className="search"
      type="search"
      onChange={onChange}
      placeholder={`${placeholder}`}
    />
  );
};

export default SearchBox;
