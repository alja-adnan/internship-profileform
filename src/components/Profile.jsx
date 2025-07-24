
import { useForm } from "react-hook-form"
import {Country,State} from "country-state-city";
import { useState } from "react"

 function Profile() {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [countries, setCountries] = useState(Country.getAllCountries())
  const [state, setState] = useState([])


  const [selectedCountry,setSelectedCountry]=useState(null);
  const [selectedState, setSelectedState] = useState(null);
  //console.log(countries)



  const handleCountryChange=(country)=>{
    setSelectedCountry(country);
    setState(State.getStatesOfCountry(country.isoCode));
  
  };
  
function onSubmit(data){
   console.log("submitting the form" ,data);
   alert("submitted sucessfully");
}

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-center mb-6">Profile</h2>
        <form  className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          {/* First Name and Last Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">First name*</label>
              <input placeholder="First name" className="w-full px-3 py-2 border border-gray-300 rounded-md"
              {...register("firstName", { required:{value:true,message:'first name is required'}})}/>
              {errors.firstName && <p className="text-sm text-red-600">{errors.firstName.message}</p>}
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Last name*</label>
              <input placeholder="Last name" className="w-full px-3 py-2 border border-gray-300 rounded-md"
              {...register("lastName", { required:{value:true,message:'last name is required'}})}/>
              {errors.lastName && <p className="text-sm text-red-600">{errors.lastName.message}</p>}
            </div>
          </div>

          {/* Email and Organization */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label  className="block text-sm font-medium text-gray-700">Email*</label>
              <input placeholder="Email" className="w-full px-3 py-2 border border-gray-300 rounded-md" 
              {...register("email", { required:{value:true,message:'email is required'} })}/>
              {errors.email && <p className="text-sm text-red-600">{errors.email.message}</p>}
            </div>

            <div className="space-y-2">
              <label  className="block text-sm font-medium text-gray-700">Organization*</label>
              <input placeholder="Organization" className="w-full px-3 py-2 border border-gray-300 rounded-md"
              {...register("organization", { required:{value:true,message:"organization is required"}})}/>
              {errors.organization && <p className="text-sm text-red-600">{errors.organization.message}</p>}
            </div>
          </div>

          {/* Address Lines */}
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Street Address line 1*</label>
              <input placeholder="Street Address line 1" className="w-full px-3 py-2 border border-gray-300 rounded-md" 
              {...register("address", { required:{value:true,message:"address is required"} })}/>
              {errors.address && <p className="text-sm text-red-600">{errors.address.message}</p>}
           </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Street Address line 2</label>
              <input placeholder="Street Address line 2"{...register("address2")} className="w-full px-3 py-2 border border-gray-300 rounded-md"/>
            </div>
            <div className="space-y-2">
              <label  className="block text-sm font-medium text-gray-700">Street Address line 3</label>
              <input  placeholder="Street Address line 3"{...register("address3")} className="w-full px-3 py-2 border border-gray-300 rounded-md" />
            </div>
          </div>

          {/* City and Country */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label  className="block text-sm font-medium text-gray-700">City*</label>
              <input placeholder="City" className="w-full px-3 py-2 border border-gray-300 rounded-md" 
              {...register("city", { required:{value:true,message:"city is required"}})}/>
              {errors.city && <p className="text-sm text-red-600">{errors.city.message}</p>}
            </div>

            <div className="space-y-2">
              <label  className="block text-sm font-medium text-gray-700">Country*</label>
              <select {...register("country")}
                 value={selectedCountry?.isoCode || ""}
                 onChange={(e)=>handleCountryChange(
                    countries.find((c)=>c.isoCode===e.target.value),
                  )
                 }
                 className="w-full px-3 py-2 border border-gray-300 rounded-md"
                >
                <option value="">Select Country</option>
                {countries.map((country)=>(
                  <option key={country.isoCode} value={country.isoCode}>{country.name}</option>
                ))}
             </select>
             </div>
                </div>
                 {/* State and Zip Code */}
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                   <div className="space-y-2">
                   <label  className="block text-sm font-medium text-gray-700">State / Province*</label>
                   <select  className="w-full px-3 py-2 border border-gray-300 rounded-md" 
                       {...register("state")}
                       value={selectedState}
                       onChange={(e) => setSelectedState( e.target.value)} >
                      <option value="">Select State</option> 
                      {state.map((state)=>(
                        <option  key={state.isoCode} value={state.isoCode}>{state.name}</option>
                      ))} 
                   </select>
              </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Zip / Postal code*</label>
              <input placeholder="Zip / Postal code"{...register("zip")}  className="w-full px-3 py-2 border border-gray-300 rounded-md"/>
            </div>
          </div>

          {/* Phone Number */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Phone number*</label>
            <div className="flex">
              <div className="flex items-center px-3 border border-r-0 rounded-l-md bg-gray-100">
                <span className="text-sm">🇺🇸 +1</span>
              </div>
              <input placeholder="Phone number" className="w-full px-3 py-2 border border-gray-300 rounded-md" 
              {...register("phoneNo", { required:{value:true,message:"phone no is required"}})}/>
              {errors.phoneNo && <p className="text-sm text-red-600">{errors.phoneNo.message}</p>}
            </div>
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
export default Profile;