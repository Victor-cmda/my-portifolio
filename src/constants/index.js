import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `Desenvolvedor com sólida experiência em criação e manutenção de aplicativos utilizando diversas linguagens de programação e frameworks. Especializado em C#, JavaScript/TypeScript, React e Node.js, com forte experiência em desenvolvimento de microsserviços e sistemas distribuídos. Comprometido em entregar soluções robustas e escaláveis que impulsionam o crescimento dos negócios.`;

export const ABOUT_TEXT = `Desenvolvedor Full Stack com expertise em criação e manutenção de aplicativos utilizando diversas tecnologias modernas. Possuo sólida experiência em desenvolvimento de microsserviços e sistemas distribuídos utilizando .NET Core e Node.js, com foco em performance e escalabilidade. Proficiente em message brokers como RabbitMQ e Kafka, e experiente em bancos de dados relacionais e NoSQL. Minha jornada profissional é marcada pela busca constante por excelência técnica e aprendizado contínuo. Atualmente finalizando o bacharelado em Sistemas de Informação, combino conhecimento acadêmico com experiência prática para entregar soluções inovadoras.`;

export const EXPERIENCES = [
  {
    year: "2024 - 2025",
    role: "Desenvolvedor Full-Stack Pleno",
    company: "Lar Cooperativa Agroindustrial",
    description: `Desenvolvimento do aplicativo LarDigital, com foco em back-end. Responsável pela criação e manutenção de funcionalidades críticas, garantindo integração eficiente dos sistemas e performance robusta da aplicação.`,
    technologies: ["C#", ".NET", "React", "SQL Server"],
  },
  {
    year: "2022 - 2024",
    role: "Desenvolvedor Full-Stack Júnior",
    company: "IntellTech",
    description: `Desenvolvimento de aplicações usando C# e Akka.NET para criar sistemas distribuídos e escaláveis. Gerenciamento de concorrência e comunicação entre atores, com foco em performance e escalabilidade.`,
    technologies: ["C#", "Akka.NET", "SQL Server", "Sistemas Distribuídos"],
  },
  {
    year: "2022",
    role: "Desenvolvedor Full-Stack Júnior",
    company: "SOFT-TI Informática",
    description: `Desenvolvimento de aplicações com C#, JavaScript e frameworks como Angular. Responsável pela escrita, depuração e teste de código, garantindo alta qualidade e performance do software.`,
    technologies: ["C#", "JavaScript", "Angular", "SQL Server"],
  },
  {
    year: "2021 - 2022",
    role: "Desenvolvedor RPA",
    company: "Reuter Contabilidade",
    description: `Desenvolvimento de soluções de automação na plataforma UiPath. Responsável pelo levantamento de requisitos, análise de processos e implementação de soluções automatizadas.`,
    technologies: ["UiPath", "RPA", "Automação"],
  },
  {
    year: "2020 - 2021",
    role: "Desenvolvedor Delphi Júnior",
    company: "Viasoft Korp ERP",
    description: `Desenvolvimento de aplicações com Delphi. Responsável pela escrita, depuração e teste de código, garantindo alta qualidade e performance do software.`,
    technologies: ["Delphi", "XML", "Pascal", "SQL Server"],
  },
];

export const PROJECTS = [
  {
    title: "PDV Solution",
    image: project1,
    description:
      "Sistema de Ponto de Venda (PDV) desenvolvido com WinUI 3, incluindo gestão de vendas, controle de estoque e relatórios gerenciais.",
    technologies: ["C#", "WinUI 3", "SQL Server", "Entity Framework"],
  },
  {
    title: "LarDigital",
    image: project2,
    description:
      "Aplicativo corporativo para gestão de processos agroindustriais, com foco em performance e escalabilidade.",
    technologies: ["C#", ".NET", "React", "SQL Server"],
  },
  {
    title: "Sistema de Distribuição",
    image: project3,
    description:
      "Sistema distribuído desenvolvido com Akka.NET para processamento de dados em larga escala com alta disponibilidade.",
    technologies: ["C#", "Akka.NET", "SQL Server", "RabbitMQ"],
  },
  {
    title: "Automação de Processos",
    image: project4,
    description:
      "Soluções de automação desenvolvidas com UiPath para otimização de processos contábeis e administrativos.",
    technologies: ["UiPath", "RPA", "Automação", "SQL Server"],
  },
];

export const CONTACT = {
  address: "Foz do Iguaçu, PR, Brasil",
  phoneNo: "+55 (45) 98406-3065",
  email: "victor.somavilla@aol.com",
  github: "https://github.com/Victor-cmda",
  linkedin: "https://linkedin.com/in/victorhugosomavilla",
};
