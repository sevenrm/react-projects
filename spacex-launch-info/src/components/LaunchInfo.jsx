import axios from "axios";
import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";

function LaunchInfo() {
  const [launchData, updateLaunchData] = useState(null);
  useEffect(() => {
    fetchLaunchData();
  }, []);
  async function fetchLaunchData() {
    try {
      const request = await axios.get(
        "https://api.spacexdata.com/v4/launches/latest"
      );
      console.log(request.data);
      updateLaunchData(request.data);
    } catch (error) {
      console.log(error);
    }
  }
  function renderLaunchInfo() {
    if (launchData) {
      return (
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-6">
              <h6 className="text-secondary" SpaceX Latest Launch Info></h6>
              <h2>{launchData.name}</h2>
              <p className="text-secondary">
                SpaceX Crew-5 was the fifth operational NASA Commerical Crew
                Program flight of a Crew Dragon spacecraft, and the eighth
                overall crewed orbital flight. The mission was successfully
                launched on 5 October 2022, with the aim of transporting four
                crew members to the International Space Station (ISS). The Crew
                Dragon spacecraft docked at the ISS on 6 October 2022 at 21:01
                UTC.
              </p>
              <button className="btn btn-primary mt-2">More Info</button>
            </div>
            <div className="col-md-6">
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${launchData.links.youtube_id}`}
                width="100%"
                height="415px"
                controls={true}
              />
            </div>
          </div>
        </div>
      );
    }
  }
  return <div className="container mt-2">{renderLaunchInfo()}</div>;
}

export default LaunchInfo;
