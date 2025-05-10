<template>
    <div class="wrapper">
      <!-- Header -->
      <header class="header">
        <div class="branding">
          <img src="/my-avatar.png" alt="avatar" class="avatar" />
          <h1>THEWAGE ERANGA</h1>
        </div>
      </header>
  
      <!-- Main Content -->
      <main class="main post not-found">
        <h1 class="post-title" style="font-size: 36px; color: #d9534f;">404 – Page Not Found</h1>
        <p class="post-body" style="margin-top: 20px; font-size: 18px;">
          Oops! The page or post you're looking for doesn’t exist. <br />
          It might have been moved or deleted.
        </p>
        <p style="margin-top: 30px;">
          <a href="/" class="home-link">← Return to the homepage</a>
        </p>
      </main>
    </div>
  </template>
  
  <script>
  export default {
    name: 'NotFound'
  }
  </script>
  
  <style scoped>
  .wrapper {
    font-family: sans-serif;
    max-width: 800px;
    margin: auto;
    padding: 20px;
    text-align: center;
  }
  
  .header {
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #ddd;
    padding-bottom: 20px;
    margin-bottom: 40px;
  }
  
  .branding {
    display: flex;
    align-items: center;
  }
  
  .avatar {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    margin-right: 10px;
  }
  
  .home-link {
    font-size: 16px;
    color: #2c7be5;
    text-decoration: none;
    font-weight: bold;
  }
  
  .home-link:hover {
    text-decoration: underline;
  }
  </style>
  