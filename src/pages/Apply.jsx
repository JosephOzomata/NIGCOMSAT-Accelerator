import React, { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  UploadCloud,
  PartyPopper,
} from "lucide-react";

export default function MultiStepApplyPage() {
  const [currentStep, setCurrentStep] = useState(1);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    role: "Yes",
    experience: "Yes, We do!",
    coverLetter: "",
    portfolioUrl: "",
    videoName: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const steps = ["Personal", "Qualification", "Attachments", "Review"];

  const roleLabels = {
    Yes: "Yes",
    No: "No",
    Maybe: "Maybe",
  };

  const experienceLabels = {
    "Yes, We do!": "Yes, we do!",
    "No, not at the moment": "No, not at the moment",
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const videoEl = document.createElement("video");
    videoEl.preload = "metadata";

    videoEl.onloadedmetadata = () => {
      window.URL.revokeObjectURL(videoEl.src);

      if (videoEl.duration > 60) {
        setErrors((prev) => ({
          ...prev,
          video: "Video must be 1 minute or shorter",
        }));
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
      if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
      if (!formData.email.trim()) {
        newErrors.email = "Email is required";
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = "Invalid email";
      }
    }

    if (currentStep === 3) {
      if (!formData.videoName) newErrors.video = "A 1-minute video is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = (e) => {
    e.preventDefault();
    if (validateStep() && currentStep < steps.length) {
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

  const fillPercent = ((currentStep - 1) / (steps.length - 1)) * 100;

  const inputBase =
    "w-full rounded-xl border-2 px-4 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:ring-4";
  const inputOk =
    "border-slate-200 focus:border-indigo-500 focus:ring-indigo-100";
  const inputErr = "border-rose-400 focus:border-rose-500 focus:ring-rose-100";

  if (isSubmitted) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-indigo-950 via-violet-900 to-indigo-900 p-4 pt-16 sm:p-8 sm:pt-24">
        <div className="relative w-full max-w-md overflow-hidden rounded-3xl bg-white shadow-2xl">
          <div className="bg-gradient-to-r from-amber-400 to-amber-500 px-8 py-10 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg">
              <PartyPopper className="h-8 w-8 text-amber-500" />
            </div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-950">
              Application received
            </p>
          </div>

          {/* perforated ticket edge */}
          <div className="relative">
            <div className="absolute -left-3 top-0 h-6 w-6 -translate-y-1/2 rounded-full bg-indigo-950" />
            <div className="absolute -right-3 top-0 h-6 w-6 -translate-y-1/2 rounded-full bg-indigo-950" />
            <div className="border-t-2 border-dashed border-slate-200" />
          </div>

          <div className="px-8 py-8 text-center">
            <h1 className="text-2xl font-black text-slate-900">
              You're in the queue, {formData.fullName.split(" ")[0] || "founder"}.
            </h1>
            <p className="mt-3 text-sm leading-relaxed text-slate-500">
              Thanks for applying. We've logged your submission and our team
              will reach out at{" "}
              <span className="font-semibold text-indigo-600">{formData.email}</span>{" "}
              with next steps.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center from-cornsilk-950 p-4 pt-24 sm:p-8 sm:p-32">
      <div className="w-full max-w-xl rounded-3xl bg-white p-6 shadow-2xl sm:p-10">
        <p className="mb-1 text-center text-xs font-bold uppercase tracking-[0.25em] text-amber-500">
          NIGCOMSAT
        </p>
        <h1 className="mb-8 text-center text-2xl font-black text-slate-900 sm:text-3xl">
          Apply for the{" "}
          <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
            Next Cohort
          </span>
        </h1>

        {/* Step tracker */}
        <div className="relative mb-10 flex justify-between">
          <div className="absolute left-4 right-4 top-4 h-1 rounded-full bg-slate-100" />
          <div
            className="absolute left-4 top-4 h-1 rounded-ful from-cyan-450 transition-all duration-500"
            style={{ width: `calc(${fillPercent}% - ${fillPercent * 0.08}px)` }}
          />
          {steps.map((label, i) => {
            const stepNum = i + 1;
            const active = currentStep === stepNum;
            const done = currentStep > stepNum;
            return (
              <div key={label} className="relative z-10 flex flex-col items-center gap-2">
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold transition-all duration-300 ${
                    done
                      ? "bg-indigo-600 text-white"
                      : active
                      ? "scale-125 bg-gradient-to-br from-indigo-600 to-violet-600 text-white shadow-lg shadow-indigo-300"
                      : "bg-slate-100 text-slate-400"
                  }`}
                >
                  {done ? <CheckCircle2 className="h-4 w-4" /> : stepNum}
                </div>
                <span
                  className={`hidden text-[10px] font-bold sm:block ${
                    currentStep >= stepNum ? "text-indigo-600" : "text-slate-400"
                  }`}
                >
                  {label}
                </span>
              </div>
            );
          })}
        </div>

        <form>
          {currentStep === 1 && (
            <div className="space-y-5">
              <div>
                <label htmlFor="fullName" className="mb-2 block text-xs font-bold uppercase tracking-wide text-slate-600">
                  Full name
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="James Onoja"
                  className={`${inputBase} ${errors.fullName ? inputErr : inputOk}`}
                />
                {errors.fullName && (
                  <p className="mt-1.5 text-xs font-semibold text-rose-600">{errors.fullName}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-xs font-bold uppercase tracking-wide text-slate-600">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="James@startup.com"
                  className={`${inputBase} ${errors.email ? inputErr : inputOk}`}
                />
                {errors.email && (
                  <p className="mt-1.5 text-xs font-semibold text-rose-600">{errors.email}</p>
                )}
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="space-y-5">
              <div>
                <label htmlFor="phone" className="mb-2 block text-xs font-bold uppercase tracking-wide text-slate-600">
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="080X XXX XXXX"
                  className={`${inputBase} ${inputOk}`}
                />
              </div>

              <div>
                <label htmlFor="role" className="mb-2 block text-xs font-bold uppercase tracking-wide text-slate-600">
                  Are you legally registered with the CAC?
                </label>
                <select
                  id="role"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className={`${inputBase} ${inputOk} bg-white`}
                >
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                  <option value="Maybe">Maybe</option>
                </select>
              </div>

              <div>
                <label htmlFor="experience" className="mb-2 block text-xs font-bold uppercase tracking-wide text-slate-600">
                  Do you have a working prototype or MVP?
                </label>
                <select
                  id="experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  className={`${inputBase} ${inputOk} bg-white`}
                >
                  <option value="Yes, We do!">Yes, we do!</option>
                  <option value="No, not at the moment">No, not at the moment</option>
                </select>
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div className="space-y-5">
              <div>
                <label htmlFor="coverLetter" className="mb-2 block text-xs font-bold uppercase tracking-wide text-slate-600">
                  What's your team's strongest growth and scalability angle?
                </label>
                <textarea
                  id="coverLetter"
                  name="coverLetter"
                  value={formData.coverLetter}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Tell us what makes your traction or plan defensible..."
                  className={`${inputBase} ${inputOk} resize-y`}
                />
              </div>

              <div>
                <label htmlFor="portfolioUrl" className="mb-2 block text-xs font-bold uppercase tracking-wide text-slate-600">
                  Portfolio / GitHub
                </label>
                <input
                  id="portfolioUrl"
                  type="url"
                  name="portfolioUrl"
                  value={formData.portfolioUrl}
                  onChange={handleChange}
                  placeholder="https://github.com/yourteam"
                  className={`${inputBase} ${inputOk}`}
                />
              </div>

              <div>
                <label className="mb-2 block text-xs font-bold uppercase tracking-wide text-slate-600">
                  1-minute pitch video
                </label>
                <label
                  htmlFor="video"
                  className={`flex cursor-pointer items-center justify-center gap-2 rounded-xl border-2 border-dashed px-4 py-6 text-sm font-semibold transition ${
                    errors.video
                      ? "border-rose-300 text-rose-500"
                      : "border-slate-200 text-slate-500 hover:border-indigo-400 hover:text-indigo-600"
                  }`}
                >
                  <UploadCloud className="h-5 w-5" />
                  {formData.videoName ? "Replace video" : "Upload video"}
                </label>
                <input id="video" type="file" accept="video/*" onChange={handleFileChange} className="hidden" />

                {formData.videoName && (
                  <p className="mt-2 text-xs font-semibold text-indigo-600">
                    Selected: {formData.videoName}
                  </p>
                )}
                {errors.video && (
                  <p className="mt-1.5 text-xs font-semibold text-rose-600">{errors.video}</p>
                )}
              </div>
            </div>
          )}

          {currentStep === 4 && (
            <div className="space-y-3 rounded-2xl border-2 border-indigo-50 bg-indigo-50/60 p-6">
              {[
                ["Name", formData.fullName || "-"],
                ["Email", formData.email || "-"],
                ["Phone", formData.phone || "-"],
                ["CAC registered", roleLabels[formData.role]],
                ["Working MVP", experienceLabels[formData.experience]],
                ["Portfolio", formData.portfolioUrl || "-"],
                ["Video", formData.videoName || "-"],
              ].map(([label, value]) => (
                <div key={label} className="flex justify-between gap-4 text-sm">
                  <span className="font-bold text-indigo-600">{label}</span>
                  <span className="text-right text-slate-700">{value}</span>
                </div>
              ))}
            </div>
          )}

          <div className="mt-8 flex gap-3">
            {currentStep > 1 && (
              <button
                type="button"
                onClick={prevStep}
                className="flex flex-1 items-center justify-center gap-1.5 rounded-xl border-2 border-slate-200 py-3 text-sm font-bold text-slate-600 transition hover:border-slate-300 hover:bg-slate-50"
              >
                <ArrowLeft className="h-4 w-4" />
                Back
              </button>
            )}

            {currentStep < steps.length ? (
              <button
                type="button"
                onClick={nextStep}
                className="flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 py-3 text-sm font-bold text-white shadow-lg shadow-indigo-200 transition hover:brightness-110"
              >
                Next
                <ArrowRight className="h-4 w-4" />
              </button>
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                className="flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 py-3 text-sm font-bold text-amber-950 shadow-lg shadow-amber-200 transition hover:brightness-105"
              >
                Submit Application
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}