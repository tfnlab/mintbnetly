import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid'; // Import the v4 function from the uuid library
import Web3 from 'web3';



const AccountDetails = ({ accountAddress, accountBalance }) => {
  const [value, setValue] = useState('');
  const [signature, setSignature] = useState('');

  const url = 'https://net.bnetly.com/post.jsp'; // replace with your target URL

  const signMessage = async () => {
    try {
      const web3 = new Web3(window.ethereum);
      const accounts = await web3.eth.requestAccounts();
      const account = accounts[0];
      const message = value; // The message you want to sign
      const signedMessage = await web3.eth.personal.sign(message, account, '');
      setSignature(signedMessage);
    } catch (error) {
      console.error('Error signing message:', error);
    }
  };

  const handleClick = async () => {
    if (value !== '') {
      const key = uuidv4();
      const data = {
        key: key,
        value: value,
        accountAddress: accountAddress
      };

      // Call the signTransaction function to generate the signature
      const signature = await signMessage(data);

      // Attach the signature to the payload
      data.signature = signature;

      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      };

      // Send the data to the server and get the response
      const response = await fetch(url, requestOptions);
      const responseData = await response.text();
      alert(responseData);
    } else {
      console.error('Please enter a value');
    }
  };


  return (
    <div>
      <div className="jumbotron">
        <h1 className="display-5">What is bnet?</h1>
        <div class="card col-md-12" >
          <div class="card-body">

                      <hr className="my-4" />
                      <p>
                        Account Address: {accountAddress}
                      </p>
                      <hr className="my-4" />
                      <input type="text" value={value} onChange={e => setValue(e.target.value)} placeholder="Enter value for boost" style={{width: '100%'}} />

                      <br className="my-2" />
                      <br className="my-2" />
                      <button onClick={handleClick}>Publish</button>
                      <hr className="my-4" />

                                  <input
                                    type="text"
                                    value={signature}
                                    readOnly
                                    placeholder="Signature"
                                    style={{ width: '100%' }}
                                  />
                      <hr className="my-4" />

            <p className="lead">
            bnet, the new internet, is a groundbreaking digital ecosystem that revolutionizes online connectivity and information exchange. Building upon the foundations of the traditional internet, bnet introduces advanced technologies and concepts to deliver a more secure, efficient, and immersive online experience.
            <hr className="my-4" />

At its core, bnet employs a decentralized architecture, leveraging blockchain technology to distribute data across a network of interconnected nodes. This decentralized approach ensures enhanced security and eliminates the risk of single points of failure, making bnet highly resilient to cyberattacks and censorship.
<hr className="my-4" />

bnet introduces seamless integration of artificial intelligence (AI) and machine learning (ML) algorithms, enabling intelligent automation and personalized experiences. Through sophisticated algorithms, bnet understands users' preferences, delivering tailored content, recommendations, and services that align with individual interests and needs.
<hr className="my-4" />

Privacy is a key focus of bnet, offering users complete control over their personal data. Advanced encryption techniques and decentralized storage mechanisms ensure that user information remains secure and inaccessible to unauthorized parties. Users can choose to share their data selectively, granting permissions on a granular level, fostering a trust-based environment.
<hr className="my-4" />

One of the most notable features of bnet is its augmented reality (AR) and virtual reality (VR) integration. bnet provides a rich, immersive experience, allowing users to explore virtual environments, interact with digital objects, and engage in lifelike simulations. This opens up new possibilities for gaming, education, communication, and collaborative work.
<hr className="my-4" />

bnet also fosters a vibrant ecosystem of decentralized applications (dApps), enabling developers to create innovative solutions across various domains. Smart contracts, powered by blockchain technology, facilitate secure and automated transactions, enhancing efficiency and transparency in areas such as finance, supply chain management, and governance.
<hr className="my-4" />

In summary, bnet represents a paradigm shift in internet technology, offering a decentralized, intelligent, and immersive online experience. With enhanced security, privacy, and innovative features, bnet paves the way for a future where users have more control, connectivity is seamless, and digital interactions are more engaging and personalized.
                  <hr className="my-4" />

            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountDetails;
