export const APPLICANTS = [
  {
    name: "Sumit Mishra",
    skills: "React, Typescript",
    gitUsername: "sumitmishra04",
  },
  {
    name: "Keegan Jones",
    skills: "Swift, html",
    gitUsername: "keeg",
  },
  {
    name: "Austin Wood",
    skills: "Javascript",
    gitUsername: "indiesquidge",
  },
  {
    name: "yun stanford",
    skills: "React, Javascript, typescript",
    gitUsername: "yunstanford",
  },
  {
    name: "charles lai",
    skills: "Python",
    gitUsername: "sup",
  },
]

export const POSTED_JOBS = [
  {
    jobDescriptionPdf: "paypal.pdf",
    jobRequirements:
      "Should be a software developer with a minimum experience of 7 years and has hands on experience in react.",
    tags: "React, typescript",
    companyName: "Paypal India Pvt Ltd",
    contactInfo: "8093023426",
    applicants: [APPLICANTS[0], APPLICANTS[1]],
  },
  {
    jobDescriptionPdf: "tcs.pdf",
    jobRequirements:
      "Should be a software developer with a minimum experience of 7 years and has hands on experience in react.",
    tags: "Java, spring boot, sql",
    companyName: "Tata Consultancy Limited",
    contactInfo: "8203014200",
    applicants: [APPLICANTS[2], APPLICANTS[4], APPLICANTS[0], APPLICANTS[1]],
  },
]
