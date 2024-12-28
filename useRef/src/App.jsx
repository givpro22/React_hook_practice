import Player from './components/Player.jsx';
import TimerChallenge from './components/TimerChallenge.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges"></div>
      <TimerChallenge title="가장 쉬움" targetTime={1}/>
      <TimerChallenge title="쉬움" targetTime={5}/>
      <TimerChallenge title="적당한" targetTime={10}/>
      <TimerChallenge title="어려운운" targetTime={15}/>

    </>
  );
}

export default App;
