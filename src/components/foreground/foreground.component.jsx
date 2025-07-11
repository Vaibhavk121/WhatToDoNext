import React, { Component } from "react";
import LandingPage from "../landing-page/landing-page";
import StartForm from "../get-started/StartForm";
import ProficiencyForm from '../proficiency-form/proficiency-form.component';
import ChildRec from '../child-recommendation/child-rec.component';
import DomainPage from "../domain-page/domain-page.component";
import ChildRecSlant from "../child-recommendation/child-rec-slant.component";
import Recommendation from "../recommendation/recommendation.component";

export const finalDomainCategories = [
  {
    "Web Development": {
      "languages": {
        "beginner": [
          {"JavaScript": "JavaScript is the core language for web development, allowing you to create dynamic content on websites."},
          {"HTML": "HTML is the foundational markup language for creating web pages and structuring content."},
          {"CSS": "CSS is used to style and layout web pages, making them visually appealing."}
        ],
        "advanced": [
          {"TypeScript": "TypeScript adds static types to JavaScript, improving code quality and maintainability."},
          {"React": "React is a popular JavaScript library for building user interfaces and single-page applications."},
          {"Angular.js": "Angular.js is a powerful JavaScript framework for building complex web applications."}
        ]
      },
      "technologies": {
        "beginner": [
          {"GitHub": "GitHub is a platform for version control and collaboration, essential for managing web development projects."}
        ],
        "advanced": [
          {"Docker": "Docker simplifies application deployment by creating lightweight containers for your applications."},
          {"CICD": "CI/CD automates the testing and deployment of your code, ensuring fast and reliable releases."},
          {"AWS": "AWS provides scalable cloud services, supporting your web applications with reliable infrastructure."}
        ]
      },
      "slant": "frontend, backend"
    }
  },
  {
    "Android Development": {
      "languages": {
        "beginner": [
          {"Java": "Java is the primary language for Android development, offering extensive libraries and tools."},
          {"Kotlin": "Kotlin is a modern language that improves upon Java, providing concise and safe code."}
        ],
        "advanced": [
          {"Dart": "Dart is used with Flutter to build cross-platform mobile applications with a single codebase."},
          {"React Native": "React Native allows you to build native mobile apps using JavaScript and React."}
        ]
      },
      "technologies": {
        "beginner": [
          {"Android Studio": "Android Studio is the official IDE for Android development, offering powerful tools and emulators."}
        ],
        "advanced": [
          {"Gradle": "Gradle is a build automation tool that manages dependencies and builds your Android projects."}
        ]
      },
      "slant": "mobile development"
    }
  },
  {
    "AI-Machine Learning": {
      "languages": {
        "beginner": [
          {"Python": "Python is the most popular language for AI and ML, offering powerful libraries and frameworks."},
          {"R": "R is used for statistical computing and graphics, making it ideal for data analysis and visualization."}
        ],
        "advanced": [
          {"Java": "Java is used for large-scale ML applications, offering scalability and performance."},
          {"C++": "C++ provides high performance and efficiency, essential for complex ML algorithms."},
          {"Julia": "Julia is designed for high-performance numerical analysis and computational science."}
        ]
      },
      "technologies": {
        "beginner": [
          {"AWS": "AWS offers comprehensive AI and ML services, supporting your projects with powerful tools."}
        ],
        "advanced": [
          {"Azure": "Azure provides robust AI and ML services, enabling scalable and reliable solutions."},
          {"Docker": "Docker containers ensure consistent environments for training and deploying ML models."}
        ]
      },
      "slant": "data science"
    }
  },
  {
    "Game Development": {
      "languages": {
        "beginner": [
          {"C++": "C++ is the primary language for game development, offering high performance and control."},
          {"C#": "C# is used with Unity, providing an accessible language for developing games."},
          {"JavaScript": "JavaScript can be used for web-based games, making it easy to get started."}
        ],
        "advanced": [
          {"Python": "Python is used for scripting and prototyping in game development."},
          {"Dart": "Dart, with Flutter, can be used for developing cross-platform games."}
        ]
      },
      "technologies": {
        "beginner": [
          {"Unity": "Unity is a popular game engine that simplifies the development of 2D and 3D games."}
        ],
        "advanced": [
          {"Unreal Engine": "Unreal Engine offers high-fidelity graphics and powerful tools for AAA game development."},
          {"Godot": "Godot is an open-source game engine that supports 2D and 3D game development."},
          {"Blender": "Blender is a 3D modeling and animation tool, essential for creating game assets."}
        ]
      },
      "slant": "game engine"
    }
  },
  {
    "Software Development": {
      "languages": {
        "beginner": [
          {"Java": "Java is a versatile language used for building robust and scalable applications."},
          {"Python": "Python is easy to learn and widely used for various types of software development."},
          {"C": "C is a foundational language that provides low-level access to hardware."}
        ],
        "advanced": [
          {"C++": "C++ is used for performance-critical applications, offering advanced features and control."},
          {"C#": "C# is used for developing Windows applications and games with Unity."},
          {"Kotlin": "Kotlin is a modern language that enhances Java, improving code safety and productivity."},
          {"Swift": "Swift is used for developing iOS and macOS applications, offering powerful features and safety."},
          {"Ruby": "Ruby is known for its simplicity and productivity, popular for web applications."},
          {"Go": "Go is designed for concurrency and performance, ideal for scalable software."},
          {"Rust": "Rust ensures memory safety and concurrency, making it suitable for system programming."}
        ]
      },
      "technologies": {
        "beginner": [
          {"GitHub": "GitHub is essential for version control and collaboration in software development."}
        ],
        "advanced": [
          {"Docker": "Docker containerizes applications, ensuring consistency across different environments."},
          {"CICD": "CI/CD automates the testing and deployment process, ensuring fast and reliable releases."},
          {"AWS": "AWS provides scalable cloud services, supporting your software projects with reliable infrastructure."},
          {"Azure": "Azure offers comprehensive cloud solutions, supporting your development projects."},
          {"GCC": "GCC compiles your code across multiple languages, vital for system programming and development."},
          {"QtCreator": "QtCreator is an IDE for developing cross-platform applications with the Qt framework."},
          {"Microcontrollers": "Microcontrollers are essential in embedded systems, controlling devices with software."}
        ]
      },
      "slant": "software engineering"
    }
  },
  {
    "iPhone Development": {
      "languages": {
        "beginner": [
          {"Swift": "Swift is the primary language for iOS development, offering powerful features and safety."},
          {"Objective-C": "Objective-C is used for legacy iOS development, providing interoperability with Swift."}
        ]
      },
      "technologies": {
        "beginner": [
          {"Xcode": "Xcode is the official IDE for iOS development, offering powerful tools and simulators."}
        ]
      },
      "slant": "mobile development"
    }
  },
  {
    "Assembly Programming": {
      "languages": {
        "beginner": [
          {"C": "C is crucial for operating system development, giving you low-level access to hardware."}
        ],
        "advanced": [
          {"C++": "C++ adds advanced features to C, perfect for complex OS development."},
          {"Assembly": "Assembly language provides the lowest-level programming, essential for understanding how computers work."}
        ]
      },
      "technologies": {
        "beginner": [
          {"GCC": "GCC compiles your code across multiple languages, vital for system programming and OS development."}
        ]
      },
      "slant": "kernel development"
    }
  },
  {
    "Ethical Hacking": {
      "languages": {
        "beginner": [
          {"Python": "Python is versatile and powerful for writing hacking tools and automating tasks."}
        ],
        "advanced": [
          {"C": "C is fundamental for understanding vulnerabilities and writing low-level exploits."},
          {"C++": "C++ provides advanced capabilities for developing complex hacking tools and exploits."}
        ]
      },
      "technologies": {
        "beginner": [
          {"Docker": "Docker creates consistent environments for testing and deploying hacking tools."}
        ],
        "advanced": [
          {"Kubernetes": "Kubernetes automates the deployment and management of containerized applications, useful in complex hacking setups."},
          {"AWS": "AWS offers powerful cloud services, essential for scaling your hacking infrastructure."},
          {"Azure": "Azure provides comprehensive cloud solutions, supporting your hacking projects with reliable infrastructure."}
        ]
      },
      "slant": "penetration testing"
    }
  }
];

