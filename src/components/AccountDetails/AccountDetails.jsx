import React from "react";

const AccountDetails = ({ accountAddress, accountBalance }) => {
  return (
    <div>
      <div className="jumbotron">
        <h1 className="display-5">MakotoDigital</h1>
        <div class="card col-md-12" >
          <div class="card-body">
            <p className="lead">
                  Click the mint button above to  Mint a Makoto Digital Art
                  <hr className="my-4" />

            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountDetails;
