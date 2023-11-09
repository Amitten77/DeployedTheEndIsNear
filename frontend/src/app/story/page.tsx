"use client"
import React from 'react'
import { useEffect } from 'react'
import Constant from '../../../config.json'

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
            window.location.replace(Constant.rootURL + '/game')
          }
        };
    
        // Add the event listener when the component mounts
        document.addEventListener('keydown', handleKeyPress);
    
        // Remove the event listener when the component unmounts
        return () => {
          document.removeEventListener('keydown', handleKeyPress);
        };
      }, []);
  return (
    <div style={divStyle} className="flex flex-col items-center justify-end min-h-screen">
        <div className='bg-white text-black'>
          <h2>How to Play:</h2>
          <ul>
              <li>- Player One can use Illia the WASD keys to collect NEAR and avoid other L1 currencies</li>
              <li>- Player Two can use the arrow keys to control Gary Gensler to shoot other L1 currencies at Illia</li>
              <li>- Both Players can wager an amount, and winner gets the entire pot (Player 1 wins by earning a top 5 leaderboard score, otherwise player 2 wins)</li>
          </ul>
          </div>
          <div className='bg-white text-black'>
              <h2>Wager 1</h2>
              <label>Type in Wager</label>
              <input></input>
              <button>Submit Wager</button>
          </div>
          <div className='bg-white text-black'>
              <h2>Wager 2</h2>
              <label>Type in Wager</label>
              <input></input>
              <button>Submit Wager</button>
          </div>
        <h1 className='text-black text-3xl mb-16 bg-green-500 p-8'>Hit Enter to continue</h1>
    </div>
  )
}

export default page