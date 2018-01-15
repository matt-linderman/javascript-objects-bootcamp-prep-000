var playlist = new Object ({ Pavarotti: 'The Thrill Is Gone'})

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist
}

console.playlist