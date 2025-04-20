import React from "react";

const DownloadBtn = () => {
  const handleDownload = (e) => {
    e.preventDefault();
    const link = document.createElement('a');
    link.href = '/Nanimusic.apk';
    link.download = 'Nanimusic.apk';
    link.type = 'application/vnd.android.package-archive';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <button 
        onClick={handleDownload}
        className="bg-black text-white p-3 rounded-full cursor-pointer hover:text-black hover:border-1 hover:bg-white"
      >
        <span className="font-medium">Download Now</span>
      </button>
    </div>
  );
};

export default DownloadBtn;
