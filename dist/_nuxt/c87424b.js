(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{191:function(t,e,n){var content=n(198);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(63).default)("51709b93",content,!0,{sourceMap:!1})},192:function(t,e,n){var content=n(200);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(63).default)("e32dded2",content,!0,{sourceMap:!1})},193:function(t,e,n){var content=n(202);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(63).default)("6db380b2",content,!0,{sourceMap:!1})},197:function(t,e,n){"use strict";var o=n(191);n.n(o).a},198:function(t,e,n){(e=n(62)(!1)).push([t.i,".card-col{display:flex;padding:.8em}.card{background-color:rgba(200,200,255,.2);border:none;-webkit-backdrop-filter:blur(6px);backdrop-filter:blur(6px);display:flex;justify-content:center;width:100%;padding:1.5em 1em}",""]),t.exports=e},199:function(t,e,n){"use strict";var o=n(192);n.n(o).a},200:function(t,e,n){(e=n(62)(!1)).push([t.i,'.card-title{font-family:"Jost",sans-serif;font-size:2rem;font-weight:500}',""]),t.exports=e},201:function(t,e,n){"use strict";var o=n(193);n.n(o).a},202:function(t,e,n){(e=n(62)(!1)).push([t.i,'body{padding-bottom:2rem;color:#212529;text-align:center}.gradient-background{background-image:linear-gradient(135deg,#667eea,#764ba2)}.stationary-background{background:#00fa44;background-repeat:no-repeat;width:100%;top:-80px;bottom:-80px;position:fixed;z-index:-1}#dark-start{opacity:1;position:fixed;width:100%;height:100%;top:0;left:0;z-index:1;pointer-events:none}#dark-start:before{content:"";position:fixed;left:50%;top:50%;transform:translate(-50%,-50%);border-radius:100%;-webkit-animation-duration:1s;animation-duration:1s;box-shadow:0 0 0 100vmax #212529;width:150vmax;height:150vmax}.transition:before{-webkit-animation-name:spotlight;animation-name:spotlight}.nonexistent{display:none}@-webkit-keyframes spotlight{0%{width:0;height:0}to{width:150vmax;height:150vmax}}@keyframes spotlight{0%{width:0;height:0}to{width:150vmax;height:150vmax}}.full-title{padding-top:.5rem;padding-bottom:1rem;font-size:1.1rem}.profile{display:inline-block;margin:1rem 0}.profile-pic{height:100px;border-radius:50%}.breathe:before{content:"";position:absolute;z-index:-1;height:130px;width:130px;border-radius:50%;box-shadow:inset 0 0 0 16px rgba(0,0,0,.3);-webkit-animation:breathe 16s infinite;animation:breathe 16s infinite}@-webkit-keyframes breathe{0%,75%,to{transform:scale(1)}25%,50%{transform:scale(1.25)}}@keyframes breathe{0%,75%,to{transform:scale(1)}25%,50%{transform:scale(1.25)}}.full-title a,a:active,a:visited{display:inline-block;color:#212529;transition:all .2s ease-in-out}a:hover{transform:scale(1.05)}body{font-weight:400}.full-title .display-4,body{font-family:"Jost",sans-serif}.full-title .display-4{font-weight:500;font-size:2.5em}span.avoidwrap{display:inline-block}#typing-title{position:relative;margin-bottom:12px;transition:all .2s ease-in}.company-logo{max-width:62.5%;max-height:105px}.card a:hover{color:transparent}.card-buttons{margin-top:.8em}.btn-outline-dark{color:#212529;border-color:#212529;margin-bottom:.3em}#swal2-content{text-align:left;font-weight:400}#swal2-content a{color:#45c299}#swal2-content a:hover{text-decoration:underline}.swal2-image{margin-top:-1.25em;margin-left:-1.25em;max-width:calc(100% + 2.5em);border-radius:5px 5px 0 0}.typed-cursor{opacity:1;-webkit-animation:blink .7s infinite;animation:blink .7s infinite}@-webkit-keyframes blink{0%{opacity:1}50%{opacity:0}to{opacity:1}}@keyframes blink{0%{opacity:1}50%{opacity:0}to{opacity:1}}',""]),t.exports=e},203:function(t,e,n){"use strict";n.r(e);var o=n(194),r=n.n(o),l=n(195),c=n.n(l),d=n(196),h=n.n(d),m=(n(197),n(47)),f={components:{Card:Object(m.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-md-6 card-col"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-block"},[this._t("default")],2)])])}),[],!1,null,null,null).exports},props:{title:{type:String,default:""},leftButtonHref:{type:String,default:""},leftButtonText:{type:String,default:""},rightButtonHref:{type:String,default:""},rightButtonText:{type:String,default:""}}},v=(n(199),Object(m.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("card",[n("h3",{staticClass:"card-title"},[t._v(t._s(t.title))]),t._v(" "),n("p",{staticClass:"card-text"},[t._t("default")],2),t._v(" "),n("div",[n("a",{attrs:{href:t.leftButtonHref,target:"_blank"}},[n("button",{staticClass:"btn btn-outline-dark",attrs:{type:"button"}},[t._v("\n        "+t._s(t.leftButtonText)+"\n      ")])]),t._v(" "),t.rightButtonHref?n("a",{attrs:{href:t.rightButtonHref,target:"_blank"}},[n("button",{staticClass:"btn btn-outline-dark",attrs:{type:"button"}},[t._v("\n        "+t._s(t.rightButtonText)+"\n      ")])]):t._e()])])}),[],!1,null,null,null).exports),w=h.a.mixin({confirmButtonColor:"#2a876b"}),y={components:{ProjectCard:v},data:function(){return{year:(new Date).getFullYear(),titleText:"",typingTitleZIndex:function(){return 100},typingTitleColor:function(){return"white"},projectCardsNonexistent:!0,darkStartBackgroundColor:"#212529",darkStartTransition:!1}},mounted:function(){var t=this,e=!("true"===r.a.get("typed"));r.a.set("typed","true",{expires:16/24}),e?(this.typingTitleZIndex=100,this.typingTitleColor="white",new c.a(".title",{strings:["Angel Velazquez"],typeSpeed:100,onComplete:function(){setTimeout((function(){return t.showPage()}),300)}})):(this.titleText="Angel Velazquez",this.showPage())},methods:{showPage:function(){this.projectCardsNonexistent=!1,this.darkStartBackgroundColor="transparent",this.typingTitleColor="#212529",this.darkStartTransition=!0},popupEmail:function(){w.fire({title:"Email me!",html:'<div style="color: light-green; text-align:center;"><a href="mailto:angel.velazquez@stonybrook.edu">angel.velazquez@stonybrook.edu</a></div>'})},popupMSFT:function(){w.fire({html:"<p>Engineered a chat bot capable of answering local government-related questions, as well as updating users about local events within their area using the Microsoft Bot Framework and Microsoft’s Azure cloud service. Presented my team’s MVP, a web application called Localized, to CVPs within the Microsoft M365 Core Team. </p>"})},onTitleClick:function(){this.projectCardsNonexistent?(this.titleText="Angel Velazquez",this.showPage()):this.popupReplayAnimation()},popupReplayAnimation:function(){w.fire({title:"Want to see the typing intro animation again?",type:"question",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"No"}).then((function(t){t.value&&(r.a.set("typed","false"),location.reload())}))}}},k=(n(201),Object(m.a)(y,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{class:{transition:t.darkStartTransition},style:{backgroundColor:t.darkStartBackgroundColor},attrs:{id:"dark-start"}}),t._v(" "),n("div",{staticClass:"stationary-background",attrs:{id:"vanta"}}),t._v(" "),n("div",{staticClass:"container"},[n("div",{staticClass:"full-title"},[t._m(0),t._v(" "),n("h1",{staticClass:"display-4",style:{zIndex:t.typingTitleZIndex,color:t.typingTitleColor},attrs:{id:"typing-title"},on:{click:t.onTitleClick}},[n("span",{staticClass:"title"},[t._v(t._s(t.titleText))])]),t._v(" "),n("div",[n("span",[n("a",{attrs:{href:"#"},on:{click:t.popupEmail}},[t._v("Email")])]),t._v("\n        •\n        "),t._m(1),t._v("\n        •\n        "),t._m(2),t._v("\n        •\n        "),t._m(3),t._v(" "),n("br")])]),t._v(" "),n("div",{class:{nonexistent:t.projectCardsNonexistent},attrs:{id:"project-cards"}},[t._m(4),t._v(" "),n("div",{staticClass:"card"},[n("div",{staticClass:"card-block"},[n("div",{staticClass:"card-title",staticStyle:{"margin-top":"8px"}},[n("img",{staticClass:"company-logo",attrs:{src:"msft.svg"},on:{click:t.popupMSFT}})]),t._v(" "),n("br"),t._v(" "),n("h5",{staticClass:"card-subtitle"},[t._v("Microsoft New Technologist Intern")]),t._v(" "),n("div",{staticClass:"card-text"},[t._v("Summer 2020")]),t._v(" "),n("div",{staticClass:"card-buttons"},[n("button",{staticClass:"btn btn-outline-dark",attrs:{type:"button"},on:{click:t.popupMSFT}},[t._v("\n              More Info\n            ")])])])]),t._v(" "),n("div",{staticClass:"row"},[n("project-card",{attrs:{title:"Stony Brook Robotics Team","left-button-href":"https://sbroboticsteam.com","left-button-text":"Visit Club Website"}},[t._v("\n          Used Python and the OpenCV module to create 3 windows that each\n          contained a different camera feed from external cameras that would\n          be transmitted from a mars rover to its base station. Also created\n          web scrapers to autonomously download images to create a custom\n          dataset to train an image classifier.\n        ")]),t._v(" "),n("project-card",{attrs:{title:"SBU Hackathon","left-button-href":"https://github.com/Zharnite/VoizTrainer","left-button-text":"View on Github"}},[t._v("\n          Created a web app that is geared to help people who are soft spoken,\n          by using the microphone from the device visiting the website to\n          measure the amplitude of the speaker’s voice. When the amplitude is\n          too low the device will start to vibrate, indicating they need to\n          speak up.\n        ")])],1),t._v(" "),n("div",{staticClass:"row"},[n("project-card",{attrs:{title:"CSE 114 Project: Connect Four","left-button-href":"https://www3.cs.stonybrook.edu/~cse114/L01/index.html","left-button-text":"CSE 114 Class Website"}},[t._v("\n          Applied all object-oriented programming concepts learned in CSE 114\n          by using Java to create a connect four game that would prompt two\n          players to enter a row to drop their designated color into the game\n          board which would then stop when a winner is found.\n        ")]),t._v(" "),n("project-card",{attrs:{title:"Chapter Co-Founder, Co-President","left-button-href":"https://www.colorstack.org","left-button-text":"Checkout ColorStack"}},[t._v("\n          Co-Founded the chapter of ColorStack at Stony Brook University by\n          creating the chapter constitution, selecting the founding executive\n          board members, and increasing the chapter student body by 65%.\n          Helped the founding executive board members get started in\n          architecting the support systems for our student body.\n        ")])],1),t._v(" "),n("div",{staticClass:"row"},[n("project-card",{attrs:{title:"Career Preparation Fellow","left-button-href":"https://mlt.org","left-button-text":"Checkout MLT"}},[t._v("\n          Selected as one of 480 for an 18-month professional development\n          program for high-achieving diverse talent. Complete business case\n          studies and intensive assignments to hone analytical, quantitative,\n          and communication skills. Participate in four seminars hosted by\n          industry leaders, such as Google, Citi, Goldman Sachs, Deloitte, and\n          Target.\n        ")]),t._v(" "),n("project-card",{attrs:{title:"Google Latinx Student Leadership Community Summit","left-button-href":"https://students.googleblog.com/2019/04/leading-through-latinidad-takeaways.html","left-button-text":"HSLS Blog Post"}},[t._v("\n          Recently accepted to take part in the Google LSLCS, with the intent\n          of helping me be Google ready as well as to meet and learn from the\n          Latinx+ Googler community through breakout discussions, networking\n          with the Hispanic Google Network, taking part in interview\n          workshops, and also attending discussions/panels centered around\n          Latinx leadership.\n        ")])],1),t._v(" "),n("div",{staticClass:"row"},[n("project-card",{attrs:{title:"Goldman Sachs Engineering Essentials Fellow","left-button-href":"https://www.goldmansachs.com/careers/students/programs/americas/engineering-possibilities-summit.html","left-button-text":"GS Engineering Essentials"}},[t._v("\n          Took part in a month long series of events lead by professionals at\n          Goldman Sachs, where I was able to gain tangible resume-enhancing\n          skills through interactive workshops, work closely with a group of\n          peers to grow my technical and soft skills, and network with Goldman\n          Sachs professionals and hear more about their experiences and\n          diverse backgrounds.\n        ")]),t._v(" "),n("project-card",{attrs:{title:"Target Diversity Leadership Symposium","left-button-href":"https://ieor.berkeley.edu/job/diversity-leadership-symposium-2020-at-target-corporation/","left-button-text":"Target DLS Posting"}},[t._v("\n          One of 40 students selected nationally to participate in Target's\n          Diversity Leadership Symposium. A 3-day extensive program where I\n          was able to shadow a software engineer, learn and network with\n          diverse communties within Target, meet lead recruiters, participate\n          in a mini hackathon, and have the opportunity to interview of an\n          internship.\n        ")])],1),t._v(" "),n("div",{staticClass:"row"},[n("project-card",{attrs:{title:"DPLN Extern","left-button-href":"https://www.stonybrook.edu/commcms/career-center/undergraduate/DPLN.php","left-button-text":"What is DPLN?"}},[t._v("\n          Selected to participate in a highly competitive diversity mentorship\n          program. Attend weekly workshops on topics such as leadership,\n          networking and communication, and professional development. Receive\n          mentorship from a professional at Broadridge Financial Solutions.\n        ")]),t._v(" "),n("project-card",{attrs:{title:"CSE 114 Teaching Assistant","left-button-href":"https://www3.cs.stonybrook.edu/~cse114/L01/index.html","left-button-text":"CSE 114 Class Website"}},[t._v("\n          Held two weekly office hours to assist a student body of 240\n          students in their homeworks, exams, and projects. Proctored exams\n          being administered to 240 students as well as graded multiple exams\n          entirely. Led student lab sessions as well as exam review sessions\n          weekly in a class size of 30 students.\n        ")])],1),t._v(" "),n("div",{staticClass:"row"},[n("project-card",{attrs:{title:"Introduction to Physics Teaching Assistant","left-button-href":"https://www.stonybrook.edu/eopaim/","left-button-text":"Checkout EOP"}},[t._v("\n          Guided 45 EOP students from underrepresented backgrounds through an\n          introduction to physics course to prepare them for college-level\n          physics. Prepared and ran review sessions two to three times per\n          week reinforcing topics taught in daily lectures.\n        ")]),t._v(" "),n("project-card",{attrs:{title:"Calculus 1 Teaching Assistant","left-button-href":"https://www.stonybrook.edu/eopaim/","left-button-text":"Checkout EOP"}},[t._v("\n          Prepared 19 EOP students coming from underrepresented backgrounds to\n          take a university mandated math placement exam by reinforcing the\n          entire Calculus 1 curriculum in a matter of five weeks. Created\n          weekly sample exams for 19 students that contained topics covered\n          for the given week.\n        ")])],1),t._v(" "),n("div",{staticClass:"row"},[n("project-card",{attrs:{title:"Success Coach/Mentor","left-button-href":"https://www.stonybrook.edu/ampcstep/about","left-button-text":"Checkout CSTEP"}},[t._v("\n          Speak individually with three students who are part of the EOP or\n          CSTEP program to guide and mentor them on topics such as\n          time-management, test preparedness, and productive habits. Also\n          assisted with professional and academic support by doing resume\n          reviews , tutoring, and funneling opportunities to the students.\n        ")]),t._v(" "),n("project-card",{attrs:{title:"Choral Singer","left-button-href":"https://www.youtube.com/watch?v=ZiGFa6Gwbzg","left-button-text":"My First Concert"}},[t._v("\n          Sang as a tenor throughout college in the Stony Brook University\n          Choral.\n        ")])],1),t._v(" "),n("br"),t._v(" "),n("footer",[t._v("\n        Angel Velazquez, Design/Layout by Tanner Krewson\n        "),n("span",{attrs:{id:"footer-year"}},[t._v(t._s(t.year))]),t._v(" "),n("br"),t._v(" "),n("a",{attrs:{href:"https://github.com/tannerkrewson/tannerkrewson.github.io",target:"_blank"}},[t._v("View on GitHub")])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"profile"},[e("img",{staticClass:"profile-pic",attrs:{src:"IMG_5749 3.JPG",alt:"Angel Velazquez"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",[e("a",{attrs:{target:"_blank",href:"https://github.com/angvelazquez"}},[this._v("GitHub")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",[e("a",{attrs:{target:"_blank",href:"https://www.linkedin.com/in/angel-velazquez-ab1a62180/"}},[this._v("LinkedIn")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",[e("a",{attrs:{target:"_blank",href:"Resume_SWE_Web.pdf"}},[this._v("Resume")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-2"}),this._v(" "),e("div",{staticClass:"col-md-8 card-col",staticStyle:{"justify-content":"center"}},[e("div",{staticClass:"card",staticStyle:{width:"40em"}},[e("div",{staticClass:"card-block"},[e("div",{staticClass:"card-title",staticStyle:{"margin-top":"1.5em 0"}},[e("h1",[this._v("Biography")])]),this._v(" "),e("div",{staticClass:"row"},[e("div",{staticStyle:{margin:"1em"}},[e("div",{staticClass:"card-text"},[this._v("\n                    Hi, My name is Angel Velazquez and I am a junior at Stony\n                    Brook University pursuing a BS in computer science. I am\n                    seeking upcoming summer 2021 internship opportunities, and\n                    I aspire to work in a company that enables me to help\n                    others through the software I engineer, while also\n                    pursuing my passion of helping students from\n                    underrepresented backgrounds get into the STEM field. I am\n                    currently interested in software engineering roles that\n                    involve machine learning or other topics within artificial\n                    intelligence.\n                  ")])])])])])]),this._v(" "),e("div",{staticClass:"col-md-2"})])}],!1,null,null,null));e.default=k.exports}}]);