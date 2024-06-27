import React from "react";

export interface IMessageBox {
  value: string;
  onChangeMessage: any;
  onSubmitMessage: any;
}

export default function MessageBox({
  value,
  onChangeMessage,
  onSubmitMessage,
}: IMessageBox) {
  return (
    <div className="form-input-wrapper">
      <form id="form" className="form-input-chat" action="">
        <input
          id="input"
          value={value}
          onChange={(e) => {
            onChangeMessage(e.target.value);
          }}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            onSubmitMessage(value);
          }}
        >
          Send
        </button>
      </form>
    </div>
  );
}
