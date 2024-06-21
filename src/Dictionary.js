import React, { useState } from "react";
import axios from "axios";

export default function Dictionary() {
  let [word, setWord] = useState(" ");

  function search(event) {
    event.preventDefault();

    function handleResponse(response) {}
    let apiUrl =
      "https://api.shecodes.io/dictionary/v1/define?word={word}&key={key}";
    axios.get(apiUrl).then(handleResponse);
  }

  function handleWordChange(event) {
    setWord(event.target.value);
  }
  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" onChange={handleWordChange} />
        <input type="submit" />
      </form>
    </div>
  );
}