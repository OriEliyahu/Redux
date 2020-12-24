//action creator
export const selectSong = (song) => {
    // return action
    // console.log(oldsong);
    return {
        type: 'SONG_SELECTED',
        payload: song
    };
};
