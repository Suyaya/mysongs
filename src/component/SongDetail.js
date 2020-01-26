import React from 'react';
import {connect} from 'react-redux';

class SongDetail extends React.Component{

    render(){
        if(this.props.selectedSong === null){
            return '';
        }
        return(
        <div>
            <h2>Song Detail</h2>
            {this.props.selectedSong.title}
            {this.props.selectedSong.duration}
        </div>
        );
    }
}

const stateMapToProps = (state)=>{
    return{selectedSong: state.selectedSong};
}
export default connect(stateMapToProps)(SongDetail);