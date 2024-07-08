import React, { useState } from "react";
import { Link } from "react-router-dom";
import FormInput from "../../components/FormInput";
import Picker from "emoji-picker-react";

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
  const [showPicker, setShowPicker] = useState(false);

  const onEmojiClick = (emojiObject: any) => {
    onChangeMessage(value + emojiObject.emoji);
    setShowPicker(false);
  };

  return (
    <div className="form-input-chat">
      <div className="mt-1 bg-light p-2 rounded">
        <form
          noValidate
          name="chat-form"
          id="chat-form"
          onSubmit={(e) => {
            e.preventDefault();
            if (value) {
              onSubmitMessage(value);
            }
          }}
        >
          <div className="row">
            <div className="col mb-2 mb-sm-0">
              <FormInput
                type="text"
                name="newMessage"
                className="border-0"
                placeholder="Enter your text"
                key="newMessage"
                value={value}
                onChange={(e) => {
                  onChangeMessage(e.target.value);
                }}
              />
            </div>
            <div className="col-sm-auto">
              <div className="btn-group position-relative">
                <Link to="#" className="btn btn-light">
                  <i
                    className="bi bi-emoji-smile fs-18"
                    onClick={() => setShowPicker(!showPicker)}
                  ></i>
                </Link>
                {showPicker && (
                  <Picker
                    className="emotion-input"
                    onEmojiClick={onEmojiClick}
                  />
                )}
                <button type="submit" className="btn btn-success chat-send">
                  <i className="uil uil-message"></i>
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
