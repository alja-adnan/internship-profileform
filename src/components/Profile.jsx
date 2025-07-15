"use client"

import { useState } from "react"
import { STATES } from "../constants/constProfile"
import { COUNTRIES } from "../constants/constProfile"
import { USER_DATA  } from "../constants/constProfile";
 function Profile() {
  const [formData, setFormData] = useState(USER_DATA)

  const [errors, setErrors] = useState({})

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))

    if (errors[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: "",
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.firstName.trim()) newErrors.firstName = "First name is required"
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required"
    if (!formData.email.trim()) newErrors.email = "Email is required"
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid"
    if (!formData.organization.trim()) newErrors.organization = "Organization is required"
    if (!formData.streetAddress1.trim()) newErrors.streetAddress1 = "Address is required"
    if (!formData.city.trim()) newErrors.city = "City is required"
    if (!formData.state.trim()) newErrors.state = "Field is required"
    if (!formData.phoneNumber.trim()) newErrors.phoneNumber = "Phone number is required"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validateForm()) {
     axios.post("http://localhost/profile",{formData})
       .then(result => {
                alert(" sucessfull")
                console.log(result);
            })
            .catch(err => {
                console.log(err);
            });
    }
  }
  
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-center mb-6">Profile</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* First Name and Last Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First name*</label>
              <input
                id="firstName"
                placeholder="First name"
                value={formData.firstName}
                onChange={(e) => handleInputChange("firstName", e.target.value)}
                className={`w-full px-3 py-2 border rounded-md ${errors.firstName ? "border-red-500" : "border-gray-300"}`}
              />
              {errors.firstName && <p className="text-sm text-red-500">{errors.firstName}</p>}
            </div>

            <div className="space-y-2">
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last name*</label>
              <input
                id="lastName"
                placeholder="Last name"
                value={formData.lastName}
                onChange={(e) => handleInputChange("lastName", e.target.value)}
                className={`w-full px-3 py-2 border rounded-md ${errors.lastName ? "border-red-500" : "border-gray-300"}`}
              />
              {errors.lastName && <p className="text-sm text-red-500">{errors.lastName}</p>}
            </div>
          </div>

          {/* Email and Organization */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email*</label>
              <input
                id="email"
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className={`w-full px-3 py-2 border rounded-md ${errors.email ? "border-red-500" : "border-gray-300"}`}
              />
              {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
            </div>

            <div className="space-y-2">
              <label htmlFor="organization" className="block text-sm font-medium text-gray-700">Organization*</label>
              <input
                id="organization"
                placeholder="Organization"
                value={formData.organization}
                onChange={(e) => handleInputChange("organization", e.target.value)}
                className={`w-full px-3 py-2 border rounded-md ${errors.organization ? "border-red-500" : "border-gray-300"}`}
              />
              {errors.organization && <p className="text-sm text-red-500">{errors.organization}</p>}
            </div>
          </div>

          {/* Address Lines */}
          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="streetAddress1" className="block text-sm font-medium text-gray-700">Street Address line 1*</label>
              <input
                id="streetAddress1"
                placeholder="Street Address line 1"
                value={formData.streetAddress1}
                onChange={(e) => handleInputChange("streetAddress1", e.target.value)}
                className={`w-full px-3 py-2 border rounded-md ${errors.streetAddress1 ? "border-red-500" : "border-gray-300"}`}
              />
              {errors.streetAddress1 && <p className="text-sm text-red-500">{errors.streetAddress1}</p>}
            </div>

            <div className="space-y-2">
              <label htmlFor="streetAddress2" className="block text-sm font-medium text-gray-700">Street Address line 2</label>
              <input
                id="streetAddress2"
                placeholder="Street Address line 2"
                value={formData.streetAddress2}
                onChange={(e) => handleInputChange("streetAddress2", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="streetAddress3" className="block text-sm font-medium text-gray-700">Street Address line 3</label>
              <input
                id="streetAddress3"
                placeholder="Street Address line 3"
                value={formData.streetAddress3}
                onChange={(e) => handleInputChange("streetAddress3", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
          </div>

          {/* City and Country */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="city" className="block text-sm font-medium text-gray-700">City*</label>
              <input
                id="city"
                placeholder="City"
                value={formData.city}
                onChange={(e) => handleInputChange("city", e.target.value)}
                className={`w-full px-3 py-2 border rounded-md ${errors.city ? "border-red-500" : "border-gray-300"}`}
              />
              {errors.city && <p className="text-sm text-red-500">{errors.city}</p>}
            </div>

            <div className="space-y-2">
              <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country*</label>
              <select
                 id="country"
                 value={formData.country}
                 onChange={(e) => handleInputChange("country", e.target.value)}
                 className="w-full px-3 py-2 border border-gray-300 rounded-md"
                >
                 {COUNTRIES.map((country) => (
                  <option key={country} value={country}>{country}</option>
                   ))}
             </select>
            </div>
          </div>

          {/* State and Zip Code */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="state" className="block text-sm font-medium text-gray-700">State / Province*</label>
               <select
      id="state"
      value={formData.state}
      onChange={(e) => handleInputChange("state", e.target.value)}
      className={`w-full px-3 py-2 border rounded-md ${errors.state ? "border-red-500" : "border-gray-300"}`}
    >
      <option value="">Select a state</option>
      {STATES.map((state) => (
        <option key={state} value={state}>{state}</option>
      ))}
    </select>
              {errors.state && <p className="text-sm text-red-500">{errors.state}</p>}
            </div>

            <div className="space-y-2">
              <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700">Zip / Postal code*</label>
              <input
                id="zipCode"
                placeholder="Zip / Postal code"
                value={formData.zipCode}
                onChange={(e) => handleInputChange("zipCode", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
          </div>

          {/* Phone Number */}
          <div className="space-y-2">
            <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">Phone number*</label>
            <div className="flex">
              <div className="flex items-center px-3 border border-r-0 rounded-l-md bg-gray-100">
                <span className="text-sm">🇺🇸 +1</span>
              </div>
              <input
                id="phoneNumber"
                placeholder="Phone number"
                value={formData.phoneNumber}
                onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
                className={`flex-1 px-3 py-2 border rounded-r-md rounded-l-none ${errors.phoneNumber ? "border-red-500" : "border-gray-300"}`}
              />
            </div>
            {errors.phoneNumber && <p className="text-sm text-red-500">{errors.phoneNumber}</p>}
          </div>

          {/* Submit Button */}
          <div className="pt-6">
            <button type="submit" className="w-full md:w-auto px-8 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
export default Profile