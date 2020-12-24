import { combineReducers } from 'redux';

const songsReducer = (songsList = [], action) => {
    return [
        { title: 'My Life', duration: '3:08' },
        { title: 'My Love', duration: '3:48' },
        { title: 'Ya Ghyab', duration: '4:08' },
        { title: 'Policeman', duration: '2:08' },
        { title: 'Salam', duration: '2:45' },
        { title: 'Ori Niraa Tov', duration: '3:22' },
        { title: 'Ori Niraa Tov 2', duration: '5:12' },
    ];
};

const selectedSongReducer = (oldSongSelected = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }
    return oldSongSelected;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});