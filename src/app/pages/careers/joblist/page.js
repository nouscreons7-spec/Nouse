import { FaMapMarkerAlt, FaGraduationCap, FaCalendarAlt } from "react-icons/fa";

const JobList = ({ bgImage, jobList }) => {
if (!jobList) return null
  
  return (
    <div
      className="bg-cover bg-center min-h-screen py-12 px-4 md:px-12"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="max-w-5xl mx-auto bg-white bg-opacity-70 rounded-lg p-6 space-y-10">
        {jobList.map((job, index) => (
          <div
            key={index}
            className="border-b border-gray-400 pb-6 last:border-none"
          >
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              {job.title}
            </h2>

            <div className="flex flex-col gap-2 text-sm text-gray-800">
              {job.qualification && (
                <div className="flex items-center gap-2">
                  <FaGraduationCap className="text-gray-600" />
                  <span className="bg-gray-200 px-2 py-1 rounded text-xs">
                    {job.qualification}
                  </span>
                </div>
              )}

              {job.experience && (
                <div className="flex items-center gap-2">
                  <FaCalendarAlt className="text-gray-600" />
                  <span className="bg-gray-200 px-2 py-1 rounded text-xs">
                    {job.experience}
                  </span>
                </div>
              )}

              {job.location && (
                <div className="flex items-center gap-2">
                  <FaMapMarkerAlt className="text-gray-600" />
                  <span className="bg-gray-200 px-2 py-1 rounded text-xs">
                    {job.location}
                  </span>
                </div>
              )}

              {job.notes?.map((note, idx) => (
                <p key={idx} className="text-sm text-gray-700">
                  {note ?note : "No additional notes provided."}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobList;
