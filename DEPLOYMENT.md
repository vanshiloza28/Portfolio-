# 🚀 Deploying to Render (Unified Setup)

Since the backend is configured to build and serve the React frontend statically in production, you can deploy both frontend and backend together under a **single Render Web Service** for free.

Here are the step-by-step instructions:

---

## Step 1: Push the new `package.json` to GitHub
I have created a root `package.json` that automates installing and building both the frontend and backend. You need to push this file to GitHub:

```bash
git add package.json
git commit -m "chore: add root package.json for unified Render deployment"
git push
```

---

## Step 2: Create a Web Service on Render
1. Go to [Render Dashboard](https://dashboard.render.com/) and sign in.
2. Click **New +** and select **Web Service**.
3. Connect your GitHub repository: `vanshiloza28/Portfolio-`.

---

## Step 3: Configure Web Service Settings
Fill in the following details on the creation screen:

* **Name**: `vanshil-portfolio` (or your preferred name)
* **Language**: `Node`
* **Branch**: `main`
* **Root Directory**: (Leave blank - this will use the root repository directory)
* **Build Command**: `npm run build`
* **Start Command**: `npm run start`

---

## Step 4: Configure Environment Variables
Scroll down to the **Environment Variables** section and add:

| Key | Value | Description |
| :--- | :--- | :--- |
| `NODE_ENV` | `production` | Tells the backend to serve the static frontend bundle |
| `CONTACT_EMAIL` | `oza.vanshil@gmail.com` | (Optional) Your email |
| `CONTACT_PHONE` | `+91 6351 605391` | (Optional) Your phone number |

*Note: The backend will automatically bind to the port Render assigns it.*

---

## Step 5: Deploy!
1. Click **Deploy Web Service**.
2. Render will download your code, run the build process (installing dependencies for both backend and frontend, compiling Vite, and moving files), and start the server.
3. Once the logs show `Server running at http://localhost:...`, click the URL provided at the top-left of the Render dashboard (e.g., `https://vanshil-portfolio.onrender.com`).

Your live portfolio will now be accessible from that URL!
