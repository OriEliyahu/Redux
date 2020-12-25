import { combineReducers } from 'redux';

const songsReducer = (songsList = [], action) => {
    return [
        { title: 'Shine On', duration: '3:08' },
        { title: "I Don't Wanna Live Forever ", duration: '3:48' },
        { title: 'No Body No Crime', duration: '4:08' },
        { title: 'For The Night', duration: '2:08' },
        { title: 'Willow', duration: '2:45' },
        { title: 'Tikitas', duration: '3:22' },
        { title: 'Caramela', duration: '5:12' },
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