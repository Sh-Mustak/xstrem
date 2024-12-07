import PlayButton from "@/app/SvgIcon/PlayButton";
import videoData from "@/lib/videos.json";
import Image from "next/image";

function VideoDetailsModal({id}) {

    const data = videoData.find((data) => data.videoId === id);

  return (
    <main className="flex flex-col lg:flex-row gap-6 mt-2">
          <div className="">
            <div className="relative">
              <iframe
                src={`${data?.thumbnail}`}
                title="YouTube video player"
                frameBorder="0"
                className="w-full aspect-video h-[300px] md:h-[400px] rounded"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                <div className="flex items-center space-x-4">
                  <button className="bg-color-gray hover:bg-opacity-80 rounded-full p-2">
                    <PlayButton />
                  </button>
                  <div className="bg-color-purple text-white px-2 py-1 rounded text-sm">
                    LIVE
                  </div>
                  <span className="text-sm">46:02</span>
                  <button className="bg-color-purple hover:bg-opacity-80 text-white px-4 py-1 rounded-full text-sm">
                    Donate
                  </button>
                </div>
              </div>
            </div>
            <h1 className="text-2xl font-bold mt-4">{data.title}</h1>
            <div className="flex items-center space-x-4 mt-2">
              <Image
                src="/avatar.png"
                alt="Avatar"
                height={40}
                width={40}
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="font-semibold">{data.channelTitle}</p>
              </div>
              <button className="bg-color-purple hover:bg-opacity-80 text-white px-4 py-1 rounded-full text-sm ml-auto">
                Subscribe
              </button>
            </div>
          </div>
          <div className="lg:w-1/4">
            <h2 className="text-xl font-semibold mb-4">You may like</h2>
            <div className="space-y-4">
              {/* Similar Cards */}
              <div className="flex items-start space-x-4">
                <Image
                  src="https://i.ytimg.com/vi/9kjwMTj8ZD0/hqdefault.jpg"
                  width={120}
                  height={180}
                  alt="Fallout Shelter PC Thumbnail"
                  className="w-30 h-20 rounded object-cover"
                />
                <div>
                  <h3 className="font-semibold">Fallout Shelter PC - Ep. 1</h3>
                  <p className="text-sm text-gray-400">Blitz</p>
                  <p className="text-sm text-gray-400">26,389M</p>
                </div>
              </div>
              {/* Add more recommendations */}
            </div>
          </div>
        </main>
  )
}

export default VideoDetailsModal