const allDomains = ["Web Development", "Android Development", "AI-Machine Learning", "Game Development", "Software Development", "iPhone Development", "Assembly Programming", "Ethical Hacking"];

const languages = ["JavaScript", "Python", "Java", "C++", "C#", "Ruby", "Swift"];
const technologies = ["React", "Node.js", "Docker", "AWS", "Git", "MongoDB", "Kubernetes"];

// Define categorized domains
const categorisedDomains = {
  "Web Development": {
    languages: ["JavaScript", "HTML", "CSS", "TypeScript"],
    technologies: ["React", "Node.js", "MongoDB"]
  },
  // ...add other domains
};

const generateRoadmapLogic = (domain, experienceLevel) => {
  const domainInfo = finalDomainCategories[domain];
  if (!domainInfo) return null;

  const roadmap = {};
  const { languages, technologies } = domainInfo;

  if (experienceLevel === 'rookie') {
    roadmap.languages = languages.beginner.map(lang => {
      const key = Object.keys(lang)[0];
      return { [key]: lang[key] };
    });
    roadmap.technologies = technologies.beginner.map(tech => {
      const key = Object.keys(tech)[0];
      return { [key]: tech[key] };
    });
  } else if (experienceLevel === 'intermediate') {
    roadmap.languages = [
      ...languages.beginner.map(lang => {
        const key = Object.keys(lang)[0];
        return { [key]: lang[key] };
      }),
      ...languages.advanced.map(lang => {
        const key = Object.keys(lang)[0];
        return { [key]: lang[key] };
      })
    ];
    roadmap.technologies = [
      ...technologies.beginner.map(tech => {
        const key = Object.keys(tech)[0];
        return { [key]: tech[key] };
      }),
      ...technologies.advanced.map(tech => {
        const key = Object.keys(tech)[0];
        return { [key]: tech[key] };
      })
    ];
  } else if (experienceLevel === 'experienced' || experienceLevel === 'veteran') {
    roadmap.languages = [
      ...languages.advanced.map(lang => {
        const key = Object.keys(lang)[0];
        return { [key]: lang[key] };
      })
    ];
    roadmap.technologies = [
      ...technologies.advanced.map(tech => {
        const key = Object.keys(tech)[0];
        return { [key]: tech[key] };
      })
    ];
  } else {
    return null; // Invalid experience level
  }

  return roadmap;
}

