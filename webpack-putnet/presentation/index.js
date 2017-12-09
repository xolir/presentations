// Import React
import React from "react";
import CodeSlide from 'spectacle-code-slide';

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  Deck,
  Fill,
  Fit,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Notes
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
// import createTheme from "spectacle/lib/themes/default";
import theme from "../themes/seattlejs/index.js";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");
require("../themes/seattlejs/index.css");
// Best way to include fonts rite
require("../fonts/worksans.css");
require("../fonts/biorhyme.css");
require("../fonts/silkscreen.css");

const images = {
  bg: require("../assets/bg_skyline.svg"),
  photo: require("../assets/photo.png"),
  graph: require('../assets/webpackGraph.png'),
  tools: require("../assets/gg-vs-webpack.png"),
  trends: require("../assets/trends.png"),
  ie: require("../assets/ie.png"),
  terminal: require("../assets/webpackshot.png"),
  dynamicShot: require("../assets/webpackshot2.png"),
  hashshot: require("../assets/hashshot.png"),
  prod: require("../assets/prod.png"),
};

preloader(images);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        progress="none"
        theme={theme}
        transition={["slide"]}
        transitionDuration={500}
      >
        <Slide>
          <Heading>
            Webpack
          </Heading>
        </Slide>
        <Slide>
          <Image width="30vw" src={images.photo}/>
          <Text>
            Mikolaj Kozakiewicz
          </Text>
          <Text>
            Frontend Engineer
          </Text>
          <Text>
            Github: @xolir
          </Text>
          <Text>
            Email: mikolaj.kozakiewicz@cognifide.com
          </Text>
        </Slide>
        <Slide>
          <Text>What do we used to use build systems for?</Text>
          <Appear><Text>Compile SASS/LESS to CSS</Text></Appear>
          <Appear><Text>Static code analysis</Text></Appear>
          <Appear><Text>Browser automation</Text></Appear>
        </Slide>
        <Slide>
          <Image heigh="90vh" width="70vw" src={images.tools}/>
        </Slide>
        <Slide>
          <Image src={images.trends}/>
        </Slide>
        <Slide>
          <Heading>Modularization</Heading>
        </Slide>
        <CodeSlide
          transition={[]}
          lang="js"
          code={require("raw-loader!../assets/screen1.html")}
          ranges={[
            { loc: [7, 8], title: "Dependencies" },
            { loc: [8, 13], title: "Modules" }
          ]}
        />
        <Slide>
          <Text>More HTTP requests send worse Perceived Performance gets</Text>
          <Appear><Text>No reliable way to manage dependencies</Text></Appear>
          <Appear><Text>Prone to making mistakes</Text></Appear>
        </Slide>
        <Slide>
          <Image heigh="90vh" width="70vw" src={images.graph}/>
        </Slide>
        <Slide>
          <Heading>NPM modules</Heading>
        </Slide>
        <CodeSlide
          transition={[]}
          lang="js"
          code={require("raw-loader!../assets/screen2")}
          ranges={[
            { loc: [0, 14], title: "Node's require()" },
          ]}
        />
        <CodeSlide
          transition={[]}
          lang="js"
          code={require("raw-loader!../assets/script-base")}
          ranges={[
            { loc: [0, 14], title: "ES6 Import/Export syntax" },
            { loc: [0, 7], title: "Export module" },
            { loc: [9, 13], title: "Import modules" },
            { loc: [15, 18], title: "Modules appears in scope" }
          ]}
        />
        <CodeSlide
          transition={[]}
          lang="js"
          code={require("raw-loader!../assets/webpack-base")}
          ranges={[
            { loc: [2, 11], title: "Export node module" },
            { loc: [3, 6], title: "Define Entry point" },
            { loc: [6, 10], title: "Define Output" }
          ]} />
        <Slide>
          <Image heigh="90vh" width="70vw" src={images.terminal}/>
        </Slide>
        <Slide>
          <Image heigh="90vh" width="70vw" src={images.ie} />
        </Slide>
        <Slide>
          <Heading>Babel</Heading>
        </Slide>
        <CodeSlide
          transition={[]}
          lang="js"
          code={require("raw-loader!../assets/webpack-babel")}
          ranges={[
            { loc: [6, 16], title: 'Babel loader'},
            { loc: [9, 10], title: 'RegExp file pattern'},
            { loc: [11, 12], title: 'Loader name'},
            { loc: [12, 15], title: '(optional) loader options'},
            { loc: [10, 11], title: '(optional) file path to include'},
          ]}
        />
        <Slide>
          <Heading>SASS</Heading>
        </Slide>
        <CodeSlide
          transition={[]}
          lang="js"
          code={require("raw-loader!../assets/webpack-sass")}
          ranges={[
            { loc: [14, 20], title: 'New rule with .scss file test'},
            { loc: [17, 19], title: 'SASS loader converts to CSS'},
            { loc: [17, 19], title: 'CSS loader enables CSS import and intepretation'},
            { loc: [17, 19], title: 'Style loader injects CSS into DOM'}
          ]}
        />
        <CodeSlide
          transition={[]}
          lang="js"
          code={require("raw-loader!../assets/screen2-sass")}
          ranges={[
            { loc: [0, 1], title: 'Import CSS into bundle'}
          ]}
        />
        <CodeSlide
          transition={[]}
          lang="js"
          code={require("raw-loader!../assets/webpack-extract")}
          ranges={[
            { loc: [19, 20], title: 'Add extraction point'},
            { loc: [22, 23], title: 'Extract text plugin'},
            { loc: [22, 23], title: 'Uglify plugin'},
          ]}
        />
        <Slide>
          <Image heigh="90vh" width="70vw" src={images.prod} />
        </Slide>
        <Slide>
          <Heading>Dynamic Imports</Heading>
        </Slide>
        <CodeSlide
          transition={[]}
          lang="js"
          code={require("raw-loader!../assets/script-dynamic")}
          ranges={[
            { loc: [0, 14], title: "Not yet ES import() syntax" },
            { loc: [0, 4], title: "Import modules" },
          ]}
        />
        <Slide>
          <Image heigh="90vh" width="70vw" src={images.dynamicShot}/>
        </Slide>
        <CodeSlide
          transition={[]}
          lang="js"
          code={require("raw-loader!../assets/webpack-hash")}
          ranges={[
            { loc: [18, 19], title: "Filename placeholders"},
          ]}
        />
        <Slide>
          <Image heigh="90vh" width="70vw" src={images.hashshot}/>
        </Slide>
        <Slide>
          <Heading>Webpack-dev-server</Heading>
        </Slide>
        <Slide>
          <Text>No filesystem usage</Text>
          <Appear><Text>All code is kept in memory</Text></Appear>
          <Appear><Text>Enables Hot Module Replacement</Text></Appear>
        </Slide>
        <CodeSlide
          transition={[]}
          lang="js"
          code={require("raw-loader!../assets/webpack-server")}
          ranges={[
            { loc: [0, 14], title: "Add content path and port" },
            { loc: [17, 19], title: "Run dev server in terminal" },
          ]}
        />
        <Slide>
          <Heading>Q & A</Heading>
        </Slide>
        <Slide>
          <Heading>Thank you!</Heading>
        </Slide>
      </Deck>
    );
  }
}
