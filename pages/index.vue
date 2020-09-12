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
          <div class="col-md-8 card-col" style="justify-content: center">
            <div class="card" style="width: 40em">
              <div class="card-block">
                <div class="card-title" style="margin-top: 1.5em 0">
                  <h1>Biography</h1>
                </div>
                <div class="row">
                  <div style="margin: 1em">
                    <div class="card-text">
                      Hi, my name is Angel Velazquez and I am a junior at Stony
                      Brook University pursuing a B.S. in computer science. I
                      seek upcoming summer 2021 internship opportunities and I
                      aspire to work in a company that would enable me to help
                      others through the software I engineer while I also pursue
                      my passion of helping students from underrepresented
                      backgrounds get into the STEM field. I am currently
                      interested in software engineering roles that involve
                      machine learning or other topics within artificial
                      intelligence and will make it my mission to master the
                      field and be able to contribute to the world.
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
            <div class="card-title" style="margin-top: 8px">
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
  confirmButtonColor: '#2a876b',
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
    darkStartTransition: false,
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
        },
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
          '<div style="color: light-green; text-align:center;"><a href="mailto:angel.velazquez@stonybrook.edu">angel.velazquez@stonybrook.edu</a></div>',
      })
    },

    popupMSFT() {
      const innerHTML =
        '<p>The New Technologist program is an innovation academy jointly created by Cyborg Mobile and Microsoft’s M365 Core team. The premise of the program is to shorten the gap of education between the academic side of computer science and what is done in the technology industry. Through this academy, I had  Alejandro Fischer as my mentor, Specero Nelson and Edward Ciabattari as my coaches, and Brian Besquit as an instructor. During this program, the main objective was to identify a problem statement, come up with a solution, and do the entire agile methodology process to bring that solution to life and present our work to CVPs (Corporate Vice Presidents) at Microsoft. I assisted my team by Engineering a chatbot capable of answering local government-related questions, as well as updating users about local events within their area using the Microsoft Bot Framework and Microsoft’s Azure cloud service. I would like to thank Vanessa Feliberti, Kobie Hatcher, and the crew supporting the program Shanon Bernstine, Jane Lindley, Kristin McMeen, Lazaro Carrion, and Christy Kim. </p>'
      Popup.fire({
        html: innerHTML,
      })
    },

    popupSBRT() {
      const innerHTML =
        "<p>When joining the Stony Brook University's robotics team, I sought ways to learn what creating software and writing programs looked like outside of the classroom. At the time, the robotics team was working on completing a Mars Rover to compete with in the University Rover Challenge. Not knowing anything I was assigned the task of providing a live camera feed to external cameras and it was here that I was introduced to the field of computer vision and my interest in AI was sparked. I attempted to dive deeper into the field of AI through the robotics team's new project, a race car capable of driving autonomously, but was abruptly stopped due to the COVID pandemic. </p>"
      Popup.fire({
        html: innerHTML,
      })
    },

    popupSBUHack() {
      const innerHTML =
        '<p>The SBU Hackathon was my first hackathon. It is a new, annually-recurring hackathon at Stony Brook University. My teammates and I formed a time and brain stormed an idea that would be easy to implement but also impactful. One of my teammates thought of something to help self spoken people when they needed to speak. So, we decided to create an indicator of some sort to help the soft spoken know when they need to speak loud and that is when we came up with VoizTrainer. VoizTrainer is a web application that gets access to the visiting device’s microphone and vibrates if the input is lower than a certain amplitude and if the speaker speaks at a volume above a certain threshold, the web app will show a green color, and will not vibrate.</p>'
      Popup.fire({
        html: innerHTML,
      })
    },

    popupConnectFour() {
      const innerHTML =
        '<p>CSE 114 Is the Introduction to Object Oriented Programming course. The final project in this course was to create a connect 4 game for two players from scratch. I am extremely proud of this project because I created  the program entirely without any outside resource or information. It was very exhilarating  to think through all the implementations and planning on my own. Also, it was fun to see that all the aspects of object-oriented programming come together through the creation of the connect-4 project.</p>'
      Popup.fire({
        html: innerHTML,
      })
    },

    popupColorStack() {
      const innerHTML =
        '<p>ColorStack is a non profit organization with the mission of increasing the entrance, retention, and success of Black, Latinx, and Native American students pursuing technical majors. I spoke with the founder and CEO of ColorStack, Jehron Petty, while he was a student at Cornell University. I spoke to him and shared how isolating and difficult it was being a CS student of color at my university. Jehron said he knows what it is like and it is why he started his organization at Cornell University. Jehron and I then started planning to launch a chapter at my institution, Stony Brook University and we currently are providing resources and support to those who are racially underrepresented in the tech industry.</p>'
      Popup.fire({
        html: innerHTML,
      })
    },

    popupMLT() {
      const innerHTML =
        '<p>The Management Leadership for Tomorrow (MLT) career prep program is a program that recruits the nation’s top diverse talent and poises them to become industry leaders in order to make change in racial disparities in the multiple industries. Being a career prep fellow entails going to multiple workshops and bootcamps led by industry leaders to gain mastery leadership quantitative, and communication skills. Also each fellow receives personalized professional coaching and has access to many of the MLT partners such as Facebook, Google, Adobe, and more.</p>'
      Popup.fire({
        html: innerHTML,
      })
    },

    popupLSLCS() {
      const innerHTML =
        '<p>After being invited and participating in Google’s online Hispanic Student Leadership Summit, I was again selected to take part in Google’s new Latinx Student Leadership Summit which will have the goal of getting me Google ready by attending workshops in leadership, technical interviewing, and by networking with Google’s Latinx community. Taking part of this experience is extremely important to me because as I am the co-founder and co-president of a new organization at my university, I need to use resources just like this summit to grow to become an effective and exceptional leader.</p>'
      Popup.fire({
        html: innerHTML,
      })
    },

    popupGSEE() {
      const innerHTML =
        '<p>After learning about the opportunity to take part of the Engineering Essentials program at Goldman Sachs, I instantly applied and was one of the few accepted. During this program, I learned from so many different engineers and professionals at the company about what it is like to work at Goldman Sachs, as well as going through workshops that gave us the engineering essentials fellows, skills in the stock market, in natural language processing, and more.</p>'
      Popup.fire({
        html: innerHTML,
      })
    },

    popupDLS() {
      const innerHTML =
        '<p>The Target Diversity Leadership Symposium, DLS for short, was a very memorable event. It gave me the opportunity to shadow and get insight from new grad software engineers, meet others in competing through a hackathon, an opportunity to interview for an internship, and finally get my questions answered honestly by engineers themselves. I learned a lot about Target’s and was impressed by their approach to diversity and inclusion and the success they have already achieved so far. In all honesty in my mind they are a definite leader in this industry.</p>'
      Popup.fire({
        html: innerHTML,
      })
    },

    popup114TA() {
      const innerHTML =
        '<p>Being a T.A. for CSE 114: Introduction to Object-Oriented Programming, was my first computer science TA position. I love teaching and helping others learn complex concepts and programming and I have always had great relationships with TAs so far in my undergraduate studies so I decided to give back. Being a TA in this particular course was so much more than being just a TA. Being a computer science student of color I have always felt incredibly isolated and discouraged from continuing to pursue the major because I had no one to look up to in the field that looked like me. Being this TA gave me the opportunity to change that. I am a Dominican and Puerto Rican student, a CS student of color was a teaching assistant to a CS course and I was able to give the students who are racially underrepresented in CS who were taking the course an example that we can make, and that we can be successful in this field.</p>'
      Popup.fire({
        html: innerHTML,
      })
    },

    popupEOPPHY() {
      const innerHTML =
        '<p>The reason why I am able to attend Stony Brook University is because of the EOP program and I am incredibly thankful for it. EOP stands for educational opportunity program and is meant to help those who come from underserved communities get into institutions of higher education. Coming from a family of individuals who never went to college, and even some who never finished high school, I never knew what it took from me to go to college and I was completely oblivious to what education can do for me. It was only until my senior year of high school that I finally understood everything that my peers knew for years to come. I was fortunate enough to have a family that had gone through similar experiences and told me about programs like EOP that were meant for students like me. From then on, I reached a level of success I never thought possible. EOP students need to be part of a summer program before being fully matriculated into the university and in order to give back I decided to become a T.A. in one of my favorite classes.</p>'
      Popup.fire({
        html: innerHTML,
      })
    },

    popupEOPCALC() {
      const innerHTML =
        '<p>The reason why I am able to attend Stony Brook University is because of the EOP program and I am incredibly thankful for it. EOP stands for educational opportunity program and is meant to help those who come from underserved communities get into institutions of higher education. Coming from a family who never went to college, and even some who were unable to finish high school, I never knew what it took from me to go to college and I was completely oblivious to what education can do for me. It was only until my senior year of high school that I finally understood everything that my peers knew for years to come. I was fortunate enough to have a family that had gone through similar experiences and told me about programs like EOP that were meant for students like me. Mathematics has always been my favorite subject and it helps me recognize that computer science is where my passion lies. So, to give back and be a teaching assistant in mathematics allowed me to help others enjoy math as I do.</p>'
      Popup.fire({
        html: innerHTML,
      })
    },

    popupMentor() {
      const innerHTML =
        '<p>I never had a mentor before taking the role of being a mentor to three different students, but I did know that having someone believe in the impact you can make can make all the world of a difference. I tried in my best effort to tell them about my experiences and provide advice and I worked with them, told them about different opportunities, motivated them, had fun with them and they became so much more than my mentees they became my friends and just like they may have learned some things from me I definitely learned from them as well. To my mentees, Aidan Furey, Hamed Drame, and Linda Ye and I am incredibly grateful to have been your mentor and I am proud of all of you.</p>'
      Popup.fire({
        html: innerHTML,
      })
    },

    popupChoral() {
      const innerHTML =
        '<p>I’ve been singing in a choir since age 7 and I am currently still singing at age 19. Being part of a choir is not something I thought I would continue to do but I am still here doing it. The only time I was gonna drop it and stop pursuing music was when I was 10 years old, but a teacher inspired me to keep going and it has been nothing short of an amazing experience.</p>'
      Popup.fire({
        html: innerHTML,
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
        cancelButtonText: 'No',
      }).then((result) => {
        if (result.value) {
          Cookies.set('typed', 'false')
          location.reload()
        }
      })
    },
  },
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
