import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'

export default async function CoursePage({ params }) {
  const { id } = await params;
  // const opened = list.find(e => e.id == id)

  return (
    <div className="wrapper">
      <Header />
      <div className="container">
        <div className="text-box">
          {
            id == 2 &&
            <>
              <h2>Introduction to SQL</h2>

              <p>SQL (Structured Query Language) is the standard language for managing relational databases.</p>
              <br />
              <h3>What is a Database?</h3><br />
              <p>A database is an organized collection of structured data.<br />
                Relational databases store data in tables with rows and columns.</p>
              <br />
              <h3>Basic SQL Commands</h3><br />
              <strong>1. SELECT</strong> - retrieves data from database<br />
              <code>SELECT * FROM customers;</code><br />
              <code>SELECT name, email FROM users WHERE age &gt; 18;</code>
              <br /><br />
              <p><strong>2. INSERT</strong> - adds new records<br />
                <code>INSERT INTO products (name, price) VALUES ('Laptop', 999.99);</code></p>
              <br />
              <p><strong>3. UPDATE</strong> - modifies existing records<br />
                <code>UPDATE employees SET salary = 5000 WHERE id = 101;</code></p>
              <br />
              <p><strong>4. DELETE</strong> - removes records<br />
                <code>DELETE FROM orders WHERE status = 'cancelled';</code></p>
              <br />
              <h3>Key SQL Clauses</h3><br />
              <p><strong>WHERE</strong> - filters records<br />
                <code>SELECT * FROM products WHERE price &lt; 100;</code></p>
              <br />
              <p><strong>ORDER BY</strong> - sorts results<br />
                <code>SELECT * FROM students ORDER BY grade DESC;</code></p>
              <br />
              <p><strong>GROUP BY</strong> - groups identical data<br />
                <code>SELECT department, COUNT(*) FROM employees GROUP BY department;</code></p>
              <br />
              <h3>Table Relationships</h3>
              <p>Relational databases use primary and foreign keys to connect tables:<br />
                <strong>Primary Key</strong> - Unique identifier for each record<br />
                <strong>Foreign Key</strong> - References primary key in another table</p>
              <br />
              <h3>Basic Database Design</h3>
              <p>1. Identify entities (customers, products, orders)<br />
                2. Define relationships between them<br />
                3. Normalize data to minimize redundancy</p>
              <br />
              <h3>Practice Exercise</h3>
              <p>Try these commands on a sample database:<br />
                1. Find all customers from New York<br />
                2. Update product prices with 10% discount<br />
                3. Count orders by status</p>
              <br />
              <p><em>SQL is essential for backend development and data analysis.<br />
                Mastering these basics will help you work with any relational database.</em></p>
            </>
          }
          {
            id == 3 &&
            <>
              <h2>Working with MySQL Databases</h2>

              <p>MySQL is one of the world's most popular relational database management systems (RDBMS), used in web applications, data analytics, and more.</p>
              <br />
              <h3>Basic MySQL Concepts</h3><br />
              <p><strong>Database</strong> - Organized collection of structured data<br />
                <strong>Table</strong> - Data organized in rows and columns<br />
                <strong>SQL</strong> - Structured Query Language for database operations</p>
              <br />
              <h3>Connecting to MySQL</h3><br />
              <p>You can interact with MySQL through:<br />
                - Command Line Interface (mysql client)<br />
                - Graphical tools (MySQL Workbench, phpMyAdmin)<br />
                - Programming languages (PHP, Python, etc.)</p>
              <br />
              <h3>Essential SQL Commands</h3><br />
              <p><strong>CREATE DATABASE</strong> - Makes a new database<br />
                <code>CREATE DATABASE mydb;</code></p>
              <br />
              <p><strong>CREATE TABLE</strong> - Defines a new table structure<br />
                <code>CREATE TABLE users (<br />
                  &nbsp;&nbsp;id INT AUTO_INCREMENT PRIMARY KEY,<br />
                  &nbsp;&nbsp;username VARCHAR(50),<br />
                  &nbsp;&nbsp;email VARCHAR(100)<br />
                  );</code></p>
              <br />
              <p><strong>INSERT</strong> - Adds new records<br />
                <code>INSERT INTO users (username, email) VALUES ('john', 'john@example.com');</code></p>
              <br />
              <p><strong>SELECT</strong> - Retrieves data<br />
                <code>SELECT * FROM users;</code><br />
                <code>SELECT username FROM users WHERE id = 1;</code></p>
              <br />
              <p><strong>UPDATE</strong> - Modifies existing records<br />
                <code>UPDATE users SET email = 'new@example.com' WHERE id = 1;</code></p>
              <br />
              <p><strong>DELETE</strong> - Removes records<br />
                <code>DELETE FROM users WHERE id = 1;</code></p>
              <br />
              <h3>Best Practices</h3><br />
              <p>- Always use PRIMARY KEYs<br />
                - Normalize your database structure<br />
                - Use indexes for frequently queried columns<br />
                - Sanitize inputs to prevent SQL injection<br />
                - Make regular backups</p>
              <br />
              <h3>MySQL in Web Applications</h3><br />
              <p>In PHP, you would typically connect like this:<br />
                <code>
                  $conn = new mysqli("localhost", "username", "password", "mydb");<br />
                  $result = $conn-&gt;query("SELECT * FROM users");<br />
                  while($row = $result-&gt;fetch_assoc()) <br />
                  'username'<br />
                  <br />
                  $conn-&gt;close();<br />
                </code></p>
              <br />
              <p>Modern frameworks often use ORM (Object-Relational Mapping) like:<br />
                - Laravel's Eloquent<br />
                - Django's ORM<br />
                - SQLAlchemy for Python</p>
              <br />
              <h3>Next Steps</h3>
              <p>To deepen your MySQL knowledge:<br />
                1. Learn about JOIN operations<br />
                2. Study database normalization<br />
                3. Explore transactions<br />
                4. Practice with real projects</p>
            </>
          }
        </div>

      </div>
      <Footer />
    </div>
  )
}
