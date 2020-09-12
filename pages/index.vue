<template>
  <div>
    <div
      id="dark-start"
      :style="{ backgroundColor: darkStartBackgroundColor }"
      :class="{ transition: darkStartTransition }"
    ></div>
    <div id="vanta" class="stationary-background"></div>
    <div class="container">
      <div class="full-title">
        <div class="profile">
          <img src="IMG_5749 3.JPG" class="profile-pic" alt="Angel Velazquez" />
        </div>
        <h1
          id="typing-title"
          class="display-4"
          :style="{ zIndex: typingTitleZIndex, color: typingTitleColor }"
          @click="onTitleClick"
        >
          <span class="title">{{ titleText }}</span>
        </h1>
        <div>
          <span>
            <a href="#" @click="popupEmail">Email</a>
          </span>
          •
          <span>
            <a target="_blank" href="https://github.com/angvelazquez">GitHub</a>
          </span>
          •
          <span>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/angel-velazquez-ab1a62180/"
              >LinkedIn</a
            >
          </span>
          •
          <span>
            <a target="_blank" href="Resume_SWE_Web.pdf">Resume</a>
          </span>
          <br />
        </div>
      </div>

      <div id="project-cards" :class="{ nonexistent: projectCardsNonexistent }">
        <div class="row">
          <div class="col-md-2"></div>
          <div class="col-md-8 card-col" style="justify-content: center;">
            <div class="card" style="width: 40em;">
              <div class="card-block">
                <div class="card-title" style="margin-top: 1.5em 0;">
                  <h1>Biography</h1>
                </div>
                <div class="row">
                  <div style="margin:1em;">
                    <div class="card-text">
                      Hi, My name is Angel Velazquez and I am a junior at Stony
                      Brook University pursuing a BS in computer science. I am
                      seeking upcoming summer 2021 internship opportunities, and
                      I aspire to work in a company that enables me to help
                      others through the software I engineer, while also
                      pursuing my passion of helping students from
                      underrepresented backgrounds get into the STEM field. I am
                      currently interested in software engineering roles that
                      involve machine learning or other topics within artificial
                      intelligence.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-2"></div>
        </div>

        <div class="card">
          <div class="card-block">
            <div class="card-title" style="margin-top: 8px;">
              <img class="company-logo" src="msft.svg" @click="popupMSFT" />
            </div>
            <br />
            <h5 class="card-subtitle">Microsoft New Technologist Intern</h5>
            <div class="card-text">Summer 2020</div>
            <div class="card-buttons">
              <button
                type="button"
                class="btn btn-outline-dark"
                @click="popupMSFT"
              >
                More Info
              </button>
            </div>
          </div>
        </div>

        <div class="row">
          <project-card
            title="Stony Brook Robotics Team"
            left-button-href="https://sbroboticsteam.com"
            left-button-text="Visit Club Website"
          >
            Used Python and the OpenCV module to create 3 windows that each
            contained a different camera feed from external cameras that would
            be transmitted from a mars rover to its base station. Also created
            web scrapers to autonomously download images to create a custom
            dataset to train an image classifier.
          </project-card>

          <project-card
            title="SBU Hackathon"
            left-button-href="https://github.com/Zharnite/VoizTrainer"
            left-button-text="View on Github"
          >
            Created a web app that is geared to help people who are soft spoken,
            by using the microphone from the device visiting the website to
            measure the amplitude of the speaker’s voice. When the amplitude is
            too low the device will start to vibrate, indicating they need to
            speak up.
          </project-card>
        </div>

        <div class="row">
          <project-card
            title="CSE 114 Project: Connect Four"
            left-button-href="https://www3.cs.stonybrook.edu/~cse114/L01/index.html"
            left-button-text="CSE 114 Class Website"
          >
            Applied all object-oriented programming concepts learned in CSE 114
            by using Java to create a connect four game that would prompt two
            players to enter a row to drop their designated color into the game
            board which would then stop when a winner is found.
          </project-card>

          <project-card
            title="Chapter Co-Founder, Co-President"
            left-button-href="https://www.colorstack.org"
            left-button-text="Checkout ColorStack"
          >
            Co-Founded the chapter of ColorStack at Stony Brook University by
            creating the chapter constitution, selecting the founding executive
            board members, and increasing the chapter student body by 65%.
            Helped the founding executive board members get started in
            architecting the support systems for our student body.
          </project-card>
        </div>
        <div class="row">
          <project-card
            title="Career Preparation Fellow"
            left-button-href="https://mlt.org"
            left-button-text="Checkout MLT"
          >
            Selected as one of 480 for an 18-month professional development
            program for high-achieving diverse talent. Complete business case
            studies and intensive assignments to hone analytical, quantitative,
            and communication skills. Participate in four seminars hosted by
            industry leaders, such as Google, Citi, Goldman Sachs, Deloitte, and
            Target.
          </project-card>
          <project-card
            title="Google Latinx Student Leadership Community Summit"
            left-button-href="https://students.googleblog.com/2019/04/leading-through-latinidad-takeaways.html"
            left-button-text="HSLS Blog Post"
          >
            Recently accepted to take part in the Google LSLCS, with the intent
            of helping me be Google ready as well as to meet and learn from the
            Latinx+ Googler community through breakout discussions, networking
            with the Hispanic Google Network, taking part in interview
            workshops, and also attending discussions/panels centered around
            Latinx leadership.
          </project-card>
        </div>

        <div class="row">
          <project-card
            title="Goldman Sachs Engineering Essentials Fellow"
            left-button-href="https://www.goldmansachs.com/careers/students/programs/americas/engineering-possibilities-summit.html"
            left-button-text="GS Engineering Essentials"
          >
            Took part in a month long series of events lead by professionals at
            Goldman Sachs, where I was able to gain tangible resume-enhancing
            skills through interactive workshops, work closely with a group of
            peers to grow my technical and soft skills, and network with Goldman
            Sachs professionals and hear more about their experiences and
            diverse backgrounds.
          </project-card>
          <project-card
            title="Target Diversity Leadership Symposium"
            left-button-href="https://ieor.berkeley.edu/job/diversity-leadership-symposium-2020-at-target-corporation/"
            left-button-text="Target DLS Posting"
          >
            One of 40 students selected nationally to participate in Target's
            Diversity Leadership Symposium. A 3-day extensive program where I
            was able to shadow a software engineer, learn and network with
            diverse communties within Target, meet lead recruiters, participate
            in a mini hackathon, and have the opportunity to interview of an
            internship.
          </project-card>
        </div>

        <div class="row">
          <project-card
            title="DPLN Extern"
            left-button-href="https://www.stonybrook.edu/commcms/career-center/undergraduate/DPLN.php"
            left-button-text="What is DPLN?"
          >
            Selected to participate in a highly competitive diversity mentorship
            program. Attend weekly workshops on topics such as leadership,
            networking and communication, and professional development. Receive
            mentorship from a professional at Broadridge Financial Solutions.
          </project-card>
          <project-card
            title="CSE 114 Teaching Assistant"
            left-button-href="https://www3.cs.stonybrook.edu/~cse114/L01/index.html"
            left-button-text="CSE 114 Class Website"
          >
            Held two weekly office hours to assist a student body of 240
            students in their homeworks, exams, and projects. Proctored exams
            being administered to 240 students as well as graded multiple exams
            entirely. Led student lab sessions as well as exam review sessions
            weekly in a class size of 30 students.
          </project-card>
        </div>

        <div class="row">
          <project-card
            title="Introduction to Physics Teaching Assistant"
            left-button-href="https://www.stonybrook.edu/eopaim/"
            left-button-text="Checkout EOP"
          >
            Guided 45 EOP students from underrepresented backgrounds through an
            introduction to physics course to prepare them for college-level
            physics. Prepared and ran review sessions two to three times per
            week reinforcing topics taught in daily lectures.
          </project-card>
          <project-card
            title="Calculus 1 Teaching Assistant"
            left-button-href="https://www.stonybrook.edu/eopaim/"
            left-button-text="Checkout EOP"
          >
            Prepared 19 EOP students coming from underrepresented backgrounds to
            take a university mandated math placement exam by reinforcing the
            entire Calculus 1 curriculum in a matter of five weeks. Created
            weekly sample exams for 19 students that contained topics covered
            for the given week.
          </project-card>
        </div>

        <div class="row">
          <project-card
            title="Success Coach/Mentor"
            left-button-href="https://www.stonybrook.edu/ampcstep/about"
            left-button-text="Checkout CSTEP"
          >
            Speak individually with three students who are part of the EOP or
            CSTEP program to guide and mentor them on topics such as
            time-management, test preparedness, and productive habits. Also
            assisted with professional and academic support by doing resume
            reviews , tutoring, and funneling opportunities to the students.
          </project-card>
          <project-card
            title="Choral Singer"
            left-button-href="https://www.youtube.com/watch?v=ZiGFa6Gwbzg"
            left-button-text="My First Concert"
          >
            Sang as a tenor throughout college in the Stony Brook University
            Choral.
          </project-card>
        </div>

        <br />
        <footer>
          Angel Velazquez, Design/Layout by Tanner Krewson
          <span id="footer-year">{{ year }}</span>
          <br />
          <a
            href="https://github.com/tannerkrewson/tannerkrewson.github.io"
            target="_blank"
            >View on GitHub</a
          >
        </footer>
      </div>
    </div>
    <!-- /.container -->
  </div>
