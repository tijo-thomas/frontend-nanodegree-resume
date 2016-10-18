// Below is what was done throughout the Data Types lessons, on Udacity.


// var formattedName = HTMLheaderName.replace("%data%", "Tijo Thomas");
// var role = "Web Developer";
// var formattedRole = HTMLheaderRole.replace("%data%", role);
// var work = {};
// work.position = "Course Developer";
// work.employer = "Udacity";
// work.years = 0.3;

// $("#main").append(work["position"]);
// $("#main").append(education.name);

// $("#header").prepend(bio.bioPic);
// $("#header").prepend(bio.skills);
// $("#header").prepend(bio.welcomeMessage);
// $("#header").prepend(bio.contacts);
// $("#header").prepend(bio.role);
// $("#header").prepend(bio.name);
// $("#header").prepend(formattedRole);
// $("#header").prepend(formattedName);

var bio = {
  "name": "Tijo Thomas",
  "role": "Web Developer",
  "contacts": {
    "mobile": "555-555-5555",
    "email": "john@example.com",
    "github": "johndoe",
    "twitter": "@johndoe",
    "location": "San Francisco"
  },
  "welcomeMessage": "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  "skills": ["awesomeness", "delivering things", "cryogenic sleep", "saving the universe"],
  "bioPic": "images/me.jpg"
}

var education = {
  "schools": [
    {
      "name": "Nova Southeastern University",
      "location": "Fort Lauderdale, FL",
      "degree": "Masters",
      "majors": ["CS"],
      "dates": 2013,
      "url": "http://example.com"
    },
    {
      "name": "Eckerd College",
      "location": "Saint Petersburg, FL",
      "degree": "BA",
      "majors": ["CS"],
      "dates": 2003,
      "url": "http://example.com"
    }
  ],
  "onlineCourses": [
    {
      "title": "JavaScript Syntax",
      "school": "Udacity",
      "dates": 2014,
      "url": "http://www.udacity.com"
    }
  ]
}

var work = {
  "jobs": [
    {
      "employer": "Planet Express",
      "title": "Delivery Boy",
      "dates": "January 3000 - Future",
      "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis sit corporis eum architecto dolore sed labore quam officiis, vero soluta! Error quod, optio adipisci nemo, molestias ratione suscipit itaque laborum."
    },
    {
      "employer": "Panucci's Pizza",
      "title": "Delivery Boy",
      "dates": "1998 - December 31, 1999",
      "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, tempora aliquid aperiam aspernatur corporis beatae vitae qui. Reprehenderit deserunt beatae corporis excepturi, et molestiae omnis dicta eaque animi porro consectetur."
    }
  ]
}

var projects = {
  "projects": [
    {
      "title": "Sample Project 1",
      "dates": "2014",
      "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere doloremque obcaecati architecto ipsum numquam similique doloribus unde repudiandae saepe sit minima error, repellendus accusantium vel quam, nobis dolorem. Delectus, ullam.",
      "images": [
        "https://images-na.ssl-images-amazon.com/images/I/71ytmRdg0%2BL._SL1280_.jpg",
        "https://s-media-cache-ak0.pinimg.com/originals/8d/67/01/8d6701ec5b19e54bac95d4346d00352c.jpg"
      ]
    }
  ]
}

if (bio.skills.length > 0) {
  $("#header").append(HTMLskillsStart);

  var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
  $("#skills").append(formattedSkill);

  formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
  $("#skills").append(formattedSkill);

  formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
  $("#skills").append(formattedSkill);

  formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
  $("#skills").append(formattedSkill);
}

function displayWork() {
  for (job in work.jobs) {
    $("#workExperience").append(HTMLworkStart); // Adds new div to html that will contain each work entry.
    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer); // Replaces %data% with employer from jobs object.
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title); // Replaces %data% with title from jobs object.
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $(".work-entry:last").append(formattedEmployerTitle);
    $(".work-entry:last").append(formattedDates);
    $(".work-entry:last").append(formattedDescription);
  }
}

displayWork();
