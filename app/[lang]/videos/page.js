"use client";

import VideoCard from "@/components/VideoList/VideoCard";
import { useState, useEffect } from "react";

function VideoList() {
  const [video, setVideo] = useState([]);

  useEffect(() => {
    const importVideos = async () => {
      const videoData = await import("@/lib/videos.json");
      setVideo(videoData.default); // Set the video state
    };

    importVideos();
  }, []);

  return (
    <section className="mt-12">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Streams of the day</h2>
        <a
          href="#"
          className="bg-color-gray hover:bg-opacity-80 text-sm px-4 py-2 rounded-full"
        >
          View all
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {video.map((data) => (
          <VideoCard key={data.videoId} data={data} />
        ))}
      </div>
    </section>
  );
}

export default VideoList;
