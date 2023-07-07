import React, { useState } from "react";

const ConnectToMetamask = ({ connectToMetamask }) => {
  const [value, setValue] = useState('');

  const handleClick = () => {
    if (value !== '') {
      const data = { key: value };
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      };

      fetch('http://localhost:3001/api/endpoint', requestOptions)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));
    } else {
      console.error('Please enter a value');
    }
  };

  return (
    <div>
      <div className="jumbotron">
        <h1 className="display-5">
          bnetly.com
        </h1>

        <hr className="my-4" />

        <input type="text" value={value} onChange={e => setValue(e.target.value)} placeholder="Enter value for boost" />

        <br className="my-2" />
        <br className="my-2" />
        <button onClick={handleClick}>Publish</button>

        <hr className="my-4" />
        <a href="https://opensea.io/collection/bnet-1" >
          <img src="https://meta.bnetly.com/images/bnetly.png" width="100%" alt="Bnetly" />
        </a>
        <hr className="my-4" />
        <button
          onClick={connectToMetamask}
          className="btn btn-primary d-flex align-items-center"
          style={{ fontSize: "0.9rem", letterSpacing: "0.14rem" }}
        >
          Connect Wallet
        </button>
        <hr className="my-4" />

      </div>
      <hr className="my-4" />

      <div className="container">
        <hr className="my-4" />
        bnet &copy; 2023 All rights reserved.
        <hr className="my-4" />
      </div>
    </div>
  );
};

export default ConnectToMetamask;
