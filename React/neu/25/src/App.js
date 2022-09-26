import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionlength] = useState(25);
  const [clockCount, setClockCount] = useState(sessionLength * 60);
  const [session, setSession] = useState('Session');
  const [isPlaying, setIsPlaying] = useState(false);

  const setLength = (length, crement) => {
    if (isPlaying) return;
    if (length === 'break') {
      if (crement === 'increment' && breakLength < 60)
        return setBreakLength((breakLength) => breakLength + 1);
    }
    if (length === 'break') {
      if (crement === 'decrement' && breakLength > 1)
        return setBreakLength((breakLength) => breakLength - 1);
    }
    if (length === 'session') {
      if (crement === 'increment' && sessionLength < 60)
        return setSessionlength((sessionLength) => sessionLength + 1);
    }
    if (length === 'session') {
      if (crement === 'decrement' && sessionLength > 1)
        return setSessionlength((sessionLength) => sessionLength - 1);
    }
  };

  useEffect(() => {
    setClockCount(sessionLength * 60);
  }, [sessionLength]);

  const playAudio = (audioID) => {
    const audioSelect = document.querySelector(`#beep`);

    audioSelect.play();
  };

  useEffect(() => {
    if (clockCount === 0) {
      playAudio();
      setSession(session === 'Session' ? 'Break' : 'Session');
      setClockCount(
        session === 'Session' ? breakLength * 60 : sessionLength * 60
      );
    }
  }, [clockCount]);

  useEffect(() => {
    const interval = setInterval(() => {
      isPlaying && setClockCount((clockCount) => clockCount - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleReset = () => {
    setBreakLength(5);
    setSessionlength(25);
    setClockCount(25 * 60);
    setIsPlaying(false);
    setSession('Session');
    const audioSelect = document.querySelector(`#beep`);
    audioSelect.pause();
    audioSelect.currentTime = 0;
  };

  const convertToTime = (count) => {
    const minutes = Math.floor(count / 60);
    const seconds = count % 60;

    return `${minutes < 10 ? '0' + minutes : minutes}:${
      seconds < 10 ? '0' + seconds : seconds
    }`;
  };

  return (
    <div className="App">
      <div id="break-label" className="break-label">
        <button
          id="break-increment"
          className="btn  btn-primary btn2"
          onClick={() => setLength('break', 'increment')}
        >
          Break Increment
        </button>
        <div id="break-length" className="btn2">
          {breakLength}
        </div>
        <button
          id="break-decrement"
          className="btn  btn-secondary btn2"
          onClick={() => setLength('break', 'decrement')}
        >
          Break Decrement
        </button>
      </div>
      <div id="session-label" className="break-label">
        <button
          id="session-increment"
          className="btn  btn-primary btn2"
          onClick={() => setLength('session', 'increment')}
        >
          Session Increment
        </button>
        <div id="session-length" className="btn2">
          {sessionLength}
        </div>
        <button
          id="session-decrement"
          className="btn btn-secondary btn2"
          onClick={() => setLength('session', 'decrement')}
        >
          Session Decrement
        </button>
      </div>
      <div className="wrapperClock">
        <div id="timer-label">
          <h1>{session}</h1>
        </div>
        <div id="time-left">
          <h2>{convertToTime(clockCount)}</h2>
        </div>
        <div id="start_stop" onClick={() => handlePlayPause()}>
          Start
        </div>
        <div id="reset" onClick={() => handleReset()}>
          Reset
        </div>
        <audio
          id="beep"
          src="build_testable-projects-fcc_audio_BeepSound.wav"
        ></audio>
      </div>
    </div>
  );
}

export default App;
