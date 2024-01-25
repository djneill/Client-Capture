# Client-Capture Repository Readme

---

## Overview

Welcome to the Client-Capture repository! This project is designed to cater to the needs of small and mid-size businesses by providing a platform for efficiently creating and managing a customer database. With Client-Capture, users can customize forms to capture specific information and notes relevant to their business. The repository offers features such as searching, sorting, and sending forms to customers for easy and organized data collection.

## Key Features

### 1. Custom Forms

Client-Capture allows businesses to create personalized forms tailored to their specific requirements. Users can choose which information and notes they want to capture, ensuring flexibility and adaptability to diverse business needs.

### 2. Customer Database Management

Effortlessly manage your customer database by utilizing the search and sort functionalities. Find relevant information quickly and keep your customer list organized for streamlined business operations.

### 3. Form Distribution

Simplify the data collection process by sending forms directly to customers. This feature enables businesses to efficiently gather information from clients, ensuring accuracy and completeness in their customer database.

## Getting Started

Follow these steps to get started with Client-Capture:

1. **Clone the Repository:**

git clone https://github.com/djneill/client-capture.git


2. **Install Dependencies:**

npm install
npm install @clerk/nextjs
npx shadcn-ui@latest init
npx shadcn-ui@latest add (optional to add componenets)
npm install next-themes

3. **.env**
- NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=​
- CLERK_SECRET_KEY=
- NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
- NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
- NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
- NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

4. **Configure Database:**
- Set up the database connection in the configuration file.
- Run migrations to initialize the database schema.

5. **Run the Application:**

npm start


6. **Access the Application:**
Open your web browser and navigate to [http://localhost:3000](http://localhost:3000) to access Client-Capture.

## Contribution Guidelines

We welcome contributions from the community! If you would like to contribute to Client-Capture, please follow our [Contribution Guidelines](CONTRIBUTING.md) to ensure a smooth and collaborative development process.

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use, modify, and distribute the code in accordance with the terms of the license.

## Support

If you encounter any issues or have questions, please check the [FAQs](docs/FAQ.md) or open an [issue](https://github.com/djneill/client-capture/issues). We appreciate your feedback and contributions!

Happy coding with Client-Capture! 🚀
# Client-Capture
