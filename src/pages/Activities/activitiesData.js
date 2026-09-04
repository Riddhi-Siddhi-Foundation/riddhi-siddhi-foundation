import educationImage from "../../assets/education.webp";
import healthImage from "../../assets/health.webp";
import womenEmpowermentImage from "../../assets/women-empowerment.webp";
import ruralDevelopmentImage from "../../assets/rural-development.webp";
import skillDevelopmentImage from "../../assets/skill-development.webp";
import environmentImage from "../../assets/environment.webp";
import shgPromotionImage from "../../assets/shg-promotion.webp";
import legalAwarenessImage from "../../assets/legal-awareness.webp";
import seniorCitizenImage from "../../assets/senior-citizen.webp";
import disasterReliefImage from "../../assets/disaster-relief.webp";


const activitiesData = [

  {
    slug: "education-scholarships",

    title: "Education & Scholarships",

    category: "Education",

    shortDescription:
      "Supporting education and creating brighter futures for underprivileged children.",

    description:
      "We support children and students by helping them continue their education and access opportunities that can improve their future.",

    image: educationImage,

    objectives: [
      "Support children from underprivileged communities.",
      "Encourage students to continue their education.",
      "Provide educational assistance to deserving students.",
      "Create awareness about the importance of education.",
    ],

    impact:
      "Through educational support and scholarships, we aim to reduce barriers to education and encourage children to build a better future.",
  },


  {
    slug: "health-blood-donation",

    title: "Health Camps & Blood Donation Camps",

    category: "Health",

    shortDescription:
      "Organizing healthcare camps and promoting healthy communities.",

    description:
      "We organize health-focused initiatives that help communities access basic healthcare awareness, screening and support.",

    image: healthImage,

    objectives: [
      "Promote health awareness in communities.",
      "Support healthcare camps and basic screening.",
      "Encourage voluntary blood donation.",
      "Promote preventive healthcare practices.",
    ],

    impact:
      "Our health initiatives aim to make healthcare awareness and support more accessible to people in need.",
  },


  {
    slug: "womens-empowerment",

    title: "Women’s Empowerment",

    category: "Women Empowerment",

    shortDescription:
      "Empowering women through skills, training and opportunities.",

    description:
      "We support women by encouraging skill development, awareness and opportunities that can contribute to greater independence and participation in society.",

    image: womenEmpowermentImage,

    objectives: [
      "Encourage women to develop useful skills.",
      "Promote financial independence.",
      "Create awareness about opportunities and rights.",
      "Support women-led community initiatives.",
    ],

    impact:
      "Women’s empowerment initiatives help create confidence, skills and opportunities for women and their families.",
  },


  {
    slug: "rural-development",

    title: "Rural Development Activities",

    category: "Rural Development",

    shortDescription:
      "Working for community development and rural upliftment.",

    description:
      "We work with communities to encourage development initiatives that contribute to better living conditions and stronger rural communities.",

    image: ruralDevelopmentImage,

    objectives: [
      "Support rural community development.",
      "Encourage community participation.",
      "Promote awareness of development opportunities.",
      "Contribute to sustainable community initiatives.",
    ],

    impact:
      "Our rural development efforts focus on strengthening communities and supporting initiatives that can create long-term social value.",
  },


  {
    slug: "skill-development-digital-literacy",

    title: "Skill Development & Digital Literacy",

    category: "Education",

    shortDescription:
      "Building skills and digital literacy for a better tomorrow.",

    description:
      "We promote skill development and digital awareness to help individuals gain practical knowledge and participate more effectively in today's digital environment.",

    image: skillDevelopmentImage,

    objectives: [
      "Promote practical skill development.",
      "Improve basic digital literacy.",
      "Encourage access to digital resources.",
      "Help individuals build confidence with technology.",
    ],

    impact:
      "Digital literacy and skill development can open new opportunities for learning, communication and livelihood development.",
  },


  {
    slug: "environment-tree-plantation",

    title: "Environmental Protection & Tree Plantation",

    category: "Environment",

    shortDescription:
      "Planting trees and promoting a greener and healthier planet.",

    description:
      "We encourage environmental responsibility through tree plantation, awareness activities and community participation in protecting nature.",

    image: environmentImage,

    objectives: [
      "Promote tree plantation.",
      "Create awareness about environmental protection.",
      "Encourage community participation in green initiatives.",
      "Promote responsible environmental practices.",
    ],

    impact:
      "Environmental activities encourage communities to take responsibility for protecting nature and creating greener surroundings.",
  },


  {
    slug: "shg-promotion",

    title: "Self Help Group (SHG) Promotion",

    category: "Welfare",

    shortDescription:
      "Encouraging self-help groups for financial independence.",

    description:
      "We encourage self-help groups and collective community initiatives that can support financial awareness, cooperation and independence.",

    image: shgPromotionImage,

    objectives: [
      "Encourage collective community participation.",
      "Promote financial awareness.",
      "Support women and community groups.",
      "Encourage self-reliance and cooperation.",
    ],

    impact:
      "SHG initiatives can strengthen community participation and encourage individuals to work together towards greater financial independence.",
  },


  {
    slug: "legal-awareness",

    title: "Legal Awareness Programs",

    category: "Welfare",

    shortDescription:
      "Creating awareness about legal rights and social justice.",

    description:
      "We promote awareness about basic legal rights and responsibilities so that individuals and communities can better understand available support and legal avenues.",

    image: legalAwarenessImage,

    objectives: [
      "Create awareness about basic legal rights.",
      "Promote understanding of legal responsibilities.",
      "Encourage people to seek appropriate legal support.",
      "Promote social justice and awareness.",
    ],

    impact:
      "Legal awareness helps people better understand their rights, responsibilities and available avenues for support.",
  },


  {
    slug: "senior-citizen-welfare",

    title: "Senior Citizen Welfare",

    category: "Welfare",

    shortDescription:
      "Caring for our elders and ensuring their well-being.",

    description:
      "We support initiatives focused on the dignity, care and well-being of senior citizens and encourage communities to value and support older people.",

    image: seniorCitizenImage,

    objectives: [
      "Promote dignity and respect for senior citizens.",
      "Encourage community support for elders.",
      "Create awareness about senior citizen welfare.",
      "Support activities that improve social well-being.",
    ],

    impact:
      "Senior citizen welfare initiatives aim to create more caring and supportive communities for older people.",
  },


  {
    slug: "disaster-relief-humanitarian",

    title: "Disaster Relief & Humanitarian Assistance",

    category: "Welfare",

    shortDescription:
      "Providing assistance in times of disaster and emergencies.",

    description:
      "We support humanitarian efforts during emergencies and disasters by encouraging community participation and assistance for affected individuals and families.",

    image: disasterReliefImage,

    objectives: [
      "Support people affected by emergencies.",
      "Encourage humanitarian assistance.",
      "Mobilize community support during difficult situations.",
      "Contribute to relief and recovery initiatives.",
    ],

    impact:
      "Humanitarian assistance helps affected communities receive timely support and reminds people that they are not alone during difficult situations.",
  },

];


export default activitiesData;