import { Component } from "react";
import LandingPage from "../landing-page/landing-page"
import StartForm from "../get-started/StartForm"
import ProficiencyForm from '../proficiency-form/proficiency-form.component';
import ChildRec from '../child-recommendation/child-rec.component';
import DomainPage from "../domain-page/domain-page.component";
import ChildRecSlant from "../child-recommendation/child-rec-slant.component";
import Recommendation from "../recommendation/recommendation.component";

class Foreground extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: "landingPage",
      profile: {
        username: "anonymous",
        age: 5,
      },
      inclusionaryTech: [],
      exclusionaryTech: [],
      inclusionaryLang: [],
      exclusionaryLang: [],
      inclusionaryDomain: [],
      exclusionaryDomain: [],
      resultant: ""
    }
  }

  render() {
    let languages = ["Java", "Python", "C", "C++", "C#", "Kotlin", "React", "Javascript", "HTML", "CSS", "Next.js", "Angular.js", "Rust", "Swift", "Flutter", "Haskell", "Ruby", "mySQL", "mongoDB", "postgreSQL", "PHP", "TypeScript", "Go", "Dart", "Shell", "Objective-C"];
    
    let technologies = ["Kubernetes", "CICD", "Docker", "Blender", "Adobe Illustrator", "Source Filmmaker", "AWS", "Azure", "GCC", "Unreal Engine", "Unity", "Godot", "QtCreator", "GLFW", "Microcontrollers"];
    
    const allDomains = ["Web Development", "Android Development", "AI-Machine Learning", "Game Development", "Software Development", "iPhone Development", "Assembly Programming", "Embedded Firmware", "OS Development", "Ethical Hacking"];
    
    const categorisedDomains = {
  "Web Development": {
    "languages": ["JavaScript", "HTML", "CSS", "TypeScript", "React", "Angular.js", "Next.js"],
    "technologies": ["Docker", "CICD", "AWS", "Azure", "GitHub"]
  },
  "Android Development": {
    "languages": ["Java", "Kotlin", "C++", "Dart"],
    "technologies": ["Android Studio", "Gradle"]
  },
  "AI-Machine Learning": {
    "languages": ["Python", "R", "Java", "C++", "Julia"],
    "technologies": ["AWS", "Azure", "Docker"]
  },
  "Game Development": {
    "languages": ["C++", "C#", "JavaScript", "Python", "Dart"],
    "technologies": ["Unreal Engine", "Unity", "Godot", "Blender"]
  },
  "Software Development": {
    "languages": ["Java", "Python", "C", "C++", "C#", "Kotlin", "Swift", "Ruby", "Go", "Rust"],
    "technologies": ["Docker", "CICD", "AWS", "Azure", "GCC", "QtCreator", "Microcontrollers"]
  },
  "iPhone Development": {
    "languages": ["Swift", "Objective-C"],
    "technologies": ["Xcode"]
  },
  "Assembly Programming": {
    "languages": ["C", "C++"],
    "technologies": ["GCC"]
  },
  "Embedded Firmware": {
    "languages": ["C", "C++", "Rust"],
    "technologies": ["Microcontrollers"]
  },
  "OS Development": {
    "languages": ["C", "C++", "Assembly"],
    "technologies": ["GCC"]
  },
  "Ethical Hacking": {
    "languages": ["Python", "C", "C++"],
    "technologies": ["Kubernetes", "Docker", "AWS", "Azure"]
  }
}
  const finalDomainCategories = {
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
  },
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
  },
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
  },
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
  },
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
  },
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
  },
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
  },
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
};

