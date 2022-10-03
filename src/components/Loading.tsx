import { BeatLoader, DotLoader } from "react-spinners";

const Loading = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <DotLoader color='#793EF5' />
    </div>
  );
};

export default Loading;
