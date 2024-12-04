import { createStore } from "vuex";
import { useRouter } from "vue-router";
export default createStore({
  state: {
    servicesCardArray: [
      {
        name: `Search engine optimization`,
        style: `white`,
        img: require(`../assets/serviceImage1.png`),
        arrow: require(`../assets/blackArrowButton.png`),
        textBack: `#B9FF66`,
        to: `/Docs/engine`,
        alt:`Magnifying glass`
      },
      {
        name: `Pay-per-click advertising`,
        style: `green`,
        img: require(`../assets/serviceImage2.png`),
        arrow: require(`../assets/blackArrowButton.png`),
        textBack: `#FFFFFF`,
        to: `/Docs/advertising`,
        alt:`Cursor and page`
      },
      {
        name: `Social Media Marketing`,
        style: `black`,
        img: require(`../assets/serviceImage3.png`),
        arrow: require(`../assets/whiteArrowButton.png`),
        textBack: `#FFFFFF`,
        to: `/Docs/marketing`,
        alt:`Social media likes`
      },
      {
        name: `Email Marketing`,
        style: `white`,
        img: require(`../assets/serviceImage4.png`),
        arrow: require(`../assets/blackArrowButton.png`),
        textBack: `#B9FF66`,
        to: `/Docs/marketing/email`,
        alt:`Email exchange`
      },
      {
        name: `Content Creation`,
        style: `green`,
        img: require(`../assets/serviceImage5.png`),
        arrow: require(`../assets/blackArrowButton.png`),
        textBack: `#FFFFFF`,
        to: `/Docs/content`,
        alt:`Browser pages`
      },
      {
        name: `Analytics and Tracking`,
        style: `black`,
        img: require(`../assets/serviceImage6.png`),
        arrow: require(`../assets/whiteArrowButton.png`),
        textBack: `#B9FF66`,
        to: `/Docs/analytics`,
        alt:`Documents with data`
      },
    ],
    swipperElementsArray: [
      {
        text: `For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.`,
        to: `/Cases/restaurant`,
        theme:`local restaurant`
      },
      {
        text: `For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.`,
        to: `/Cases/B2B`,
        theme:`B2B SEO`
      },
      {
        text: `For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.`,
        to: `/Cases/retail`,
        theme:`Retail chain`
      },
    ],
    teamCardData: [
      {
        name: `John Smith`,
        work: `CEO and Founder`,
        descrription: `10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy`,
        image: require(`../assets/teamsPicture1.png`),
        alt:`John Smith photo`
      },
      {
        name: `Jane Doe`,
        work: `Director of Operations`,
        descrription: `7+ years of experience in project management and team leadership. Strong organizational and communication skillsy`,
        image: require(`../assets/teamsPicture2.png`),
        alt:`Jane Doe photo`
      },
      {
        name: `Michael Brown`,
        work: `Senior SEO Specialist`,
        descrription: `5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization`,
        image: require(`../assets/teamsPicture3.png`),
        alt:`Michael Brown photo`
      },
      {
        name: `Emily Johnson`,
        work: `PPC Manager`,
        descrription: `3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis`,
        image: require(`../assets/teamsPicture4.png`),
        alt:`Emily Johnson photo`
      },
      {
        name: `Brian Williams`,
        work: `Social Media Specialist`,
        descrription: `4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement`,
        image: require(`../assets/teamsPicture5.png`),
        alt:`Brian Williams photo`
      },
      {
        name: `Sarah Kim`,
        work: `Content Creator`,
        descrription: `2+ years of experience in writing and editing
    Skilled in creating compelling, SEO-optimized content for various industries`,
        image: require(`../assets/teamsPicture6.png`),
        alt:`Sarah Kim photo`
      },
    ],
    navAnchorList: [
      { to: "about", text: `About us` },
      { to: "services", text: `Services` },
      { to: "cases", text: `Use Cases` },
      { to: "team", text: `Team` },
      { to: "blog", text: `Blog` },
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
      {
        id: `services`,
        title: `Services`,
        text: `At our digital marketing agency, we offer a range of services to helpbusinesses grow and succeed online. These servicesinclude:`,
      },
      {
        id: `cases`,
        title: `Case Studies`,
        text: `Explore Real-Life Examples of Our Proven Digital Marketing Success  through Our Case Studies`,
      },
      {
        id: ``,
        title: `Our Working Process`,
        text: `Step-by-Step Guide to Achieving Your Business Goals`,
      },
      {
        id: `team`,
        title: `Team`,
        text: `Meet the skilled and experienced team behind our successful digital    marketing strategies`,
      },
      {
        id: `blog`,
        title: `Testimonials`,
        text: `Hear from Our Satisfied Clients: Read Our Testimonials to Learn More      about Our Digital Marketing Services`,
      },
      {
        id: `contact`,
        title: `Contact Us`,
        text: `Connect with Us: Let's Discuss Your Digital Marketing      Needs`,
      },
    ],
    logoArray: [
      {
        alt: `FaceBook Logo`,
        id: 0,
        href: `https://www.facebook.com/`,
        src: require(`../assets/facebookFooter.png`),
      },
      {
        alt: `LinkedIn logo`,
        id: 1,
        href: `https://www.linkedin.com/`,
        src: require(`../assets/linkedInFooter.png`),
      },
      {
        alt: `Twitter Logo`,
        id: 2,
        href: `https://x.com/`,
        src: require(`../assets/twitterFooter.png`),
      },
    ],
    companiesLogo:[
      {src:require(`../assets/Company logo1.png`),alt:`Amazon Logo`},
      {src:require(`../assets/Company logo2.png`),alt:`Bribble Logo`},
      {src:require(`../assets/Company logo3.png`),alt:`HubSpot Logo`},
      {src:require(`../assets/Company logo4.png`),alt:`Notion Logo`},
      {src:require(`../assets/Company logo5.png`),alt:`Netflix Logo`},
      {src:require(`../assets/Company logo6.png`),alt:`Zoom Logo`},
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
    getTitlesDataArray(state) {
      return state.titlesDataArray;
    },
    getLogoArray(state){
      return state.logoArray
    },
    getCompaniesLogo(state){
      return state.companiesLogo
    }
  },
  mutations: {},
  actions: {
    scrollToAction(context, data) {
      const element = document.querySelector(`#` + data);
      if (element instanceof HTMLElement) {
        window.scrollTo({
          top: element.getBoundingClientRect().top + window.scrollY - 60,
          behavior: "smooth",
        });
      }
    },
    async sendRequest(context, data){
      try{
        const responce = await fetch(
          `https://positivus-e2786-default-rtdb.europe-west1.firebasedatabase.app/requests.json`,
          {
            method: `POST`,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
          }
        )
        //const responceData = await responce.json()
      
        if(responce.status===200){
          return true
        }
      }catch(error){
        return false
      }
       
    }
  },
});
