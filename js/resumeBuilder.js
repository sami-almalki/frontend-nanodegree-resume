
// Building JavaScript objects

var work = {
  "jobs" : [
    {
      "employer" : "Technical & Vocational Training Corp.",
      "title" : "Website Supervisor",
      "location" : "Riyadh",
      "dates" : "2003-2017",
      "description" : "Supervising the corporation main website.",
      "url" : "http://tvtc.gov.sa/"
    }
  ],
  "display" : function () {
    $("#workExperience").append(HTMLworkStart);
    for (var job=0; job<work.jobs.length; job++) {
      var formattedWork;
      formattedWork = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
      formattedWork = formattedWork.replace("#", work.jobs[job].url);
      formattedWork += HTMLworkTitle.replace("%data%", work.jobs[job].title);
      formattedWork += HTMLworkLocation.replace("%data%", work.jobs[job].location);
      formattedWork += HTMLworkDates.replace("%data%", work.jobs[job].dates);
      formattedWork += HTMLworkDescription.replace("%data%", work.jobs[job].description);
      $(".work-entry:last").append(formattedWork);
    }
  }
};

var projects = {
  "projects" : [
    {
      "title" : "Build a Portfolio Site",
      "dates" : "2017",
      "description" : "My Portfolio",
      "images" : [
        "images/project1.png",
        "images/project2.png"
      ],
      "url" : "https://github.com/sami-almalki/portfolio"
    }
  ],
  "display" : function () {
    $("#projects").append(HTMLprojectStart);
    for (var project=0; project<projects.projects.length; project++) {
      var formattedProjects;
      formattedProjects = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
      formattedProjects = formattedProjects.replace("#", projects.projects[project].url);
      formattedProjects += HTMLprojectDates.replace("%data%", projects.projects[project].dates);
      formattedProjects += HTMLprojectDescription.replace("%data%", projects.projects[project].description);
      for (var image=0; image<projects.projects[project].images.length; image++) {
        formattedProjects += HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
      }
      $(".project-entry:last").append(formattedProjects);
    }
  }
};

var bio = {
  "name" : "Sami Almalki",
  "role" : "Front-End Developer",
  "contacts" : {
    "mobile" : "0559433433",
    "email" : "samifx@gmail.com",
    "github" : "sami-almalki",
    "twitter" : "@iSaami",
    "location" : "Riyadh"
  },
  "welcomeMessage" : "Welcome to my resume!",
  "skills" : [
    "HTML5",
    "CSS3",
    "JavaScriptS",
    "jQuery",
    "JSON"
  ],
  "biopic" : "images/IMG_2260.JPG",
  "display" : function () {
    var formattedBio;
    formattedBio = HTMLheaderName.replace("%data%", bio.name);
    formattedBio += HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedBio);
    formattedBio = HTMLmobile.replace("%data%", bio.contacts.mobile);
    formattedBio += HTMLemail.replace("%data%", bio.contacts.email);
    formattedBio += HTMLgithub.replace("%data%", bio.contacts.github);
    formattedBio += HTMLtwitter.replace("%data%", bio.contacts.twitter);
    formattedBio += HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts").append(formattedBio);
    $("#footerContacts").append(formattedBio);
    formattedBio = HTMLbioPic.replace("%data%", bio.biopic);
    formattedBio += HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedBio);
    if (bio.skills.length>0) {
      $("#header").append(HTMLskillsStart);
      for (var skill=0; skill<bio.skills.length; skill++) {
        formattedBio = HTMLskills.replace("%data%", bio.skills[skill]);
        $("#skills").append(formattedBio);
      }
    }
  }
};

var education = {
  "schools" : [
    {
      "name" : "King Saud University",
      "location" : "Riyadh",
      "degree" : "Master's Degree",
      "majors" : [
        "Computer Science"
      ],
      "dates" : "2011-2013",
      "url" : "http://ksu.edu.sa/"
    },
    {
      "name" : "Arab Open University",
      "location" : "Riyadh",
      "degree" : "Bachelor's Degree",
      "majors" : [
        "Information Technology and Computing"
      ],
      "dates" : "2006-2010",
      "url" : "http://arabou.edu.sa"
    },
    {
      "name" : "Institute of New Horizons",
      "location" : "Riyadh",
      "degree" : "Associate's Degree",
      "majors" : [
        "Computer Science"
      ],
      "dates" : "2001-2003",
      "url" : "https://www.alkhaleej.com.sa/en/divisions/New-Horizons-Computer-Training"
    }
  ],
  "onlineCourses" : [
    {
      "title" : "Front-End Web Developer Nanodegree",
      "school" : "Udacity",
      "dates" : "2017",
      "url" : "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    }
  ],
  "display" : function () {
    var formattedEducation;
    $("#education").append(HTMLschoolStart);
    for (var school=0; school<education.schools.length; school++) {
      formattedEducation = HTMLschoolName.replace("%data%", education.schools[school].name);
      formattedEducation = formattedEducation.replace("#", education.schools[school].url);
      formattedEducation += HTMLschoolDegree.replace("%data%", education.schools[school].degree);
      formattedEducation += HTMLschoolDates.replace("%data%", education.schools[school].dates);
      formattedEducation += HTMLschoolLocation.replace("%data%", education.schools[school].location);
      $(".education-entry:last").append(formattedEducation);
      if (education.schools[school].majors.length>0) {
        for (var major=0; major<education.schools[school].majors.length; major++) {
          formattedEducation = HTMLschoolMajor.replace("%data%", education.schools[school].majors[major]);
          $(".education-entry:last").append(formattedEducation);
        }
      }
    }
    $("#education").append(HTMLonlineClasses);
    for (var course=0; course<education.onlineCourses.length; course++) {
      formattedEducation = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
      formattedEducation = formattedEducation.replace("#", education.onlineCourses[course].url);
      formattedEducation += HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
      formattedEducation += HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
      formattedEducation += HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
      formattedEducation = formattedEducation.replace("#", education.onlineCourses[course].url);
      $("#education h3").append(formattedEducation);
    }
  }
};

// Printing All Data

work.display();
projects.display();
bio.display();
education.display();
$("#mapDiv").append(googleMap);

// Log the Clicks

$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;
  logClicks(x, y);
});

// Displaying Internationalize Button

$("#header").append(internationalizeButton);

function inName(name) {
  name = name.trim().split(" ");
  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
  return name[0] + " " + name[1];
}
