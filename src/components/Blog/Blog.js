import React from "react";
import { Helmet } from "react-helmet-async";
<Helmet>
  <title>Home | Order Review</title>
</Helmet>;
const Blog = () => {
  return (
    <div className="w-9/12 mx-auto my-5">
      <Helmet>
        <title>Blog | Order Review</title>
      </Helmet>
      <h2 className="text-3xl my-2">Difference between SQL and NoSQL?</h2>
      <div>
        <p className="mt-5">
          <span className="font-semibold">Type</span> – SQL databases are
          primarily called as Relational Databases (RDBMS); whereas NoSQL
          database are primarily called as non-relational or distributed
          database.
        </p>
        <p className="mt-5">
          <span className="font-semibold">Language</span> – SQL databases
          defines and manipulates data based structured query language (SQL).
          Seeing from a side this language is extremely powerful. SQL is one of
          the most versatile and widely-used options available which makes it a
          safe choice especially for great complex queries. But from other side
          it can be restrictive. SQL requires you to use predefined schemas to
          determine the structure of your data before you work with it. Also all
          of your data must follow the same structure. This can require
          significant up-front preparation which means that a change in the
          structure would be both difficult and disruptive to your whole system.
          A NoSQL database has dynamic schema for unstructured data. Data is
          stored in many ways which means it can be document-oriented,
          column-oriented, graph-based or organized as a KeyValue store. This
          flexibility means that documents can be created without having defined
          structure first. Also each document can have its own unique structure.
          The syntax varies from database to database, and you can add fields as
          you go.
        </p>
        <p className="mt-5">
          <span className="font-semibold">Scalability</span> – In almost all
          situations SQL databases are vertically scalable. This means that you
          can increase the load on a single server by increasing things like
          RAM, CPU or SSD. But on the other hand NoSQL databases are
          horizontally scalable. This means that you handle more traffic by
          sharding, or adding more servers in your NoSQL database. It is similar
          to adding more floors to the same building versus adding more
          buildings to the neighborhood. Thus NoSQL can ultimately become larger
          and more powerful, making these databases the preferred choice for
          large or ever-changing data sets.
        </p>
        <p className="mt-5">
          <span className="font-semibold">Structure</span> – SQL databases are
          table-based on the other hand NoSQL databases are either key-value
          pairs, document-based, graph databases or wide-column stores. This
          makes relational SQL databases a better option for applications that
          require multi-row transactions such as an accounting system or for
          legacy systems that were built for a relational structure.{" "}
        </p>
        <p className="mt-5">
          <span className="font-semibold">Property followed</span> – SQL
          databases follow ACID properties (Atomicity, Consistency, Isolation
          and Durability) whereas the NoSQL database follows the Brewers CAP
          theorem (Consistency, Availability and Partition tolerance).{" "}
        </p>
        <p className="mt-5">
          <span className="font-semibold">Support</span> – Great support is
          available for all SQL database from their vendors. Also a lot of
          independent consultations are there who can help you with SQL database
          for a very large scale deployments but for some NoSQL database you
          still have to rely on community support and only limited outside
          experts are available for setting up and deploying your large scale
          NoSQL deployments.
        </p>
      </div>
      <h2 className="text-2xl my-2">What is JWT, and how does it work?</h2>
      <p className="my-2">
        JSON Web Token (JWT) is an open standard (RFC 7519) that defines a
        compact and self-contained way for securely transmitting information
        between parties as a JSON object. This information can be verified and
        trusted because it is digitally signed. JWTs can be signed using a
        secret (with the HMAC algorithm) or a public/private key pair using RSA
        or ECDSA.{" "}
      </p>{" "}
      <p>
        Although JWTs can be encrypted to also provide secrecy between parties,
        we will focus on signed tokens. Signed tokens can verify the integrity
        of the claims contained within it, while encrypted tokens hide those
        claims from other parties. When tokens are signed using public/private
        key pairs, the signature also certifies that only the party holding the
        private key is the one that signed it.
      </p>
      <h3 className="text-2xl my-2">
        What is the difference between javascript and NodeJS?
      </h3>
      <p className="my-2">
        <span className="font-semibold">NodeJS : </span>
        NodeJS is a cross-platform and opensource Javascript runtime environment
        that allows the javascript to be run on the server-side. Nodejs allows
        Javascript code to run outside the browser. Nodejs comes with a lot of
        modules and mostly used in web development. NodeJS is a Javascript
        runtime environment. We can run Javascript outside the browser with the
        help of NodeJS.
      </p>
      <p>
        {" "}
        <span className="font-semibold">JavaScript : </span>
        Javascript is a Scripting language. It is mostly abbreviated as JS. It
        can be said that Javascript is the updated version of the ECMA script.
        Javascript is a high-level programming language that uses the concept of
        Oops but it is based on prototype inheritance. Javascript is a
        programming language that is used for writing scripts on the website.
        Javascript can only be run in the browsers.
      </p>
      <h2 className="text-2xl my-2">
        How does NodeJS handle multiple requests at the same time?
      </h2>
      <p className="my-2">
        NodeJS receives multiple client requests and places them into
        EventQueue. NodeJS is built with the concept of event-driven
        architecture. NodeJS has its own EventLoop which is an infinite loop
        that receives requests and processes them. EventLoop is the listener for
        the EventQueue.
      </p>
      <p>
        If NodeJS can process the request without I/O blocking then the event
        loop would itself process the request and sends the response back to the
        client by itself. But, it is possible to process multiple requests
        parallelly using the NodeJS cluster module or worker_threads module.
      </p>
    </div>
  );
};

export default Blog;
