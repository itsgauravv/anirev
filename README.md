![Image 11-11-24 at 9 29 PM](https://github.com/user-attachments/assets/23061799-738e-4ea6-aa03-720599e4a884)

# Anime Review Platform

This platform is a space for anime lovers to create, post, and read reviews. Users can share their thoughts on anime series, browse other reviews, and explore the community’s best picks—all with a sleek, minimalistic UI.

🔗 **Live Link: https://anirev.vercel.app**

📋 **Table of Contents**
- 🤖 Introduction
- ⚙️ Tech Stack
- 🔋 Features
- 🤸 Quick Start
- 🕸️ Snippets (Code to Copy)
- 🔗 Assets
- 🚀 More
- 🚨 Tutorial

---

## 🤖 Introduction


Whether you're an anime fan or a developer, this platform allows for easy content sharing with dynamic updates, social logins, and a clean user experience.

If you encounter any issues or need help, join our **active Discord community** with over 34k members. It's the perfect place for advice, discussions, and community support.

---

## ⚙️ Tech Stack
- **React 19**
- **Next.js 15**
- **Sanity**
- **TailwindCSS**
- **ShadCN**
- **TypeScript**

---

## 🔋 Features
- **Live Content API:** Dynamically loads the latest anime reviews from Sanity.
- **GitHub Authentication:** Easily log in with your GitHub account.
- **Pitch Submission:** Submit anime reviews with a title, description, category, and multimedia (image or video).
- **View Reviews:** Browse reviews with filtering options by genre or rating.
- **Review Details Page:** Click on any review to view detailed content and associated media.
- **Profile Page:** View a list of reviews you’ve submitted.
- **Editor Picks:** Highlight top reviews using the "Editor Picks" feature.
- **Views Counter:** Track how many people are reading your reviews (no upvote system).
- **Search:** Quickly find specific reviews with the built-in search function.
- **Minimalistic Design:** Simple and clean UI for an optimal browsing experience.

---

## 🤸 Quick Start

Follow these steps to set up the project locally.

### Prerequisites
Ensure the following are installed on your machine:
- Git
- Node.js
- npm (Node Package Manager)

### Cloning the Repository
Clone the project to your local machine:
```bash
git clone https://github.com/YourUsername/anime-review-platform.git
cd anime-review-platform
```

### Installation
Install the necessary dependencies:
```bash
npm install
```

### Set Up Environment Variables
Create a .env.local file in the root directory and add the following content:
```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=
NEXT_PUBLIC_SANITY_API_VERSION='vX'
SANITY_TOKEN=

AUTH_SECRET= 
AUTH_GITHUB_ID=
AUTH_GITHUB_SECRET=
```




