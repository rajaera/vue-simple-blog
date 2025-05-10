<template>
  <div class="wrapper">
    <Header />

    <main class="main post">
      <div v-if="content" v-html="content" class="post-body"></div>
      <div v-else class="post-body">Loading post...</div>
      <div class="share-buttons">
        <span>Share:&nbsp;</span>
        <a :href="`https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`" target="_blank" rel="noopener"
          class="share-link facebook">Facebook</a>

        <a :href="`https://twitter.com/intent/tweet?url=${currentUrl}&text=${encodeURIComponent(postTitle)}`"
          target="_blank" rel="noopener" class="share-link twitter">Twitter</a>

        <a :href="`https://www.linkedin.com/sharing/share-offsite/?url=${currentUrl}`" target="_blank" rel="noopener"
          class="share-link linkedin">LinkedIn</a>
      </div>

    </main>
  </div>
</template>

<script>
import Header from '../components/Header.vue'

export default {
  components: { Header },
  props: ['slug'],
  data() {
    return {
      content: '',
      currentUrl: '',
      postTitle: ''
    };
  },
  mounted() {
    this.currentUrl = window.location.href;
    fetch(`/posts/${this.slug}.html`)
      .then(res => {
        if (!res.ok) {
          // Trigger redirect before parsing response
          this.$router.replace('/404');
          throw new Error('Post not found');
        }
        return res.text();
      })
      .then(html => {
        this.content = html;
      })
      .catch((err) => {
        console.warn('Redirecting due to error:', err);
        // optional: set a fallback state here if needed
      });
  },
  watch: {
    content() {
      // Optionally extract post title from HTML if needed
      const wrapper = document.createElement('div');
      wrapper.innerHTML = this.content;
      const h1 = wrapper.querySelector('h1');
      this.postTitle = h1 ? h1.innerText : document.title;
    }
  }
}
</script>


<style>
.wrapper {
  font-family: sans-serif;
  max-width: 900px;
  margin: auto;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #ddd;
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

.menu a {
  margin-left: 15px;
  text-decoration: none;
  font-weight: bold;
  color: #333;
}

.main {
  padding: 20px;
}

.post-title {
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 10px;
}

.post-date {
  font-size: 14px;
  color: #888;
  margin-bottom: 20px;
}

.post-banner {
  width: 100%;
  max-width: 500px;
  max-height: 300px;
  object-fit: cover;
  margin-bottom: 20px;
}

.post-body p {
  margin-bottom: 1em;
  line-height: 1.6;
}

.post-body ul {
  margin-left: 1em;
}



.post-body img {
  max-width: 100%;
  height: auto;
  display: block;
  margin: 20px auto;
}



@media (max-width: 600px) {
  .post-title {
    font-size: 24px;
  }

  .post-body {
    font-size: 16px;
    line-height: 1.6;
  }

  .post-body img {
    max-width: 100%;
    height: auto;
    display: block;
    margin: 20px auto;
  }

}


.share-buttons {
  margin-top: 30px;
  font-size: 14px;
}

.share-link {
  margin-right: 12px;
  text-decoration: none;
  font-weight: bold;
  padding: 6px 10px;
  border-radius: 4px;
  color: white;
}

.share-link.facebook {
  background-color: #3b5998;
}

.share-link.twitter {
  background-color: #1da1f2;
}

.share-link.linkedin {
  background-color: #0077b5;
}

</style>