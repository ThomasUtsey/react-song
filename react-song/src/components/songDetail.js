import React from 'react'
import { connect } from 'react-redux'


const SongDetail = (props) =>{
console.log(props)
if (props) return <div>{props.Title}</div>
}

const mapStateToProps = state =>{
    return state.selectedSong
}

export default connect(mapStateToProps)(SongDetail)