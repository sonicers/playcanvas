var music = document.createElement('audio');
music.volume = 0.5;
music.autoplay = true;
music.loop = true;

var source = document.createElement('source');
if (music.canPlayType('audio/mpeg;')) {
    source.type = 'audio/mpeg';
    source.src = 'https://s3-eu-west-1.amazonaws.com/other-moka/Tyler+Bates+-+To+The+Stars.mp3';
} else {
    source.type = 'audio/ogg';
    source.src = 'https://s3-eu-west-1.amazonaws.com/other-moka/Tyler+Bates+-+To+The+Stars.ogg';
}

music.appendChild(source);