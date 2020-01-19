import React from 'react'
import { connect } from 'react-redux'
import {selectSong} from '../action'

const SongList = (props)=>{
    
    const songLine = props.songs.map(e =>{
        return <div key={e.Title} className='item'>
           <div className='right floated content'>
           <button className='ui violet button' onClick={()=>props.selectSong(e)}>Select</button>
           </div>
           <div className='content'>{e.Title}</div>
        </div>
    })
  return <div style = {{backgroundColor:'lightgray'}}className='ui divided list'>{songLine}</div>
}

const mapStateToProps = (state) =>{
return state
}

export default connect(mapStateToProps,{selectSong})(SongList)
