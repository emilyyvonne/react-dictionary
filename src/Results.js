import Reach from "react";
import Phonetic from "./Phonetic";
import Meaning from "./Meaning";

export default function Result(props) {
  return (
    <div className="Results">
      {props.results && (
        <>
          <h2>{props.results.word}</h2>
          <Phonetic props={props.results.phonetic} />
          {props.results.meanings &&
            props.results.meanings.map(function (meaning, index) {
              return (
                <div key={index}>
                  <Meaning meaning={meaning} />
                </div>
              );
            })}
        </>
      )}
    </div>
  );
}
