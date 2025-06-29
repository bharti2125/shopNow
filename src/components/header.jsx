import React from "react";

const Header = () => {
  return (
    <>
      <header>
        <div className="sticky top-0 z-50 bg-white">
          <div className="border-b">
            <div className="container mx-auto px-4">
              <div className="flex flex-wrap items-center justify-center lg:justify-start">
                <a
                  href="/"
                  className="flex items-center my-2 lg:my-0 lg:mr-auto text-white no-underline "
                >
                  <img
                    src="https://cdn.dribbble.com/userupload/17039932/file/original-983633d1f6de58f5d871f174ff34f057.jpg?resize=400x0"
                    className="mr-2"
                    width="99"
                    height="92"
                    role="img"
                    aria-label="Shop-now"
                  />
                </a>
                <ul className="flex text-2xl my-2 justify-center space-x-6">
                  <li>
                    <a
                      href="/"
                      className="flex flex-col items-center text-black hover:text-blue-600"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        className="mb-1"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z" />
                      </svg>
                      Home
                    </a>
                  </li>

                  <li>
                    <a
                      href="/products"
                      className="flex flex-col items-center text-black hover:text-blue-600"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        className="mb-1"
                        viewBox="0 0 16 16"
                      >
                        <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5z" />
                      </svg>
                      Products
                    </a>
                  </li>

                  <li>
                    <a
                      href="/cart"
                      className="flex flex-col items-center text-black hover:text-blue-600"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        className="mb-1"
                        viewBox="0 0 16 16"
                      >
                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                      </svg>
                      Cart
                    </a>
                  </li>

                  <li className="relative group">
                    <div className="flex flex-col items-center text-black cursor-pointer">
                      <a href="/profile">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="currentColor"
                          className="mb-1"
                          viewBox="0 0 16 16"
                        >
                          <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                          <path
                            fillRule="evenodd"
                            d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                          />
                        </svg>

                        <span className="">Profile</span>
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="py-2 border-b mb-3">
            <div className="container mx-auto px-4 flex flex-wrap justify-center items-center">
              <form className="flex-1 max-w-2xl mr-auto" role="search">
                <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                  <span className="px-3 py-2 bg-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="text-gray-500"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                    </svg>
                  </span>
                  <input
                    type="search"
                    className="flex-1 px-3 py-2 border-0 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Search by new products....."
                    aria-label="Search"
                  />
                </div>
              </form>

              <div className="flex items-center space-x-2">
                <a
                  href="/login"
                  className="px-4 py-2 text-blue-700 underline hover:text-blue-600"
                >
                  Login
                </a>
                <a
                  href="/signup"
                  className="px-4 py-2 bg-blue-600 text-white rounded  hover:bg-blue-900"
                >
                  Sign-up
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
