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
      <DotLoader color='#5D3FD3' />
    </div>
  );
};

export default Loading;
