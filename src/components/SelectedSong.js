import React from 'react';
import { connect } from 'react-redux';

const SelectedSong = (props) => {
    if (props.selected)
        return (
            <div>
                <h1>Selected Song:</h1>
                <span><b>Title:</b> {props.selected.title}</span>
                <br />
                <span><b>Duration:</b> {props.selected.duration}</span>
            </div>
        );
    return (
        <div>
            <h2>Select Song (;</h2>
        </div>
    );
};

const mapStateToProps = (state) => {
    return { selected: state.selectedSong };
};
export default connect(mapStateToProps)(SelectedSong);