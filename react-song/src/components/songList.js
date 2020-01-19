import React from 'react'
import { connect } from 'react-redux'
import {selectSong} from '../action'

const SongList = (props)=>{
    
    const songLine = props.songs.map(e =>{
        return <div>
           <div> {e.Title}</div>
           <button onClick={()=>props.selectSong(e)}>Select</button>
        </div>
    })
  return songLine
}

const mapStateToProps = (state) =>{
return state
}

export default connect(mapStateToProps,{selectSong})(SongList)
