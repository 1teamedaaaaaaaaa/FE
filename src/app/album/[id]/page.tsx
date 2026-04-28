import StreamingButton from "@/components/album/streaming-button";

export default function AlbumDetailPage() {
  return (
    <div className="flex flex-col gap-4">
      <StreamingButton streamingType="spotify" />
      <StreamingButton streamingType="applemusic" />
      <StreamingButton streamingType="melon" />
      <StreamingButton streamingType="youtube" />
      <StreamingButton streamingType="soundcloud" />
    </div>
  );
}
