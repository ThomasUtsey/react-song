import { combineReducers} from 'redux'

const songsReducer = () =>{
    return (
        [

            {Title:'Ain\'t My Fault' ,Author:' Zara Larsson',Duration:'4:05'},
            {Title:'Alarm' ,Author:'Anne Marie',Duration:'4:10'},
            {Title:'Alejandro' ,Author:' Lady Gaga',Duration:'3:00'},
            {Title:'All My Life' ,Author:' Foo Fighters',Duration:'3:30'},
            {Title:'All of Me' ,Author:' John Legend',Duration:'4:17'},
            {Title:'All the Small Things' ,Author:' Blink 182',Duration:'4:33'},
            {Title:'All You Are Is History' ,Author:' State Champs',Duration:'4:02'},
            {Title:'American Idiot' ,Author:' Green Day',Duration:'3:23'},
            {Title:'Back in Black' ,Author:' AC/DC',Duration:'2:37'},
            {Title:'Bang Bang' ,Author:'Ariana Grande',Duration:'5:06'},
            {Title:'Basket Case' ,Author:' Green Day',Duration:'3:47'} 
       
       ]
    )
}

const selectedReducer = (selectedSong = null, Action) =>{
 if(Action.type === 'SONG_SELECTED'){
     return Action.payload
 }
 return selectedSong
}

export default combineReducers({
    song:songsReducer,
    selectedSong:selectedReducer
})