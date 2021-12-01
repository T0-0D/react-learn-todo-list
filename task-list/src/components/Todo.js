import React from "react";

export default function Todo(props) {
  return (
    <ul>
        <li>
            <input id={props.id} type="checkbox" defaultChecked={props.complete} />
            <label>
              {props.name}
            </label>
            <div>
              <button type="button">
                Edit
              </button>
              <button type="button">
                Delete
              </button>
            </div>
        </li>
      </ul>
  );
}
