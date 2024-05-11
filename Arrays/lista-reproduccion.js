function managePlaylist(playlist, newSong){
    playlist.shift()
    playlist.unshift(newSong)
    return playlist
}

const initialPlaylist = ['cancion1','cancion2','cancion3']
const newSong = 'Complicado'

console.log('lista sin actualizar')
console.log(initialPlaylist);

console.log('nueva lista')
console.log(managePlaylist(initialPlaylist,newSong))
