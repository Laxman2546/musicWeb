import Navbar from "../components/Navbar";
import musicImage from "./assets/musicImage.webp";
import DownloadBtn from "../components/downloadBtn";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="w-full flex flex-col-reverse lg:flex-row items-center justify-between px-6 py-12 gap-10">
        <div className="text-center lg:text-left lg:pl-16 flex-1">
          <h2 className="font-black text-4xl sm:text-5xl leading-tight">
            Experience
            <span className="bg-yellow-200 text-black ml-2"> Songs</span>
            <br />
            Without Barriers.
          </h2>
          <h1 className="mt-4 text-base sm:text-lg text-gray-700">
            No Sign-Up, No Interruptions — Just Pure Sound
          </h1>
          <div className="mt-6 flex justify-center lg:justify-start">
            <DownloadBtn />
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <img
            src={musicImage}
            alt="Music Illustration"
            className="w-full max-w-md object-contain"
          />
        </div>
      </div>
    </>
  );
};

export default App;
