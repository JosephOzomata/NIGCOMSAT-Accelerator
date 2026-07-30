import React, { useState } from "react";

export default function MultiStepApplyPage() {
  const [currentStep, setCurrentStep] = useState(1);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    role: "frontend",
    experience: "mid",
    coverLetter: "",
    portfolioUrl: "",
    videoName: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const videoEl = document.createElement("video");
    videoEl.preload ="metadata"

    videoEl.onloadedmetadata = () => {
      window.URL.revokeObjectURL(videoEl.src);

      if (videoEl.duration > 60) {
        setErrors((prev) => ({
          ...prev,
          video: "video must be 1 minute or shorter",
        }));

        setFormData((prev) => ({
          ...prev,
          videoName:"",
        }));
      
        e.target.value = "";
        return;
      }
      setFormData((prev) => ({
        ...prev,
        videoName: file.name,
      }));
        setErrors((prev) => ({
          ...prev,
          video: ""
        }));
      };
      videoEl.src = URL.createObjectURL(file);
    
  };

  const validateStep = () => {
    const newErrors = {};

    if (currentStep === 1) {
      if (!formData.fullName.trim()) {
        newErrors.fullName = "Full Name is required";
      }

      if (!formData.email.trim()) {
        newErrors.email = "Email is required";
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = "Invalid email";
      }
    }

    if (currentStep === 3) {
      if (!formData.videoName) {
        newErrors.resume = "1 minute video is required";
      }
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const nextStep = (e) => {
    e.preventDefault();

    if (validateStep() && currentStep < 4) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const prevStep = (e) => {
    e.preventDefault();

    setCurrentStep((prev) => prev - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateStep()) {
      setIsSubmitted(true);
    }
  };

  const roleLabels = {
    frontend: "Frontend Engineer",
    backend: "Backend Engineer",
    uiux: "UI/UX Designer",
  };

  const experienceLabels = {
    junior: "Junior (0–2 years)",
    mid: "Mid-Level (2–5 years)",
    senior: "Senior (5+ years)",
  };

  const steps = ["Personal", "Qualification", "Attachments", "Review"];

  const styles = {
    canvas: {
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: " #f5f5dc6 ",
      padding: "30px",
      fontFamily: "'Poppins', 'Segoe UI', system-ui, sans-serif",
      boxSizing: "border-box",
    },

    card: {
      width: "100%",
      maxWidth: "600px",
      background: "#fff",
      borderRadius: "24px",
      padding: "40px",
      boxShadow: "0 25px 50px -12px rgba(37, 99, 235, 0.45)",
      boxSizing: "border-box",
    },

    stepBar: {
      display: "flex",
      justifyContent: "space-between",
      position: "relative",
      marginBottom: "36px",
    },

    stepLineTrack: {
      position: "absolute",
      top: "17px",
      left: "17px",
      right: "17px",
      height: "4px",
      background: "#f1f5f9",
      borderRadius: "4px",
      zIndex: 0,
    },

    stepLineFill: {
      position: "absolute",
      top: "17px",
      left: "17px",
      height: "4px",
      background: "linear-gradient(90deg, #2563eb, #06b6d4)",
      borderRadius: "4px",
      zIndex: 1,
      transition: "width 0.35s ease",
      width: `calc(${((currentStep - 1) / 3) * 100}% - ${((currentStep - 1) / 3) * 34}px)`,
    },

    stepDotWrap: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "8px",
      zIndex: 2,
      position: "relative",
    },

    stepDot: (stepNum) => ({
      width: "36px",
      height: "36px",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontWeight: "700",
      fontSize: "14px",
      color: currentStep >= stepNum ? "#fff" : "#94a3b8",
      background:
        currentStep >= stepNum
          ? "linear-gradient(135deg, #2563eb, #06b6d4)"
          : "#f1f5f9",
      transform: currentStep === stepNum ? "scale(1.15)" : "scale(1)",
      boxShadow:
        currentStep === stepNum ? "0 6px 16px rgba(37,99,235,0.45)" : "none",
      transition: "all 0.25s ease",
    }),

    stepDotLabel: (stepNum) => ({
      fontSize: "11px",
      fontWeight: "600",
      color: currentStep >= stepNum ? "#2563eb" : "#94a3b8",
    }),

    title: {
      textAlign: "center",
      fontSize: "26px",
      fontWeight: "800",
      marginBottom: "6px",
      color: "#1e1b2e",
    },

    titleAccent: {
      background: "linear-gradient(90deg, #2563eb, #7c3aed)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
    },

    subtitle: {
      textAlign: "center",
      color: "#94a3b8",
      marginBottom: "28px",
      fontSize: "14px",
      fontWeight: "500",
    },

    fieldGroup: {
      display: "flex",
      flexDirection: "column",
      marginBottom: "20px",
    },

    label: {
      marginBottom: "8px",
      fontWeight: "700",
      fontSize: "13px",
      color: "#334155",
    },

    input: (error) => ({
      padding: "12px 14px",
      borderRadius: "10px",
      border: error ? "2px solid #f43f5e" : "2px solid #e2e8f0",
      fontSize: "14px",
      outline: "none",
      transition: "border-color 0.2s ease",
    }),

    textarea: {
      padding: "12px 14px",
      borderRadius: "10px",
      border: "2px solid #e2e8f0",
      minHeight: "120px",
      fontSize: "14px",
      outline: "none",
      resize: "vertical",
      fontFamily: "inherit",
    },

    errorText: {
      color: "#f43f5e",
      fontSize: "12px",
      marginTop: "5px",
      fontWeight: "600",
    },

    btnContainer: {
      display: "flex",
      justifyContent: "space-between",
      marginTop: "30px",
      gap: "12px",
    },

    backBtn: {
      flex: 1,
      padding: "13px",
      border: "2px solid #e2e8f0",
      borderRadius: "12px",
      background: "#fff",
      color: "#475569",
      cursor: "pointer",
      fontWeight: "700",
      fontSize: "14px",
    },

    nextBtn: {
      flex: 1,
      padding: "13px",
      border: "none",
      borderRadius: "12px",
      background: "linear-gradient(135deg, #2563eb, #7c3aed)",
      color: "#fff",
      cursor: "pointer",
      fontWeight: "700",
      fontSize: "14px",
      boxShadow: "0 8px 20px rgba(37,99,235,0.4)",
    },

    submitBtn: {
      flex: 1,
      padding: "13px",
      border: "none",
      borderRadius: "12px",
      background: "linear-gradient(135deg, #06b6d4, #7c3aed)",
      color: "#fff",
      cursor: "pointer",
      fontWeight: "700",
      fontSize: "14px",
      boxShadow: "0 8px 20px rgba(6,182,212,0.4)",
    },

    reviewBox: {
      background: "#eff6ff",
      padding: "22px",
      borderRadius: "16px",
      border: "2px solid #dbeafe",
    },

    reviewItem: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: "12px",
      fontSize: "14px",
    },

    reviewLabel: {
      color: "#2563eb",
      fontWeight: "700",
    },
  };

  if (isSubmitted) {
    return (
      
      <div style={styles.canvas}>
        <style>{`
          .glow-btn{
          box-shadow: 0 8px 20px rgba(37,99,235,0,4);
            transition:box-shadow 0.25s ease, transform 0.15 ease;
          }
          glow-hover{
          box-shadow: 0 0 20px 6px rgba(37,99,235,0,6), 0 8px 20px rgba(37,99,235,0,4); 
          transform: translateY(-2px);
          }
          .glow-btn:active{
          box-shadow: 0 0 10px3px rgba(37,99,235,0,8);
          }
          `}</style>
        <div style={{ ...styles.card, textAlign: "center" }}>
          <div
            style={{
              width: "72px",
              height: "72px",
              borderRadius: "50%",
              background: "#f5f5dc",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "36px",
              margin: "0 auto 18px",
              boxShadow: "0 12px 24px rgba(37, 212, 235, 0.4)",
            }}
          >
            🎉
          </div>

          <h1 style={{ ...styles.title, marginBottom: "10px" }}>
            Application <span style={styles.titleAccent}>Submitted!</span>
          </h1>

          <p style={{ color: "#64748b", fontSize: "14px", lineHeight: 1.6 }}>
            Thank you, <b>{formData.fullName}</b>! Your application has been
            received.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.canvas}>
      <div style={styles.card}>
        <div style={styles.stepBar}>
          <div style={styles.stepLineTrack} />
          <div style={styles.stepLineFill} />
          {steps.map((label, i) => (
            <div key={label} style={styles.stepDotWrap}>
              <div style={styles.stepDot(i + 1)}>{i + 1}</div>
              <span style={styles.stepDotLabel(i + 1)}>{label}</span>
            </div>
          ))}
        </div>

        <form>
          {currentStep === 1 && (
            <>
              <h2 style={styles.title}>
                <span style={styles.titleAccent}>Details</span>
              </h2>



              <div style={styles.fieldGroup}>
                <label style={styles.label}>Full Name</label>

                <input
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  style={styles.input(errors.fullName)}
                />

                {errors.fullName && (
                  <span style={styles.errorText}>{errors.fullName}</span>
                )}
              </div>

              <div style={styles.fieldGroup}>
                <label style={styles.label}>Email</label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  style={styles.input(errors.email)}
                />

                {errors.email && (
                  <span style={styles.errorText}>{errors.email}</span>
                )}
              </div>

            </>
          )}

          {currentStep === 2 && (
            <>
              <h2 style={styles.title}>
                 <span style={styles.titleAccent}>Qualifications</span>
              </h2>


              <div style={styles.fieldGroup}>
                <label style={styles.label}>Phone</label>

                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  style={styles.input()}
                />
              </div>              

              <div style={styles.fieldGroup}>
                <label style={styles.label}>Are you legally registered with the CAC</label>

                <select
                  name="role"
                  value={formData.options}
                  onChange={handleChange}
                  style={styles.input()}
                >
                  <option value="Yes">Yes</option>
                  <option value="NO">No</option>
                  <option value="Maybe">Maybe</option>
                </select>
              </div>

              <div style={styles.fieldGroup}>
                <label style={styles.label}>Have any working prototype or MVP's</label>

                <select
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  style={styles.input()}
                >
                  <option value="Yes, We do!">Yes, We do!</option>
                  <option value="No, we don't">No, at the moment</option>
                </select>
              </div>
            </>
          )}

          {currentStep === 3 && (
            <>
              <h2 style={styles.title}>
                <span style={styles.titleAccent}>Attachments</span>
              </h2>


              <div style={styles.fieldGroup}>
                <label style={styles.label}>What's your teams strongest growth and scalbility</label>

                <textarea
                  name="coverLetter"
                  value={formData.coverLetter}
                  onChange={handleChange}
                  style={styles.textarea}
                />
              </div>

              <div style={styles.fieldGroup}>
                <label style={styles.label}>Portfolio / GitHub</label>

                <input
                  type="url"
                  name="portfolioUrl"
                  value={formData.portfolioUrl}
                  onChange={handleChange}
                  style={styles.input()}
                />
              </div>

              <div style={styles.fieldGroup}>
                <label style={styles.label}> 1-minute video</label>

                <input type="file" accept="video/*" onChange={handleFileChange} />

                {formData.videoName && (
                  <small style={{ color: "#2563eb", fontWeight: "600", marginTop: "6px" }}>
                    Selected: {formData.videoName}
                  </small>
                )}

                {errors.video && (
                  <span style={styles.errorText}>{errors.text}</span>
                )}
              </div>
            </>
          )}

          {currentStep === 4 && (
            <>
              <h2 style={styles.title}>
                <span style={styles.titleAccent}>Review</span>
              </h2>


              <div style={styles.reviewBox}>
                <div style={styles.reviewItem}>
                  <span style={styles.reviewLabel}>Name</span>
                  <span>{formData.fullName}</span>
                </div>

                <div style={styles.reviewItem}>
                  <span style={styles.reviewLabel}>Email</span>
                  <span>{formData.email}</span>
                </div>

                <div style={styles.reviewItem}>
                  <span style={styles.reviewLabel}>Phone</span>
                  <span>{formData.phone || "-"}</span>
                </div>

                <div style={styles.reviewItem}>
                  <span style={styles.reviewLabel}>Role</span>
                  <span>{roleLabels[formData.role]}</span>
                </div>

                <div style={styles.reviewItem}>
                  <span style={styles.reviewLabel}>Experience</span>
                  <span>{experienceLabels[formData.experience]}</span>
                </div>

                <div style={styles.reviewItem}>
                  <span style={styles.reviewLabel}>Portfolio</span>
                  <span>{formData.portfolioUrl || "-"}</span>
                </div>

                <div style={{ ...styles.reviewItem, marginBottom: 0 }}>
                  <span style={styles.reviewLabel}>video</span>
                  <span>{formData.videoName}</span>
                </div>
              </div>
            </>
          )}

          <div style={styles.btnContainer}>
            {currentStep > 1 && (
              <button onClick={prevStep} className="glow-btn" style={styles.backBtn}>
                Back
              </button>
            )}

            {currentStep < 4 ? (
              <button onClick={nextStep} className="glow-btn"style={styles.nextBtn}>
                Next
              </button>
            ) : (
              <button onClick={handleSubmit} className="glow-btn" style={styles.submitBtn}>
                Submit Application
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}