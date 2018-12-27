import React from 'react';

const Ujo = ({ ujo, logo, currentTrack, updateAblum, playUjo, updateTrack, playPause }) => {
  let ujoDash = null;

  if (ujo) {
    ujoDash = (
      <div className="Ujo">
        <img onClick={() => updateAblum()} className="Ujo__artwork" src={ujo.artwork} alt="Ujo album artwork" />

        <div onClick={() => updateTrack()} className="Ujo__album">{ujo.album}</div>

        <div className="Ujo__play">
          <div onClick={() => playPause()} className={`Ujo__play--circle ${playUjo ? 'Ujo__play--circleON' : ''}`}  />
          {`${ujo.tracks[currentTrack].name} [${(currentTrack + 1)} / ${ujo.tracks.length}]`}
        </div>

        <div className="Ujo__song">
        { playUjo ?
          <video autoPlay={true} controls={true} width="200" height="55">
            <source src={ujo.tracks[currentTrack].track} type="audio/mpeg" />
          </video>
        : null }
        </div>
      </div>
    );
  }

  return (
    <div>
      <a target="_blank" rel="noopener noreferrer" href="https://ujomusic.com/portal/discover">
        <img width="50px" src={logo} alt="Ujo Logo" />
      </a>
      {ujoDash}
    </div>
  );
}

export default Ujo;
