import React from 'react';
import { connect } from 'react-redux';

const SelectedSong = (props) => {
    if (props.selected)
        return <div>{props.selected.title}</div>
    return <div>{props.selected}</div>
};

const mapStateToProps = (state) => {
    // console.log("from selected song ", state);
    return { selected: state.selectedSong };
};
export default connect(mapStateToProps)(SelectedSong);