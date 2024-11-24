import companyImg from "../images/company.jpg";
import personalImg from "../images/personal.jpg";
import startupImg from "../images/startup.jpg";
import enterpriseImg from "../images/enterprise.jpg";
import consultingImg from "../images/consulting.jpg";
import trainingImg from "../images/training.jpg";

export function getData() {
  return [
    {
      id: 1,
      title: "Business Consultation",
      price: 199.99,
      Image: companyImg,
      description: "Strategic business planning and growth consultation",
      category: "consulting"
    },
    {
      id: 2,
      title: "Startup Package",
      price: 499.99,
      Image: startupImg,
      description: "Complete startup launch and growth strategy",
      category: "startup"
    },
    {
      id: 3,
      title: "Personal Coaching",
      price: 149.99,
      Image: personalImg,
      description: "One-on-one business coaching sessions",
      category: "coaching"
    },
    {
      id: 4,
      title: "Enterprise Solutions",
      price: 999.99,
      Image: enterpriseImg,
      description: "Enterprise-level business transformation",
      category: "enterprise"
    },
    {
      id: 5,
      title: "Market Analysis",
      price: 299.99,
      Image: consultingImg,
      description: "Detailed market analysis and competitor research",
      category: "research"
    },
    {
      id: 6,
      title: "Training Program",
      price: 399.99,
      Image: trainingImg,
      description: "Comprehensive business training program",
      category: "training"
    }
  ];
}

export const leadStatuses = {
  NEW: 'new',
  CONTACTED: 'contacted',
  QUALIFIED: 'qualified',
  PROPOSAL: 'proposal',
  NEGOTIATION: 'negotiation',
  CLOSED_WON: 'closed_won',
  CLOSED_LOST: 'closed_lost'
};

export const interestLevels = {
  HIGH: 'high',
  MEDIUM: 'medium',
  LOW: 'low'
};

export const leadSources = {
  WEBSITE: 'website',
  TELEGRAM: 'telegram',
  REFERRAL: 'referral',
  SOCIAL_MEDIA: 'social_media',
  EVENT: 'event',
  OTHER: 'other'
};
