import VideoDetails from "@/components/VideoDetails";



function VideoDetailsPage({ params }) {
  const { id } = params;
  
  return (
    <div>
      <VideoDetails id={id}/>
    </div>
  );
}

export default VideoDetailsPage;
