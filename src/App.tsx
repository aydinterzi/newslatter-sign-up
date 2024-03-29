import Card from "./components/Card";

const list = [
  "Products discovery and building what matters",
  "Measuring to ensure updates are a success",
  "And much more!",
];

function App() {
  return (
    <div className="h-dvh bg-charcoal-grey flex items-center justify-center text-base font-normal text-dark-slate-grey">
      <Card>
        <div className="px-10 py-20 flex flex-col w-full gap-6">
          <span className="font-semibold text-6xl">Stay updated!</span>
          <p>Join 60,000+ product managers receiving monthly updates on:</p>
          <ul className="flex flex-col gap-2">
            {list.map((item, index) => (
              <li key={index} className="flex gap-4">
                <div className="flex items-center justify-center w-6 h-6 rounded-full bg-tomato">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>
                {item}
              </li>
            ))}
          </ul>
          <div>
            <label htmlFor="email" className="font-semibold text-sm">
              Email address
            </label>
            <input
              type="email"
              placeholder="email@company.com"
              className="mt-2 w-full p-4 rounded-lg border border-grey focus:border-charcoal-grey focus:text-charcoal-grey focus:font-semibold"
              name="email"
            />
          </div>
          <button className="bg-charcoal-grey text-white p-4 rounded-lg hover:bg-tomato hover:bg-gradient-to-l">
            Subscribe to monthly newsletter
          </button>
        </div>
        <img
          src="illustration-sign-up-desktop.svg"
          alt="ilustration sign up"
          className="w-full h-[600px] rounded-none"
        />
      </Card>
    </div>
  );
}

export default App;
