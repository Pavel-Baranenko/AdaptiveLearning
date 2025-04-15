import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Test from '@/components/Test'
import React from 'react'

export default async function TestPage({ params }) {
  const { id } = await params
  let test = {
    title: "Node.js programming",
    author: "Pavel Barko",
    questions: [
      {
        "heading": "Which HTML tag is used to create a hyperlink?",
        "type": "radio",
        "keywords": ["HTML", "basics"],
        "items": ["<a>", "<link>", "<href>", "<url>"],
        "answer": "<a>"
      },
      {
        "heading": "What does CSS stand for?",
        "type": "radio",
        "keywords": ["CSS", "fundamentals"],
        "items": ["Computer Style Sheets", "Creative Style Sheets", "Cascading Style Sheets", "Colorful Style Sheets"],
        "answer": "Cascading Style Sheets"
      },
      {
        "heading": "Which symbol is used for single-line comments in JavaScript?",
        "type": "radio",
        "keywords": ["JavaScript", "syntax"],
        "items": ["//", "/*", "#", "--"],
        "answer": "//"
      },
      {
        "heading": "What is the latest version of HTML as of 2023?",
        "type": "radio",
        "keywords": ["HTML", "standards"],
        "items": ["HTML4", "XHTML", "HTML5", "HTML6"],
        "answer": "HTML5"
      },
      {
        "heading": "Which method adds new items to the end of an array in JavaScript?",
        "type": "radio",
        "keywords": ["JavaScript", "arrays"],
        "items": [".push()", ".pop()", ".shift()", ".unshift()"],
        "answer": ".push()"
      },
      {
        "heading": "What does the 'D' stand for in JSON?",
        "type": "radio",
        "keywords": ["JSON", "data"],
        "items": ["Data", "Document", "Dynamic", "Declaration"],
        "answer": "Data"
      },
      {
        "heading": "Which CSS property controls text size?",
        "type": "radio",
        "keywords": ["CSS", "typography"],
        "items": ["text-style", "font-size", "text-size", "font-style"],
        "answer": "font-size"
      },
      {
        "heading": "What is React.js primarily used for?",
        "type": "radio",
        "keywords": ["React", "frontend"],
        "items": ["Database management", "Building user interfaces", "Server configuration", "Mobile app development"],
        "answer": "Building user interfaces"
      },
      {
        "heading": "Which HTML attribute is used to define inline styles?",
        "type": "radio",
        "keywords": ["HTML", "CSS"],
        "items": ["class", "styles", "css", "style"],
        "answer": "style"
      },
      {
        "heading": "What does API stand for?",
        "type": "radio",
        "keywords": ["API", "web"],
        "items": ["Automated Programming Interface", "Application Programming Interface", "Advanced Program Interaction", "Application Process Integration"],
        "answer": "Application Programming Interface"
      },

      // 10 Checkbox questions (multiple choice)
      {
        "heading": "Which of these are JavaScript frameworks? (Select all that apply)",
        "type": "checkbox",
        "keywords": ["JavaScript", "frameworks"],
        "items": ["React", "Laravel", "Angular", "Django"],
        "answer": ["React", "Angular"]
      },
      {
        "heading": "Which HTML tags are semantic? (Select all that apply)",
        "type": "checkbox",
        "keywords": ["HTML", "semantic"],
        "items": ["<div>", "<header>", "<span>", "<article>"],
        "answer": ["<header>", "<article>"]
      },
      {
        "heading": "Which methods return a new array in JavaScript? (Select all that apply)",
        "type": "checkbox",
        "keywords": ["JavaScript", "arrays"],
        "items": [".map()", ".push()", ".filter()", ".splice()"],
        "answer": [".map()", ".filter()"]
      },
      {
        "heading": "Which are valid CSS length units? (Select all that apply)",
        "type": "checkbox",
        "keywords": ["CSS", "units"],
        "items": ["px", "em", "vm", "cm"],
        "answer": ["px", "em", "cm"]
      },
      {
        "heading": "Which are JavaScript data types? (Select all that apply)",
        "type": "checkbox",
        "keywords": ["JavaScript", "types"],
        "items": ["String", "Integer", "Boolean", "Float"],
        "answer": ["String", "Boolean"]
      },
      {
        "heading": "Which HTTP methods are considered idempotent? (Select all that apply)",
        "type": "checkbox",
        "keywords": ["HTTP", "methods"],
        "items": ["GET", "POST", "PUT", "DELETE"],
        "answer": ["GET", "PUT", "DELETE"]
      },
      {
        "heading": "Which technologies are used for state management in React? (Select all that apply)",
        "type": "checkbox",
        "keywords": ["React", "state"],
        "items": ["Redux", "Context API", "jQuery", "Axios"],
        "answer": ["Redux", "Context API"]
      },
      {
        "heading": "Which are valid JavaScript variable declaration keywords? (Select all that apply)",
        "type": "checkbox",
        "keywords": ["JavaScript", "variables"],
        "items": ["var", "let", "const", "def"],
        "answer": ["var", "let", "const"]
      },
      {
        "heading": "Which are CSS positioning properties? (Select all that apply)",
        "type": "checkbox",
        "keywords": ["CSS", "layout"],
        "items": ["static", "relative", "block", "fixed"],
        "answer": ["static", "relative", "fixed"]
      },
      {
        "heading": "Which are web security vulnerabilities? (Select all that apply)",
        "type": "checkbox",
        "keywords": ["security", "web"],
        "items": ["XSS", "JSON", "CSRF", "REST"],
        "answer": ["XSS", "CSRF"]
      },

      // 5 Input questions (text answers)
      {
        "heading": "What HTML tag is used to embed JavaScript code?",
        "type": "input",
        "keywords": ["HTML", "JavaScript"],
        "answer": "<script>"
      },
      {
        "heading": "What CSS property makes an element float to the left or right?",
        "type": "input",
        "keywords": ["CSS", "layout"],
        "answer": "float"
      },
      {
        "heading": "What JavaScript function converts a string to an integer?",
        "type": "input",
        "keywords": ["JavaScript", "conversion"],
        "answer": "parseInt()"
      },
      {
        "heading": "What is the name of Google's JavaScript engine?",
        "type": "input",
        "keywords": ["JavaScript", "engine"],
        "answer": "V8"
      },
      {
        "heading": "What does the acronym DOM stand for in web development?",
        "type": "input",
        "keywords": ["DOM", "web"],
        "answer": "Document Object Model"
      },

      // 5 Matching questions
      {
        "heading": "Match the technologies with their primary use:",
        "type": "matching",
        "keywords": ["web", "technologies"],
        "items": ["HTML", "CSS", "JavaScript", "SQL"],
        "values": ["Page structure", "Styling", "Interactivity", "Database queries"],
        "answer": {
          "HTML": "Page structure",
          "CSS": "Styling",
          "JavaScript": "Interactivity",
          "SQL": "Database queries"
        }
      },
      {
        "heading": "Match the HTTP status codes with their meanings:",
        "type": "matching",
        "keywords": ["HTTP", "status"],
        "items": ["200", "404", "500", "301"],
        "values": ["OK", "Not Found", "Server Error", "Moved Permanently"],
        "answer": {
          "200": "OK",
          "404": "Not Found",
          "500": "Server Error",
          "301": "Moved Permanently"
        }
      },
      {
        "heading": "Match the JavaScript methods with their purposes:",
        "type": "matching",
        "keywords": ["JavaScript", "methods"],
        "items": ["querySelector()", "addEventListener()", "fetch()", "JSON.parse()"],
        "values": ["Select DOM element", "Handle events", "Make HTTP requests", "Convert JSON string to object"],
        "answer": {
          "querySelector()": "Select DOM element",
          "addEventListener()": "Handle events",
          "fetch()": "Make HTTP requests",
          "JSON.parse()": "Convert JSON string to object"
        }
      },
      {
        "heading": "Match the CSS selectors with their examples:",
        "type": "matching",
        "keywords": ["CSS", "selectors"],
        "items": ["Class selector", "ID selector", "Attribute selector", "Universal selector"],
        "values": [".header", "#main", "[type='text']", "*"],
        "answer": {
          "Class selector": ".header",
          "ID selector": "#main",
          "Attribute selector": "[type='text']",
          "Universal selector": "*"
        }
      },
      {
        "heading": "Match the web development terms with their definitions:",
        "type": "matching",
        "keywords": ["web", "terms"],
        "items": ["Responsive Design", "AJAX", "CMS", "API"],
        "values": ["Adapts to screen sizes", "Asynchronous JavaScript requests", "Content management system", "Application programming interface"],
        "answer": {
          "Responsive Design": "Adapts to screen sizes",
          "AJAX": "Asynchronous JavaScript requests",
          "CMS": "Content management system",
          "API": "Application programming interface"
        }
      }
    ]
  }
  return (
    <div className="wrapper">
      <Header />
      <Test test={test} />
      <Footer />
    </div>
  )
}
