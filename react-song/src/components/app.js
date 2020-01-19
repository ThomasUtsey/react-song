import React from 'react'
import SongDetail from './songDetail'
import SongList from './songList'

const App = () => {
return <div className="app">
    <h2>Song List</h2>
    <div className='ui container grid'>
        <div className='ui row'>
    <div className='column eight wide'>
    <SongList/>
    </div>
    <div className='column eight wide'>
    <SongDetail/>
    </div>
    </div>
    </div>
</div>
}

export default App