# Vite React GitHub Pull Requests App

This is a simple web application built with Typescript and React that recreates a simplified version of the GitHub Pull Requests page. The application allows users to input a GitHub repository URL and fetch a list of Pull Requests from the provided repository using the GitHub API. It dynamically renders the Pull Requests on the page with information such as the PR name, author, and the number of comments.

## Features

- Fetch and display a list of Pull Requests from a GitHub repository.
- Allow users to input the GitHub repository URL (e.g., "https://github.com/facebook/react/pulls").
- Display information for each Pull Request, including the PR name, author, and comment count.
- Ensure that the web page is responsive and works well on both desktop and mobile screens.
- Include accessibility features for improved usability.

## Technologies Used

- [Vite](https://vitejs.dev/): A build tool that leverages the power of native ES modules to deliver a fast development experience.
- [React](https://reactjs.org/): A popular JavaScript library for building user interfaces.
- [GitHub API](https://developer.github.com/v3/): Used to fetch Pull Requests data from GitHub repositories.

## Getting Started

To get this application up and running on your local machine, follow these steps:


1. Navigate to the project directory:

   ```bash
   cd pull-requests
   ```

2. Install the project dependencies:

   ```bash
   npm install
   ```


3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and access the application at [http://localhost:5173](http://localhost:5173/?).

## Usage

1. On the application's homepage, you will find an input field labeled "GitHub Repository URL."

2. Enter the URL of the GitHub repository you want to fetch Pull Requests from (e.g., "https://github.com/facebook/react/pulls").

3. Click the "Search" button to initiate the request to the GitHub API.

4. The Pull Requests will be displayed on the page, including their names, authors, and comment counts.

5. The web page is designed to be responsive and should work well on both desktop and mobile screens.

## Accessibility Features

This application has been designed with accessibility in mind to ensure that it can be used by a wide range of people, including those with disabilities. Some of the accessibility features included are:

- Proper semantic HTML elements for screen readers.
- Clear and concise labels and instructions for form elements.


## Test

 ```bash
   npm t
   ```
---------------------------------|---------|----------|---------|---------|-------------------
File                             | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
---------------------------------|---------|----------|---------|---------|-------------------
All files                        |   96.51 |    84.61 |    91.3 |   96.34 |                   
 src                             |     100 |      100 |     100 |     100 |                   
  App.tsx                        |     100 |      100 |     100 |     100 |                   
 src/components/PullRequestsList |     100 |       50 |     100 |     100 |                   
  PullRequestRow.tsx             |     100 |      100 |     100 |     100 |                   
  PullRequestsList.tsx           |     100 |       50 |     100 |     100 | 25                
 src/components/Search           |     100 |      100 |     100 |     100 |                   
  Search.tsx                     |     100 |      100 |     100 |     100 |                   
 src/components/shared           |     100 |      100 |     100 |     100 |                   
  ErrorMessage.tsx               |     100 |      100 |     100 |     100 |                   
  Loading.tsx                    |     100 |      100 |     100 |     100 |                   
 src/hooks                       |   92.85 |      100 |    87.5 |    92.3 |                   
  useSearchPullRequests.ts       |   92.85 |      100 |    87.5 |    92.3 | 35,49             
 src/pages                       |   94.11 |       90 |      75 |   93.33 |                   
  PullRequestsPage.tsx           |   94.11 |       90 |      75 |   93.33 | 13                
---------------------------------|---------|----------|---------|---------|-------------------

