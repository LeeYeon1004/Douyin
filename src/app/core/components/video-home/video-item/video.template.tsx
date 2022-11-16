function Video({ clip }: { clip: string }) {
  const handlePlay = () => {
    const vid = document.getElementsByClassName(".video");
    console.log(vid);
  };
  return (
    <div className="h-auto mr-[20px]">
      <video
        className="video rounded-[8px] max-h-[600px]"
        playsInline={true}
        x5-playsinline="true"
        webkit-playsinline="true"
        tabIndex={2}
        controls
        loop
        src={clip}
      ></video>
      <button onClick={handlePlay}>click</button>
    </div>
  );
}

export default Video;
