import React from 'react';
import data from './CollegeBasketballTeams.json';
import './App.css';

const teamList = data.teams;

interface TeamProps {
  tid: number;
  cid: number;
  did: number;
  school: string;
  name: string;
  abbrev: string;
  pop: number;
  city: string;
  state: string;
  latitude: number;
  longitude: number;
}

class Team extends React.Component<TeamProps> {
  render() {
    const oneTeam = this.props;

    return (
      <div className="team-card">
        <h2>{oneTeam.school}</h2>
        <p>Mascot: {oneTeam.name}</p>
        <p>
          Location: {oneTeam.city}, {oneTeam.state}
        </p>
      </div>
    );
  }
}

function Welcome() {
  return <h1>College Basketball Teams</h1>;
}

function TeamList() {
  return (
    <div className="team-list">
      {teamList.map((oneTeam) => (
        <Team {...oneTeam} />
      ))}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Welcome />
      <TeamList />
    </div>
  );
}

export default App;
