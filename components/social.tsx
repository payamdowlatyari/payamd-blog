/**
 * A component that renders social media links.
 *
 * @returns A JSX element with social media links.
 */
export const Social = () => {
  return (
    <div className="col-span-4 sm:col-span-2 md:col-span-2 lg:col-span-1 xl:col-span-1">
      <ul className="mb-4 -ml-2 flex md:order-1 md:mb-0">
        <li>
          <a
            className="text-muted inline-flex items-center rounded-lg p-2.5 text-sm focus:outline-none focus:ring-4 text-gray-600 dark:text-gray-300 hover:text-gray-50 dark:hover:text-gray-950 hover:bg-gray-700 dark:hover:bg-gray-100 focus:ring-gray-100 dark:focus:ring-gray-700 transition duration-500 ease-in-out"
            aria-label="Twitter"
            href="https://twitter.com/payamdowlatyari"
            target="_blank"
          >
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M11.3214 8.93666L16.4919 3.05566H15.2667L10.7772 8.16205L7.1914 3.05566H3.05566L8.47803 10.7774L3.05566 16.9446H4.28097L9.022 11.552L12.8088 16.9446H16.9446L11.3211 8.93666H11.3214ZM9.64322 10.8455L9.09382 10.0765L4.72246 3.95821H6.60445L10.1322 8.8959L10.6816 9.66481L15.2672 16.083H13.3852L9.64322 10.8458V10.8455Z"
                fill="currentColor"
              />
            </svg>
          </a>
        </li>

        <li>
          <a
            className="text-muted inline-flex items-center rounded-lg p-2.5 text-sm focus:outline-none focus:ring-4 text-gray-600 dark:text-gray-300 hover:text-gray-50 dark:hover:text-gray-950 hover:bg-gray-700 dark:hover:bg-gray-100 focus:ring-gray-100 dark:focus:ring-gray-700 transition duration-500 ease-in-out"
            aria-label="LinkedIn"
            target="_blank"
            href="https://www.linkedin.com/in/payamdowlatyari/"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              className="h-5 w-5"
            >
              <path
                fill="currentColor"
                d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
              ></path>
            </svg>
          </a>
        </li>

        <li>
          <a
            className="text-muted inline-flex items-center rounded-lg p-2.5 text-sm focus:outline-none focus:ring-4 text-gray-600 dark:text-gray-300 hover:text-gray-50 dark:hover:text-gray-950 hover:bg-gray-700 dark:hover:bg-gray-100 focus:ring-gray-100 dark:focus:ring-gray-700 transition duration-500 ease-in-out"
            aria-label="Github"
            href="https://github.com/payamdowlatyari"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="h-5 w-5"
            >
              <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
            </svg>
          </a>
        </li>
      </ul>
    </div>
  );
};
