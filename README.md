# Next.js Portfolio Landing Page - Mugs Internship Assignment

Hello! Warm greetings & a hearty welcome to the repository of a **_Portfolio Landing Page_**, a project completed as part of an internship hiring process. This project is a replication of a [Figma Design](<https://www.figma.com/design/G3JZiOjVIultGuheCZ3uqR/Personal-Portfolio-Landing-Page-For-Free-(Community)>) using **Next.js**, with additional features and optimizations that go beyond the original assignment requirements.

## Table of Contents

-   [Objective](#objective)
-   [Project Overview](#project-overview)
-   [Hosting & Deployment](#hosting-and-deployment)
-   [Live Working](#live-working)
-   [Setting up locally](#setting-up-locally)
-   [Directory Structure](#directory-structure)
-   [Additional Features](#additional-features)
-   [Code Quality & Best Practices]()
-   [Conclusion]()

### Objective

The goal of this project was to replicate a portfolio landing page exactly as specified in the provided Figma design. The task involved using the Next.js framework, structuring the project components properly, and hosting the final product on a platform like Vercel. The requirements were clear: accuracy, performance, and clean code were paramount.

### Project Overview

The project began with a detailed analysis of the Figma design, ensuring every detail was captured—from layout to typography, colors, and responsiveness. I meticulously broke down the page into reusable components and structured the project following best practices for Next.js development.

However, I didn’t stop at mere replication. I envisioned a more dynamic, user-friendly, and aesthetically pleasing experience. Thus, I implemented several extra features that enhance the usability, performance, and visual appeal of the site.

### Hosting and Deployment

The final project is hosted on Vercel, taking full advantage of its seamless integration with Next.js. The deployment process was straightforward, and the site is optimized for fast load times and high availability.

-   Live Site: [https://mugs-portfolio-replication.vercel.app](https://mugs-portfolio-replication.vercel.app)
-   GitHub Repository: [https://github.com/lakshyaCreates/mugs-portfolio-replication](https://github.com/lakshyaCreates/mugs-portfolio-replication)

### Live Working

You can explore the live working of the project by visiting the [deployed site](https://mugs-portfolio-replication.vercel.app), having a thorough look, and scrutinizing the following:

-   **Active Theme Change**: Try switching between the available themes - _light_ & _dark_ modes using the **Mode Toggle** button present in the bottom right corner. Color theme consistency has been maintained throughout the project.
-   **Dynamic Animated Header**: The header is animated in a very neat & best way on the following recurring events:
    -   Case 1: When the user is at the top of the page, i.e., viewing the Hero section, the header is of the floating variant - transparent background & no border.
    -   Case 2: When the user scroll half the hero section, the header gets the properties of background and a border and along with this, the header hides itself from the top, enabling the user to view through the whole screen.
    -   Case 3: When the user scrolls up, the header reveals itself again, enabling user to access the navigation if they want.
-   **Responsiveness**: Resize your browser window or view the site on different devices to see how accurately the layout adapts itself.
-   **Dynamic Project Categories**: Filter out the projects by selecting the project categories in the project section.
-   **Testimonials Slider**: Access the testimonials slider and observe how smoothly & seamlessly the user can access reviews.
-   **Smooth Scrolling**: Scroll slowly and heavily consecutively to see the effect of smooth scrolling which enhances the user experience the most.
-   **Contact Form Working**: Fill out the contact form and submit it to see your information stored and confirmed.

### Setting up Locally

To run this project locally, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/lakshyaCreates/mugs-portfolio-replication.git
    ```
2. Open the project folder which you cloned.
3. Install dependencies:
    ```bash
    pnpm install
    ```
4. Create SQlite database file in the prisma folder and an environment variable file:
    ```bash
    touch ./prisma/sqlite.db
    touch .env
    ```
5. Paste the db file path as url in the `.env` file:
    ```
    DATABASE_URL="file:./sqlite.db"
    ```
6. Run the development server with the following command:
    ```bash
    pnpm dev
    ```
7. Open [http://localhost:3000](http://localhost:3000) or [http://127.0.0.1:3000](http://127.0.0.1:3000) to access the running project in the browser.

-   If you want to run Prisma Studio (to access database information), you can the following command:
    ```bash
    pnpm db:studio
    ```
    -   This command is custom made by adding script in the `package.json` file. The original command to run Prisma Studio is `pnpm dlx prisma studio`.

### Directory Structure

The project is developed using a well-organized directory structure, making it easy to navigate and maintain. The organization practice is as follows:

-   **./src**: All the application main code is within this folder, separating the project configuration files from the main application files.
    -   **./app**: This project uses the app directory / router based routing.
        -   **./(routes)**: Organizational folder that separates all the routed pages, separating the route files from the base configurations files such as _globals.css_ or _layout.tsx_.
    -   **./components**: Contains all the re-usable UI components used throughout the project, such as Header, SectionHeading, SocialsPalette, ModeToggle, shadcn/ui components, etc.
    -   **./lib**: Contains utility files such as utils.ts (holding **cn** function that is used for dynamic tailwind utility class merging) and fonts.ts (holding the fonts used in the project)
    -   **./actions**: Contains all the event-based actions/functions. Such as add-contact.ts holding a server-action function.
    -   **./providers**: Contains providers such as ThemeProvider, etc.
    -   **./hooks**: Contains all the separate files of all hooks made using Zustand to globally access the state.
-   **./prisma**: Manages the Prisma schema, migrations, and SQlite Database used in the project.
-   **./public**: All the publicly accessible files are under this folder.

## Additional Features

### Active Theme Change

**Live Working**: When a user first lands on the page, the default theme is applied, either light or dark depending on the system theme. The user can easily toggle between light or dark modes by clicking the theme toggle button location in the navigation bar. The theme change is immediate and seamless, thanks to Next-Themes & shadcn/ui.

### Dynamic Animated Header

**Live Working**: When the user first lands on the page or at the top of the page, i.e., accessing the hero section, the header is in its transparent variant (with transparent background and no border).

As the user scrolls down the page, the header dynamically animates to adapt a background and a border after a certain part of the hero section is past scrolling. Also at the same time, the header hides itself in the negative top position, enabling user to access the whole screen to view the content.

If the user scrolls upwards, the header then reveals it again, enabling user to access the navigation if needed.

Upon clicking the section navigation link, the page smoothly scrolls itself to the section.

For small and medium devices, the user gets a modern animated hamburger menu.

With all these small event details, the user will have a great experience in both accessing the whole website and also navigating seamlessly throughout.

**Technical Implementation**:

-   The hide and reveal nature of the header is made possible using framer-motion's motion components and changing the required variants using state management. Have a look at the simple implementation:
    ```typescript
    <motion.header
    	variants={headerVariants}
    	initial="close"
    	animate={isHidden ? "close" : "open}
    >
    	{/* code */}
    </motion.header>
    ```
-   Scroll based event is made possible using the `useScroll()` hook from framer-motion and then actively keeping check of the scroll values using the `useMotionValueEvent(scrollY, "change", () => {})` component and dynamic tailwind merge using `cn` function.
-   The self-page smooth scrolling upon section link click is build using GSAP & its ScrollTo plugin.

### Responsiveness

The page is fully responsive, adapting perfectly to any screen size, from large desktop monitors to small mobile devices. The layout, images, typography, and interactive components adjust dynamically to provide an optimal user experience on any device.

---

> PS: _This doc is into further development at the moment!_
