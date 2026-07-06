export interface EnquiryPayload {
  name: string;
  email: string;
  company_name: string;
  country: string;
  designation: string;
  number_of_employees: string;
}

export const submitEnquiry = async (payload: EnquiryPayload) => {
  const response = await fetch("/api/enquiry", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data?.message || "Failed to submit enquiry");
  }

  return data;
};
