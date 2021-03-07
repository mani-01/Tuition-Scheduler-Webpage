# Tuition Scheduler App

*Cloud Native Fundamental Project 1 - March 2021*

**Table of Contents:**

- [Tuition Scheduler App](#tuition-scheduler-app)
	- [Project Brief & Requirements](#project-brief--requirements)
	- [The App Idea & Current Functionality.](#the-app-idea--current-functionality)
	- [Project Planning](#project-planning)
	- [Risk Assessment](#risk-assessment)
	- [App Architecture and Technologies](#app-architecture-and-technologies)
		- [Architecture](#architecture)
		- [ERD (Database)](#erd-database)
		- [JPA class diagram (Back-End)](#jpa-class-diagram-back-end)
		- [User Flow Diagram (Front-End)](#user-flow-diagram-front-end)
	- [Testing](#testing)
	- [Front-End User Interface](#front-end-user-interface)
	- [Build and Deploy](#build-and-deploy)
	- [Further Analysis](#further-analysis)
		- [Known Issues](#known-issues)
	- [Appendix](#appendix)
		- [Licensing](#licensing)
		- [Contributors](#contributors)
		- [Acknowledgements](#acknowledgements)

**External Resources:**
- [Risk Assessment](https://docs.google.com/spreadsheets/d/1dFfUU2v5ejfZOZtf9a3Yez3vcoumqoICk2Ns2z_MSoM/edit?usp=sharing)
- [Jira](https://mani-reddy.atlassian.net/secure/RapidBoard.jspa?rapidView=4&projectKey=TUT&view=planning&selectedIssue=TUT-30&issueLimit=100)
- [Tuition Scheduler Web App: Hosted on github pages.](https://mani-01.github.io/Tuition-Scheduler-Webpage/)

## Project Brief & Requirements

The goal of this project was to create a [CRUD](https://www.codecademy.com/articles/what-is-crud) application using a variety of tools, methodologies, and technologies that were covered during training.

Below is a set of high-level requirements to be fulfilled for the successful completion of this project:

- Complete a **Jira** board with user stories, use cases and tasks.
- Write documentation describing the architecture used.
- Create a detailed Risk Assessment for the project.
- Create a **SQL** relational database used to store data persistently for the project.
- Create a Persistence API in **Java** that meets the requirements set on Jira.
- Using **HTML**, **CSS** and **JavaScript**, create a functioning front-end website and integrate API.
- Design automated tests for validation of the application using **JUnit** and **Mockito** for unit and integration testing.
- Deploy the MySQL database onto a **GCP** instance.
- Integrate the code fully into the version control system, **Git**.
  
## The App Idea & Current Functionality.
A tuition scheduler web app created for teachers/tutors to maintain their students' details. It allows the user to **create, read, update, and delete** student entries from a database.
  
- When the user opens the webpage to the homepage, they can see a list of students currently stored in the database with their first name, last name, and student ID displayed in a card layout.
- When a card is clicked all the student's information (age, parent's name and contact number) is displayed as a modal popup, along with options to edit the contact number, delete the student entirely, or close the modal.
- To update the contact number, the user would click on the edit button. Upon clicking the edit button, an input box would appear where the user can enter the new contact number, along with a save button where the user can save this to the database through the API.
- There are checks happening in the front end when the user enters the details in the input forms, so for example, when a contact number that is entered is too long, an error message will appear.
- There is also a clear button to add a new student that will allow the user to create a new student entry in the database through the API. Upon clicking submit, the regex checks would occur and display the error field to the user if there are any errors. If not, a put request is sent, then the page is refreshed showing the new card at the bottom of the stack.


## Project Planning
Project planning was done in Jira. The Tuition Scheduler web app initiative was split into 3 main epics that were then broken down into multiple user stories. The user stories are features of the project written from the user's perspective in the form of 'As a..., I want to..., so that...' An example of a user stories that was written up for this is: 
- As a user, I want to add new students to the app, so that I can enrol new students when they join.

The user stores were then given story points based on the relative effort it took to complete them, along with the subtasks for each user story. The example user story and its subtasks can be seen on Jira below:
![jira-add-new-student-user-story](https://user-images.githubusercontent.com/47571755/110242711-339cf380-7f4f-11eb-840e-e53df4967918.png)

The user stories were then put into respective sprints and a kanban board was used to track progress. Below is the Development and Testing Sprint Kanban board as the project was nearing completion:
![jira-development-testing-sprint](https://user-images.githubusercontent.com/47571755/110243016-82975880-7f50-11eb-8584-54b6e6cd9c6c.png)
[The completed user stories and the current backlog can be accessed on Jira here.](https://mani-reddy.atlassian.net/secure/RapidBoard.jspa?rapidView=4&projectKey=TUT&view=planning&selectedIssue=TUT-30&issueLimit=100)

## Risk Assessment
Below is the risk assessment that was conducted for the project: 
![risk-assessment-matix](https://user-images.githubusercontent.com/47571755/110243871-29c9bf00-7f54-11eb-80ce-51bec34cd0a1.png)

[Risk Assessment on Google Drive.](https://docs.google.com/spreadsheets/d/1dFfUU2v5ejfZOZtf9a3Yez3vcoumqoICk2Ns2z_MSoM/edit?usp=sharing)








## App Architecture and Technologies
### Architecture
This app utilises Spring Boot's multi-layered architecture in which there are 4 layers:
- Presentation Layer - Front-end layer responsible for taking JSON inputs and performing a representation state transfer from JSON to plain-old-java-objects, and displaying errors if user inputs do not adhere to specified formats.
- Business Layer - Handles the business logic of the application.
- Persistence Layer - Contains database queries allowing translation from Java objects to database rows.
- Database Layer - Contains the MySQL database. CRUD is performed in this area. The database layer is hosted on a GCP instance.

The diagram below shows the interactions between the 4 layers for this specific app with technologies used at each stage.
![Multitiered-architecture diagram](https://user-images.githubusercontent.com/47571755/110241057-bb323480-7f46-11eb-8bdd-77270b70b023.jpg)



### ERD (Database)
An entity relationship diagram of a database shows the relationships between the tables in the database. It was created early on in the project to get an understanding of the structure of the web app. The MySQL database has been hosted on Google Cloud Platform. Currently, only one table has been implemented - the student table. The ERD below shows the plans to expand the database.  
![scheduler-erd](https://user-images.githubusercontent.com/47571755/110244786-54b61200-7f58-11eb-86f7-f06e539a2e01.jpg)


### JPA class diagram (Back-End)
This UML diagram describes the structure of the API.
![scheduler-jpa-uml](https://user-images.githubusercontent.com/47571755/110245654-0efb4880-7f5c-11eb-8687-5d8c55fceeeb.png)

### User Flow Diagram (Front-End)
A user flow diagram is a flow chart that shows the journey the user can take through the app. Having a user flow diagram was very useful when coding the front-end, as it gave a clear idea of the options a user has when navigating through the app.
![scheduler-user-flow](https://user-images.githubusercontent.com/47571755/110246641-49ff7b00-7f60-11eb-98d9-2069e14bfc73.png)



## Testing
Testing is the process of checking for bugs in code. It is vital because if any changes happen to the code base, you would have to run the test to check that any code-breaking changes weren't made. 

Testing was conducted using the unit testing framework, JUnit, and Mockito to isolate the behaviour of an object by creating a 'mock' object to ensure the real dependencies are not used.

A 'Given', 'When', 'Then' approach was taken. A set of Java objects were converted to JSON and were used as inputs into the test to simulate the front-end. The JSON objects were sent through the API creating a table row in the database, which was then received and compared against the simulated data for a match. The 'verify' method was used to ensure the method that is being tested had been called.

In this project, testing is automatically conducted as one of the steps Maven build lifecycle. More about the build lifecycle in the Deployment section. 

The screenshot below shows the results for all the tests, with all the methods tested resulting in an 88% coverage.

![spring-boot-testing-coverage-and-tests-run](https://user-images.githubusercontent.com/47571755/110247522-92b93300-7f64-11eb-8d2f-383b026672e1.png)

## Front-End User Interface
Front end technologies that were used included, JavaScript, HTML 5 CSS, and Bootstrap 5. The webpage is currently hosted on GitHub pages.

When the user opens the webpage the front-end sends a GET request to the API. The user is presented with a list of all the students currently in the database in the form of clickable bootstrap cards.

![front-end-home-page](https://user-images.githubusercontent.com/47571755/110248254-11fc3600-7f68-11eb-8590-211f3c61c578.png)

There is a card that will allow users to enroll new students. Upon clicking on it, the user would be presented with a modal with a form where the user can enter the information.

![add-new-student-modal](https://user-images.githubusercontent.com/47571755/110248437-065d3f00-7f69-11eb-8422-b680c1803111.png)

If the user enters the details incorrectly (for example, the user enters an age greater than 100), or leaves the field empty, they are presented with an error at the bottom of the modal.

![add-new-student-modal-incorrect-inputs](https://user-images.githubusercontent.com/47571755/110248512-808dc380-7f69-11eb-8285-94913a233982.png)


Once the user clicks submit, the front-end converts the user inputs into JSON format and sends a POST request to the API. The page is refreshed so that the front-end can send another GET request, letting the user see the new student at the bottom of the card stack. 

![new-user-created](https://user-images.githubusercontent.com/47571755/110248556-b337bc00-7f69-11eb-8147-9e7c2f948407.png)

When the user clicks on one of the cards, they are presented with the modal that shows all the information of that student that is on the database, along with options to edit the contact number or delete the student from the database by sending a DELETE request to the API.

![update-delete-modal](https://user-images.githubusercontent.com/47571755/110248745-90f26e00-7f6a-11eb-8a93-41c42cc440bb.png)

If the user decides to edit the contact number, they are shown a field where they can enter the new contact number. A similar check of the input is done when the user enters an invalid number (letters in the phone number field). When the user saves, a PUT request is sent to the API and the page refreshes, showing the updated contact number when the card is clicked.

![edit-contact-number-field](https://user-images.githubusercontent.com/47571755/110249898-728f7100-7f70-11eb-8844-27204320b07c.png)


## Build and Deploy
To build the app, open up the terminal/command prompt and navigate to the root folder of the web app and issue the command `mvn package` This is a maven phase, so running this command will execute and run `validate` `compile`, `test` and `package`, to finally generate a .jar file.

The output of this, when run in terminal, can be seen below. All tests have passed and the .jar file has been built successfully
![maven-package-command-output](https://user-images.githubusercontent.com/47571755/110250265-5c82b000-7f72-11eb-942c-e09978a41d52.png)

A CI pipeline can be implemented but has not for this project as of yet.

Once a GCP instance for MySQL Database has been created, the user can run `mvn spring-boot:run` to run the API on the localhost and open the site on GitHub pages to use the app.

## Further Analysis
### Known Issues

One of the problems with this app is that although the front-end and the database are deployed, the API is running on localhost. This means that if someone would want to use this app, they would need to keep the API running on their computer. This problem could be solved by hosting the .jar file onto GCP's App Engine instance, but this is something that this project has not covered.

With regards to the front-end, I would like to implement an authentication system, which would allow multiple users to access their own set of students in their own database. This login feature is vital to maintaining personal information secure.

The current ERD shows the other tables in the database and functionality that has yet to be implemented in the front-end (courses manager, lesson planner). This is due to the time constraints of this project.

In the back-end, there are methods in the controller that can perform a 'read by student ID', and a 'find by student name'. These methods can be used to implement a search feature on the front-end in the future.

When editing the contact number, the user is not able to change any of the other information (like first name, last name) about the student without first deleting the student and creating a new one with the updated information.

Once the fetch method is run to put or post information to the API, the whole webpage has to be refreshed to present the new data.


## Appendix
### Licensing
This project is licenced under the MIT licence. Information about this can be found in [LICENSE.md](https://github.com/mani-01/Tuition-Scheduler-Back-End/blob/Dev/LICENSE)

### Contributors
Tuition Scheduler Version 1 Author: **Manish Reddy**

### Acknowledgements
I would like to acknowledge:
- The trainers at QA for giving me the skills for the successful completion of this project.
- My peers at QA for support and entertainment during this project.
- My mum for giving me the idea for this app.
