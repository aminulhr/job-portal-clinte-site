import { FaEnvelope, FaMapMarkerAlt, FaSuitcase } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";

const JobDetailes = () => {
  const job = useLoaderData();

  if (!job) {
    return <p className="text-center text-red-500">No job details found</p>;
  }

  const {
    title,
    description,
    company,
    location,
    jobType,
    salaryRange,
    hr_email,
    company_logo,
  } = job;

  return (
    <div className="max-w-3xl mx-auto p-5">
      <img
        className="w-32 h-32 mx-auto mb-4"
        src={company_logo}
        alt="Company Logo"
      />
      <h1 className="text-3xl font-bold text-center text-blue-600">{title}</h1>
      <p className="text-lg text-gray-700 text-center">{description}</p>

      <div className="mt-4 space-y-2">
        <div className="flex items-center">
          <FaSuitcase className="w-6 h-6 mr-2" />
          <p>
            <strong>Company:</strong> {company}
          </p>
        </div>
        <div className="flex items-center">
          <FaMapMarkerAlt className="w-6 h-6 mr-2" />
          <p>
            <strong>Location:</strong> {location}
          </p>
        </div>
        <div className="flex items-center"></div>
        <FaSuitcase className="w-6 h-6 mr-2" />
        <p>
          <strong>Job Type:</strong> {jobType}
        </p>
      </div>
      <div className="flex items-center">
        <FaEnvelope className="w-6 h-6 mr-2" />
        <p>
          <strong>HR Email:</strong> {hr_email}
        </p>
      </div>
    </div>
  );
};

export default JobDetailes;
