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
    "blog": "www.myblog.com",
    "location": "San Francisco"
  },
  "welcomeMessage": "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  "skills": ["awesomeness", "delivering things", "cryogenic sleep", "saving the universe"],
  "bioPic": "images/fry.jpg"
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
      "location": "Chicago, IL",
      "dates": "January 3000 - Future",
      "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis sit corporis eum architecto dolore sed labore quam officiis, vero soluta! Error quod, optio adipisci nemo, molestias ratione suscipit itaque laborum."
    },
    {
      "employer": "Panucci's Pizza",
      "title": "Delivery Boy",
      "location": "Arlington Heights, IL",
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
    },
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

// Reduces prepending/replacing of html to one line of code.
function prependingToRes(elementSelected, varToReplace, objectProp) {
  $(elementSelected).prepend(varToReplace.replace("%data%", objectProp));
}

// Reduces appeding/replacing of html to one line of code.
function appendingToRes(elementSelected, varToReplace, objectProp) {
  $(elementSelected).append(varToReplace.replace("%data%", objectProp));
}

// Encapsulates bio display function with dot notation.
bio.display = function() {
  prependingToRes("#header", HTMLheaderRole, bio.role);
  prependingToRes("#header", HTMLheaderName, bio.name);
  appendingToRes("#topContacts", HTMLmobile, bio.contacts.mobile);
  appendingToRes("#topContacts", HTMLemail, bio.contacts.email);
  appendingToRes("#topContacts", HTMLtwitter, bio.contacts.twitter);
  appendingToRes("#topContacts", HTMLgithub, bio.contacts.github);
  appendingToRes("#topContacts", HTMLblog, bio.contacts.blog);
  appendingToRes("#topContacts", HTMLlocation, bio.contacts.location);
  appendingToRes("#footerContacts", HTMLmobile, bio.contacts.mobile);
  appendingToRes("#footerContacts", HTMLemail, bio.contacts.email);
  appendingToRes("#footerContacts", HTMLtwitter, bio.contacts.twitter);
  appendingToRes("#footerContacts", HTMLgithub, bio.contacts.github);
  appendingToRes("#footerContacts", HTMLblog, bio.contacts.blog);
  appendingToRes("#footerContacts", HTMLlocation, bio.contacts.location);
  appendingToRes("#header", HTMLbioPic, bio.bioPic);
  appendingToRes("#header", HTMLwelcomeMsg, bio.welcomeMessage);
  appendingToRes("#header", HTMLskillsStart);

  // Appends each skill individually so they stack.
  bio.skills.forEach(function(skill){
    appendingToRes("#skills", HTMLskills, skill);
  });
}

// Encapsulates work display function with dot notation.
work.display = function() {
  work.jobs.forEach(function(job) {
    var formattedEmployerTitle = HTMLworkEmployer.replace("%data%", job.employer) + HTMLworkTitle.replace("%data%", job.title);
    $("#workExperience").append(HTMLworkStart); // Adds new div to html that will contain each work entry.
    $(".work-entry:last").append(formattedEmployerTitle);
    appendingToRes(".work-entry:last", HTMLworkDates, job.dates);
    appendingToRes(".work-entry:last", HTMLworkLocation, job.location);
    appendingToRes(".work-entry:last", HTMLworkDescription, job.description);
  });
}

// Encapsulates project display function with dot notation.
projects.display = function() {
  projects.projects.forEach(function(project) {
    $("#projects").append(HTMLprojectStart);

    appendingToRes(".project-entry:last", HTMLprojectTitle, project.title);
    appendingToRes(".project-entry:last", HTMLprojectDates, project.dates);
    appendingToRes(".project-entry:last", HTMLprojectDescription, project.description);

    // Displays project images if there are any.
    if (project.images.length > 0) {
      project.images.forEach(function(image) {
        appendingToRes(".project-entry:last", HTMLprojectImage, image);
      });
    }
  });
}

// Encapsulates education display function with dot notation.
education.display = function() {
  education.schools.forEach(function(school) {
    var formattedSchoolName = HTMLschoolName.replace("%data%", school.name) + HTMLschoolDegree.replace("%data%", school.degree);
    $("#education").append(HTMLschoolStart); // Adds new div to html that will contain each work entry.

    $(".education-entry:last").append(formattedSchoolName);
    appendingToRes(".education-entry:last", HTMLschoolDates, school.dates);
    appendingToRes(".education-entry:last", HTMLschoolLocation, school.location);
    appendingToRes(".education-entry:last", HTMLschoolMajor, school.majors);
  });

  $("#education").append(HTMLonlineClasses);
  education.onlineCourses.forEach(function(course) {
    $("#education").append(HTMLschoolStart);
    var formattedTitleSchool = HTMLonlineTitle.replace("%data%", course.title) + HTMLonlineSchool.replace("%data%", course.school);

    $(".education-entry:last").append(formattedTitleSchool);
    appendingToRes(".education-entry:last", HTMLonlineDates, course.dates);
    appendingToRes(".education-entry:last", HTMLonlineURL, course.url);
  });
}

bio.display();
work.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);
