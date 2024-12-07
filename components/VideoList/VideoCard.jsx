import Image from "next/image";
import Link from "next/link";

function VideoCard({data}) {
  return (
    <Link href={`/videos/${data.videoId}`}>
    <div className="rounded-lg overflow-hidden bg-color-gray">
      <Image
        src={`${data.thumbnail}`}
        alt="Stream 1"
        width={320}
        height={180}
        className="w-full h-40 object-cover"
      />
      <div className="p-2">
        <p className="font-semibold">
          {data.title}
        </p>
        <p className="text-sm text-gray-400">{data.channelTitle}</p>
      </div>
    </div>
    </Link>
  );
}

export default VideoCard;
