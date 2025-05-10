<template>
    <div class="wrapper">
      <Header />
  
      <main class="main post">
        <h1 class="post-title">About Me</h1>
        <p class="post-body">
          I'm Eranga — a researcher, developer, and lifelong learner. This blog is a place where I share thoughts,
          experiments, and insights drawn from personal experience, modern challenges, and ancient wisdom.
        </p>
        <p class="post-body">
          My journey blends technical work with spiritual practice, and I'm passionate about creating tools and ideas that
          help people grow in awareness, clarity, and purpose.
        </p>
        <p class="post-body">
          Thank you for visiting — I hope something here inspires or helps you.
        </p>
      </main>
    </div>
  </template>
  
  <script>
  import Header from '../components/Header.vue'
  export default {
    components: { Header },
    name: 'About'
  }
  </script>
  