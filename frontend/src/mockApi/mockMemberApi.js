import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const members = [{
    id: 1,
    firstName: 'William',
    lastName: 'Hoang',
    description: 'Founder of Axiom6ai Academic',
    socialMediaLink: {
        linkedin: 'https://www.linkedin.com/in/williamhoang/'
    },
    pictureKey: 'william_hoang.jpg',
    bio: {
        en: 'english',
        fr: 'french',
        ch: '中文'
    }
}, {
    id: 2,
    firstName: 'Mohammad',
    lastName: 'Rafsan',
    description: 'Senior Software Engineer based in Montreal, Canada',
    socialMediaLink: {
        linkedin: 'https://www.linkedin.com/in/mohammad-rafsan-68a40811/'
    },
    pictureKey: 'mohammad_rafsan.jpg',
    bio: {
        en: 'Mohammad Rafsan is a Senior Software Engineer based in Montreal, Canada. He graduated from McGill University and worked in diverse industries such as aerospace and telecommunications. He is particularly experienced in systems and infrastructure development. Mohammad is also an Insight AI fellow where he applied AI techniques in medical imaging and diagnosis projects.',
        fr: 'Mohammad Rafsan est un ingénieur senior de logiciel basé à Montréal. Il a obtenu son diplôme de l\'Université McGill et a travaillé dans divers secteurs tels que l\'aérospatiale, le CAD et les télécommunications. Il est particulièrement adepte dans les systèmes et le développement de l’infrastructure. Mohammad est également un Insight AI Fellow où il a appliqué des techniques d\'IA pour des projets en imagerie et diagnostic médicale.',
        ch: 'Mohammad Rafsan是来自加拿大蒙特利尔的高级软件工程师，毕业于麦吉尔大学，并曾供职于多个领域，如航空航天和电信行业。他在系统和基础设施开发方面非常有经验。Mohammad同时也是Insight AI 人工智能研究员，他将人工智能技术应用于医学成像和诊断项目。'
    }
}, {
    id: 3,
    firstName: 'Anqi',
    lastName: 'Xu',
    description: 'Lead researcher focusing on human-enhanced learning, reinforcement learning for robotic control, mobile perception, and embedded/wearable deployment. Alumnus member of the Mobile Robotics Lab. Ph.D degree from the Mcgill\'s School of Computer Science',
    pictureKey: 'anqi_xu.jpg',
    socialMediaLink: {
        linkedin: 'https://www.linkedin.com/in/anqi-xu-08474657/'
    },
    bio: {
        en: 'My personal and ongoing research interests include cognitive human-robot interaction (cHRI), robot adaptation and learning, computer and robotic vision, multi-domain multi-robot collaboration, and wearable computing.<br/>I am an allumnus member of the Mobile Robotics Lab, at the Centre for Intelligent Machines and the School of Computer Science , at McGill University. My supervisor is Professor Gregory Dudek, whom I have worked with since my undergraduate days at McGill. I&rsquo;m proud to be a Vanier CGS scholar and a member of the NSERC Canadian Field Robotics Network.<br/>I obtained a doctorate degree from the McGill&rsquo;s School of Computer Science in 2017. My Ph.D. research was focused on maintaining and improving the efficiency of human-robot teams by building trust in the relationship.<br/>-----<br/>Anqi&#39;s active research interests include: human-enhanced learning (e.g. imitation learning, inverse reinforcement learning, reward shaping); reinforcement learning for robotic control, mobile perception, and embedded/wearable deployment. Anqi has over 10 years of proven research experience (H-index: 10) with diverse facets of mobile robotics, including human interaction, perception, control, localization, and planning. He has substantial hands-on experience with deploying and evaluating software agents on aerial drones, swimming and nautical robots, as well as autonomous vehicles. Anqi&rsquo;s Ph.D. research at McGill University was awarded the Canada-wide CIPPRS 2016 Doctoral Dissertation Award, and was also funded by the prestigious NSERC Vanier Canada Graduate Scholarship. He is co-chairing the 15th annual conference on Computer and Robot Vision (CRV 2018), and has been on numerous international conference program and review committees, including RSS, ICRA, IROS, HRI, etc.<br/>During his Ph.D., Anqi focused on quantifying and capitalizing on the notion of trust between humans and mobile robots in order to maintain the efficiency of their collaborations. As part of this research, he developed a general-purpose visual navigation controller that autonomously guided aerial drones along coastlines and steered autonomous vehicles along diverse roadways. He also developed methods for robot agents to adapt their behaviors interactively from occasional human feedback, based on supervised and reinforcement learning approaches. As a key member of the Mobile Robotics Lab at McGill, Anqi has led several large-scale robotic field trials, where he managed research logistics for 5+ concurrent projects and 30+ participants.',
        fr: 'Mes int\u00E9r\u00EAts de recherche personnels en cours comprennent l\'interaction cognitive homme-robot (ICHR), l\'adaptation et l\'apprentissage des robots, la vision informatique et robotique, la collaboration multi-domaines multi-robots et l\'informatique portable.<br/>Je suis un membre d\'alumnus du Mobile Robotics Lab, au Centre des Machines Intelligentes et \u00E0 l\'\u00C9cole d\'informatique de l\'Universit\u00E9 McGill. Mon superviseur est le professeur Gregory Dudek, avec qui j\'ai travaill\u00E9 depuis mes \u00E9tudes de premier cycle \u00E0 McGill. Je suis fier d\'\u00EAtre boursier de la CGS Vanier et membre du R\u00E9seau Canadien de robotique de campagne du NSERC.\r\nJ\'ai obtenu un doctorat de l\'\u00C9cole d\'informatique de McGill en 2017. Ma recherche de doctorat \u00E9tait ax\u00E9e sur le maintien et l\'am\u00E9lioration de l\'efficacit\u00E9 des \u00E9quipes humaines-robots en \u00E9tablissant la confiance dans la relation.\r\nLes int\u00E9r\u00EAts de recherche actif d\'Anqi comprennent: l\'apprentissage am\u00E9lior\u00E9 par l\'homme (par exemple, l\'apprentissage par imitation, l\'apprentissage par renforcement inverse, la mise en forme de r\u00E9compenses); apprentissage par renforcement pour le contr\u00F4le robotique, la perception mobile et le d\u00E9ploiement int\u00E9gr\u00E9 \/ portable. Anqi a plus de 10 ans d\'exp\u00E9rience de recherche \u00E9prouv\u00E9e (H-index: 10) avec diverses facettes de la robotique mobile, y compris l\'interaction humaine, la perception, le contr\u00F4le, la localisation et la planification. Il poss\u00E8de une solide exp\u00E9rience pratique dans le d\u00E9ploiement et l\'\u00E9valuation d\'agents logiciels sur des drones a\u00E9riens, des robots de natation et nautiques, ainsi que des v\u00E9hicules autonomes. \u00C0 l\'Universit\u00E9 McGill, la recherche de doctorat d\'Anqi a re\u00E7u le Prix canadien de th\u00E8se de doctorat CIPPRS 2016, et a \u00E9galement \u00E9t\u00E9 financ\u00E9e par la prestigieuse bourse d\'\u00E9tudes sup\u00E9rieures du Canada Vanier du NSERC. Il copr\u00E9side la 15\u00E8me conf\u00E9rence annuelle sur la vision informatique et robotique (CRV 2018) et a particip\u00E9 \u00E0 de nombreux programmes de conf\u00E9rence internationaux et des comit\u00E9s de r\u00E9vision, dont RSS, ICRA, IROS, HRI, etc.<br/>Au cours de son doctorat, Anqi s\'est concentr\u00E9 sur la quantification et la capitalisation de la notion de confiance entre humains et robots mobiles afin de maintenir l\'efficacit\u00E9 de leurs collaborations. Dans le cadre de cette recherche, il a mis au point un contr\u00F4leur de navigation visuel polyvalent qui a guid\u00E9 de fa\u00E7on autonome les drones a\u00E9riens le long des c\u00F4tes et a dirig\u00E9 des v\u00E9hicules autonomes le long de diverses routes. Il a \u00E9galement d\u00E9velopp\u00E9 des m\u00E9thodes permettant aux robots d\'adapter leurs comportements de fa\u00E7on interactive \u00E0 partir de retours humains occasionnels, bas\u00E9s sur des approches d\'apprentissage supervis\u00E9 et de renforcement. En tant que membre cl\u00E9 du Mobile Robotics Lab \u00E0 McGill, Anqi a dirig\u00E9 plusieurs essais robotiques \u00E0 grande \u00E9chelle, o\u00F9 il a g\u00E9r\u00E9 la logistique de recherche pour plus de 5 projets concurrents et plus de 30 participants.',
        ch: '目前我的个人研究领域包括认知人机交互（cHRI），机器人适应和学习，计算机和机器人视觉，多领域多机器人协作和可穿戴程序计算。<br/>我是加拿大麦吉尔大学智能机器中心和计算机科学学院移动机器人实验室的校友。我的导师是Gregory Dudek教授，从麦吉尔大学本科读书期间我便一直与他共事。我为成为Vanier CGS奖学金获得者和NSERC加拿大野外机器人网络成员而感到自豪。<br/>我于2017年获得了麦吉尔大学计算机科学博士学位。我的博士研究重点是通过建立对关系的信任来维持和提高人机团队的协作效率。Anqi的积极研究领域包括：人类强化学习（如模仿学习，反强化学习，奖励塑造）;机器人控制的强化学习，移动感知和嵌入式/可穿戴部。Anqi拥有超过10年的移动机器人技术方面的成熟研究经验（H指数：10），包括人机交互，感知，控制，本地化和规划。他在空中无人机，游泳和航海机器人以及自动驾驶汽车上部署和评估软件代理方面拥有丰富的实践经验。Anqi博士在麦吉尔大学的研究获得了加拿大的CIPPRS 2016博士论文奖，并收到了著名的NSERC Vanier加拿大研究生奖学金的资助。他是第15届计算机和机器人视觉年会（CRV 2018）的共同主席，并且参与了众多国际会议项目和审查委员会，包括RSS，ICRA，IROS，HRI等。<br/>在他的博士研究期间，Anqi专注于量化和采集人与移动机器人之间的信任概念，以保持合作效率。作为这项研究的一部分，他开发了一种通用视觉导航控制器 可以沿着海岸线自主引导航空无人机，并沿不同道路控制自动驾驶汽车。他还基于监督和强化学习方法开发了机器人智能体的方法，从临时人类反馈中调整他们的交互行为。作为麦吉尔大学移动机器人实验室的关键成员，Anqi领导了多个大型机器人的现场测试，其中他负责管理5个并行项目的研究物流和30多个研究员。'
    }
}, {
    id: 4,
    firstName: 'Xueqi',
    lastName: 'Gao',
    description: 'Market developer focusing on the Canadian and Chinese regions',
    pictureKey: 'xueqi_gao.jpg',
    socialMediaLink: {
        linkedin: 'https://www.linkedin.com/in/xueqi-gao/'
    },
    bio: {
        en: 'Xueqi is the market developer focusing on the Canadian and Chinese regions. With 6 years of professional and educational experience in France and in Canada, Xueqi’s dynamic cultural background allows her to be a coordinator across multiple disciplines.',
        fr: 'Xueqi est la responsable du d\u00E9veloppement des march\u00E9s canadien et chinois. Dynamique repr\u00E9sentante avec 6 ans d\u2019exp\u00E9rience professionnelle et universitaire en France et au Canada. Son parcours multidisciplinaire et multiculturel est un atout certain pour l\u2019organisation.',
        ch: '雪琪是加拿大和中国的市场发展负责人。有着六年在法国和加拿大的求学和工作经验，她的多文化背景促进了公司业务在国际范围的扩张和联络。'
    }
}, {
    id: 5,
    firstName: 'Giovanni',
    lastName: 'Laquidara',
    description: 'Technical Lead at the Google Developer Group in Rome',
    pictureKey: 'giovanni_laquidara.jpg',
    socialMediaLink: {
        linkedin: ''
    },
    bio: {
        en: 'Giovanni Laquidara is an Android Engineer at Tui with 12 years’ experience building real-time mobile applications.  Giovanni is very passionate about Android VR and AR development and speaks at many IT communities worldwide.  Currently Giovanni is a Technical Lead at the Google Developer Group in Rome and runs the Mobile Tea meet-up group.',
        fr: 'Giovanni Laquidara est un ing\u00E9nieur d\'Android chez Tui, avec 12 ans d\'exp\u00E9rience dans la construction d\'applications mobiles en temps r\u00E9el. Passionn\u00E9 du d\u00E9veloppement VR et AR Android, il a pr\u00E9sent\u00E9 \u00E0 de nombreuses communaut\u00E9s informatiques \u00E0 travers le monde. Giovanni est pr\u00E9sentement responsable technique au Google Developer Group \u00E0 Rome et dirige le groupe Mobile Tea Meet-up.',
        ch: 'Giovanni Laquidara是Tui的安卓工程师，拥有12年建立实时移动应用程序的经验。 Giovanni非常热爱VR和AR Android开发，并曾在全球许多IT社区发表过相关演讲。 目前，Giovanni是罗马谷歌开发者团队的技术主管，同时管理着Mobile Tea Meet-up 团队。'
    }
}, {
    id: 6,
    firstName: 'Julien',
    lastName: 'Saad',
    description: 'Senior Software Engineer who graduated from Polytechnique Montréal',
    pictureKey: 'julien_saad.jpg',
    socialMediaLink: {
        linkedin: 'https://www.linkedin.com/in/juliensaad/'
    },
    bio: {
        en: 'Julien Saad is a Senior Software Engineer who graduated from Polytechnique Montréal. He has co-founded a software consulting company and has worked on scaling early stage startups to millions of users. His expertise resides in mobile platforms and user experience.',
        fr: 'Julien Saad est un ing\u00E9nieur logiciel dipl\u00F4m\u00E9 de l\u2019\u00C9cole Polytechnique de Montr\u00E9al. Il poss\u00E8de une grande exp\u00E9rience en d\u00E9marrage d\u2019entreprise, ayant fond\u00E9 sa compagnie de consultation logicielle et particip\u00E9 \u00E0 l\u2019expansion de Transit vers des millions d\u2019usagers. Il poss\u00E8de une expertise en d\u00E9veloppement mobile ainsi qu\'en exp\u00E9rience utilisateur.',
        ch: 'Julien Saad 是毕业于蒙特利尔综合理工学院的高级软件工程师。他参与创办了一家软件咨询公司，并曾为数百万用户提供了早期阶段的创业支持。他的专业领域是移动平台和用户体验。'
    }
}, {
    id: 7,
    firstName: 'Shehaaz',
    lastName: 'Saif',
    description: 'Software Engineer focusing on databases and creating scalable infrastructure',
    pictureKey: 'shehaaz_saif.jpg',
    socialMediaLink: {
        linkedin: 'https://www.linkedin.com/in/shehaazsaif/'
    },
    bio: {
        en: 'Shehaaz is a Software Engineer focusing on databases and creating scalable infrastructure.  After graduating McGill University, he co-founded WearHacks, a nonprofit mission to make hardware education more accessible in the wearable and IoT space.  Shehaaz currently resides in Montreal and occasionally goes for long runs.',
        fr: 'Shehaaz est un ing\u00E9nieur logiciel sp\u00E9cialis\u00E9 dans les bases de donn\u00E9es et dans la cr\u00E9ation d\'infrastructures \u00E9volutives. Apr\u00E8s avoir \u00E9t\u00E9 dipl\u00F4m\u00E9 de l\'Universit\u00E9 McGill, il a cofond\u00E9 WearHacks, qui a une mission \u00E0 but non lucratif visant \u00E0 rendre l\'\u00E9ducation \u201Chardware\u201D plus accessible dans l\'espace portable et IoT. Shehaaz r\u00E9side actuellement \u00E0 Montr\u00E9al et fait parfois de longues courses \u00E0 pied.',
        ch: 'Shehaaz 是一位专注于数据库和创建可扩展基础架构的软件工程师。 从加拿大麦吉尔大学毕业后，他共同创立了公司WearHacks，这是一个非盈利性项目，旨在使可穿戴和物联网领域的硬件教育更加便利。 Shehaaz目前居住在加拿大蒙特利尔，偶尔会有长期外出工作任务。'
    }
}];

class MemberApi {
  static getAllMembers() {
      return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], members));
      }, delay);
    });
  }

  static getMemberPictures() {
      return new Promise((resolve, reject) => {
          setTimeout(() => {
              resolve(importAllPics(require.context('../images/members', false, /\.(png|jpe?g|svg)$/)));
          }, delay);
      });
  }
}

function importAllPics(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}

export default MemberApi;
