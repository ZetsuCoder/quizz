const questionsData = {
  html: [
    {
      id: 1,
      question: "What does HTML stand for?",
      options: [
        "Hyper Text Markup Language",
        "Home Tool Markup Language",
        "Hyperlinks and Text Markup Language",
        "Hyper Text Makeup Language",
      ],
      correctAnswer: "0",
      explanation:
        "HTML stands for Hyper Text Markup Language, the standard markup language for creating web pages.",
    },
    {
      id: 2,
      question: "Which HTML element is used for the largest heading?",
      options: ["<h1>", "<heading>", "<h6>", "<head>"],
      correctAnswer: "0",
      explanation:
        "<h1> is used for the most important heading, while <h6> is for the least important.",
    },
    {
      id: 3,
      question:
        "Which HTML attribute specifies an alternate text for an image?",
      options: ["src", "alt", "title", "href"],
      correctAnswer: "1",
      explanation:
        "The alt attribute provides alternative text for screen readers and when images fail to load.",
    },
    {
      id: 4,
      question: "Which HTML element is used to define a paragraph?",
      options: ["<para>", "<p>", "<paragraph>", "<pg>"],
      correctAnswer: "1",
      explanation: "The <p> tag defines a paragraph in HTML.",
    },
    {
      id: 5,
      question: "Which HTML element is used to create a hyperlink?",
      options: ["<link>", "<a>", "<hyperlink>", "<href>"],
      correctAnswer: "1",
      explanation:
        "The <a> tag defines a hyperlink, which is used to link from one page to another.",
    },
    {
      id: 6,
      question: "Which HTML element is used to define a list item?",
      options: ["<ul>", "<ol>", "<li>", "<list>"],
      correctAnswer: "2",
      explanation:
        "The <li> tag defines a list item, used inside both ordered (<ol>) and unordered (<ul>) lists.",
    },
    {
      id: 7,
      question: "Which HTML element is used to define a table row?",
      options: ["<table>", "<td>", "<th>", "<tr>"],
      correctAnswer: "3",
      explanation:
        "The <tr> element defines a table row, which contains <th> or <td> elements.",
    },
    {
      id: 8,
      question: "Which HTML element is used to define emphasized text?",
      options: ["<bold>", "<em>", "<strong>", "<i>"],
      correctAnswer: "1",
      explanation:
        "The <em> tag is used to define emphasized text, which browsers typically display as italic.",
    },
    {
      id: 9,
      question: "Which HTML element is used to define a footer for a document?",
      options: ["<bottom>", "<footer>", "<section>", "<div>"],
      correctAnswer: "1",
      explanation:
        "The <footer> tag defines a footer for a document or section.",
    },
    {
      id: 10,
      question: "Which HTML element is used to play video files?",
      options: ["<media>", "<video>", "<movie>", "<play>"],
      correctAnswer: "1",
      explanation:
        "The <video> element is used to embed video content in a document.",
    },
  ],
  css: [
    {
      id: 1,
      question: "What does CSS stand for?",
      options: [
        "Colorful Style Sheets",
        "Cascading Style Sheets",
        "Computer Style Sheets",
        "Creative Style Sheets",
      ],
      correctAnswer: "1",
      explanation:
        "CSS stands for Cascading Style Sheets, used to style HTML elements.",
    },
    {
      id: 2,
      question: "Which CSS property controls the text size?",
      options: ["font-style", "text-size", "font-size", "text-style"],
      correctAnswer: "2",
      explanation: "The font-size property sets the size of the text.",
    },
    {
      id: 3,
      question: 'How do you select an element with id "demo"?',
      options: [".demo", "*demo", "#demo", "demo"],
      correctAnswer: "2",
      explanation:
        "In CSS, you use the # selector to target elements by their id.",
    },
    {
      id: 4,
      question: "Which property is used to change the background color?",
      options: ["bgcolor", "color", "background-color", "bg-color"],
      correctAnswer: "2",
      explanation:
        "The background-color property sets the background color of an element.",
    },
    {
      id: 5,
      question:
        "How do you make each word in a text start with a capital letter?",
      options: [
        "text-transform: capitalize",
        "text-transform: uppercase",
        "text-style: capital",
        "font-variant: small-caps",
      ],
      correctAnswer: "0",
      explanation:
        "text-transform: capitalize transforms the first character of each word to uppercase.",
    },
    {
      id: 6,
      question: "Which property is used to change the font of an element?",
      options: ["font-family", "font-style", "font-weight", "text-font"],
      correctAnswer: "0",
      explanation:
        "The font-family property specifies the font for an element.",
    },
    {
      id: 7,
      question:
        "How do you display a border like this: top 10px, bottom 15px, left 5px, right 20px?",
      options: [
        "border-width: 10px 20px 15px 5px",
        "border-width: 10px 15px 5px 20px",
        "border-width: 10px 5px 15px 20px",
        "border-width: 5px 20px 10px 15px",
      ],
      correctAnswer: "0",
      explanation:
        "The border-width property follows the order: top, right, bottom, left.",
    },
    {
      id: 8,
      question:
        "Which property is used to change the left margin of an element?",
      options: ["padding-left", "margin-left", "indent", "text-indent"],
      correctAnswer: "1",
      explanation:
        "The margin-left property sets the left margin of an element.",
    },
    {
      id: 9,
      question: "How do you make a list display its items with squares?",
      options: [
        "list-style-type: square",
        "list-type: square",
        "list-style: square",
        "list-bullet: square",
      ],
      correctAnswer: "0",
      explanation:
        "The list-style-type property specifies the appearance of the list item marker.",
    },
    {
      id: 10,
      question:
        "Which property is used to create space between an element's border and inner content?",
      options: ["margin", "spacing", "padding", "border-spacing"],
      correctAnswer: "2",
      explanation:
        "Padding creates space between the element's content and its border.",
    },
  ],
  javascript: [
    {
      id: 1,
      question: "Which operator is used to assign a value to a variable?",
      options: ["=", "*", "-", "+"],
      correctAnswer: "0",
      explanation: "The = operator is used to assign values to variables.",
    },
    {
      id: 2,
      question: 'How do you write "Hello World" in an alert box?',
      options: [
        'alertBox("Hello World");',
        'msg("Hello World");',
        'alert("Hello World");',
        'msgBox("Hello World");',
      ],
      correctAnswer: "2",
      explanation:
        "The alert() function displays an alert box with a specified message.",
    },
    {
      id: 3,
      question: "How to write an IF statement in JavaScript?",
      options: ["if i = 5 then", "if (i == 5)", "if i == 5 then", "if i = 5"],
      correctAnswer: "1",
      explanation:
        "The correct syntax is if (condition) { code to be executed }.",
    },
    {
      id: 4,
      question: "How does a WHILE loop start?",
      options: [
        "while i = 1 to 10",
        "while (i <= 10; i++)",
        "while (i <= 10)",
        "while i <= 10",
      ],
      correctAnswer: "2",
      explanation:
        "The while loop executes a block of code as long as a specified condition is true.",
    },
    {
      id: 5,
      question: "What is the correct way to write a JavaScript array?",
      options: [
        'var colors = "red", "green", "blue"',
        'var colors = ["red", "green", "blue"]',
        'var colors = (1:"red", 2:"green", 3:"blue")',
        'var colors = 1 = ("red"), 2 = ("green"), 3 = ("blue")',
      ],
      correctAnswer: "1",
      explanation:
        "JavaScript arrays are written with square brackets and comma-separated values.",
    },
    {
      id: 6,
      question: "How do you round the number 7.25 to the nearest integer?",
      options: [
        "Math.round(7.25)",
        "round(7.25)",
        "Math.rnd(7.25)",
        "rnd(7.25)",
      ],
      correctAnswer: "0",
      explanation:
        "The Math.round() function returns the value of a number rounded to the nearest integer.",
    },
    {
      id: 7,
      question: "How do you find the number with the highest value of x and y?",
      options: ["Math.ceil(x, y)", "top(x, y)", "Math.max(x, y)", "ceil(x, y)"],
      correctAnswer: "2",
      explanation: "Math.max() returns the number with the highest value.",
    },
    {
      id: 8,
      question:
        'What is the correct JavaScript syntax to change the content of the HTML element below? <p id="demo">This is a demonstration.</p>',
      options: [
        '#demo.innerHTML = "Hello World!";',
        'document.getElementById("demo").innerHTML = "Hello World!";',
        'document.getElement("p").innerHTML = "Hello World!";',
        'document.getElementByName("p").innerHTML = "Hello World!";',
      ],
      correctAnswer: "1",
      explanation:
        "The correct syntax to change content is document.getElementById(id).innerHTML = new HTML.",
    },
    {
      id: 9,
      question: "What is the correct way to write a JavaScript object?",
      options: [
        'var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};',
        'var person = {firstName = "John", lastName = "Doe", age = 50, eyeColor = "blue"};',
        'var person = (firstName:"John", lastName:"Doe", age:50, eyeColor:"blue");',
        'var person = <firstName>"John"</firstName><lastName>"Doe"</lastName>;',
      ],
      correctAnswer: "0",
      explanation:
        "JavaScript objects are written with curly braces and name:value pairs separated by commas.",
    },
    {
      id: 10,
      question: "Which event occurs when the user clicks on an HTML element?",
      options: ["onchange", "onclick", "onmouseclick", "onmouseover"],
      correctAnswer: "1",
      explanation:
        "The onclick event occurs when the user clicks on an element.",
    },
  ],
  react: [
    {
      id: 1,
      question: "What is the correct command to create a new React project?",
      options: [
        "npm create-react-app my-app",
        "npm create-react-app",
        "npx create-react-app my-app",
        "npx create-react-app",
      ],
      correctAnswer: "2",
      explanation:
        "npx create-react-app my-app is the correct command to create a new React project.",
    },
    {
      id: 2,
      question: "What does JSX stand for?",
      options: [
        "JavaScript XML",
        "JavaScript Extension",
        "JavaScript Syntax",
        "JavaScript EXtreme",
      ],
      correctAnswer: "0",
      explanation:
        "JSX stands for JavaScript XML, which allows us to write HTML in React.",
    },
    {
      id: 3,
      question: "Which hook is used to manage state in functional components?",
      options: ["useEffect", "useState", "useContext", "useReducer"],
      correctAnswer: "1",
      explanation:
        "The useState hook allows you to add state to functional components.",
    },
    {
      id: 4,
      question: "How do you pass data to a component from outside?",
      options: ["setState", "render with arguments", "Props", "useState"],
      correctAnswer: "2",
      explanation:
        "Props are used to pass data from parent to child components.",
    },
    {
      id: 5,
      question: "Which method is used to change state in class components?",
      options: [
        "changeState()",
        "setState()",
        "updateState()",
        "modifyState()",
      ],
      correctAnswer: "1",
      explanation:
        "The setState() method is used to update the state object in class components.",
    },
    {
      id: 6,
      question: "What is the purpose of useEffect hook?",
      options: [
        "To perform DOM manipulation",
        "To handle events",
        "To perform side effects in function components",
        "To create context",
      ],
      correctAnswer: "2",
      explanation:
        "The useEffect hook lets you perform side effects in function components.",
    },
    {
      id: 7,
      question: "Which syntax is correct to import a component?",
      options: [
        'import MyComponent from "./MyComponent"',
        'import "./MyComponent"',
        'import [MyComponent] from "./MyComponent"',
        'require "./MyComponent"',
      ],
      correctAnswer: "0",
      explanation:
        'The correct syntax is import MyComponent from "./MyComponent".',
    },
    {
      id: 8,
      question: "What is the children prop?",
      options: [
        "A property that adds child components",
        "A property that lets you pass components as data to other components",
        "A property that lets you nest components like HTML elements",
        "A property that sets the style of child components",
      ],
      correctAnswer: "2",
      explanation:
        "The children prop allows you to pass components as data to other components, similar to how you nest HTML elements.",
    },
    {
      id: 9,
      question: "How do you render a component conditionally?",
      options: [
        "Using an if-else statement",
        "Using a switch statement",
        "Using the ternary operator",
        "All of the above",
      ],
      correctAnswer: "3",
      explanation:
        "You can use if-else, switch, or ternary operator to render components conditionally.",
    },
    {
      id: 10,
      question: "What is the purpose of useMemo hook?",
      options: [
        "To memorize entire components",
        "To optimize performance by memoizing expensive calculations",
        "To create memo components",
        "To add memory to functional components",
      ],
      correctAnswer: "1",
      explanation:
        "useMemo is used to optimize performance by memoizing expensive calculations.",
    },
  ],
};

export default questionsData;
