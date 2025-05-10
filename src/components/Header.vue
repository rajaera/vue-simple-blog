<template>
    <header class="header">
        <div class="header-inner">
            <div class="top-row">
                <div class="branding">
                    <router-link to="/about">
                        <img src="/my-avatar.png" alt="avatar" class="avatar" title="About Me" />
                    </router-link>
                    <h1>THEWAGE ERANGA</h1>
                </div>
                <nav class="menu">
                    <router-link to="/" class="menu-item">Home</router-link>
                </nav>
            </div>
            <div class="tag-row">
                <router-link :to="{ path: '/', query: { tag: 'project' } }" class="tag-link"
                    :class="{ active: $route.query.tag === 'project' }">
                    #project
                </router-link>

                <router-link :to="{ path: '/', query: { tag: 'research' } }" class="tag-link"
                    :class="{ active: $route.query.tag === 'research' }">
                    #research
                </router-link>

                <router-link :to="{ path: '/', query: { tag: 'tip' } }" class="tag-link"
                    :class="{ active: $route.query.tag === 'tip' }">
                    #tip
                </router-link>

            </div>
        </div>

    </header>
</template>









<script>
export default { name: 'SiteHeader' }
</script>

<style scoped>
.header {
    padding: 20px;
    border-bottom: 1px solid #ddd;
    font-family: sans-serif;
}

.header-inner {
    display: flex;
    flex-direction: column;
    width: 100%;
}


.top-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    margin-bottom: 10px;
    /* <-- this ensures visual separation */
}

.branding {
    display: flex;
    align-items: center;
    flex-shrink: 0;
}

.avatar {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    margin-right: 12px;
    cursor: pointer;
    transition: transform 0.2s;
}

.avatar:hover {
    transform: scale(1.05);
}

h1 {
    font-size: 26px;
    margin: 0;
    white-space: nowrap;
}

.menu {
    flex-shrink: 0;
}

.menu .menu-item {
  font-size: 14px;
  color: #2c7be5;
  background-color: #e8f1fc;
  padding: 6px 14px;
  border-radius: 20px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.25s ease;
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

.menu .menu-item:hover {
  background-color: #d4e6fa;
  color: #114b9a;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);
}

.menu .router-link-active {
  background-color: #c9dffc;
  color: #114b9a;
  border: 1px solid #2c7be5;
}


@media (max-width: 600px) {
    .top-row {
        flex-direction: column;
        align-items: stretch;
        gap: 10px;
    }

    .menu {
        align-self: flex-start;
    }

    h1 {
        font-size: 20px;
    }
}

.tag-row {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    width: 100%;
}

.tag-link {
  font-size: 14px;
  color: #2c7be5;
  background-color: #e8f1fc;
  padding: 4px 10px;
  border-radius: 16px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
}

.tag-link:hover {
  background-color: #d4e6fa;
  color: #1b64c5;
}

.tag-link.active {
  background-color: #c9dffc;
  color: #114b9a;
  font-weight: bold;
  transform: scale(1.05);
  border: 1px solid #2c7be5;
}



@media (max-width: 600px) {
    .tag-row {
        justify-content: flex-start;
    }
}




</style>