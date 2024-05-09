import Player from './components/Player.jsx';
import TimerCHallenger from './components/TimerCHallenger.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerCHallenger title="Easy" targetTime={1} />
        <TimerCHallenger title="Not Easy" targetTime={5} />
        <TimerCHallenger title="Tough" targetTime={10} />
        <TimerCHallenger title="Tougher" targetTime={15} />
      </div>

    </>
  );
}

export default App;
