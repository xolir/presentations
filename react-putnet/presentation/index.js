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
  vdom: require('../assets/vdom.png'),
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
            React
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
        <CodeSlide
          transition={[]}
          lang="js"
          code={require("raw-loader!../assets/wp.config.jsx")}
          ranges={[
            { loc: [22, 25], title: 'babel-preset-react' },
          ]}
        />
        <Slide>
          <List>
            <Appear><ListItem>Components</ListItem></Appear>
          </List>
        </Slide>
        <CodeSlide
          transition={[]}
          lang="js"
          code={require("raw-loader!../assets/screen2.jsx")}
          ranges={[
            { loc: [0, 1], title: 'Import React library' },
            { loc: [1, 2], title: "Import Component's CSS" },
            { loc: [2, 10], title: 'Define Component' },
            { loc: [11, 12], title: 'Use it as HTML tag' },
            { loc: [13, 26], title: 'With CSS classes' },
          ]}
        />
        <Slide>
          <List>
            <ListItem>Components</ListItem>
            <Appear><ListItem>Parent Component</ListItem></Appear>
            <Appear><ListItem>Children Component</ListItem></Appear>
            <Appear><ListItem>Props</ListItem></Appear>
          </List>
        </Slide>
        <CodeSlide
          transition={[]}
          lang="js"
          code={require("raw-loader!../assets/screen3.jsx")}
          ranges={[
            { loc: [3, 15], title: 'Rendering JSON data' },
            { loc: [32, 47], title: 'Parent Component' },
            { loc: [35, 40], title: 'Passing Props' },
            { loc: [16, 23], title: 'Receiving Props' },
            { loc: [24, 32], title: 'With Object desctructuring' },
          ]}
        />
        <CodeSlide
          transition={[]}
          lang="js"
          code={require("raw-loader!../assets/screen4.jsx")}
          ranges={[
            { loc: [28, 37], title: 'Using map' },
          ]}
        />
        <Slide>
          <List>
            <ListItem>Components</ListItem>
            <ListItem>Parent Component</ListItem>
            <ListItem>Children Component</ListItem>
            <ListItem>Props</ListItem>
            <Appear><ListItem>State</ListItem></Appear>
          </List>
        </Slide>
        <CodeSlide
          transition={[]}
          lang="js"
          code={require("raw-loader!../assets/screen6.jsx")}
          ranges={[
            { loc: [0, 8], title: 'React Component instance' },
            { loc: [3, 7], title: 'Initial state' },
            { loc: [24, 33], title: 'Use state instead of data' },
            { loc: [8, 19], title: 'Define filter method' },
            { loc: [23, 24], title: 'Attach Event Handler' },
          ]}
        />
        <Slide>
          <List>
            <ListItem>Components</ListItem>
            <ListItem>Parent Component</ListItem>
            <ListItem>Children Component</ListItem>
            <ListItem>Props</ListItem>
            <Appear><ListItem>VirtualDOM</ListItem></Appear>
            <Appear><ListItem>Rendering</ListItem></Appear>
          </List>
        </Slide>
        <CodeSlide
          transition={[]}
          lang="js"
          code={require("raw-loader!../assets/screen5.jsx")}
          ranges={[
            { loc: [39, 40], title: 'Platform-specific render method' }
          ]}
        />
        <Slide>
          <Image width="80vw" height="80vh" src={images.vdom} />
        </Slide>
        <CodeSlide
          transition={[]}
          lang="js"
          code={require("raw-loader!../assets/screen9.jsx")}
          ranges={[
            { loc: [0, 5], title: 'JSX Code' },
            { loc: [8, 13], title: 'Compiled into function call' }
          ]}
        />
        <Slide>
          <Heading>React Native</Heading>
        </Slide>
        <CodeSlide
          transition={[]}
          lang="js"
          code={require("raw-loader!../assets/screen7.jsx")}
          ranges={[
            { loc: [1, 2], title: 'Import native elements' },
            { loc: [3, 11], title: 'Replace HTML' },
            { loc: [34, 35], title: 'Adjust events' },
          ]}
        />
        <Slide>
          <Heading>Demo time</Heading>
        </Slide>
        <Slide>
          <List>
            <ListItem>Components</ListItem>
            <ListItem>Parent Component</ListItem>
            <ListItem>Children Component</ListItem>
            <ListItem>Props</ListItem>
            <ListItem>VirtualDOM</ListItem>
            <ListItem>Rendering</ListItem>
            <Appear><ListItem>Lifecycle methods</ListItem></Appear>
          </List>
        </Slide>
        <CodeSlide
          transition={[]}
          lang="js"
          code={require("raw-loader!../assets/screen8.jsx")}
          ranges={[
            { loc: [23, 31], title: 'Invoke function on render' },
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
