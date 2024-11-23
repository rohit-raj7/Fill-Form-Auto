chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "fetchData") {
      chrome.storage.sync.get(["prefix", "fathername", "mothername", "aadhaarno", "address", "city", "state", "postal", "country",
    "firstname", "lastname", "gender", "email", "phone", "nationality", "company", "linkedin", "twitter",
    "github", "website", "portfolio", "university", "school", "degree", "stream", "disability",
    "race", "sexual", "veteran", "cover", "resume", "edu-startdate", "edu-enddate", "other-degree", "exp-startdate", "exp-enddate", "position", "description","job",
    "notice-period", "location", "variable-salary", "expected-salary", "experience", "current-salary", "expected-salary", "notice-period", "earliest-available-date", "latest-available-date",
    "coverletter", "gender-identity", "race-ethnicity", "sexual-orientation", "disability", "veteran-status", "resume-file"], (data) => {
        sendResponse({ success: true, data });
      });
      return true; 
    }
  });
  
