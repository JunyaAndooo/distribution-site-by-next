import { useState } from "react";
import Router from "next/router";

/*
 * Content
 */
const SearchWindow = () => {
  const [keyword, setKeyword] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value);
  };

  const handleSubmit = () => {
    Router.push("/search/" + keyword);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input placeholder="無料素材を検索" onChange={handleChange} />
      </form>
    </>
  );
};

export default SearchWindow;