</template>

<script>
import Cookies from 'js-cookie'
import Typed from 'typed.js'
import Swal from 'sweetalert2'

import ProjectCard from '~/components/ProjectCard.vue'

const Popup = Swal.mixin({
  confirmButtonColor: '#2a876b'
})

export default {
  components: { ProjectCard },
  data: () => ({
    year: new Date().getFullYear(),
    titleText: '',
    typingTitleZIndex: () => 100,
    typingTitleColor: () => 'white',
    projectCardsNonexistent: true,
    darkStartBackgroundColor: '#212529',
    darkStartTransition: false
  }),
  mounted() {
    const shouldPlayAnimation = !(Cookies.get('typed') === 'true')

    const sixteenHours = 16 / 24
    Cookies.set('typed', 'true', { expires: sixteenHours })

    if (shouldPlayAnimation) {
      // start the title above the shadow, and as white text
      this.typingTitleZIndex = 100
      this.typingTitleColor = 'white'

      // execute the animation
      new Typed('.title', {
        strings: ['Angel Velazquez'],
        typeSpeed: 100,
        onComplete: () => {
          // wait a bit, then show the page
          setTimeout(() => this.showPage(), 300)
        }
      })
    } else {
      // forgo the animation, and just show the page
      this.titleText = 'Angel Velazquez'
      this.showPage()
    }
  },
  methods: {
    showPage() {
      // make the elements take up space by removing
      // display: none, without removing opacity 0
      this.projectCardsNonexistent = false

      // get rid of the solid color covering the page
      this.darkStartBackgroundColor = 'transparent'

      // invert title text color
      this.typingTitleColor = '#212529'

      // begin the circle transition
      this.darkStartTransition = true
    },
    popupEmail() {
      Popup.fire({
        title: 'Email me!',
        html:
          '<div style="color: light-green; text-align:center;"><a href="mailto:angel.velazquez@stonybrook.edu">angel.velazquez@stonybrook.edu</a></div>'
      })
    },

    popupMSFT() {
      const innerHTML =
        '<p>Engineered a chat bot capable of answering local government-related questions, ' +
        'as well as updating users about local events ' +
        'within their area using the Microsoft Bot Framework and Microsoft’s Azure cloud service. ' +
        'Presented my team’s MVP, a web application called Localized, ' +
        'to CVPs within the Microsoft M365 Core Team. </p>'
      Popup.fire({
        html: innerHTML
      })
    },

    onTitleClick() {
      if (this.projectCardsNonexistent) {
        // forgo the animation, and just show the page
        this.titleText = 'Angel Velazquez'
        this.showPage()
      } else {
        this.popupReplayAnimation()
      }
    },

    popupReplayAnimation() {
      Popup.fire({
        title: 'Want to see the typing intro animation again?',
        type: 'question',
        showCancelButton: true,
        confirmButtonText: 'Yes',
        cancelButtonText: 'No'
      }).then((result) => {
        if (result.value) {
          Cookies.set('typed', 'false')
          location.reload()
        }
      })
    }
  }
}
</script>

