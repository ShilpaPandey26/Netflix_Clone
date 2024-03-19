import { useSelector } from "react-redux";
import useMovieById from "../hooks/useMovieById";

const VideoBackground = ({ movieId , bool }) =>{
  const trailerMovie = useSelector(store=>store.movie.trailerMovie)
  useMovieById(movieId);
  return (
    <div className="w-[vw]   overflow-hidden">
      <iframe
        className= {`${bool} ? "w-[100%]" : "w-screen w-[100%] h-[600px] aspect-video" `}
        // width="100%" 
        // height="600px"      
        src= {`https://www.youtube.com/embed/${trailerMovie?.key}?si=f4CjEnuz1jYteF37&autoplay=1& mute=1`}
        title="YouTube video player"
        frameBorder="0"        
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
