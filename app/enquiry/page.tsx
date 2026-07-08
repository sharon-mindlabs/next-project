"use client";
import { submitEnquiry } from "@/services/enquiry";
import Link from "next/link";
import Select from "react-select";
import { useState } from "react";

export const countryOptions = [
  { value: "Afghanistan", label: "Afghanistan" },
  { value: "Albania", label: "Albania" },
  { value: "Algeria", label: "Algeria" },
  { value: "Andorra", label: "Andorra" },
  { value: "Angola", label: "Angola" },
  { value: "Antigua and Barbuda", label: "Antigua and Barbuda" },
  { value: "Argentina", label: "Argentina" },
  { value: "Armenia", label: "Armenia" },
  { value: "Australia", label: "Australia" },
  { value: "Austria", label: "Austria" },
  { value: "Azerbaijan", label: "Azerbaijan" },
  { value: "Bahamas", label: "Bahamas" },
  { value: "Bahrain", label: "Bahrain" },
  { value: "Bangladesh", label: "Bangladesh" },
  { value: "Barbados", label: "Barbados" },
  { value: "Belarus", label: "Belarus" },
  { value: "Belgium", label: "Belgium" },
  { value: "Belize", label: "Belize" },
  { value: "Benin", label: "Benin" },
  { value: "Bhutan", label: "Bhutan" },
  { value: "Bolivia", label: "Bolivia" },
  { value: "Bosnia and Herzegovina", label: "Bosnia and Herzegovina" },
  { value: "Botswana", label: "Botswana" },
  { value: "Brazil", label: "Brazil" },
  { value: "Brunei", label: "Brunei" },
  { value: "Bulgaria", label: "Bulgaria" },
  { value: "Burkina Faso", label: "Burkina Faso" },
  { value: "Burundi", label: "Burundi" },
  { value: "Cabo Verde", label: "Cabo Verde" },
  { value: "Cambodia", label: "Cambodia" },
  { value: "Cameroon", label: "Cameroon" },
  { value: "Canada", label: "Canada" },
  { value: "Central African Republic", label: "Central African Republic" },
  { value: "Chad", label: "Chad" },
  { value: "Chile", label: "Chile" },
  { value: "China", label: "China" },
  { value: "Colombia", label: "Colombia" },
  { value: "Comoros", label: "Comoros" },
  { value: "Congo", label: "Congo" },
  { value: "Costa Rica", label: "Costa Rica" },
  { value: "Croatia", label: "Croatia" },
  { value: "Cuba", label: "Cuba" },
  { value: "Cyprus", label: "Cyprus" },
  { value: "Czech Republic", label: "Czech Republic" },
  {
    value: "Democratic Republic of the Congo",
    label: "Democratic Republic of the Congo",
  },
  { value: "Denmark", label: "Denmark" },
  { value: "Djibouti", label: "Djibouti" },
  { value: "Dominica", label: "Dominica" },
  { value: "Dominican Republic", label: "Dominican Republic" },
  { value: "Ecuador", label: "Ecuador" },
  { value: "Egypt", label: "Egypt" },
  { value: "El Salvador", label: "El Salvador" },
  { value: "Equatorial Guinea", label: "Equatorial Guinea" },
  { value: "Eritrea", label: "Eritrea" },
  { value: "Estonia", label: "Estonia" },
  { value: "Eswatini", label: "Eswatini" },
  { value: "Ethiopia", label: "Ethiopia" },
  { value: "Fiji", label: "Fiji" },
  { value: "Finland", label: "Finland" },
  { value: "France", label: "France" },
  { value: "Gabon", label: "Gabon" },
  { value: "Gambia", label: "Gambia" },
  { value: "Georgia", label: "Georgia" },
  { value: "Germany", label: "Germany" },
  { value: "Ghana", label: "Ghana" },
  { value: "Greece", label: "Greece" },
  { value: "Grenada", label: "Grenada" },
  { value: "Guatemala", label: "Guatemala" },
  { value: "Guinea", label: "Guinea" },
  { value: "Guinea-Bissau", label: "Guinea-Bissau" },
  { value: "Guyana", label: "Guyana" },
  { value: "Haiti", label: "Haiti" },
  { value: "Honduras", label: "Honduras" },
  { value: "Hungary", label: "Hungary" },
  { value: "Iceland", label: "Iceland" },
  { value: "India", label: "India" },
  { value: "Indonesia", label: "Indonesia" },
  { value: "Iran", label: "Iran" },
  { value: "Iraq", label: "Iraq" },
  { value: "Ireland", label: "Ireland" },
  { value: "Israel", label: "Israel" },
  { value: "Italy", label: "Italy" },
  { value: "Jamaica", label: "Jamaica" },
  { value: "Japan", label: "Japan" },
  { value: "Jordan", label: "Jordan" },
  { value: "Kazakhstan", label: "Kazakhstan" },
  { value: "Kenya", label: "Kenya" },
  { value: "Kiribati", label: "Kiribati" },
  { value: "Kuwait", label: "Kuwait" },
  { value: "Kyrgyzstan", label: "Kyrgyzstan" },
  { value: "Laos", label: "Laos" },
  { value: "Latvia", label: "Latvia" },
  { value: "Lebanon", label: "Lebanon" },
  { value: "Lesotho", label: "Lesotho" },
  { value: "Liberia", label: "Liberia" },
  { value: "Libya", label: "Libya" },
  { value: "Liechtenstein", label: "Liechtenstein" },
  { value: "Lithuania", label: "Lithuania" },
  { value: "Luxembourg", label: "Luxembourg" },
  { value: "Madagascar", label: "Madagascar" },
  { value: "Malawi", label: "Malawi" },
  { value: "Malaysia", label: "Malaysia" },
  { value: "Maldives", label: "Maldives" },
  { value: "Mali", label: "Mali" },
  { value: "Malta", label: "Malta" },
  { value: "Marshall Islands", label: "Marshall Islands" },
  { value: "Mauritania", label: "Mauritania" },
  { value: "Mauritius", label: "Mauritius" },
  { value: "Mexico", label: "Mexico" },
  { value: "Micronesia", label: "Micronesia" },
  { value: "Moldova", label: "Moldova" },
  { value: "Monaco", label: "Monaco" },
  { value: "Mongolia", label: "Mongolia" },
  { value: "Montenegro", label: "Montenegro" },
  { value: "Morocco", label: "Morocco" },
  { value: "Mozambique", label: "Mozambique" },
  { value: "Myanmar", label: "Myanmar" },
  { value: "Namibia", label: "Namibia" },
  { value: "Nauru", label: "Nauru" },
  { value: "Nepal", label: "Nepal" },
  { value: "Netherlands", label: "Netherlands" },
  { value: "New Zealand", label: "New Zealand" },
  { value: "Nicaragua", label: "Nicaragua" },
  { value: "Niger", label: "Niger" },
  { value: "Nigeria", label: "Nigeria" },
  { value: "North Korea", label: "North Korea" },
  { value: "North Macedonia", label: "North Macedonia" },
  { value: "Norway", label: "Norway" },
  { value: "Oman", label: "Oman" },
  { value: "Pakistan", label: "Pakistan" },
  { value: "Palau", label: "Palau" },
  { value: "Palestine", label: "Palestine" },
  { value: "Panama", label: "Panama" },
  { value: "Papua New Guinea", label: "Papua New Guinea" },
  { value: "Paraguay", label: "Paraguay" },
  { value: "Peru", label: "Peru" },
  { value: "Philippines", label: "Philippines" },
  { value: "Poland", label: "Poland" },
  { value: "Portugal", label: "Portugal" },
  { value: "Qatar", label: "Qatar" },
  { value: "Romania", label: "Romania" },
  { value: "Russia", label: "Russia" },
  { value: "Rwanda", label: "Rwanda" },
  { value: "Saint Kitts and Nevis", label: "Saint Kitts and Nevis" },
  { value: "Saint Lucia", label: "Saint Lucia" },
  {
    value: "Saint Vincent and the Grenadines",
    label: "Saint Vincent and the Grenadines",
  },
  { value: "Samoa", label: "Samoa" },
  { value: "San Marino", label: "San Marino" },
  { value: "Sao Tome and Principe", label: "Sao Tome and Principe" },
  { value: "Saudi Arabia", label: "Saudi Arabia" },
  { value: "Senegal", label: "Senegal" },
  { value: "Serbia", label: "Serbia" },
  { value: "Seychelles", label: "Seychelles" },
  { value: "Sierra Leone", label: "Sierra Leone" },
  { value: "Singapore", label: "Singapore" },
  { value: "Slovakia", label: "Slovakia" },
  { value: "Slovenia", label: "Slovenia" },
  { value: "Solomon Islands", label: "Solomon Islands" },
  { value: "Somalia", label: "Somalia" },
  { value: "South Africa", label: "South Africa" },
  { value: "South Korea", label: "South Korea" },
  { value: "South Sudan", label: "South Sudan" },
  { value: "Spain", label: "Spain" },
  { value: "Sri Lanka", label: "Sri Lanka" },
  { value: "Sudan", label: "Sudan" },
  { value: "Suriname", label: "Suriname" },
  { value: "Sweden", label: "Sweden" },
  { value: "Switzerland", label: "Switzerland" },
  { value: "Syria", label: "Syria" },
  { value: "Taiwan", label: "Taiwan" },
  { value: "Tajikistan", label: "Tajikistan" },
  { value: "Tanzania", label: "Tanzania" },
  { value: "Thailand", label: "Thailand" },
  { value: "Timor-Leste", label: "Timor-Leste" },
  { value: "Togo", label: "Togo" },
  { value: "Tonga", label: "Tonga" },
  { value: "Trinidad and Tobago", label: "Trinidad and Tobago" },
  { value: "Tunisia", label: "Tunisia" },
  { value: "Turkey", label: "Turkey" },
  { value: "Turkmenistan", label: "Turkmenistan" },
  { value: "Tuvalu", label: "Tuvalu" },
  { value: "Uganda", label: "Uganda" },
  { value: "Ukraine", label: "Ukraine" },
  { value: "United Arab Emirates", label: "United Arab Emirates" },
  { value: "United Kingdom", label: "United Kingdom" },
  { value: "United States", label: "United States" },
  { value: "Uruguay", label: "Uruguay" },
  { value: "Uzbekistan", label: "Uzbekistan" },
  { value: "Vanuatu", label: "Vanuatu" },
  { value: "Vatican City", label: "Vatican City" },
  { value: "Venezuela", label: "Venezuela" },
  { value: "Vietnam", label: "Vietnam" },
  { value: "Yemen", label: "Yemen" },
  { value: "Zambia", label: "Zambia" },
  { value: "Zimbabwe", label: "Zimbabwe" },
];

