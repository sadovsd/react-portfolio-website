import React from "react";

const CodeBlock = ({ code, language, className }) => {
  return (
    <div className={`relative rounded-md overflow-hidden ${className}`}>
      <pre
        className="overflow-x-auto p-4 bg-[#F9F9F9] text-black rounded-md"
        style={{ margin: "20px", maxHeight: "400px", maxWidth: "700px" }}
      >
        <code
          className={`language-${language}`}
          style={{
            textAlign: "left",
            display: "block",
            whiteSpace: "pre-wrap",
          }}
        >
          {code}
          <br />
          <span className="text-purple-600">
            from
          </span> youtube_transcript_api{" "}
          <span className="text-purple-600">import</span> YouTubeTranscriptApi
          <br />
          <span className="text-purple-600">import</span> pytube
          <br />
          <br />
          <span className="text-green-600">
            # get the transcript from YouTube
          </span>
          <br />
          <span className="text-purple-500 mr-4 ">def</span>
          get_yt_transcript
          <span className="text-purple-500  ">(url)</span>
          <span className="text-gray-600 mr-1 ">:</span>
          <br />
          <span className="pl-2 text-gray-600">text</span>{" "}
          <span className="text-gray-600">=</span>{" "}
          <span className="text-red-500">''</span>,<br />
          <span className="pl-2 text-gray-600">vid_id</span>{" "}
          <span className="text-gray-600">=</span>{" "}
          <span className="text-gray-600">pytube.extract.video_id(url)</span>,
          <br />
          <span className="pl-2 text-gray-600">temp</span>{" "}
          <span className="text-gray-600">=</span>{" "}
          <span className="text-gray-600">
            YouTubeTranscriptApi.get_transcript(vid_id)
          </span>
          ,<br />
          <span className="pl-2 text-purple-500">for </span>
          <span className=" text-gray-600">t </span>
          <span className=" text-blue-500"> in </span>{" "}
          <span className=" text-gray-600">temp </span>
          <span className="text-gray-600">:</span> <br />
          <span className="pl-2 text-gray-600">text</span>{" "}
          <span className="text-gray-600">+=t</span>{" "}
          <span className="text-red-600">['text']</span>{" "}
          <span className="text-gray-600">+''</span>
          <br />
          <span className="text-purple-500">return</span>
          <span className="text-gray-600"> text</span>
          <span className="text-blue-400"></span>{" "}
        </code>
      </pre>
    </div>
  );
};

export default CodeBlock;
