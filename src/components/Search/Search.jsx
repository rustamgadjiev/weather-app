import s from "./Search.module.scss";

export const Search = ({ searchValue, setSearchValue }) => {
  return (
    <input
      className={s.search}
      value={searchValue}
      onChange={(e) => setSearchValue(e.target.value)}
      type="text"
      placeholder="Search..."
    />
  );
};
