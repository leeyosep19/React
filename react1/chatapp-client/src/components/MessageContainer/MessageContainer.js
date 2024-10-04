import React from "react";
import "./MessageContainer.css";
import { Container } from "@mui/system";

const MessageContainer = ({ messageList, user }) => {
  return (
    <div>
      {messageList.map((message, index) => {
        const { _id, user: messageUser, chat } = message;

        const isSystemMessage = messageUser.name === "system";
        const isMyMessage = messageUser.name === user.name;
        const isFirstMessage = index === 0;
        const isSameUserAsPrevious = index > 0 && messageList[index - 1].user.name === messageUser.name;

        return (
          <Container key={_id} className="message-container">
            {isSystemMessage ? (
              <div className="system-message-container">
                <p className="system-message">{chat}</p>
              </div>
            ) : isMyMessage ? (
              <div className="my-message-container">
                <div className="my-message">{chat}</div>
              </div>
            ) : (
              <div className="your-message-container">
                <img
                  src="/profile.jpeg"
                  className="profile-image"
                  style={{ visibility: isFirstMessage || isSameUserAsPrevious ? "visible" : "hidden" }}
                />
                <div className="your-message">{chat}</div>
              </div>
            )}
          </Container>
        );
      })}
    </div>
  );
};

export default MessageContainer;
