import { FaEnvelope, FaMapMarkerAlt, FaSuitcase } from "react-icons/fa";
import { Link } from "react-router-dom";

const JobCart = ({ job }) => {
  if (!job) return null; // Handle missing job data

  const { _id, title, location, description, company, hr_email, company_logo } =
    job;

  return (
    <div className="w-full  overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
      <img
        className="object-cover object-center w-20 h-20"
        src={company_logo}
        alt="Company Logo"
      />

      <div className="flex relative">
        <div className="px-6 py-4">
          <h1 className="text-xl font-semibold text-gray-800 dark:text-white">
            {title}
          </h1>
          <p className="text-gray-700 dark:text-gray-400">{description}...</p>

          <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
            <FaSuitcase className="w-6 h-6" />
            <h1 className="px-2 text-sm">{company}</h1>
          </div>
          <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
            <FaMapMarkerAlt className="w-6 h-6" />
            <h1 className="px-2 text-sm">{location}</h1>
          </div>
          <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
            <FaEnvelope className="w-6 h-6" />
            <h1 className="px-2 text-sm">{hr_email}</h1>
          </div>
        </div>
        <div className=" absolute right-4 bottom-1 ">
          <Link to={`/jobs/${_id}`}>
            <button className="btn btn-outline btn-success mt-4">Apply</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobCart;
