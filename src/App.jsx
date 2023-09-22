import React from 'react';
import './App.css';

function HistoryCard(props) {//this history component allows me to return a div with the given props/input for each card
  const handleButtonClick = () => {//i created a button within this component so each card can be linked to a specific site
    window.open(props.siteUrl, '_blank');
  };
  return (
    <div className="history-card">
      <img className="images" src={props.imageUrl} alt={props.altText} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <p>{props.location}</p>
      <button onClick={handleButtonClick}>Visit Site For More Information</button>
    </div>
  );
}

const App = () => {

  return (
    <div className="App">
      <h1>Historical Sites in New York</h1>
      <h2>Listed below are 10 historical sites you should visit when you are in New York!</h2>
      <div className="card-container">
  
        <HistoryCard
          imageUrl="./img/ESB.jpg"
          title="Empire State Building"
          description="Built in May 1, 1931."
          location="Address: 350 5th Ave, New York, NY 10118, USA"
          siteUrl="https://www.esbnyc.com/"
        />

        <HistoryCard
          imageUrl="./img/SOL.jpg"
          title="Statue of Liberty"
          description="Built in 1884."
          location="Address: Liberty Island, New York, NY 10004, USA"
          siteUrl="https://www.statueoflibertytickets.com/?gclid=CjwKCAjwsKqoBhBPEiwALrrqiJvuXwvi3UFm7tSNEEgZ7v1hV3gZ2T_MU33qhboVZtgpbt3NrqWGWBoCrNEQAvD_BwE"
        />
      
        <HistoryCard
          imageUrl="./img/FederalHall.jpg"
          title="Federal Hall"
          description="Built in 1842."
          location="Address: 26 Wall St, New York, NY 10005, USA"
          siteUrl="https://www.nps.gov/feha/index.htm"
        />

        <HistoryCard
          imageUrl="./img/GrandCentral.jpg"
          title="Grand Central Station"
          description="Built in 1913."
          location="Address: 89 E 42nd St, New York, NY 10017, USA"
          siteUrl="https://www.grandcentralterminal.com/"
        />

        <HistoryCard
          imageUrl="./img/CentralPark.jpg"
          title="Central Park"
          description="Built in 1858."
          location="Address: Central Park, New York, NY 10022, USA"
          siteUrl="https://www.centralparknyc.org/"
        />

        <HistoryCard
          imageUrl="./img/RoseCenter.jpg"
          title="Rose Center For Earth & Space"
          description="Built in 2000"
          location="Address: Central Park W & 79th St, New York, NY 10024, USA"
          siteUrl="https://www.amnh.org/exhibitions/permanent/rose-center"
        />

        <HistoryCard
          imageUrl="./img/TrinityChurch.jpg"
          title="Trinity Church"
          description="Built in 1846."
          location="Address: 75 Broadway, New York, NY 10006, USA"
          siteUrl="https://trinitywallstreet.org/"
        />

        <HistoryCard
          imageUrl="./img/FrauncesTavern.jpg"
          title="Fraunces Tavern"
          description="Built in the early 18th century."
          location="Address: 54 Pearl St, New York, NY 10004, USA"
          siteUrl="https://frauncestavern.com/"
        />

        <HistoryCard
          imageUrl="./img/EllisIsland.jpg"
          title="Ellis Island"
          description="Built in 1900."
          location="Address: Jersey City, NJ 07305, USA"
          siteUrl="https://www.statueofliberty.org/ellis-island/"
        />

        <HistoryCard
          imageUrl="./img/TimesSquare.jpg"
          title="Times Square"
          description="Built in the 20th century."
          location="Address: Times Square, New York, NY 10036, USA"
          siteUrl="https://www.timessquarenyc.org/"
        />
        </div>
    </div>
  );
}

export default App;
