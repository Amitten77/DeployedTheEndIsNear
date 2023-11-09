"use client"
import React from 'react'
import { useEffect } from 'react'
import Constant from '../../../config.json'
import * as nearAPI from "near-api-js";
const { connect, keyStores, WalletConnection, Contract } = nearAPI;
const myKeyStore = new keyStores.BrowserLocalStorageKeyStore();


const connectionConfig = {
  networkId: "testnet",
  keyStore: myKeyStore, // first create a key store 
  nodeUrl: "https://rpc.testnet.near.org",
  walletUrl: "https://wallet.testnet.near.org",
  helperUrl: "https://helper.testnet.near.org",
  explorerUrl: "https://explorer.testnet.near.org",
};

const divStyle = {
    backgroundImage: "url('./map/castle.png')",
    backgroundSize: 'cover', // Optional: adjust the background image size
    backgroundPosition: 'center', // Optional: adjust the background image position
    width: '1535px', // Optional: set a width for the div
    height: '850px', // Optional: set a height for the div
}

const page = () => {
    useEffect(() => {
        // Function to handle key press
        const handleKeyPress = (event: any) => {
          // Check if the pressed key is the one you want to listen to (e.g., 'Enter')
          if (event.key === 'Enter') {
            // Your code to execute when the 'Enter' key is pressed
            console.log('Enter key was pressed!');
            console.log(Constant.rootURL)
            window.location.replace(Constant.rootURL + '/singleGame')
          }
        };
    
        // Add the event listener when the component mounts
        document.addEventListener('keydown', handleKeyPress);
    
        // Remove the event listener when the component unmounts
        return () => {
          document.removeEventListener('keydown', handleKeyPress);
        };
      }, []);
        //dev-1699537536854-72967740915618
      const func = async () => {
        const myKeyStore = new keyStores.BrowserLocalStorageKeyStore();
        const connectionConfig = {
          networkId: "testnet",
          keyStore: myKeyStore, // first create a key store 
          nodeUrl: "https://rpc.testnet.near.org",
          walletUrl: "https://wallet.testnet.near.org",
          helperUrl: "https://helper.testnet.near.org",
          explorerUrl: "https://explorer.testnet.near.org",
        };
        const nearConnection = await connect(connectionConfig);
        const wallet = new WalletConnection(nearConnection, 'the-end-is-near');
        if(!wallet.isSignedIn()) return wallet.requestSignIn()
        if (wallet.isSignedIn()) {
          // user is signed in
      }
      }
  return (
    <div style={divStyle} className="flex flex-col items-center justify-end min-h-screen">
        <div className='bg-white text-black mb-16 text-xl p-8'>
        <h2>How to Play:</h2>
        <ul>
            <li>- Use Illia with the WASD keys to collect NEAR and avoid other L1 currencies. </li>
            <li>-Wager NEAR testnet currency for a chance to win more NEAR testnet currency if you earn a top five score (optional!)</li>
        </ul>
        </div>
        <div className='bg-white text-black mb-16 text-xl p-8'>
            <label>Type in Wager (testnet NEAR)</label>
            <input className='outline-double' placeholder='10' type="number"></input>
            <button>Submit Wager</button>
        </div>
        <h1 className='text-black text-3xl mb-16 bg-green-500 p-8'>Hit Enter to continue</h1>
    </div>
  )
}

export default page