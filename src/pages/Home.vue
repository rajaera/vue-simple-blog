<template>
  <div class="wrapper">
    <Header />

    <main class="main">
      <div v-if="$route.query.tag" class="tag-heading">
        <h2>Showing posts tagged with <span style="color: #2c7be5;">#{{ $route.query.tag }}</span></h2>
      </div>

      <router-link v-for="post in visiblePosts" :key="post.slug" :to="`/post/${post.slug}`" class="post-card">
        <img :src="post.thumbnail" class="thumb" />
        <div class="post-content">
          <h2>{{ post.title }}</h2>
          <p class="published-date">{{ formatDate(post.published) }}</p>
          <p>{{ post.excerpt }}</p>
          <p class="tag">#{{ post.tag }}</p>
        </div>
      </router-link>


      <!-- Load More button -->
      <div v-if="filteredPosts.length > limit" class="load-more">
        <button @click="loadMore">Load More</button>
      </div>

      <!-- Scroll to Top button -->
      <button v-show="showScroll" @click="scrollToTop" class="scroll-top-btn">
        ↑ Top
      </button>
    </main>
  </div>
</template>

<script>
import Header from '../components/Header.vue'

export default {
  components: { Header },
  data() {
    return {
      allPosts: [],
      filteredPosts: [],
      limit: 20,
      showScroll: false
    };
  },
  computed: {
    visiblePosts() {
      return this.filteredPosts.slice(0, this.limit);
    }
  },
  watch: {
    '$route.query.tag': 'filterPosts'
  },
  mounted() {
    fetch('/posts.json')
      .then(res => res.json())
      .then(data => {
        this.allPosts = data;
        this.filterPosts();
      });

    window.addEventListener('scroll', this.handleScroll);
  },
  unmounted() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    filterPosts() {
      const tag = this.$route.query.tag;
      this.filteredPosts = tag
        ? this.allPosts.filter(post => post.tag === tag)
        : this.allPosts;
      this.limit = 20; // Reset limit when filtering changes
    },
    loadMore() {
      this.limit += 20;
    },
    handleScroll() {
      this.showScroll = window.scrollY > 300;
    },
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    formatDate(dateStr) {
    if (!dateStr) return '';
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateStr).toLocaleDateString(undefined, options);
  }
  }
}
</script>

<style scoped>
.post-card {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 20px;
  text-decoration: none;
  color: inherit;
  transition: box-shadow 0.2s ease;
}

.post-card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.thumb {
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 6px;
  margin-right: 15px;
}

.post-content {
  flex: 1;
}

.post-content h2 {
  margin: 0 0 8px;
  font-size: 20px;
}

.post-content p {
  margin: 0 0 6px;
}

.post-content .tag {
  color: #888;
  font-size: 13px;
}

@media (max-width: 600px) {
  .post-card {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .thumb {
    width: 100%;
    height: auto;
    margin: 0 0 10px 0;
  }

  .post-content {
    width: 100%;
  }

  .post-content h2 {
    font-size: 18px;
  }

  .post-content p {
    font-size: 15px;
  }
}

.load-more {
  text-align: center;
  margin-top: 20px;
}

.load-more button {
  background-color: #2c7be5;
  color: white;
  border: none;
  padding: 10px 16px;
  border-radius: 20px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s ease;
}

.load-more button:hover {
  background-color: #1a5fc9;
}

.scroll-top-btn {
  position: fixed;
  bottom: 30px;
  right: 30px;
  background-color: #2c7be5;
  color: white;
  border: none;
  padding: 10px 16px;
  border-radius: 30px;
  cursor: pointer;
  font-size: 14px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  transition: opacity 0.3s ease;
  z-index: 1000;
}

.published-date {
  font-size: 13px;
  color: #888;
  margin-bottom: 6px;
}

</style>
