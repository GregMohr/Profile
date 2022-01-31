const sections = [{
  title: "Technical Proficiencies",
  content: "While I have experience in multiple languages, I find I'm most drawn to JavaScript and it's surrounding technologies. It's functional nature seems very intuitive to me. My experience in JavaScript, of course, extends to various libraries/frameworks (AngularJS, React.js, jQuery, Express.js) and other related technologies (Node.js, HTML, CSS, Bootstrap). I'm also well versed in SQL and NoSQL databases and have a good amount of experience and enjoy coding in C#. While I haven't used them extensively, I have training in and am fairly familiar with Python and Java."
}];

const createUpperSection = (sectionContent) => {
  return `
    <div class="container mt-4">
      <div class="row rounded">
        <div class="col-md-12 col-lg-2 p-5 ps-3">
          <h3 class="m-0">${sectionContent.title}</h3>
        </div>
        <div class="col pt-4 ms-4 me-3">
          <p class="m-0">${sectionContent.content}</p>
        </div>
      </div>
    </div>` 
}

const createExpSection = (sectionContent) => {

}


/*
    <!-- Work Gap -->
    <div class="container mt-4 text-dark">
      <div class="row rounded bg-secondary">
        <div class="col-2 p-5 ps-3">
          <h3 class="m-0">The Gap</h3>
        </div>
        <div class="col pt-3 ms-4 me-3">
          <p class="m-0">Following my last SDE position my family was hit with a series of issues we needed to attend to. I decided to take a bit of a break to refresh and possibly change my development focus. Then COVID happened and I became the primary caregiver for our son while my wife was able to continue working when allowed. I did explore game development during this time, mostly with Unity and Unreal Engine. As school has gone back to in person instruction I’ve had the time to focus on getting my skills back to where they need to be and start looking for a new position.</p>
        </div>
      </div>
    </div>
    <!-- Experience -->
    <div class="container mt-4 text-dark">
      <div class="row rounded bg-secondary">
        <h3 class="m-0 p-3">Experience</h3>
      </div>
    </div>
    <div class="container mt-2 text-dark">
      <div class="row rounded bg-secondary">
        <!-- company, title, dates -->
        <div class="col-2 p-4 ps-3 pt-3">
          <h4 class="m-0 mt-2">Containn Inc.</h4>
          <h6 class="m-0 mt-1">03/2018-10/2018</h6>
          <h6 class="m-0 mt-1">Full Stack Software Development Engineer</h6>
        </div>
        <div class="col pt-3 ms-4 me-3">
          <!-- job description -->
          <ul class="ps-3">
            <li>Implemented new features, refactored existing code, fixed bugs on the front and back end for a startup developing a security API for application containers, mostly utilizing Docker, JavaScript, Node, Express, Bootstrap, HTML and CSS in a Linux environment</li>
            <li>From my first assignment I had an immediate impact on front end performance by finding and removing hundreds of unnecessary ajax calls</li>
            <li>Made suggestions on refactors and helped determine which features should be focused on next</li>
            <li>Played important role in determining which departmental tools should be used</li>
          </ul>
        </div>
      </div>
      <div class="row rounded bg-secondary mt-2">
        <!-- company, title, dates -->
        <div class="col-2 p-4 ps-3 pt-3">
          <h4 class="m-0 mt-2">Coding Dojo</h4>
          <h6 class="m-0 mt-1">10/2016-02/2017</h6>
          <h6 class="m-0 mt-1">Full Stack Web Development Program</h6>
        </div>
        <div class="col pt-3 ms-4 me-3">
          <!-- job description -->
          <ul class="ps-3">
            <li>Completed an intense, immersive web development program which required 1000+ learning and development hours across 50+ web projects using HTML, CSS, Python, MEAN (MongoDB, Express.js, AngularJS and Node.js) and ASP.NET (C#) Core stacks and deployment in a Linux environment to AWS And Azure</li>
            <li>Program maintained a strong focus on MVC and similar design patterns</li>
            <li>Obtained Black Belts (95%-100%) on Python and MEAN stack final exams</li>
          </ul>
        </div>
      </div>
      <div class="row rounded bg-secondary mt-2">
        <!-- company, title, dates -->
        <div class="col-2 p-4 ps-3 pt-3">
          <h4 class="m-0 mt-2">Microsoft</h4>
          <h6 class="m-0 mt-1">06/2015-12/2015</h6>
          <h6 class="m-0 mt-1">Software Development Engineer in Test</h6>
        </div>
        <div class="col pt-3 ms-4 me-3">
          <!-- job description -->
          <ul class="ps-3">
            <li>Identified need for tools to assist in data transform process and obtained sign-off to assume development responsibilities for these tools</li>
            <li>Wrote tools in PowerShell and VBScript to take telemetry data from an unconstrained Excel data source and cleaned it up for insertion into the Cosmos database</li>
            <li>My proactive response allowed other developers to go from behind, to ahead of, schedule for project completion</li>
          </ul>
        </div>
      </div>
      <div class="row rounded bg-secondary mt-2">
        <!-- company, title, dates -->
        <div class="col-2 p-4 ps-3 pt-3">
          <h4 class="m-0 mt-2">Microsoft</h4>
          <h6 class="m-0 mt-1">08/2011-04/2015</h6>
          <h6 class="m-0 mt-1">Software Test Engineer</h6>
        </div>
        <div class="col pt-3 ms-4 me-3">
          <!-- job description -->
          <ul class="ps-3">
            <li>Worked on high profile Windows 10 and Windows 8 operating systems</li>
            <li>Developed new processes to facilitate seamless integration between merging test groups and trained new and existing personnel</li>
          </ul>
        </div>
      </div>
    </div>
*/