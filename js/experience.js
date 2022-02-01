const leadSections = [{
  title: "Technical Proficiencies",
  content: "While I have experience in multiple languages, I find I'm most drawn to JavaScript and it's surrounding technologies. It's functional nature seems very intuitive to me. My experience in JavaScript, of course, extends to various libraries/frameworks (AngularJS, React.js, jQuery, Express.js) and other related technologies (Node.js, HTML, CSS, Bootstrap). I'm also well versed in SQL and NoSQL databases and have a good amount of experience and enjoy coding in C#. While I haven't used them extensively, I have training in and am fairly familiar with Python and Java."
},
{
  title: "The Gap",
  content: "Following my last SDE position my family was hit with a series of issues we needed to attend to. I decided to take a bit of a break to refresh and possibly change my development focus. Then COVID happened and I became the primary caregiver for our son while my wife was able to continue working when allowed. I did explore game development during this time, mostly with Unity and Unreal Engine. As school has gone back to in person instruction I’ve had the time to focus on getting my skills back to where they need to be and start looking for a new position."
}];

const expSections = [{
  company: "Containn Inc.",
  dates: "03/2018-10/2018",
  title: "Full Stack Software Development Engineer",
  list: ["Implemented new features, refactored existing code, fixed bugs on the front and back end for a startup developing a security API for application containers, mostly utilizing Docker, JavaScript, Node, Express, Bootstrap, HTML and CSS in a Linux environment",
    "From my first assignment I had an immediate impact on front end performance by finding and removing hundreds of unnecessary ajax calls",
    "Made suggestions on refactors and helped determine which features should be focused on next",
    "Played important role in determining which departmental tools should be used"]
},
{
  company: "Coding Dojo",
  dates: "10/2016-02/2017",
  title: "Full Stack Web Development Program",
  list: ["Completed an intense, immersive web development program which required 1000+ learning and development hours across 50+ web projects using HTML, CSS, Python, MEAN (MongoDB, Express.js, AngularJS and Node.js) and ASP.NET (C#) Core stacks and deployment in a Linux environment to AWS And Azure",
    "Program maintained a strong focus on MVC and similar design patterns",
    "Obtained Black Belts (95%-100%) on Python and MEAN stack final exams"]
},
{
  company: "Microsoft",
  dates: "06/2015-12/2015",
  title: "Software Development Engineer in Test",
  list: ["Identified need for tools to assist in data transform process and obtained sign-off to assume development responsibilities for these tools",
    "Wrote tools in PowerShell and VBScript to take telemetry data from an unconstrained Excel data source and cleaned it up for insertion into the Cosmos database",
    "My proactive response allowed other developers to go from behind, to ahead of, schedule for project completion"]
},
{
  company: "Microsoft",
  dates: "08/2011-04/2015",
  title: "Software Test Engineer",
  list: ["Worked on high profile Windows 10 and Windows 8 operating systems",
    "Developed new processes to facilitate seamless integration between merging test groups and trained new and existing personnel"]
}]

const createLeadSection = (sectionContent) => {
  return `
    <div class="container mt-4">
      <div class="row rounded border border-secondary my-5 p-2">
        <div class="col-md-12 col-lg-2 d-flex align-items-center justify-content-center">
          <h3 class="m-0 p-1 text-center">${sectionContent.title}</h3>
        </div>
        <div class="col">
          <p class="p-2 pt-0 m-0">${sectionContent.content}</p>
        </div>
      </div>
    </div>` 
}

const expHeader = `
  <div class="container mt-4">
    <div class="row rounded border border-secondary ">
      <h3 class="m-0 p-3 text-center">Experience</h3>
    </div>
  </div>
`

const createExpSection = (sectionContent) => {
  const content = createContentList(sectionContent.list);
  return `
    <div class="container mt-2">
      <div class="row rounded border border-secondary d-flex align-items-center" style="min-height: 10em;">
        <div class="col-md-12 col-lg-2">
          <h4>${sectionContent.company}</h4>
          <h6>${sectionContent.dates}</h6>
          <h6>${sectionContent.title}</h6>
        </div>
        <div class="col">
          <ul class="pt-3">${content}</ul>
        </div>
      </div>
    </div>` 
}

const createContentList = items => {
  let list = '';

  items.forEach(item => {
    list += `<li>${item}</li>`
  })

  return list;
}

let outputHTML = "";

leadSections.forEach(section => {
  outputHTML += createLeadSection(section)
})

outputHTML += expHeader;

expSections.forEach(section => {
  outputHTML += createExpSection(section);
})

document.getElementById("content").innerHTML = outputHTML;
/*

          <h6 class="m-0 mt-1"></h6>
          <h6 class="m-0 mt-1"></h6>
        </div>
        <div class="col pt-3 ms-4 me-3">
          <!-- job description -->
          <ul class="ps-3">
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
*/