import { FC } from "react";

const About: FC = () => {
  return (
    <div>
      <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-blue-600 mb-4">About Us</h2>
        <p className="text-gray-600 mb-6">
          Lorem ipsum dolor sit amet erat, consectetur et adipiscing elit, sed
          diam nonummy nibh nisi do eiusmod quis nostrud exercitation ad minim
          quis nostrud mar incididunt ut labore et dolore.
        </p>
        <a
          href="#"
          className="bg-blue-500 text-white hover:bg-blue-400 py-2 px-4 rounded-lg"
        >
          LEARN MORE
        </a>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col items-center">
            <img
              aria-hidden="true"
              alt="icon-user"
              src="https://openui.fly.dev/openui/100x100.svg?text=👤"
            />
            <p className="text-gray-600 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img
              aria-hidden="true"
              alt="icon-email"
              src="https://openui.fly.dev/openui/100x100.svg?text=✉️"
            />
            <p className="text-gray-600 mt-2">
              Ut enim ad minim veniam, quis nostrud exercitation.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img
              aria-hidden="true"
              alt="icon-check"
              src="https://openui.fly.dev/openui/100x100.svg?text=✔️"
            />
            <p className="text-gray-600 mt-2">
              Incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