<style>
/*
 *	Main
 */
body {
  padding-bottom: 2rem;
  color: #212529;
  text-align: center;
}

.gradient-background {
  background-image: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.stationary-background {
  background: #00fa44;
  background-repeat: no-repeat;
  width: 100%;
  top: -80px;
  bottom: -80px;
  position: fixed;
  z-index: -1;
}

#dark-start {
  opacity: 1;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  z-index: 1;
  pointer-events: none;
}

#dark-start:before {
  content: '';
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 100%;
  animation-duration: 1s;
  box-shadow: 0px 0px 0px 100vmax #212529;
  width: 150vmax;
  height: 150vmax;
}

.transition:before {
  animation-name: spotlight;
}

.nonexistent {
  display: none;
}

@keyframes spotlight {
  from {
    width: 0vmin;
    height: 0vmin;
  }

  to {
    width: 150vmax;
    height: 150vmax;
  }
}

/*
 *	Header
 */
.full-title {
  padding-top: 0.5rem;
  padding-bottom: 1rem;
  font-size: 1.1rem;
}

.profile {
  display: inline-block;
  margin: 1rem 0;
}

.profile-pic {
  height: 100px;
  border-radius: 50%;
}

.breathe::before {
  content: '';
  position: absolute;
  z-index: -1;
  height: 130px;
  width: 130px;
  border-radius: 50%;
  box-shadow: inset 0 0 0 16px rgba(0, 0, 0, 0.3);
  animation: breathe 16s infinite;
}

