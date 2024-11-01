import React, { useState } from 'react';

const Myprofile = () => {
  const [userdata, setuserdata] = useState({
    name: "Edward Vincent",
    email: "edward.vincent@example.com",
    phone: "1234567890",
    address: "123 Main St",
    birthday: "1990-01-01",
    gender: "Male",
    image: "src/assets/profile_pic.png",
  });

  const [isedit, setisedit] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setuserdata((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    setuserdata((prevData) => ({...prevData,image: URL.createObjectURL(e.target.files[0]),}))
  }

  return (
    <div className="max-w-lg h-full">
      <div className="mt-12">
        <label>
          <img className="w-36 rounded-md cursor-pointer" src={userdata.image} alt="Profile" />
          {isedit && (
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              style={{ display: 'none' }}
            />
          )}
        </label>
        
        {isedit ? (
          <input
            type="text"
            name="name"
            value={userdata.name}
            onChange={handleInputChange}
            className="mt-6 text-2xl font-medium mb-2 w-full border p-2 rounded"
          />
        ) : (
          <h1 className="mt-6 text-2xl font-medium mb-2">{userdata.name}</h1>
        )}
        <hr className="h-[1.5px] bg-slate-400" />

        {/* Contact Information */}
        <div className="mt-5">
          <h2 className="underline text-sm text-gray-400 underline-offset-2">CONTACT INFORMATION</h2>
          
          <div className="flex text-sm font-medium mt-3">
            <p className="text-gray-800 w-36">Email id:</p>
            {isedit ? (
              <input
                type="email"
                name="email"
                value={userdata.email}
                onChange={handleInputChange}
                className="text-blue-400 border p-1 rounded w-full"
              />
            ) : (
              <p className="text-blue-400">{userdata.email}</p>
            )}
          </div>

          <div className="flex text-sm font-medium mt-3">
            <p className="text-gray-800 w-36">Phone:</p>
            {isedit ? (
              <input
                type="text"
                name="phone"
                value={userdata.phone}
                onChange={handleInputChange}
                className="text-blue-400 border p-1 rounded w-full"
              />
            ) : (
              <p className="text-blue-400">{userdata.phone}</p>
            )}
          </div>

          <div className="flex text-sm font-medium mt-3">
            <p className="text-gray-800 w-36">Address:</p>
            {isedit ? (
              <input
                type="text"
                name="address"
                value={userdata.address}
                onChange={handleInputChange}
                className="text-gray-500 border p-1 rounded w-full"
              />
            ) : (
              <p className="text-gray-500">{userdata.address}</p>
            )}
          </div>
        </div>

        {/* Basic Information */}
        <div className="mt-5">
          <h2 className="underline text-sm text-gray-400 underline-offset-2">BASIC INFORMATION</h2>
          
          <div className="flex text-sm font-medium mt-3">
            <p className="text-gray-800 w-36">Gender:</p>
            {isedit ? (
              <input
                type="text"
                name="gender"
                value={userdata.gender}
                onChange={handleInputChange}
                className="text-gray-500 border p-1 rounded w-full"
              />
            ) : (
              <p className="text-gray-500">{userdata.gender}</p>
            )}
          </div>

          <div className="flex text-sm font-medium mt-3">
            <p className="text-gray-800 w-36">Birthday:</p>
            {isedit ? (
              <input
                type="date"
                name="birthday"
                value={userdata.birthday}
                onChange={handleInputChange}
                className="text-gray-500 border p-1 rounded w-full"
              />
            ) : (
              <p className="text-gray-500">{userdata.birthday}</p>
            )}
          </div>
        </div>

        <div className="flex mt-12 gap-5">
          <button
            onClick={() => setisedit(!isedit)}
            className="border  hover:bg-blue-600 hover:text-white px-6 py-2 rounded-full border-blue-500"
          >
            {isedit ? "Cancel" : "Edit"}
          </button>
          {isedit && (
            <button
              onClick={() => setisedit(false)}
              className="border hover:bg-blue-600 hover:text-white px-6 py-2 rounded-full border-blue-500"
            >
              Save Information
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Myprofile;
