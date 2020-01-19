import React from 'react'
import { connect } from 'react-redux'


const SongDetail = (props) =>{

if (props !== null) {return <div>
    <h2>{props.Title}</h2>
    <div>{props.Author}</div>
    <div>{props.Duration}</div>
    </div>}

    return <h2>Please select a song</h2>
    
}

const mapStateToProps = state =>{
    return state.selectedSong
}

export default connect(mapStateToProps)(SongDetail)