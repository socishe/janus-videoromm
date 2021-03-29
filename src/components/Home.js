import React from 'react';

const Home = ({ history }) => {
  const handleJoinRoom = () => {
    history.push('/room');
  };

  return (
    <div className='App'>
      <header className='App-header'>
        {/* <img src={logo} className='App-logo' alt='logo' /> */}
        <p>
          Welcome to <code>YOOTOK</code> video room (powered by Janus).
        </p>
        <button onClick={handleJoinRoom}>Join Room</button>
      </header>
    </div>
  );
};

export default Home;
