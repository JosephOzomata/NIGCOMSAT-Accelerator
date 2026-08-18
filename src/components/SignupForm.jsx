import React, { useState } from 'react'
import { Check, ChevronLeft, ChevronRight, UploadCloud } from 'lucide-react'
//import EligibilityChecklist from './EligibilityChecklist';
//import { children } from '../components/Layout'
import Checklist from '../components/Checklist';

const TOTAL_STEPS = 3;

export default function SignupForm() {
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    otherNames: '',
    phone: '',
    email: '',
    teamName: '',
    cacRegistered: 'Yes',
    digitalPresence: 'Yes',
    hasMvp: 'Yes',
    teamSize: 'Yes',
    videoName: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const videoEl = document.createElement("video");
    videoEl.preload = "metadata";

    videoEl.onloadedmetadata = () => {
      window.URL.revokeObjectURL(videoEl.src);

      if (videoEl.duration > 60) {
        setErrors((prev) => ({ ...prev, video: "Video must be 1 minute or shorter" }));
        setFormData((prev) => ({ ...prev, videoName: "" }));
        e.target.value = "";
        return;
      }

      setFormData((prev) => ({ ...prev, videoName: file.name }));
      setErrors((prev) => ({ ...prev, video: "" }));
    };

    videoEl.src = URL.createObjectURL(file);
  };

  const validateStep = () => {
    const newErrors = {};

    if (currentStep === 1) {
      if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
      if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
      if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
      if (!formData.email.trim()) {
        newErrors.email = "Email is required";
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = "Invalid email";
      }
    }

    if (currentStep === 2) {
      if (!formData.teamName.trim()) newErrors.teamName = "Team name is required";
      if (!formData.videoName) newErrors.video = "A 1-minute video is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = (e) => {
    e.preventDefault();
    if (validateStep() && currentStep < TOTAL_STEPS) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const prevStep = (e) => {
    e.preventDefault();
    setCurrentStep((prev) => prev - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateStep()) setIsSubmitted(true);
  };

  const inputBase =
    "w-full rounded-xl border-2 px-4 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:ring-4";
  const inputOk = "border-slate-200 focus:border-slate-400 focus:ring-slate-100";
  const inputErr = "border-rose-400 focus:border-rose-500 focus:ring-rose-100";

  const Label = ({ children, required }) => (
    <label className="mb-2 block text-xs font-bold uppercase tracking-wide text-slate-600">
      {children} {required && <span className="text-rose-500">*</span>}
    </label>
  );

  // Success view layout
  if (isSubmitted) {
    return (
      <div className="relative h-screen w-full overflow-hidden">
        <video autoPlay muted loop playsInline className="absolute inset-0 h-full w-full object-cover">
          <source src="https://res.cloudinary.com/wapbiprz/video/upload/v1785877236/74a66690c6_blue-earth-1920x1080_tfkk09.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />

        <div className="relative flex h-full items-center justify-center p-6 z-10">
          <div className="w-full max-w-md rounded-3xl bg-white p-10 text-center shadow-2xl">
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-black text-white">
              <Check className="h-6 w-6" />
            </div>
            <h1 className="text-xl font-bold text-slate-900">Application submitted</h1>
            <p className="mt-2 text-sm leading-relaxed text-slate-500">
              Thanks, {formData.firstName || "there"}. We'll reach out at{" "}
              <span className="font-semibold text-blue-600">{formData.email}</span> with next steps.
            </p>
          </div>
        </div>
      </div>
    );
  }



  // Main form + eligibility checklist layout
  return (
    <div className="relative min-h-screen w-full overflow-x-clip bg-slate-950 z-0">
      //Live Background
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <video 
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover">
           <source src="https://res.cloudinary.com/wapbiprz/video/upload/v1785877236/74a66690c6_blue-earth-1920x1080_tfkk09.mp4" type="video/mp4" />
        </video>
        <div className="abolute inset-0 bg-black/30" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 pt-24 pb-36 sm:px-6 lg:px-8 flex flex-col items-center">
        
        {/* UPPER HEADER INTRO STACK */}
        <div className="text-center mb-8">
          <span className="px-5 py-6 text-5xl font-bold text-white animate-slideUp">
            APPLY FOR COHORT 3.0
          </span>
        </div>

        {/* GRID: eligibility checklist + form share the same row */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-8 items-start animate-slideUp">
          <div className="lg:col-span-1 lg:sticky lg:top-24">
           {/* <EligibilityChecklist />*/}
           <Checklist />
          </div>

          <div className="lg:col-span-2 bg-white rounded-md p-6 sm:p-10 shadow-sm min-h-[400px] flex flex-col justify-between">
            <form onSubmit={currentStep === TOTAL_STEPS ? handleSubmit : nextStep}>
              {/* STEP 1 */}
              {currentStep === 1 && (
                <div key={1} className="space-y-5 animate-slideUp">
                  <div>
                    <h2 className="text-lg font-bold text-slate-900">YOUR INFORMATION</h2>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <Label required>First name</Label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="Ada"
                        className={`${inputBase} ${errors.firstName ? inputErr : inputOk}`}
                      />
                      {errors.firstName && (
                        <p className="mt-1.5 text-xs font-medium text-rose-500">{errors.firstName}</p>
                      )}
                    </div>

                    <div>
                      <Label required>Last name</Label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Lovelace"
                        className={`${inputBase} ${errors.lastName ? inputErr : inputOk}`}
                      />
                      {errors.lastName && (
                        <p className="mt-1.5 text-xs font-medium text-rose-500">{errors.lastName}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <Label>Other names</Label>
                    <input
                      type="text"
                      name="otherNames"
                      value={formData.otherNames}
                      onChange={handleChange}
                      placeholder="Optional"
                      className={`${inputBase} ${inputOk}`}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <Label required>Phone number</Label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+234 800 000 0000"
                        className={`${inputBase} ${errors.phone ? inputErr : inputOk}`}
                      />
                      {errors.phone && (
                        <p className="mt-1.5 text-xs font-medium text-rose-500">{errors.phone}</p>
                      )}
                    </div>

                    <div>
                      <Label required>Email</Label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        className={`${inputBase} ${errors.email ? inputErr : inputOk}`}
                      />
                      {errors.email && (
                        <p className="mt-1.5 text-xs font-medium text-rose-500">{errors.email}</p>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 2 */}
              {currentStep === 2 && (
                <div key={2} className="space-y-5 animate-slideUp">
                  <div>
                    <h2 className="text-lg font-bold text-slate-900">TEAM & VIDEO</h2>
                  </div>

                  <div>
                    <Label required>Team name</Label>
                    <input
                      type="text"
                      name="teamName"
                      value={formData.teamName}
                      onChange={handleChange}
                      placeholder="The Innovators"
                      className={`${inputBase} ${errors.teamName ? inputErr : inputOk}`}
                    />
                    {errors.teamName && (
                      <p className="mt-1.5 text-xs font-medium text-rose-500">{errors.teamName}</p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <Label required>CAC registered?</Label>
                      <select
                        name="cacRegistered"
                        value={formData.cacRegistered}
                        onChange={handleChange}
                        className={`${inputBase} ${inputOk}`}
                      >
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                      </select>
                    </div>

                    <div>
                      <Label required>Digital presence?</Label>
                      <select
                        name="digitalPresence"
                        value={formData.digitalPresence}
                        onChange={handleChange}
                        className={`${inputBase} ${inputOk}`}
                      >
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                      </select>
                    </div>

                    <div>
                      <Label required>Has an MVP?</Label>
                      <select
                        name="hasMvp"
                        value={formData.hasMvp}
                        onChange={handleChange}
                        className={`${inputBase} ${inputOk}`}
                      >
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                      </select>
                    </div>

                    <div>
                      <Label required>Team of 2 or more?</Label>
                      <select
                        name="teamSize"
                        value={formData.teamSize}
                        onChange={handleChange}
                        className={`${inputBase} ${inputOk}`}
                      >
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <Label required>Pitch video (max 1 minute)</Label>
                    <label
                      htmlFor="video-upload"
                      className={`flex cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed px-4 py-8 text-center transition ${
                        errors.video ? "border-rose-400 bg-rose-50" : "border-black/40 bg-white hover:border-slate-400"
                      }`}
                    >
                      <UploadCloud className="h-6 w-6 text-slate-400" />
                      <span className="text-sm font-medium text-slate-600">
                        {formData.videoName ? formData.videoName : "Click to upload a video"}
                      </span>
                      <span className="text-xs text-slate-400">Video should be atmost 60 sec or less</span>
                      <input
                        id="video-upload"
                        type="file"
                        accept="video/*"
                        onChange={handleFileChange}
                        className="hidden"
                      />
                    </label>
                    {errors.video && (
                      <p className="mt-1.5 text-xs font-medium text-rose-500">{errors.video}</p>
                    )}
                  </div>
                </div>
              )}

              {/* STEP 3 */}
              {currentStep === 3 && (
                <div key={3} className="space-y-5 animate-slideUp">
                  <div>
                    <h2 className="text-lg font-bold text-slate-900">FINAL REVIEW</h2>
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-slate-50 divide-y divide-slate-200">
                    <div className="p-4">
                      <h3 className="text-xs font-bold uppercase tracking-wide text-slate-500 mb-2">Profile</h3>
                      <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-sm">
                        <div className="flex justify-between sm:block">
                          <dt className="text-slate-500">Name</dt>
                          <dd className="font-medium text-slate-800">
                            {formData.firstName} {formData.lastName}
                          </dd>
                        </div>
                        <div className="flex justify-between sm:block">
                          <dt className="text-slate-500">Other names</dt>
                          <dd className="font-medium text-slate-800">{formData.otherNames || "—"}</dd>
                        </div>
                        <div className="flex justify-between sm:block">
                          <dt className="text-slate-500">Phone</dt>
                          <dd className="font-medium text-slate-800">{formData.phone}</dd>
                        </div>
                        <div className="flex justify-between sm:block">
                          <dt className="text-slate-500">Email</dt>
                          <dd className="font-medium text-slate-800">{formData.email}</dd>
                        </div>
                      </dl>
                    </div>

                    <div className="p-4">
                      <h3 className="text-xs font-bold uppercase tracking-wide text-slate-500 mb-2">Team & Video</h3>
                      <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-sm">
                        <div className="flex justify-between sm:block">
                          <dt className="text-slate-500">Team name</dt>
                          <dd className="font-medium text-slate-800">{formData.teamName}</dd>
                        </div>
                        <div className="flex justify-between sm:block">
                          <dt className="text-slate-500">CAC registered</dt>
                          <dd className="font-medium text-slate-800">{formData.cacRegistered}</dd>
                        </div>
                        <div className="flex justify-between sm:block">
                          <dt className="text-slate-500">Digital presence</dt>
                          <dd className="font-medium text-slate-800">{formData.digitalPresence}</dd>
                        </div>
                        <div className="flex justify-between sm:block">
                          <dt className="text-slate-500">Has MVP/Prototype</dt>
                          <dd className="font-medium text-slate-800">{formData.hasMvp}</dd>
                        </div>
                        <div className="flex justify-between sm:block">
                          <dt className="text-slate-500">Team of 2+</dt>
                          <dd className="font-medium text-slate-800">{formData.teamSize}</dd>
                        </div>
                        <div className="flex justify-between sm:block">
                          <dt className="text-slate-500">Video</dt>
                          <dd className="font-medium text-slate-800">{formData.videoName || "—"}</dd>
                        </div>
                      </dl>
                    </div>
                  </div>
                </div>
              )}

              {/* NAVIGATION BUTTONS */}
              <div className="mt-8 flex items-center justify-between border-t border-slate-100 pt-6">
                {currentStep > 1 ? (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="flex items-center gap-1.5 rounded-xl px-5 py-3 text-sm font-bold text-slate-500 transition hover:bg-slate-100"
                  >
                    <ChevronLeft className="h-4 w-4" />
                    Back
                  </button>
                ) : (
                  <span />
                )}

                {currentStep < TOTAL_STEPS ? (
                  <button
                    type="submit"
                    className="flex items-center gap-1.5 rounded-xl bg-black px-6 py-3 text-sm font-bold text-white shadow-lg transition hover:bg-slate-800"
                  >
                    Continue
                    <ChevronRight className="h-4 w-4" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="flex items-center gap-1.5 rounded-xl bg-black px-6 py-3 text-sm font-bold text-white shadow-lg transition hover:bg-slate-800"
                  >
                    Submit application
                    <Check className="h-4 w-4" />
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
        
      </div>
    </div>
  );
}