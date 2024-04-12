import './App.css';

import React, { useEffect, useState } from 'react';

function App() {
  let [quote, setQuote] = useState({});

  useEffect(() => {
    fetch('https://animechan.xyz/api/random')
      .then(response => response.json())
      .then(data => {
        setQuote(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="App">
      <div className='main'>
        <div className='title'>
          <div className="main-title">ANIME <span>QUOTE</span></div>
        </div>
        <div className='inner-main'>
          <div className='quote'><h1 className='text-quote'><span className='heading'>Quote :</span> {quote.quote}</h1></div>
          <div className='anime'><h1 className='anime-name'><span className='heading'>Anime : </span>{quote.anime}</h1></div>
          <div className='character'><h1 className='char-name'><span className='heading'>Character :</span> {quote.character}</h1></div>
          <button className='btn' onClick={() => {
            fetch('https://animechan.xyz/api/random')
              .then(response => response.json())
              .then(data => {
                setQuote(data);
              })
              .catch(error => {
                console.error('Error fetching data:', error);
              });
          }}>Find Quote</button>
          <div><h1 className='last'>Here is another random quote by - <span className='last-heading'>{quote.anime}</span> from <span className='last-heading'>{quote.character}</span> 😃 🎉</h1></div>
        </div>
      </div>
    </div>
  );
}

export default App;
