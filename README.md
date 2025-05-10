# 🌿 Vue Simple Blog

> A lightweight, Vue 3-based blog app built with simplicity and flexibility in mind.  
> No database, no CMS — just fast, manual content management.

---

## 🚀 Features

- Built with **Vue 3** + **Vite**
- Responsive design for mobile & desktop
- Clean file-based content structure
- Posts written in standalone `.html` files
- Metadata managed in `posts.json`
- Supports dynamic post routing
- Scroll-to-top and "Load More" UX enhancements
- Minimal setup, easy to extend

---

## 📦 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/your-username/vue-simple-blog.git
cd vue-simple-blog
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the dev server

```bash
npm run dev
```

Then open `http://localhost:5173` in your browser.

---

## ✍️ How to Add a Blog Post

1. Create an HTML file inside `/public/post/`  
   Example: `public/post/post-2.html`

2. Add an entry to `posts.json` like this:

```json
{
  "title": "My New Post",
  "slug": "post-2",
  "thumbnail": "/posts/thumb2.jpg",
  "excerpt": "A short intro to the post...",
  "tag": "tip",
  "published": "2025-05-08"
}
```

---

## 📁 Project Structure

```
vue-simple-blog/
├── public/
│   └── post/             # HTML post content
├── src/
│   ├── components/       # Reusable Vue components
│   ├── pages/            # Home.vue and PostPage.vue
│   └── App.vue
├── posts.json            # Blog metadata
```

---

## 🔮 Future Features

- Post reactions (👍 😐 👎)
- File-based comments
- Admin dashboard
- Multi-language support (planned)

---

## 📜 License

This project is open-sourced under the [MIT License](LICENSE).
