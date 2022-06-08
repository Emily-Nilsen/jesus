import YouTube from 'react-youtube';

const YouTubeVideo = (props) => {
  const opts = {
    height: '315',
    width: '560',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: false,
    },
  };
  return (
    <div className="grow">
      <YouTube
        className="object-cover w-full h-full overflow-hidden rounded-lg"
        videoId={props.videoId}
        opts={opts}
      />
    </div>
  );
};

export default YouTubeVideo;
