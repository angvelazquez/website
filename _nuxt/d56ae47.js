(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{191:function(t,e,n){var content=n(198);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(63).default)("51709b93",content,!0,{sourceMap:!1})},192:function(t,e,n){var content=n(200);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(63).default)("e32dded2",content,!0,{sourceMap:!1})},193:function(t,e,n){var content=n(202);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(63).default)("6db380b2",content,!0,{sourceMap:!1})},197:function(t,e,n){"use strict";var o=n(191);n.n(o).a},198:function(t,e,n){(e=n(62)(!1)).push([t.i,".card-col{display:flex;padding:.8em}.card{background-color:rgba(200,200,255,.2);border:none;-webkit-backdrop-filter:blur(6px);backdrop-filter:blur(6px);display:flex;justify-content:center;width:100%;padding:1.5em 1em}",""]),t.exports=e},199:function(t,e,n){"use strict";var o=n(192);n.n(o).a},200:function(t,e,n){(e=n(62)(!1)).push([t.i,'.card-title{font-family:"Jost",sans-serif;font-size:2rem;font-weight:500}',""]),t.exports=e},201:function(t,e,n){"use strict";var o=n(193);n.n(o).a},202:function(t,e,n){(e=n(62)(!1)).push([t.i,'body{padding-bottom:2rem;color:#212529;text-align:center}.gradient-background{background-image:linear-gradient(135deg,#667eea,#764ba2)}.stationary-background{background:#00fa44;background-repeat:no-repeat;width:100%;top:-80px;bottom:-80px;position:fixed;z-index:-1}#dark-start{opacity:1;position:fixed;width:100%;height:100%;top:0;left:0;z-index:1;pointer-events:none}#dark-start:before{content:"";position:fixed;left:50%;top:50%;transform:translate(-50%,-50%);border-radius:100%;-webkit-animation-duration:1s;animation-duration:1s;box-shadow:0 0 0 100vmax #212529;width:150vmax;height:150vmax}.transition:before{-webkit-animation-name:spotlight;animation-name:spotlight}.nonexistent{display:none}@-webkit-keyframes spotlight{0%{width:0;height:0}to{width:150vmax;height:150vmax}}@keyframes spotlight{0%{width:0;height:0}to{width:150vmax;height:150vmax}}.full-title{padding-top:.5rem;padding-bottom:1rem;font-size:1.1rem}.profile{display:inline-block;margin:1rem 0}.profile-pic{height:100px;border-radius:50%}.breathe:before{content:"";position:absolute;z-index:-1;height:130px;width:130px;border-radius:50%;box-shadow:inset 0 0 0 16px rgba(0,0,0,.3);-webkit-animation:breathe 16s infinite;animation:breathe 16s infinite}@-webkit-keyframes breathe{0%,75%,to{transform:scale(1)}25%,50%{transform:scale(1.25)}}@keyframes breathe{0%,75%,to{transform:scale(1)}25%,50%{transform:scale(1.25)}}.full-title a,a:active,a:visited{display:inline-block;color:#212529;transition:all .2s ease-in-out}a:hover{transform:scale(1.05)}body{font-weight:400}.full-title .display-4,body{font-family:"Jost",sans-serif}.full-title .display-4{font-weight:500;font-size:2.5em}span.avoidwrap{display:inline-block}#typing-title{position:relative;margin-bottom:12px;transition:all .2s ease-in}.company-logo{max-width:62.5%;max-height:105px}.card a:hover{color:transparent}.card-buttons{margin-top:.8em}.btn-outline-dark{color:#212529;border-color:#212529;margin-bottom:.3em}#swal2-content{text-align:left;font-weight:400}#swal2-content a{color:#45c299}#swal2-content a:hover{text-decoration:underline}.swal2-image{margin-top:-1.25em;margin-left:-1.25em;max-width:calc(100% + 2.5em);border-radius:5px 5px 0 0}.typed-cursor{opacity:1;-webkit-animation:blink .7s infinite;animation:blink .7s infinite}@-webkit-keyframes blink{0%{opacity:1}50%{opacity:0}to{opacity:1}}@keyframes blink{0%{opacity:1}50%{opacity:0}to{opacity:1}}',""]),t.exports=e},203:function(t,e,n){"use strict";n.r(e);var o=n(194),r=n.n(o),l=n(195),c=n.n(l),d=n(196),h=n.n(d),m=(n(197),n(47)),f={components:{Card:Object(m.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-md-6 card-col"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-block"},[this._t("default")],2)])])}),[],!1,null,null,null).exports},props:{title:{type:String,default:""},leftButtonHref:{type:String,default:""},leftButtonText:{type:String,default:""},rightButtonHref:{type:String,default:""},rightButtonText:{type:String,default:""}}},w=(n(199),Object(m.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("card",[n("h3",{staticClass:"card-title"},[t._v(t._s(t.title))]),t._v(" "),n("p",{staticClass:"card-text"},[t._t("default")],2),t._v(" "),n("div",[n("a",{attrs:{href:t.leftButtonHref,target:"_blank"}},[n("button",{staticClass:"btn btn-outline-dark",attrs:{type:"button"}},[t._v("\n        "+t._s(t.leftButtonText)+"\n      ")])]),t._v(" "),t.rightButtonHref?n("a",{attrs:{href:t.rightButtonHref,target:"_blank"}},[n("button",{staticClass:"btn btn-outline-dark",attrs:{type:"button"}},[t._v("\n        "+t._s(t.rightButtonText)+"\n      ")])]):t._e()])])}),[],!1,null,null,null).exports),y=h.a.mixin({confirmButtonColor:"#2a876b"}),v={components:{ProjectCard:w},data:function(){return{year:(new Date).getFullYear(),titleText:"",typingTitleZIndex:function(){return 100},typingTitleColor:function(){return"white"},projectCardsNonexistent:!0,darkStartBackgroundColor:"#212529",darkStartTransition:!1}},mounted:function(){var t=this,e=!("true"===r.a.get("typed"));r.a.set("typed","true",{expires:16/24}),e?(this.typingTitleZIndex=100,this.typingTitleColor="white",new c.a(".title",{strings:["Angel Velazquez"],typeSpeed:100,onComplete:function(){setTimeout((function(){return t.showPage()}),300)}})):(this.titleText="Angel Velazquez",this.showPage())},methods:{showPage:function(){this.projectCardsNonexistent=!1,this.darkStartBackgroundColor="transparent",this.typingTitleColor="#212529",this.darkStartTransition=!0},popupEmail:function(){y.fire({title:"Email me!",html:'<div style="color: light-green; text-align:center;"><a href="mailto:angel.velazquez@stonybrook.edu">angel.velazquez@stonybrook.edu</a></div>'})},popupMSFT:function(){y.fire({html:"<p>The New Technologist program is an innovation academy jointly created by Cyborg Mobile and Microsoft’s M365 Core team. The premise of the program is to shorten the gap of education between the academic side of computer science and what is done in the technology industry. Through this academy, I had  Alejandro Fischer as my mentor, Spencer Nelson and Edward Ciabattari as my coaches, and Brian Bansenauer as an instructor. During this program, the main objective was to identify a problem statement, come up with a solution, and do the entire agile methodology process to bring that solution to life and present our work to CVPs (Corporate Vice Presidents) at Microsoft. I assisted my team by engineering a chatbot capable of answering local government-related questions, as well as updating users about local events within their area using the Microsoft Bot Framework and Microsoft’s Azure cloud service. I would like to thank Vanessa Feliberti, Kobie Hatcher, and the crew supporting the program Shanon Bernstine, Jane Lindley, Kristin McMeen, Lazaro Carrion, and Christy Kim. </p>"})},popupSBRT:function(){y.fire({html:"<p>When joining the Stony Brook University's robotics team, I sought ways to learn what creating software and writing programs looked like outside of the classroom. At the time, the robotics team was working on completing a Mars Rover to compete with in the University Rover Challenge. Not knowing anything I was assigned the task of providing a live camera feed to external cameras and it was here that I was introduced to the field of computer vision and my interest in AI was sparked. I attempted to dive deeper into the field of AI through the robotics team's new project, a race car capable of driving autonomously, but was abruptly stopped due to the COVID pandemic. </p>"})},popupSBUHack:function(){y.fire({html:"<p>The SBU Hackathon was my first hackathon. It is a new, annually-recurring hackathon at Stony Brook University. My teammates and I formed a time and brain stormed an idea that would be easy to implement but also impactful. One of my teammates thought of something to help self spoken people when they needed to speak. So, we decided to create an indicator of some sort to help the soft spoken know when they need to speak loud and that is when we came up with VoizTrainer. VoizTrainer is a web application that gets access to the visiting device’s microphone and vibrates if the input is lower than a certain amplitude and if the speaker speaks at a volume above a certain threshold, the web app will show a green color, and will not vibrate.</p>"})},popupConnectFour:function(){y.fire({html:"<p>CSE 114 Is the Introduction to Object Oriented Programming course. The final project in this course was to create a connect 4 game for two players from scratch. I am extremely proud of this project because I created  the program entirely without any outside resource or information. It was very exhilarating  to think through all the implementations and planning on my own. Also, it was fun to see that all the aspects of object-oriented programming come together through the creation of the connect-4 project.</p>"})},popupColorStack:function(){y.fire({html:"<p>ColorStack is a non profit organization with the mission of increasing the entrance, retention, and success of Black, Latinx, and Native American students pursuing technical majors. I spoke with the founder and CEO of ColorStack, Jehron Petty, while he was a student at Cornell University. I spoke to him and shared how isolating and difficult it was being a CS student of color at my university. Jehron said he knows what it is like and it is why he started his organization at Cornell University. Jehron and I then started planning to launch a chapter at my institution, Stony Brook University and we currently are providing resources and support to those who are racially underrepresented in the tech industry.</p>"})},popupMLT:function(){y.fire({html:"<p>The Management Leadership for Tomorrow (MLT) career prep program is a program that recruits the nation’s top diverse talent and poises them to become industry leaders in order to make change in racial disparities in the multiple industries. Being a career prep fellow entails going to multiple workshops and bootcamps led by industry leaders to gain mastery leadership quantitative, and communication skills. Also each fellow receives personalized professional coaching and has access to many of the MLT partners such as Facebook, Google, Adobe, and more.</p>"})},popupLSLCS:function(){y.fire({html:"<p>After being invited and participating in Google’s online Hispanic Student Leadership Summit, I was again selected to take part in Google’s new Latinx Student Leadership Summit which will have the goal of getting me Google ready by attending workshops in leadership, technical interviewing, and by networking with Google’s Latinx community. Taking part of this experience is extremely important to me because as I am the co-founder and co-president of a new organization at my university, I need to use resources just like this summit to grow to become an effective and exceptional leader.</p>"})},popupGSEE:function(){y.fire({html:"<p>After learning about the opportunity to take part of the Engineering Essentials program at Goldman Sachs, I instantly applied and was one of the few accepted. During this program, I learned from so many different engineers and professionals at the company about what it is like to work at Goldman Sachs, as well as going through workshops that gave us the engineering essentials fellows, skills in the stock market, in natural language processing, and more.</p>"})},popupDLS:function(){y.fire({html:"<p>The Target Diversity Leadership Symposium, DLS for short, was a very memorable event. It gave me the opportunity to shadow and get insight from new grad software engineers, meet others in competing through a hackathon, an opportunity to interview for an internship, and finally get my questions answered honestly by engineers themselves. I learned a lot about Target’s and was impressed by their approach to diversity and inclusion and the success they have already achieved so far. In all honesty in my mind they are a definite leader in this industry.</p>"})},popup114TA:function(){y.fire({html:"<p>Being a T.A. for CSE 114: Introduction to Object-Oriented Programming, was my first computer science TA position. I love teaching and helping others learn complex concepts and programming and I have always had great relationships with TAs so far in my undergraduate studies so I decided to give back. Being a TA in this particular course was so much more than being just a TA. Being a computer science student of color I have always felt incredibly isolated and discouraged from continuing to pursue the major because I had no one to look up to in the field that looked like me. Being this TA gave me the opportunity to change that. I am a Dominican and Puerto Rican student, a CS student of color was a teaching assistant to a CS course and I was able to give the students who are racially underrepresented in CS who were taking the course an example that we can make, and that we can be successful in this field.</p>"})},popupEOPPHY:function(){y.fire({html:"<p>The reason why I am able to attend Stony Brook University is because of the EOP program and I am incredibly thankful for it. EOP stands for educational opportunity program and is meant to help those who come from underserved communities get into institutions of higher education. Coming from a family of individuals who never went to college, and even some who never finished high school, I never knew what it took from me to go to college and I was completely oblivious to what education can do for me. It was only until my senior year of high school that I finally understood everything that my peers knew for years to come. I was fortunate enough to have a family that had gone through similar experiences and told me about programs like EOP that were meant for students like me. From then on, I reached a level of success I never thought possible. EOP students need to be part of a summer program before being fully matriculated into the university and in order to give back I decided to become a T.A. in one of my favorite classes.</p>"})},popupEOPCALC:function(){y.fire({html:"<p>The reason why I am able to attend Stony Brook University is because of the EOP program and I am incredibly thankful for it. EOP stands for educational opportunity program and is meant to help those who come from underserved communities get into institutions of higher education. Coming from a family who never went to college, and even some who were unable to finish high school, I never knew what it took from me to go to college and I was completely oblivious to what education can do for me. It was only until my senior year of high school that I finally understood everything that my peers knew for years to come. I was fortunate enough to have a family that had gone through similar experiences and told me about programs like EOP that were meant for students like me. Mathematics has always been my favorite subject and it helps me recognize that computer science is where my passion lies. So, to give back and be a teaching assistant in mathematics allowed me to help others enjoy math as I do.</p>"})},popupMentor:function(){y.fire({html:"<p>I never had a mentor before taking the role of being a mentor to three different students, but I did know that having someone believe in the impact you can make can make all the world of a difference. I tried in my best effort to tell them about my experiences and provide advice and I worked with them, told them about different opportunities, motivated them, had fun with them and they became so much more than my mentees they became my friends and just like they may have learned some things from me I definitely learned from them as well. To my mentees, Aidan Furey, Hamed Drame, and Linda Ye and I am incredibly grateful to have been your mentor and I am proud of all of you.</p>"})},popupChoral:function(){y.fire({html:"<p>I’ve been singing in a choir since age 7 and I am currently still singing at age 19. Being part of a choir is not something I thought I would continue to do but I am still here doing it. The only time I was gonna drop it and stop pursuing music was when I was 10 years old, but a teacher inspired me to keep going and it has been nothing short of an amazing experience.</p>"})},onTitleClick:function(){this.projectCardsNonexistent?(this.titleText="Angel Velazquez",this.showPage()):this.popupReplayAnimation()},popupReplayAnimation:function(){y.fire({title:"Want to see the typing intro animation again?",type:"question",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"No"}).then((function(t){t.value&&(r.a.set("typed","false"),location.reload())}))}}},k=(n(201),Object(m.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{class:{transition:t.darkStartTransition},style:{backgroundColor:t.darkStartBackgroundColor},attrs:{id:"dark-start"}}),t._v(" "),n("div",{staticClass:"stationary-background",attrs:{id:"vanta"}}),t._v(" "),n("div",{staticClass:"container"},[n("div",{staticClass:"full-title"},[t._m(0),t._v(" "),n("h1",{staticClass:"display-4",style:{zIndex:t.typingTitleZIndex,color:t.typingTitleColor},attrs:{id:"typing-title"},on:{click:t.onTitleClick}},[n("span",{staticClass:"title"},[t._v(t._s(t.titleText))])]),t._v(" "),n("div",[n("span",[n("a",{attrs:{href:"#"},on:{click:t.popupEmail}},[t._v("Email")])]),t._v("\n        •\n        "),t._m(1),t._v("\n        •\n        "),t._m(2),t._v("\n        •\n        "),t._m(3),t._v(" "),n("br")])]),t._v(" "),n("div",{class:{nonexistent:t.projectCardsNonexistent},attrs:{id:"project-cards"}},[t._m(4),t._v(" "),n("div",{staticClass:"card"},[n("div",{staticClass:"card-block"},[n("div",{staticClass:"card-title",staticStyle:{"margin-top":"8px"}},[n("img",{staticClass:"company-logo",attrs:{src:"msft.svg"},on:{click:t.popupMSFT}})]),t._v(" "),n("br"),t._v(" "),n("h5",{staticClass:"card-subtitle"},[t._v("Microsoft New Technologist Intern")]),t._v(" "),n("div",{staticClass:"card-text"},[t._v("Summer 2020")]),t._v(" "),n("div",{staticClass:"card-buttons"},[n("button",{staticClass:"btn btn-outline-dark",attrs:{type:"button"},on:{click:t.popupMSFT}},[t._v("\n              More Info\n            ")])])])]),t._v(" "),n("div",{staticClass:"row"},[n("project-card",{attrs:{title:"Stony Brook Robotics Team","left-button-href":"https://sbroboticsteam.com","left-button-text":"Visit Club Website"}},[t._v("\n          Used Python and the OpenCV module to create 3 windows that each\n          contained a different camera feed from external cameras that would\n          be transmitted from a mars rover to its base station. Also created\n          web scrapers to autonomously download images to create a custom\n          dataset to train an image classifier.\n        ")]),t._v(" "),n("project-card",{attrs:{title:"SBU Hackathon","left-button-href":"https://github.com/Zharnite/VoizTrainer","left-button-text":"View on Github"}},[t._v("\n          Created a web app that is geared to help people who are soft spoken,\n          by using the microphone from the device visiting the website to\n          measure the amplitude of the speaker’s voice. When the amplitude is\n          too low the device will start to vibrate, indicating they need to\n          speak up.\n        ")])],1),t._v(" "),n("div",{staticClass:"row"},[n("project-card",{attrs:{title:"CSE 114 Project: Connect Four","left-button-href":"https://www3.cs.stonybrook.edu/~cse114/L01/index.html","left-button-text":"CSE 114 Class Website"}},[t._v("\n          Applied all object-oriented programming concepts learned in CSE 114,\n          Intro to Object-Oriented Programming, by using Java to create a\n          connect four game that would prompt two players to enter a row to\n          drop their designated color into the game board which would then\n          stop when a winner is found.\n        ")]),t._v(" "),n("project-card",{attrs:{title:"Chapter Co-Founder, Co-President","left-button-href":"https://www.colorstack.org","left-button-text":"Checkout ColorStack"}},[t._v("\n          Co-Founded the chapter of ColorStack at Stony Brook University by\n          creating the chapter constitution, selecting the founding executive\n          board members, and increasing the chapter student body by 65%.\n          Helped the founding executive board members get started in\n          architecting the support systems for our student body.\n        ")])],1),t._v(" "),n("div",{staticClass:"row"},[n("project-card",{attrs:{title:"Career Preparation Fellow","left-button-href":"https://mlt.org","left-button-text":"Checkout MLT"}},[t._v("\n          Selected as one of 480 for an 18-month professional development\n          program for high-achieving diverse talent. Complete business case\n          studies and intensive assignments to hone analytical, quantitative,\n          and communication skills. Participate in four seminars hosted by\n          industry leaders, such as Google, Citi, Goldman Sachs, Deloitte, and\n          Target.\n        ")]),t._v(" "),n("project-card",{attrs:{title:"Google Latinx Student Leadership Community Summit","left-button-href":"https://students.googleblog.com/2019/04/leading-through-latinidad-takeaways.html","left-button-text":"HSLS Blog Post"}},[t._v("\n          Recently accepted to take part in the Google LSLCS, a program with\n          the intent of helping me be Google ready as well as to meet and\n          learn from the Latinx+ Googler community through breakout\n          discussions, networking with the Hispanic Google Network, taking\n          part in interview workshops, and also attending discussions/panels\n          centered around Latinx leadership.\n        ")])],1),t._v(" "),n("div",{staticClass:"row"},[n("project-card",{attrs:{title:"Goldman Sachs Engineering Essentials Fellow","left-button-href":"https://www.goldmansachs.com/careers/students/programs/americas/engineering-possibilities-summit.html","left-button-text":"GS Engineering Essentials"}},[t._v("\n          Took part in a month long series of events lead by professionals at\n          Goldman Sachs, where I was able to gain tangible resume-enhancing\n          skills through interactive workshops, work closely with a group of\n          peers to grow my technical and soft skills, and network with Goldman\n          Sachs professionals and hear more about their experiences and\n          diverse backgrounds.\n        ")]),t._v(" "),n("project-card",{attrs:{title:"Target Diversity Leadership Symposium","left-button-href":"https://ieor.berkeley.edu/job/diversity-leadership-symposium-2020-at-target-corporation/","left-button-text":"Target DLS Posting"}},[t._v("\n          One of 40 students selected nationally to participate in Target's\n          Diversity Leadership Symposium. A 3-day extensive program where I\n          was able to shadow a software engineer, learn and network with\n          diverse communties within Target, meet lead recruiters, participate\n          in a mini hackathon, and have the opportunity to interview of an\n          internship.\n        ")])],1),t._v(" "),n("div",{staticClass:"row"},[n("project-card",{attrs:{title:"DPLN Extern","left-button-href":"https://www.stonybrook.edu/commcms/career-center/undergraduate/DPLN.php","left-button-text":"What is DPLN?"}},[t._v("\n          Selected to participate in a highly competitive diversity mentorship\n          program. Attend weekly workshops on topics such as leadership,\n          networking and communication, and professional development. Receive\n          mentorship from a professional at Broadridge Financial Solutions.\n        ")]),t._v(" "),n("project-card",{attrs:{title:"CSE 114 Teaching Assistant","left-button-href":"https://www3.cs.stonybrook.edu/~cse114/L01/index.html","left-button-text":"CSE 114 Class Website"}},[t._v("\n          Held two weekly office hours to assist a student body of 240\n          students in their homeworks, exams, and projects. Proctored exams\n          being administered to 240 students as well as graded multiple exams\n          entirely. Led student lab sessions as well as exam review sessions\n          weekly in a class size of 30 students.\n        ")])],1),t._v(" "),n("div",{staticClass:"row"},[n("project-card",{attrs:{title:"Introduction to Physics Teaching Assistant","left-button-href":"https://www.stonybrook.edu/eopaim/","left-button-text":"Checkout EOP"}},[t._v("\n          Guided 45 EOP students from underrepresented backgrounds through an\n          introduction to physics course to prepare them for college-level\n          physics. Prepared and ran review sessions two to three times per\n          week reinforcing topics taught in daily lectures.\n        ")]),t._v(" "),n("project-card",{attrs:{title:"Calculus 1 Teaching Assistant","left-button-href":"https://www.stonybrook.edu/eopaim/","left-button-text":"Checkout EOP"}},[t._v("\n          Prepared 19 EOP students coming from underrepresented backgrounds to\n          take a university mandated math placement exam by reinforcing the\n          entire Calculus 1 curriculum in a matter of five weeks. Created\n          weekly sample exams for 19 students that contained topics covered\n          for the given week.\n        ")])],1),t._v(" "),n("div",{staticClass:"row"},[n("project-card",{attrs:{title:"Success Coach/Mentor","left-button-href":"https://www.stonybrook.edu/ampcstep/about","left-button-text":"Checkout CSTEP"}},[t._v("\n          Speak individually with three students who are part of the EOP or\n          CSTEP program to guide and mentor them on topics such as\n          time-management, test preparedness, and productive habits. Also\n          assisted with professional and academic support by doing resume\n          reviews , tutoring, and funneling opportunities to the students.\n        ")]),t._v(" "),n("project-card",{attrs:{title:"Choral Singer","left-button-href":"https://www.youtube.com/watch?v=ZiGFa6Gwbzg","left-button-text":"My First Concert"}},[t._v("\n          Sing as a tenor in the Stony Brook University Choral.\n        ")])],1),t._v(" "),n("br"),t._v(" "),n("footer",[t._v("\n        Angel Velazquez, Design/Layout by Tanner Krewson\n        "),n("span",{attrs:{id:"footer-year"}},[t._v(t._s(t.year))]),t._v(" "),n("br"),t._v("\n        >\n      ")])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"profile"},[e("img",{staticClass:"profile-pic",attrs:{src:"IMG_5749 3.JPG",alt:"Angel Velazquez"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",[e("a",{attrs:{target:"_blank",href:"https://github.com/angvelazquez"}},[this._v("GitHub")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",[e("a",{attrs:{target:"_blank",href:"https://www.linkedin.com/in/angel-velazquez-ab1a62180/"}},[this._v("LinkedIn")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",[e("a",{attrs:{target:"_blank",href:"Resume_SWE_Web.pdf"}},[this._v("Resume")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-2"}),this._v(" "),e("div",{staticClass:"col-md-8 card-col",staticStyle:{"justify-content":"center"}},[e("div",{staticClass:"card",staticStyle:{width:"40em"}},[e("div",{staticClass:"card-block"},[e("div",{staticClass:"card-title",staticStyle:{"margin-top":"1.5em 0"}},[e("h1",[this._v("Biography")])]),this._v(" "),e("div",{staticClass:"row"},[e("div",{staticStyle:{margin:"1em"}},[e("div",{staticClass:"card-text"},[this._v("\n                    Hi, my name is Angel Velazquez, and I am a junior at Stony\n                    Brook University pursuing a B.S. in computer science. I\n                    seek upcoming summer 2021 software engineering internship\n                    opportunities, and I aspire to work at a company that\n                    would enable me to impact others through the code I write.\n                    I have acquired multiple soft skills, such as leadership\n                    and communication, through the professional development\n                    organizations, and the campus involvement I’ve taken part\n                    in which can be seen below. I have also gained hard\n                    technical skills through my past internship with Microsoft\n                    by learning technologies such as git, React Typescript,\n                    Azure Cloud, and the Microsoft Bot Framework. I hope to\n                    bring all of my skills and experience to the company’s\n                    position I fit best in and look forward to making a\n                    positive impact in the industry.\n                  ")])])])])])]),this._v(" "),e("div",{staticClass:"col-md-2"})])}],!1,null,null,null));e.default=k.exports}}]);