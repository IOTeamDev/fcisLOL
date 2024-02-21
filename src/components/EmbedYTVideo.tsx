const EmbedYTVideo = (url: string) => {
  function getId(url: string) {
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);

    return match && match[2].length === 11 ? match[2] : null;
  }

  const videoId = getId(url);

  return (
    <>
      <iframe
        className="w-full aspect-video"
        src={"//www.youtube.com/embed/" + videoId}
        allowFullScreen
      ></iframe>
    </>
  );
};

export default EmbedYTVideo;