const findRelevantTechs = (t) => {
  let techs = [];
  if (t !== null) {
    t.map(tek => {
      return techs = techs.concat(categorisedDomains[tek]["languages"]);
    });
  }
  return techs;
};

const findRelevantLangs = (l) => {
  let langs = [];
  if (l !== null) {
    l.map(lan => {
      return langs = langs.concat(categorisedDomains[lan]["technologies"]);
    });
  }
  return langs;
};

class Foreground extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: "landingPage",
      profile: {},
      inclusionaryLang: [],
      inclusionaryTech: [],
      resultant: []
    };
  }

  startButtonHandler = () => {
    this.setState({ currentPage: "nameAgePage" });
  };

  nameAgeButtonHandler = (username, age) => {
    this.setState(
      { profile: { username, age } },
      () => {
        if (age <= 15) {
          this.setState({ currentPage: "childRec" });
        } else {
          this.setState({ currentPage: "domainPage" });
        }
      }
    );
  };

  setDomainHandler = () => {
    const domainContainer = document.querySelector(".domain-container");
    let values = []
    Array.from(domainContainer.children).forEach((child, index) => {
      let selectChild = child.querySelector('select');
  if (selectChild) {
      values.push([allDomains[index], selectChild.value]);
  }
  gatherExperience(values);
  // values = values.map(arr => {
  //   const [domain, exp] = arr;

  // })
});
    // this.setState(() => { return { currentPage: "finalRecPage" } });
  }

  generateRoadmap = () => {
    const { inclusionaryLang, inclusionaryTech, profile } = this.state;
    // Use generateRoadmapLogic for each selected domain
    const roadmap = generateRoadmapLogic(inclusionaryLang[0], profile.experienceLevel || 'rookie');
    
    this.setState({
      resultant: [roadmap],
      currentPage: "finalRecPage"
    });
  };

  setLanguagesHandler = (lang, add) => {
    const techs = findRelevantTechs([lang]);
    let { inclusionaryLang } = this.state;
    
    if (inclusionaryLang.indexOf(lang) === -1) {
      this.setState(() => ({
        inclusionaryLang: [...inclusionaryLang, lang],
        inclusionaryTech: [...this.state.inclusionaryTech, ...techs] // Use techs
      }));
      return true;
    } else {
      this.setState(() => ({
        inclusionaryLang: inclusionaryLang.filter(l => l !== lang)
      }));
      return false;
    }
  }

  setTechnologiesHandler = (tech, add) => {
    const langs = findRelevantLangs([tech]);
    let { inclusionaryTech } = this.state;
    
    if (inclusionaryTech.indexOf(tech) === -1) {
      this.setState(() => ({
        inclusionaryTech: [...inclusionaryTech, tech],
        inclusionaryLang: [...this.state.inclusionaryLang, ...langs] // Use langs
      }));
      return true;
    } else {
      this.setState(() => ({
        inclusionaryTech: inclusionaryTech.filter(t => t !== tech)
      }));
      return false;
    }
  }

  childRecEventHandler = () => {
    this.setState({
      currentPage: "childRec"
    });
  }

  setDomainsHandler = (domain) => {
    return 0;
    // let {inclusionaryDomain} = this.state;
  
    // if (inclusionaryDomain.indexOf(domain) === -1) {
    //   this.setState(() => {
    //     inclusionaryDomain.push(domain);
    //     return { "inclusionaryTech": inclusionaryDomain }
    //   }, () => {
        
    //   })
    //   return true;
    // } else {
    //   this.setState(() => {
    //     inclusionaryDomain = inclusionaryDomain.filter(d => d !== domain);
    //     return { "inclusionaryTech": inclusionaryDomain };
    //   })
    //   return false;
    // }
  }

  shiftParallaxRight = () => {
    function getTranslateX(element) {
      const style = window.getComputedStyle(element);
      return style.transform.split(',')[4] || 0;
    }
      const factors = [0.8,0.7, 0.6, 0.5, 0.4, 0.3, 0.2, 0.1];
      const parallaxChildren = document.querySelector(".parallax-container").children;
      Array.from(parallaxChildren).forEach((child, index) => {
        child.style.transform = `translateX(${getTranslateX(child) + (100 * factors[index])}px)`
      })
      
  }

  render() {
    const { currentPage } = this.state;
    
    switch (currentPage) {
      case "landingPage": {
        return <LandingPage submitHandler={this.startButtonHandler} />;
      }
      case "nameAgePage": {
        this.shiftParallaxRight();
        return <StartForm submitHandler={this.nameAgeButtonHandler} />;
      }
      case "domainPage": {
        return (<DomainPage 
          domains={allDomains} 
          clicksHandler={this.setDomainsHandler} 
          clickHandler={this.setDomainHandler}
        />);
      }
      case "languageProficiencyPage": {
        this.shiftParallaxRight();
        return (
          <>
            <ProficiencyForm 
              containerName={"language-container"} 
              techTitles={languages} 
              clickHandler={this.setLanguagesHandler} 
            />
            <div className="language-proficiency-button-div">
              <button className='generic-button' onClick={() => {
                this.setState({ currentPage: "techProficiencyPage" });
              }}>To Technology</button>
            </div>
          </>
        );
      }
      case "childRec": {
        this.shiftParallaxRight();
        return(<>
        <ChildRec/></>)
      }
      case "childRecPage": {
        this.shiftParallaxRight();
        return (
          <>
            <ChildRecSlant slant={"windows"}/>
            <ChildRec />
          </>
        );
      }
      case "techProficiencyPage": {
        this.shiftParallaxRight();
        return (
          <>
            <ProficiencyForm 
              containerName={"tech-container"} 
              techTitles={technologies} 
              clickHandler={this.setTechnologiesHandler} 
            />
            <div className='tech-proficiency-button-div'>
              <button className='generic-button' onClick={this.generateRoadmap}>
                Generate Roadmap!
              </button>
            </div>
          </>
        )
      }
      case "finalRecPage": {
        this.shiftParallaxRight();
        // console.log(this.state.resultant);
        return(<><Recommendation components={this.state.resultant[0].languages}/>
          <Recommendation components={this.state.resultant[0].technologies}/>
          </>
        );
      }
      default: {
        return <LandingPage submitHandler={this.startButtonHandler} />;
      }
    }
  }
}

export default Foreground;

const gatherExperience = (values) => {
  return values.map(([domain, experience]) => ({
    domain,
    experience
  }));
};
