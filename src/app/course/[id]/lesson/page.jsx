import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'

export default async function LessonPage() {


  return (
    <div className="wrapper">
      <Header />
      <div className="container">
        <div className="lesson-text">
          <span>Introduction</span>
          <p>Web applications are programs that run over the internet in a browser. Unlike traditional desktop applications, they do not require installation on the user's device and are accessible from any computer or smartphone with an internet connection.</p>
          <span>Client-server architecture</span>
          <p>
            Every web application is built on the principle of <strong>client-server interaction</strong>:
          </p>
          <p>
            The <strong>client</strong> (browser) sends requests (e.g., loading a page, submitting a form).
          </p>
          <p>
            The <strong>server</strong> processes the request, performs necessary actions (reading/writing to a database, computations), and returns a response (HTML, JSON, etc.).
          </p>

          <p> Main components of a web application</p>
          <strong>Frontend</strong> (Frontend)
          <br />

          <span>The interface with which the user interacts.</span>
          <p>
            Created using HTML (structure), CSS (styling), and JavaScript (logic).
          </p>
          <p>
            Modern frameworks: React, Vue.js, Angular.
          </p>
          <strong>Backend</strong> (Backend)
          <p>
            The "brains" of the application: data processing, database operations, authentication.
          </p>
          <p>
            Languages: PHP, Python, Node.js, Java, etc.
          </p>
          <p>
            Server frameworks: Laravel (PHP), Django (Python), Express (Node.js).
          </p>

          <strong>Database</strong> (Database)
          <p>
            Stores information (users, products, orders).
          </p>
          <p>
            Popular DBMS: MySQL, PostgreSQL, MongoDB.
          </p>
          <span>
            Types of web applications
          </span>
          <p>
            Static (brochure websites) — content does not change without reloading the code.
          </p>
          <p>
            Dynamic (social networks, e-commerce) — content is generated based on user actions.
          </p>
          <p>
            SPA (Single Page Application) — loaded once, further interaction occurs without page reload (Gmail, Facebook).
          </p>
          <p>
            PWA (Progressive Web App) — combine the capabilities of web and mobile applications (caching, offline functionality).
          </p>

          <span>Request lifecycle</span>
          <p>
            The user enters a URL or clicks a button.
          </p>
          <p>
            The browser sends an HTTP request to the server.
          </p>
          <p>
            The server processes the request (possibly querying the database).
          </p>
          <p>
            The server generates a response (HTML/JSON) and sends it back to the client.
          </p>
          <p>
            The browser displays the result (renders the page or updates the data).
          </p>
          <span>Conclusion</span>
          <p>
            Understanding web application architecture is essential for designing efficient and scalable systems. In the following lectures, we will explore their development stages and delve deeper into working with PHP and MySQL.
          </p>
          <span> Self-check questions:</span>
          <p>
            What is the difference between a static website and a dynamic website?
          </p>
          <p>
            What technologies are used in frontend and backend?
          </p>
          <p>
            What role does the database play in a web application?
          </p>
        </div>
      </div>
      <Footer />
    </div>
  )
}
