import React from "react";
import Synonyms from "./Synonyms";
export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <div>
        <p>
          Definition:
          {props.meaning.definition}
          <br />
          Example:
          {props.meaning.example}
          <br />
          <Synonyms synonyms={props.meaning.synonyms} />
          Synonyms:
          {props.meaning.synonyms}
        </p>
      </div>
    </div>
  );
}
