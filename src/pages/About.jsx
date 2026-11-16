
import {
  FaReact,
  FaRoute,
  FaDatabase,
} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

function About() {
  const technologies = [
    {
      name: "React",
      description: "Building reusable components and interactive interfaces.",
      icon: <FaReact className="text-cyan-500" />,
    },
    {
      name: "React Router",
      description: "Managing navigation and page routing.",
      icon: <FaRoute className="text-red-500" />,
    },
    {
      name: "Tailwind CSS",
      description: "Creating responsive and modern designs.",
      icon: <SiTailwindcss className="text-sky-500" />,
    },
    {
      name: "Fake Store API",
      description: "Fetching sample products for the application.",
      icon: <FaDatabase className="text-orange-500" />,
    },
  ];

  return (
    <main className="bg-gray-50 min-h-screen">

      {/* Hero Section */}
      <section className="bg-gray-900 text-white px-6 py-20 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-gray-400 mb-4">
          Get to know the project
        </p>

        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          About <span className="text-blue-400">ShopSphere</span>
        </h1>

        <p className="max-w-2xl mx-auto text-gray-300 text-lg leading-relaxed">
          A personal e-commerce project built to learn, experiment,
          and improve my frontend development skills.
        </p>
      </section>

      {/* Project Introduction */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-5">
            About the Project
          </h2>

          <p className="text-gray-600 leading-8">
            ShopSphere is a personal learning project developed
            for practice purposes. It was created to gain hands-on
            experience in building modern web applications using
            React. Through this project, I practice component
            creation, state management, routing, API integration,
            and responsive web design.
          </p>

          <p className="text-gray-600 leading-8 mt-4">
            This project simulates a simple online shopping
            experience where users can browse products, view
            product information, add items to their cart, and
            manage their selected products.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 pb-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900">
            Technologies Used
          </h2>
          <p className="text-gray-500 mt-3">
            Tools and technologies used to build ShopSphere.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="bg-white rounded-xl p-6 shadow-sm
              hover:shadow-md transition duration-300
              flex items-start gap-5"
            >
              <div className="text-3xl mt-1">
                {tech.icon}
              </div>

              <div>
                <h3 className="font-bold text-lg text-gray-900">
                  {tech.name}
                </h3>

                <p className="text-gray-500 mt-2 leading-relaxed">
                  {tech.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 pb-16">
        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-8 md:p-10 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Built for Learning
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto leading-8">
            ShopSphere is not a real online shopping platform.
            It is a practice project created to strengthen my
            understanding of frontend development and explore
            how e-commerce applications work.
          </p>

          <p className="font-semibold text-blue-600 mt-6">
            Learn. Build. Improve.
          </p>
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-400 text-center py-6 px-4">
        <p>© 2026 ShopSphere. Built for learning and practice.</p>
      </footer>

    </main>
  );
}

export default About;
