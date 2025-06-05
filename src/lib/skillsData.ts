
export interface SkillItem {
  name: string;
  icon: string;
}

export interface SkillsData {
  [category: string]: SkillItem[];
}

export const MY_STACK: SkillsData = {
  'Programming Languages': [
    {
      name: 'HTML',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
    },
    {
      name: 'CSS',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
    },
    {
      name: 'JavaScript',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
    },
    {
      name: 'TypeScript',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'
    },
    {
      name: 'jQuery',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg'
    },
    {
      name: 'Golang',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg'
    },
    {
      name: 'React',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
    }
  ],
  'Frameworks & APIs': [
    {
      name: 'RESTful APIs',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
    },
    {
      name: 'gRPC',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg'
    },
    {
      name: 'GraphQL',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg'
    }
  ],
  'Architecture & Messaging': [
    {
      name: 'Microservices',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg'
    },
    {
      name: 'Apache Kafka',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg'
    }
  ],
  'Databases': [
    {
      name: 'MySQL',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg'
    },
    {
      name: 'PostgreSQL',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg'
    },
    {
      name: 'MongoDB',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg'
    },
    {
      name: 'Redis',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg'
    }
  ],
  'Tools and Software': [
    {
      name: 'Visual Studio Code',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg'
    },
    {
      name: 'DBeaver',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg'
    },
    {
      name: 'Git',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'
    },
    {
      name: 'GitHub',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'
    },
    {
      name: 'Docker',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg'
    },
    {
      name: 'Postman',
      icon: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg'
    },
    {
      name: 'Jenkins',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg'
    }
  ]
};