@keyframes breathe {
  from,
  75%,
  to {
    transform: scale(1, 1);
  }

  25%,
  50% {
    transform: scale(1.25, 1.25);
  }
}

.full-title a,
a:active,
a:visited {
  display: inline-block;
  color: #212529;
  transition: all 0.2s ease-in-out;
}

a:hover {
  transform: scale(1.05);
}

body {
  font-family: 'Jost', sans-serif;
  font-weight: 400;
}

.full-title .display-4 {
  font-family: 'Jost', sans-serif;
  font-weight: 500;
  font-size: 2.5em;
}

span.avoidwrap {
  display: inline-block;
}

#typing-title {
  position: relative;
  margin-bottom: 12px;
  transition: all 0.2s ease-in;
}

.company-logo {
  max-width: 62.5%;
  max-height: 105px;
}

/* fix line appearing between buttons */
.card a:hover {
  color: transparent;
}

.card-buttons {
  margin-top: 0.8em;
}

.btn-outline-dark {
  color: #212529;
  border-color: #212529;
  margin-bottom: 0.3em;
}

/*
 *	SweetAlert
 */
#swal2-content {
  text-align: left;
  font-weight: normal;
}

#swal2-content a {
  color: #45c299;
}

#swal2-content a:hover {
  text-decoration: underline;
}

.swal2-image {
  margin-top: -1.25em;
  margin-left: -1.25em;
  max-width: calc(100% + 2.5em);
  border-radius: 5px 5px 0px 0px;
}

/*
 *	Typed.js
 */
.typed-cursor {
  opacity: 1;
  -webkit-animation: blink 0.7s infinite;
  -moz-animation: blink 0.7s infinite;
  animation: blink 0.7s infinite;
}

@keyframes blink {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
