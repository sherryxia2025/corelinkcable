export const contactConfig = {
  // contact methods
  contactMethods: {
    email: {
      title: "Sales enquiries",
      value: "sherryxia05061@gmail.com",
    },
    phone: {
      title: "Phone",
      value: "+86 15895423425",
    },
    whatsapp: {
      title: "WhatsApp",
      value: "15895423425",
    },
  },
  // form title
  formTitle: "Project enquiry",
  // form fields
  formFields: {
    name: {
      label: "Your Name",
      placeholder: "Name",
      error: "Name is required",
    },
    email: {
      label: "Your Email",
      placeholder: "Business email",
      error: "Invalid email address",
    },
    contactNumber: {
      label: "Contact Number",
      placeholder: "Phone or WhatsApp",
      error: "Contact number is required",
    },
    subject: {
      label: "Subject",
      placeholder: "Project or product requirement",
      error: "Subject is required",
    },
    message: {
      label: "Message",
      placeholder:
        "Application, environment, product type, quantity, and target schedule",
      error: "Message is required",
    },
  },
  // button text
  button: {
    submit: "Submit Enquiry",
    submitting: "Sending...",
  },
  // messages
  messages: {
    success: "Message sent successfully!",
    error: "Failed to send message",
  },
} as const;
