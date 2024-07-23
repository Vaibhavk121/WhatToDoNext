const ChildRecSlant = ({slant}) => {
    const index = [ {
    "description": "Windows is an operating system used on many computers. It helps you run programs and apps, and it provides a way to interact with your computer.",
    "learningResource": "https://www.microsoft.com/en-us/windows",
    "link": "windows"
  },
   {
    "description": "The internet is a network that connects computers around the world. It allows you to visit websites, watch videos, and send emails.",
    "learningResource": "https://kids.frontier.com/what-is-the-internet/",
    "link": "internet"
  },
  {
    "description": "Art includes things like painting, drawing, and making sculptures. It’s a way for people to express their ideas and feelings creatively.",
    "learningResource": "https://www.artforkidshub.com/",
    "link": "art"
  },
   {
    "description": "Video games are digital games played on a computer or console. They can be fun and exciting, with different challenges and stories.",
    "learningResource": "https://www.commonsensemedia.org/video-game-reviews",
    "link": "videogames"
  }
    ];
    const indices = {
        "windows": 0,
        "internet": 1,
        "art": 2,
        "videogames": 3
    }
    const elem = index[indices[slant]];
return(
<div className="child-slant-div" key={elem.link}>
    <img src={`/assets/${elem.link}`} alt={elem.link}/>
        <h3 className="child-slant-description">{elem.description}</h3>
        <a href={elem.link}>Link to resource</a>
    </div>);
}


export default ChildRecSlant;