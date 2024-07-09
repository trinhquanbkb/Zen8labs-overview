import React, { useState } from "react";

interface ISearch {
  value: string;
  onChangeValue: any;
}

export default function Search({ value, onChangeValue }: ISearch) {
  const [valueInput, setValueInput] = useState(value);

  return (
    <form className="chat-search mt-1">
      <div className="chat-search-box">
        <div className="input-group">
          <button
            className="btn input-group-text"
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              onChangeValue(valueInput);
              setValueInput("");
            }}
          >
            <i className="uil uil-search"></i>
          </button>
          <input
            className="form-control"
            placeholder="Search..."
            id="top-search"
            value={valueInput}
            onChange={(e: any) => {
              setValueInput(e.target.value);
              onChangeValue(e.target.value);
            }}
          />
        </div>
      </div>
    </form>
  );
}
