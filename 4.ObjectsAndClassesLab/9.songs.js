class Song {
    constructor(typeList, name, time) {
        this.typeList = typeList;
        this.name = name;
        this.time = time;
    }
    
}


function songs(inputArray) {
    [songsNumber, [...songsList], type] = [inputArray[0], inputArray.slice(1, inputArray.length-1), inputArray[inputArray.length-1]]

    let songsToPlay = [];

    for (let song of songsList) {
        [songType, songName, songLength] = song.split('_')
        const newSong = new Song(songType, songName, songLength)
        if (type === 'all') {
            songsToPlay.push(newSong)
        } else if (type === songType) {
            if (newSong.typeList === type) {
                songsToPlay.push(newSong)
            }
        }
    }

    songsToPlay.map(song => console.log(song.name))
}

songs([2,

    'like_Replay_3:15',
    
    'ban_Photoshop_3:48',
    
    'all'])