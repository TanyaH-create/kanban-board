# Kanban Board

The Kanban Board is a full-stack application that includes user authentification sing JSON Web Tokens (JWT). The application allows users to login securely and manage tasks.

## Table of Contents
- [Features](#features)
- [Deployed Application](#deployed-application) 
- [Installation](#installation)

- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [Questions](#questions)


## Features
- Secure login page with username and password authentification
- Ability to add new tasks, edit tasks and migrate tasks from "to do" to "in process" to "done"
- JWT-based authentification for API requests
- Tokens stored securely in local storage
- Session expiration handling with automatic logout
- Proetected routes to prevent unauthorized access

![LandingPage](https://github.com/user-attachments/assets/a0c16886-270f-4525-9e45-73419f89af92)  ![Login1](https://github.com/user-attachments/assets/293aa9aa-553d-4625-924e-7164d3ebb668)  

![newticket](https://github.com/user-attachments/assets/c09030a6-e499-4a4b-8aa6-715ea17324cd) ![EditTicket](https://github.com/user-attachments/assets/25a6792c-02bb-4639-97f1-421566e95f6c)

 ![Board](https://github.com/user-attachments/assets/e7bf6218-61f3-4fcc-874e-8470cd458612) 


## Deployed Application
Check out my live portfolio application [here](https://kanban-board-5nz8.onrender.com/)

## Installation
If you'd like to clone the repository and run the project locally:

1. Clone the repository to your local machine:
   ```bash
   git clone git@github.com:TanyaH-create/kanban-board.git
   
2. Navigate to the project directory 
   ```bash
   cd candidate-search

3. Install required dependencies:
   ```bash
   npm install
   
4. Set up environment variables (create a .env file in the root directory)
    ~~~bash
    DB_NAME='kanban_db'
    DB_USER='postgres'
    DB_PASSWORD='your_password'
    JWT_SECRET_KEY='secret_key_used_for_token'

6. Run the development server
   ~~~bash
   npm run dev

7. Open your browser and go to http://localhost:3001 to view the project.


## GitHub Repository
The source code for this project can be found in my [GitHub Repository](https://github.com/TanyaH-create/kanban-board) .

## Technologies Used
- Frontend: React, Typescript
- Backend: Node.js,  Express
- Storeage: Local Storage
- Database: PostgreSQL
- Authentification and passwork protection: JSON Web Tokens (JWT), bcrypt
- Deployment: Render

## Contributing
Contributions are welcome! Please follow these steps:
1.	Fork the repository.
2.	Create a new branch for your feature or bug fix:
    ```bash
    git checkout -b feature-name
3.	Commit your changes:
    ```bash
    git commit -m "Add feature-name"
4.	Push your branch:
    ```bash
    git push origin feature-name
5.	Submit a pull request.
  
## License
This project is licensed under the MIT License.


## Questions

 If you have any questions, feel free to contact me at dougtanyah@gmail.com.

 You can also find me on GitHub at [TanyaH-create](https://github.com/TanyaH-create).
