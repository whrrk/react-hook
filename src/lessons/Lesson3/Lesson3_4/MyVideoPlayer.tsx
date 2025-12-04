type MyVideoPlayerProps = {
  width: string;
  type: string;
  src: string;
  videoRef: any;
};

export const MyVideoPlayer = (props: MyVideoPlayerProps) => {
  return (
    <video width={props.width} ref={props.videoRef}>
      <source src={props.src} type={props.type} />
    </video>
  );
};
