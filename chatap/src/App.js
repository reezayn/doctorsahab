import React, { useEffect } from "react";
// import logo from "./logo.svg";
import { useState } from "react";
import Pusher from "pusher-js";
import photo from "./sanduk.png";
function App() {
  const [username, setusername] = useState("Your name");
  const [messages, setmessages] = useState([]);
  const [message, setmessage] = useState(" ");
  let allMessages = [];
  useEffect((effect) => () => {
    // Enable pusher logging - don't include this in production
    Pusher.logToConsole = true;

    const pusher = new Pusher("957108fb91e0d0af561a", {
      cluster: "ap2",
    });

    const channel = pusher.subscribe("chat");
    channel.bind("message", function (data) {
      allMessages.push(data);
      setmessages(allMessages);
    });
  });
  const submit = async (e) => {
    e.preventDefault();

    await fetch("http://localhost:8000/api/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, message }),
    });
    setmessage("");
  };
  return (
    <div className="flex flex-col">
      <div className="topcomponent flex flex-col justify-center items-center">
        <img
          src={photo}
          alt="gundruk ruit"
          className="rounded-full w-[125px]"
        />
        <h1 className="font-bold text-3xl">Dr. Sanduk Ruit</h1>
        <p className="font-semibold text-xl">MBBS</p>
        <p className="font-semibold text-xl">Tilganga Eye Hospital</p>
        <p className="font-semibold text-xl">Opthalmology expert</p>
        <p className="font-semibold text-xl">Tribhuvan Univeristy</p>
      </div>

      <div className="copyez container">
        <div class="d-flex flex-column align-items-stretch flex-shrink-0 bg-white">
          <div class="d-flex align-items-center flex-shrink-0 p-3 link-dark text-decoration-none border-bottom">
            <input
              className="fs-5 fw-semibold"
              value={username}
              onChange={(e) => setusername(e.target.value)}
            />
          </div>
          <div class="list-group list-group-flush border-bottom scrollarea w-full h-[299px] overflow-y-auto">
            {messages.map((message) => {
              return (
                <div
                  class="list-group-item list-group-item-action active py-3 lh-sm"
                  aria-current="true"
                >
                  <div class="d-flex w-100 align-items-center justify-content-between">
                    <strong class="mb-1">{message.username}</strong>
                  </div>
                  <div class="col-10 mb-1 small">{message.message}</div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="talakomsgbox fixed w-[98%] bottom-1">
          <form onSubmit={(e) => submit(e)}>
            <input
              className="form-control"
              placeholder="write a message"
              value={message}
              onChange={(e) => setmessage(e.target.value)}
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
