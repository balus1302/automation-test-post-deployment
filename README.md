# automation-test-post-deployment
Goal of this project is to check the frontend service can successfully communicate with the backend
service by validating the frontend meesage.

## Project Structure
+ **github\workflows**
    + main.yml

+ **playwright-report**
    + index.html

+ **tests**
    + 001-MessageVerificationTest.spec.js
        

+ **.gitignore**
+ **package-lock.json**
+ **package.json**
+ **playwright.config.js**
+ **README.md**


Above mentioned folders/files except README.md are necessary to run project. 

## Steps to setup and Run the project
To run project, following dependencies should be installed in your system.

### node.js
* Install node.js:
```
https://nodejs.org/en
```

* Verify installation with:
```
node -v
```
* It will install Node package manager (npm) automatically, verify installation with
```
npm -v
```

* Install VS Code

** Create a Project Folder, go to that folder type cmd on folder path and then .code to open the project


* Install Playwright
```
npm init playwright@latest
```

* use following in case of above command does not work
```
npm install -D @playwright/test
```

* Follow the steps popped up on the terminal to get installation completed


* Verify installation with:
```
npm playwright -v
```

* To run the tests, run following command from the terminal
```
npx playwright test
```

* To see the test result
```
npx playwright show-report
```