export const designationOptions = [
  { value: "ceo", label: "CEO / Founder" },
  { value: "cofounder", label: "Co-Founder" },
  { value: "president", label: "President" },
  { value: "vice_president", label: "Vice President (VP)" },
  { value: "cto", label: "Chief Technology Officer (CTO)" },
  { value: "cio", label: "Chief Information Officer (CIO)" },
  { value: "cfo", label: "Chief Financial Officer (CFO)" },
  { value: "coo", label: "Chief Operating Officer (COO)" },
  { value: "cmo", label: "Chief Marketing Officer (CMO)" },
  { value: "cro", label: "Chief Revenue Officer (CRO)" },
  { value: "cso", label: "Chief Strategy Officer (CSO)" },
  { value: "chief_product_officer", label: "Chief Product Officer (CPO)" },
  { value: "chief_hr_officer", label: "Chief Human Resources Officer (CHRO)" },
  { value: "chief_legal_officer", label: "Chief Legal Officer (CLO)" },
  { value: "chief_security_officer", label: "Chief Security Officer (CSO)" },
  { value: "director", label: "Director" },
  { value: "senior_director", label: "Senior Director" },
  { value: "executive_director", label: "Executive Director" },
  { value: "general_manager", label: "General Manager" },
  { value: "regional_manager", label: "Regional Manager" },
  { value: "operations_manager", label: "Operations Manager" },
  { value: "project_manager", label: "Project Manager" },
  { value: "product_manager", label: "Product Manager" },
  { value: "program_manager", label: "Program Manager" },
  { value: "engineering_manager", label: "Engineering Manager" },
  { value: "marketing_manager", label: "Marketing Manager" },
  { value: "sales_manager", label: "Sales Manager" },
  { value: "hr_manager", label: "HR Manager" },
  { value: "finance_manager", label: "Finance Manager" },
  { value: "vp", label: "Vice President" },
  { value: "head_of_engineering", label: "Head of Engineering" },
  { value: "head_of_product", label: "Head of Product" },
  { value: "head_of_marketing", label: "Head of Marketing" },
  { value: "head_of_sales", label: "Head of Sales" },
  { value: "head_of_hr", label: "Head of Human Resources" },
  { value: "lead_engineer", label: "Lead Engineer" },
  { value: "tech_lead", label: "Technical Lead" },
  { value: "team_lead", label: "Team Lead" },
  { value: "software_architect", label: "Software Architect" },
  { value: "solution_architect", label: "Solution Architect" },
  { value: "software_engineer", label: "Software Engineer" },
  { value: "frontend_developer", label: "Frontend Developer" },
  { value: "backend_developer", label: "Backend Developer" },
  { value: "fullstack_developer", label: "Full Stack Developer" },
  { value: "mobile_developer", label: "Mobile Developer" },
  { value: "devops_engineer", label: "DevOps Engineer" },
  { value: "qa_engineer", label: "QA Engineer" },
  { value: "data_engineer", label: "Data Engineer" },
  { value: "data_scientist", label: "Data Scientist" },
  { value: "ui_ux_designer", label: "UI/UX Designer" },
  { value: "business_analyst", label: "Business Analyst" },
  { value: "consultant", label: "Consultant" },
  { value: "advisor", label: "Advisor" },
  { value: "entrepreneur", label: "Entrepreneur" },
  { value: "founder", label: "Founder" },
  { value: "owner", label: "Owner" },
  { value: "partner", label: "Partner" },
  { value: "investor", label: "Investor" },
  { value: "student", label: "Student" },
  { value: "freelancer", label: "Freelancer" },
  { value: "self_employed", label: "Self Employed" },
  { value: "other", label: "Other" },
];

