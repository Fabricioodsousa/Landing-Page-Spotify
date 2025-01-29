const playlist = document.getElementById('playlist')
const newPlaylist = document.getElementById('new-playlist')

playlist.addEventListener('click', function(){ 
    newPlaylist.style.display = newPlaylist.style.display === 'none' ? 'flex' : 'none';
})