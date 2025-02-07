import { useEffect, useState } from "react";
import JobCart from "./JobCart";

const HotJobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/jobs")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  return (
    <div className="grid grid-cols-3 gap-6">
      {jobs.map((job) => (
        <JobCart key={job._id} job={job}></JobCart>
      ))}
    </div>
  );
};

export default HotJobs;
