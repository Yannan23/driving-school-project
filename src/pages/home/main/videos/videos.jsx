import React from 'react';

const VideoPlayer = () => {
    return (
        <div
            className="w-full h-full p-4 pb-8 md:pb-16 md:p-8"
        >
            <h2 className='!font-semibold py-4 md:py-8'><span className='text-2xl md:text-3xl'>YOU NEED TO KNOW</span></h2>
            <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
                <iframe
                    className="w-full h-76"
                    src="https://www.youtube.com/embed/sCXtcXD17qU"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
                <iframe
                    className="w-full h-76"
                    src="https://www.youtube.com/embed/l7Le_k0R0PY"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
        </div>


    );
};

export default VideoPlayer;
