import VideoDetailsModal from "@/components/VideoDetailsModal";



function VideoDetailsPage({ params: {id, lang} }) {

  
  return (
    <div>
      <VideoDetailsModal id={id} lang={lang}/>
    </div>
  );
}

export default VideoDetailsPage;
