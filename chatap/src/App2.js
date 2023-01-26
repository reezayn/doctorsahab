import React, { useEffect } from "react";
import logo from "./logo.svg";
import { useState } from "react";
import Pusher from 'pusher-js';
import photo from './sanduk.png';
function App() {
  const [username, setusername] = useState("Your name");
  const [messages, setmessages] = useState([]);
  const [message, setmessage] = useState(" ");
  let allMessages = [];
  useEffect((effect) => () => {
    // Enable pusher logging - don't include this in production
    Pusher.logToConsole = true;

    const pusher = new Pusher("dbd6ea797272925af780", {
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
    <div className="container">

    <div className="doctor flex flex-row justify-between p-5 pb-0">
      <div className="flex flex-row gap-x-10">
      <img src={photo} className="h-25 rounded-full"></img>
      
      <div className="flex flex-column ">
      <p className="italic font-bold text-lg mb-4">Dr. Sanduk Ruit</p>
      <p>MBBS</p>
      <p>Tilganga Eye Hospital</p>
      <p>Opthamlmology expert</p>
      <p>Tribhuvan Univeristy</p>
      </div>
      </div>
    <div>
    <p className="font-bold text-xl text-blue">Doctorsaab</p>
    </div>
    </div>


      <div class="d-flex flex-column align-items-stretch flex-shrink-0 bg-white">
        <div class="d-flex align-items-center flex-shrink-0 p-3 link-dark text-decoration-none border-bottom">
          <input
            className="fs-5 fw-semibold"
            value={username}
            onChange={(e) => setusername(e.target.value)}
          />
        </div>
        <div class="list-group list-group-flush border-bottom scrollarea">
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
      <form onSubmit={(e) => submit(e)}>
        <input
          className="form-control"
          placeholder="write a message"
          value={message}
          onChange={(e) => setmessage(e.target.value)}
        />
      </form>
    </div>
  );
}

export default App;