export const employeeRangeOptions = [
  { value: "1-10", label: "1–10" },
  { value: "11-20", label: "11–20" },
  { value: "21-50", label: "21–50" },
  { value: "51-100", label: "51–100" },
  { value: "101-250", label: "101–250" },
  { value: "251-500", label: "251–500" },
  { value: "501-1000", label: "501–1,000" },
  { value: "1001-5000", label: "1,001–5,000" },
  { value: "5001-10000", label: "5,001–10,000" },
  { value: "10001+", label: "10,001+" },
];

export default function Enquiry() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company_name: "",
    country: "",
    designation: "",
    number_of_employees: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    if (
      formData.name.trim() === "" ||
      formData.email.trim() === "" ||
      formData.company_name.trim() === "" ||
      formData.country.trim() === "" ||
      formData.designation.trim() === "" ||
      formData.number_of_employees.trim() === ""
    ) {
      alert("Please fill all the fields.");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      alert("Please enter a valid email address.");
      return;
    }

    try {
      setLoading(true);

      const response = await submitEnquiry(formData);

      console.log(response);

      alert("Enquiry submitted successfully");

      setFormData({
        name: "",
        email: "",
        company_name: "",
        country: "",
        designation: "",
        number_of_employees: "",
      });
    } catch (err) {
      console.error(err);
      alert(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <div className="enquiry-page">
        <div className="container">
          <div className="inner-banner">
            <div className="heading">
              <div className="discription">
                <img src="images/banner-discription-icon.svg" alt="" />
                <span>Enquiry</span>
              </div>
              <h1>
                Tell us <span>about yourself</span>
              </h1>
            </div>
            <p>
              We'll use this to tailor the experience to your team. Takes less
              than a minute.
            </p>
          </div>
        </div>
      </div>

      <div className="enquiry-form">
        <div className="container">
          <div className="content-area">
            <div className="image-area">
              <div
                className="enquiry-image"
                style={{
                  backgroundImage: "url('images/enquiry-image.jpg')",
                }}
              ></div>
              <div className="discription">
                <img src="images/king-icon.svg" alt="" />
                <p>
                  A unified support platform that helps teams resolve tickets
                  faster, collaborate better, and scale customer support without
                  operational complexity.
                </p>
              </div>
            </div>

            <div className="form-area">
              <div className="form-wrapper">
                <div className="heading">
                  <div className="discription">
                    <img src="images/banner-discription-icon.svg" alt="" />
                    <span>Send us an enquiry</span>
                  </div>
                  <h3>
                    Please fill in your details and we'll get back to you
                    shortly.
                  </h3>
                </div>

                <div>
                  <div className="form-field">
                    <label htmlFor="#">Full Name</label>
                    <div className="input-wrapper">
                      <i className="icon-user"></i>

                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                      />
                    </div>
                  </div>

                  <div className="form-field">
                    <label htmlFor="#">Email</label>
                    <div className="input-wrapper">
                      <i className="icon-email"></i>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <div className="form-field">
                      <label htmlFor="#">Company Name</label>
                      <div className="input-wrapper">
                        <input
                          type="text"
                          name="company_name"
                          value={formData.company_name}
                          onChange={handleChange}
                          placeholder="Company Name"
                        />
                      </div>
                    </div>

                    <div className="form-field">
                      <label htmlFor="#">Country</label>
                      <Select
                        instanceId="country-select"
                        inputId="country-select"
                        classNamePrefix="custom-select"
                        options={countryOptions}
                        placeholder="Select Country"
                        isSearchable
                        value={
                          countryOptions.find(
                            (item) => item.value === formData.country,
                          ) || null
                        }
                        onChange={(option) =>
                          setFormData((prev) => ({
                            ...prev,
                            country: option?.value || "",
                          }))
                        }
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <div className="form-field">
                      <label htmlFor="#">Designation</label>
                      <Select
                        instanceId="designation-select"
                        inputId="designation-select"
                        classNamePrefix="custom-select"
                        options={designationOptions}
                        placeholder="Select Designation"
                        value={
                          designationOptions.find(
                            (item) => item.value === formData.designation,
                          ) || null
                        }
                        onChange={(option) =>
                          setFormData((prev) => ({
                            ...prev,
                            designation: option?.value || "",
                          }))
                        }
                      />
                    </div>

                    <div className="form-field">
                      <label htmlFor="#">Number of Employees</label>
                      <Select
                        instanceId="number-of-employees"
                        inputId="number-of-employees"
                        classNamePrefix="custom-select"
                        options={employeeRangeOptions}
                        placeholder="Select Employees"
                        value={
                          employeeRangeOptions.find(
                            (item) =>
                              item.value === formData.number_of_employees,
                          ) || null
                        }
                        onChange={(option) =>
                          setFormData((prev) => ({
                            ...prev,
                            number_of_employees: option?.value || "",
                          }))
                        }
                      />
                    </div>
                  </div>
                </div>
                <p className="submit-text">
                  By submitting, you agree to our{" "}
                  <Link href="/enquiry">Privacy Policy.</Link>
                </p>

                <button
                  className="button btn-white btn-xxl"
                  onClick={handleSubmit}
                  disabled={loading}
                >
                  {" "}
                  {loading ? "Submitting..." : "Submit Enquiry"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
