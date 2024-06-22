import Reach from "react";
import Meaning from "./Meaning";

export default function Result(props) {
  console.log("results:" + props.results);
  return (
    <div className="Results">
      {props.results && (
        <>
          <h2>{props.results.word}</h2>
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
