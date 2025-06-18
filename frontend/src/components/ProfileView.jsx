import React, { useEffect, useState } from "react";
import { FaCamera } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function ProfileView() {
  const [profile, setProfile] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem("token"); // ✅ Get token from localStorage

      if (!token) {
        alert("Not logged in. Redirecting...");
        navigate("/login");
        return;
      }

      try {
        const res = await axios.get("https://intern-project-backend-4ug0.onrender.com/api/profile", {
          headers: {
             Authorization: `Bearer ${token}`, // ✅ Send token in header
          },
        });

        setProfile(res.data);
      } catch (err) {
        console.error("Error fetching profile:", err);
        alert("Session expired. Please login again.");
        navigate("/login");
      }
    };

    fetchProfile();
  }, [navigate]);

  const handleLogout = async () => {
  try {
    await axios.post("https://intern-project-backend-4ug0.onrender.com/api/logout", {}, {
      withCredentials: true, // if you're using cookies
    });
    localStorage.removeItem("token"); // or remove cookie if stored differently
    navigate("/login");
  } catch (err) {
    console.error("Logout error:", err);
  }
};
  if (!profile) return null;

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-6 flex justify-center">
      <div className="w-full max-w-md bg-white shadow rounded-lg relative">
        {/* Header */}
        <div className="flex justify-between items-center px-6 py-4 border-b">
          <h2 className="text-gray-800 font-semibold text-lg">Account Settings</h2>
          <button
            className="text-sm text-white bg-purple-600 px-3 py-2 rounded hover:bg-purple-700"
            onClick={handleLogout}
          >
            Log Out
          </button>
        </div>

        {/* Account Info Section */}
        <div className="bg-gray-100 px-6 py-4 flex items-start gap-4 rounded-b-lg">
          {/* Profile Image with Camera Icon */}
          <div className="relative w-16 h-16 shrink-0">
            <img
              src={profile.image || "https://randomuser.me/api/portraits/women/44.jpg"}
              alt="Profile"
              className="w-16 h-16 rounded-full object-cover border-2 border-white shadow"
            />
            <div className="absolute bottom-0 right-0 w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center shadow-md">
              <FaCamera className="text-white text-xs" />
            </div>
          </div>

          {/* User Info */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900">{profile.fullName}</h3>
            <p className="text-sm text-gray-500 mb-2">{profile.email}</p>
            <p className="text-sm text-gray-700 leading-snug">
              {profile.bio ||
                "Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
