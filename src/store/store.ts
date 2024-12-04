import { createStore } from "vuex";
import {ref} from 'vue'

export default createStore({
  state: {
    servicesCardArray: [
      {
        name: `Search engine optimization`,
        style: `white`,
        img: require(`../assets/serviceImage1.png`),
        arrow: require(`../assets/blackArrowButton.png`),
        textBack: `#B9FF66`,
        to: ``,
      },
      {
        name: `Pay-per-click advertising`,
        style: `green`,
        img: require(`../assets/serviceImage2.png`),
        arrow: require(`../assets/blackArrowButton.png`),
        textBack: `#FFFFFF`,
        to: ``,
      },
      {
        name: `Social Media Marketing`,
        style: `black`,
        img: require(`../assets/serviceImage3.png`),
        arrow: require(`../assets/whiteArrowButton.png`),
        textBack: `#FFFFFF`,
        to: ``,
      },
      {
        name: `Email Marketing`,
        style: `white`,
        img: require(`../assets/serviceImage4.png`),
        arrow: require(`../assets/blackArrowButton.png`),
        textBack: `#B9FF66`,
        to: ``,
      },
      {
        name: `Content Learn more`,
        style: `green`,
        img: require(`../assets/serviceImage5.png`),
        arrow: require(`../assets/blackArrowButton.png`),
        textBack: `#FFFFFF`,
        to: ``,
      },
      {
        name: `Analytics and  Tracking`,
        style: `black`,
        img: require(`../assets/serviceImage6.png`),
        arrow: require(`../assets/whiteArrowButton.png`),
        textBack: `#B9FF66`,
        to: ``,
      },
    ],
    swipperElementsArray: [
      {
        text: `For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.`,
        to: ``,
      },
      {
        text: `For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.`,
        to: ``,
      },
      {
        text: `For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.`,
        to: ``,
      },
    ],
    teamCardData: [
      {
        name: `John Smith`,
        work: `CEO and Founder`,
        descrription: `10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy`,
        image: require(`../assets/teamsPicture1.png`),
      },
      {
        name: `Jane Doe`,
        work: `Director of Operations`,
        descrription: `7+ years of experience in project management and team leadership. Strong organizational and communication skillsy`,
        image: require(`../assets/teamsPicture2.png`),
      },
      {
        name: `Michael Brown`,
        work: `Senior SEO Specialist`,
        descrription: `5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization`,
        image: require(`../assets/teamsPicture3.png`),
      },
      {
        name: `Emily Johnson`,
        work: `PPC Manager`,
        descrription: `3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis`,
        image: require(`../assets/teamsPicture4.png`),
      },
      {
        name: `Brian Williams`,
        work: `Social Media Specialist`,
        descrription: `4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement`,
        image: require(`../assets/teamsPicture5.png`),
      },
      {
        name: `Sarah Kim`,
        work: `Content Creator`,
        descrription: `2+ years of experience in writing and editing
    Skilled in creating compelling, SEO-optimized content for various industries`,
        image: require(`../assets/teamsPicture6.png`),
      },
    ],
    navAnchorList: [
      { to:"about", text: `About us` },
      { to:"services", text: `Services` },
      { to:"cases", text: `Use Cases` },
      { to:"team", text: `Team` },
      { to:"blog", text: `Blog` },
    ],
    workingProccesDataArray: [
      {
        number: 1,
        title: `Consultation`,
        description: `During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.`,
      },
      {
        number: 2,
        title: `Research and Strategy Development`,
        description: `During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.`,
      },
      {
        number: 3,
        title: `Implementation`,
        description: `During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.`,
      },
      {
        number: 4,
        title: `Monitoring and Optimization`,
        description: `During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.`,
      },
      {
        number: 5,
        title: `Reporting and Communication`,
        description: `During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.`,
      },
      {
        number: 6,
        title: `Continual Improvement`,
        description: `During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.`,
      },
    ],
    titlesDataArray: [
      { id:`services`,
        title: `Services`,
        text: `At our digital marketing agency, we offer a range of services to helpbusinesses grow and succeed online. These servicesinclude:`,},
      { id:`cases`,
        title: `Case Studies`,
        text: `Explore Real-Life Examples of Our Proven Digital Marketing Success  through Our Case Studies`,},
      { id:``,
        title: `Our Working Process`,
        text: `Step-by-Step Guide to Achieving Your Business Goals`,},
      { id:`team`,
        title: `Team`,
        text: `Meet the skilled and experienced team behind our successful digital    marketing strategies`,},
      { id:`blog`,
        title: `Testimonials`,
        text: `Hear from Our Satisfied Clients: Read Our Testimonials to Learn More      about Our Digital Marketing Services`,},
      { id:`contact`,
        title: `Contact Us`,
        text: `Connect with Us: Let's Discuss Your Digital Marketing      Needs`,},
    ]
  },
  getters: {
    getServicesCardArray(state) {
      return state.servicesCardArray;
    },
    getSwipperElementsArray(state) {
      return state.swipperElementsArray;
    },
    getTeamCardData(state) {
      return state.teamCardData;
    },
    getNavAnchorList(state) {
      return state.navAnchorList;
    },
    getWorkingProccesDataArray(state) {
      return state.workingProccesDataArray;
    },
    getTitlesDataArray(state){
      return state.titlesDataArray;
    }
  },
  mutations: {
  },
  actions: {
    scrollToAction(context,data){
      const element=document.querySelector(`#`+data)
      if(element instanceof HTMLElement){
        window.scrollTo({top: element.getBoundingClientRect().top + window.scrollY -60, behavior: 'smooth'});
      }
    }
  },
});
