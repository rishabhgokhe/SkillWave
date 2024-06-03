const lectures = [
    {
      _id: 1,
      title: "Introduction to JavaScript",
      overview: "An introduction to JavaScript and its basics.",
      q_and_a: "What is JavaScript? How does it work?",
      notes: "JavaScript is a versatile programming language...",
      announcement: "Next lecture will cover variables and data types.",
      review: "This lecture provided a solid foundation in JavaScript basics."
    },
    {
      _id: 2,
      title: "Variables and Data Types",
      overview: "Understanding variables and data types in JavaScript.",
      q_and_a: "What are the different data types in JavaScript?",
      notes: "JavaScript variables can hold different types of data...",
      announcement: "Upcoming lecture will dive into functions.",
      review: "Clear explanations of variables and data types."
    },
    {
      _id: 3,
      title: "Functions in JavaScript",
      overview: "Learning about functions and their use cases.",
      q_and_a: "How do you define a function in JavaScript?",
      notes: "Functions are reusable blocks of code...",
      announcement: "Next up: Understanding objects and arrays.",
      review: "Great examples and practical use cases of functions."
    },
    {
      _id: 4,
      title: "Objects and Arrays",
      overview: "Exploring objects and arrays in JavaScript.",
      q_and_a: "What is the difference between objects and arrays?",
      notes: "Objects are collections of key-value pairs...",
      announcement: "Following lecture will focus on loops and iteration.",
      review: "Detailed overview of objects and arrays."
    },
    {
      _id: 5,
      title: "Loops and Iteration",
      overview: "Mastering loops and iteration in JavaScript.",
      q_and_a: "What are the different types of loops?",
      notes: "JavaScript supports various types of loops such as for, while...",
      announcement: "Prepare for the next lecture on DOM manipulation.",
      review: "Excellent coverage of loops and their applications."
    },
    {
      _id: 6,
      title: "DOM Manipulation",
      overview: "Manipulating the Document Object Model using JavaScript.",
      q_and_a: "How can you select and modify HTML elements?",
      notes: "The DOM represents the structure of a web document...",
      announcement: "Next lecture will cover event handling.",
      review: "Practical examples of DOM manipulation techniques."
    },
    {
      _id: 7,
      title: "Event Handling",
      overview: "Handling user events in JavaScript.",
      q_and_a: "What are event listeners and how do you use them?",
      notes: "Event handling is crucial for interactive web applications...",
      announcement: "Upcoming lecture will discuss asynchronous JavaScript.",
      review: "Thorough explanation of event handling concepts."
    },
    {
      _id: 8,
      title: "Asynchronous JavaScript",
      overview: "Understanding asynchronous programming in JavaScript.",
      q_and_a: "What are callbacks, promises, and async/await?",
      notes: "Asynchronous programming allows non-blocking operations...",
      announcement: "Final lecture will be on JavaScript best practices.",
      review: "Clear and concise explanation of asynchronous concepts."
    },
    {
      _id: 9,
      title: "JavaScript Best Practices",
      overview: "Best practices for writing efficient and maintainable JavaScript code.",
      q_and_a: "What are some common JavaScript best practices?",
      notes: "Using strict mode, avoiding global variables...",
      announcement: "Course wrap-up and Q&A session next week.",
      review: "Insightful tips on writing clean and efficient JavaScript code."
    },
    {
      _id: 10,
      title: "Introduction to ES6",
      overview: "Understanding the new features introduced in ES6.",
      q_and_a: "What are some of the new features in ES6?",
      notes: "ES6 introduced let and const, arrow functions, classes, and more...",
      announcement: "Next lecture will cover ES6 modules.",
      review: "Comprehensive overview of ES6 features."
    },
    {
      _id: 11,
      title: "ES6 Modules",
      overview: "Learning about ES6 modules and how to use them.",
      q_and_a: "How do you import and export modules in ES6?",
      notes: "Modules allow you to break up your code into separate files...",
      announcement: "Upcoming lecture will focus on template literals.",
      review: "Clear explanation of ES6 module system."
    },
    {
      _id: 12,
      title: "Template Literals",
      overview: "Using template literals for cleaner and more readable code.",
      q_and_a: "What are template literals and how do you use them?",
      notes: "Template literals allow for multi-line strings and embedded expressions...",
      announcement: "Next up: Understanding default parameters and rest/spread operators.",
      review: "Helpful examples of template literals in action."
    },
    {
      _id: 13,
      title: "Default Parameters and Rest/Spread Operators",
      overview: "Exploring default parameters and rest/spread operators in ES6.",
      q_and_a: "How do default parameters and rest/spread operators work?",
      notes: "Default parameters provide default values for function parameters...",
      announcement: "Prepare for the next lecture on destructuring.",
      review: "Great coverage of default parameters and rest/spread operators."
    },
    {
      _id: 14,
      title: "Destructuring",
      overview: "Learning about destructuring in JavaScript.",
      q_and_a: "What is destructuring and how is it useful?",
      notes: "Destructuring allows for unpacking values from arrays or objects...",
      announcement: "Upcoming lecture will discuss symbols and iterators.",
      review: "Detailed explanation and examples of destructuring."
    },
    {
      _id: 15,
      title: "Symbols and Iterators",
      overview: "Understanding symbols and iterators in JavaScript.",
      q_and_a: "What are symbols and iterators and how are they used?",
      notes: "Symbols provide unique and immutable identifiers...",
      announcement: "Next lecture will cover generators and their use cases.",
      review: "In-depth discussion of symbols and iterators."
    },
    {
      _id: 16,
      title: "Generators",
      overview: "Learning about generators and their applications.",
      q_and_a: "What are generators and how do you use them?",
      notes: "Generators allow you to define iterative algorithms...",
      announcement: "Prepare for the next lecture on async/await with generators.",
      review: "Excellent introduction to generators."
    },
    {
      _id: 17,
      title: "Async/Await with Generators",
      overview: "Combining async/await with generators for better asynchronous code.",
      q_and_a: "How do async/await and generators work together?",
      notes: "Async/await provides a cleaner way to work with asynchronous code...",
      announcement: "Upcoming lecture will focus on JavaScript design patterns.",
      review: "Helpful insights into combining async/await with generators."
    },
    {
      _id: 18,
      title: "JavaScript Design Patterns",
      overview: "Exploring common design patterns in JavaScript.",
      q_and_a: "What are some common design patterns used in JavaScript?",
      notes: "Design patterns like singleton, observer, and factory...",
      announcement: "Next up: Understanding web APIs and fetch.",
      review: "Great overview of JavaScript design patterns."
    },
    {
      _id: 19,
      title: "Web APIs and Fetch",
      overview: "Using web APIs and the fetch API for network requests.",
      q_and_a: "How do you use the fetch API to make network requests?",
      notes: "Fetch provides a modern way to make HTTP requests...",
      announcement: "Prepare for the next lecture on WebSockets.",
      review: "Practical examples of using fetch and web APIs."
    },
    {
      _id: 20,
      title: "WebSockets",
      overview: "Understanding WebSockets for real-time communication.",
      q_and_a: "What are WebSockets and how do you use them?",
      notes: "WebSockets provide a way to open a persistent connection...",
      announcement: "Upcoming lecture will discuss progressive web apps (PWAs).",
      review: "Comprehensive guide to using WebSockets."
    }
  ];
  
  export default lectures;
  