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
        <p>
          <strong>Company:</strong> {company}
        </p>
        <p>
          <strong>Location:</strong> {location}
        </p>
        <p>
          <strong>Job Type:</strong> {jobType}
        </p>

        <p>
          <strong>HR Email:</strong> {hr_email}
        </p>
      </div>
    </div>
  );
};

export default JobDetailes;
