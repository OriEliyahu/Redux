import React from 'react';
import SongList from './SongList';
import SelectedSong from './SelectedSong';

const App = () => {
  return (
    <div className="ui grid content">
      <div className="ui row">
        <div className="column eight wide">
          <SongList />
        </div>
        <div className="column eight wide">
          <SelectedSong />
        </div>
      </div>
      {/* <SelectedSong /> */}
    </div>
  );
}

export default App;