function generateRoadmap(domain, experienceLevel) {
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
// const domain = "Web Development";
// const experienceLevel = "intermediate";
// const roadmap = generateRoadmap(domain, experienceLevel);
// console.log(JSON.stringify(roadmap, null, 2));

const findRelevantTechs = (t) => {
let techs = [];
  if (t !== null) {
  t.map(tek => {
    techs = techs.concat(categorisedDomains[tek]["languages"])
  });
  }
  console.log(techs);
}

const gatherExperience = (choices) => {
  const experienceValues = {
    "x": "null",
    "a": "rookie",
    "b": "intermediate",
    "c": "experienced",
    "d": "experienced",
    "e": "veteran"
  }

  choices = choices.filter(choice => choice[1] !== "x");
  console.log(choices);
  const experienceArrays = choices.map(choice => [choice[0], experienceValues[choice[1]]]);
  console.log(experienceArrays);
  //GENERATE WHICH LANGUAGES AND TECHNOLOGIES NEED TO BE INCLUDED AND EXCLUDED
  let result = [];
  experienceArrays.map(expArray => {
    const [domain, expLevel] = expArray;
    result = result.concat(generateRoadmap(domain, expLevel));
  })
  console.log(result);
  this.setState(() => {
    return {"resultant": result, "currentPage": "finalRecPage"}
  }, () => {
    // console.log("RESULTANT IS:");
    // console.log(this.state.resultant);
  })
  //switch page to tech and lang choices after filtering relevant areas

}

const findRelevantLangs = (l) => {
  let  langs = [];
  if (l !== null) {
  l.map(lan => {langs = langs.concat(categorisedDomains[lan]["technologies"])});
  }
  console.log(langs);
}
    const startButtonHandler = () => {
      this.setState(() => { return { currentPage: "nameAgePage" } });
    }

    const usernameAgeHandler = (username, age) => {
      this.setState(() => { return { profile: { "username": username, "age": age } } }, () => {
        
      });
    }

    const nameAgeButtonHandler = (username, age) => {
      usernameAgeHandler(username, age);
      if (age <= 15) {
        this.setState(() => { return { currentPage: "childRec" } });
      }
      else {
        this.setState(() => { return { currentPage: "domainPage" } });
      }
    }

    const setDomainHandler = () => {
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

    const setLanguagesHandler = (lang, add) => {
      let { inclusionaryLang } = this.state;
      if (inclusionaryLang.indexOf(lang) === -1) {
        this.setState(() => {
          inclusionaryLang.push(lang);
          return { "inclusionaryLang": inclusionaryLang }
        }, () => {
          console.warn("included language");
          
        })
      } else {
        this.setState(() => {
          inclusionaryLang = inclusionaryLang.filter(l => l === lang);
          return { "inclusionaryLang": inclusionaryLang };
        });
        return false;
      }
    }
    const setTechnologiesHandler = (tech, add) => {
      let { inclusionaryTech } = this.state;
      if (inclusionaryTech.indexOf(tech) === -1) {
      
        this.setState(() => {
          inclusionaryTech.push(tech);
          return { "inclusionaryTech": inclusionaryTech }
        }, () => {
        })
        return true;
      } else {
        this.setState(() => {
          inclusionaryTech = inclusionaryTech.filter(t => t !== tech);
          return { "inclusionaryTech": inclusionaryTech };
        })
        return false;
      }
    }

    const childRecEventHandler = () => {
      this.setState(() => {
          currentPage: "childRec"
        });
    }

    const setDomainsHandler = (domain) => {
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

    const shiftParallaxRight = () => {
      function getTranslateX(element) {
      const style = window.getComputedStyle(element);
      const matrix = new WebKitCSSMatrix(style.transform);
      const translateX = matrix.m41;

      return translateX;
    }
        const factors = [0.8,0.7, 0.6, 0.5, 0.4, 0.3, 0.2, 0.1];
        const parallaxChildren = document.querySelector(".parallax-container").children;
        Array.from(parallaxChildren).forEach((child, index) => {
          child.style.transform = `translateX(${getTranslateX(child) + (100 * factors[index])}px)`
        })
        
    }

    // const generateRoadmap = () => {
    //   findRelevantLangs(this.state.inclusionaryLang);
    //   findRelevantTechs(this.state.inclusionaryTech);
    // }
    const { currentPage } = this.state;
    switch (currentPage) {
      case "landingPage": {
        return (<LandingPage submitHandler={startButtonHandler} />);
      }
      case "nameAgePage": {
        shiftParallaxRight();
        return (<StartForm submitHandler={nameAgeButtonHandler} />)
      }
      case "domainPage": {
        return (<DomainPage domains={allDomains} clicksHandler={setDomainsHandler} clickHandler={setDomainHandler}/>)
      }
      case "languageProficiencyPage": {
        shiftParallaxRight();
        return (<><ProficiencyForm containerName={"language-container"} techTitles={languages} clickHandler={setLanguagesHandler} />
          <div className="language-proficiency-button-div">
            <button className='generic-button' onClick={() => {
              this.setState(() => { return { currentPage: "techProficiencyPage" } })
            }}>To Technology</button>
          </div>
        </>)
      }
      case "childRec": {
        shiftParallaxRight();
        return(<>
        <ChildRec/></>)
      }
      case "childRecPage": {
        shiftParallaxRight();
        return(<>
        <ChildRecSlant slant={"windows"}/>
        </>)
      }
      case "techProficiencyPage": {
        shiftParallaxRight();
        return (<><ProficiencyForm containerName={"tech-container"} techTitles={technologies} clickHandler={setTechnologiesHandler} />
          <div className='tech-proficiency-button-div'>
            <button className='generic-button' onClick={() => {
              generateRoadmap();
            }}>Generate Roadmap!</button>
          </div>
        </>)
      }
      case "childRecPage": {
        shiftParallaxRight();
        return (
          <ChildRec />
        )
      }
      case "finalRecPage": {
        shiftParallaxRight();
        // console.log(this.state.resultant);
        return(<><Recommendation components={this.state.resultant[0].languages}/>
          <Recommendation components={this.state.resultant[0].technologies}/>
          </>
        );
      }
      default: {
        return (<LandingPage submitHandler={startButtonHandler} />)
      }
    }
  }
}

export default Foreground;