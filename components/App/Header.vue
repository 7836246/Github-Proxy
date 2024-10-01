<script setup lang="ts">
// 子菜单的显示/隐藏状态
const isDropdownVisible = ref(false);
const isActive = ref(false);

let hideTimeout;

const showDropdown = () => {
  if (hideTimeout) {
    clearTimeout(hideTimeout); // 如果有隐藏延时，取消隐藏
  }
  isDropdownVisible.value = true;
  isActive.value = true; // 添加 active 类
};

const hideDropdown = () => {
  hideTimeout = setTimeout(() => {
    isDropdownVisible.value = false;
    isActive.value = false; // 移除 active 类
  }, 300); // 延时 300 毫秒再隐藏
};

const isMenuVisible = ref(false);

// 切换菜单的显示/隐藏
const toggleMenu = () => {
  isMenuVisible.value = !isMenuVisible.value;
};

// 菜单数据
const { data: menuData } = await useFetch("/api/menu");
</script>

<template>
  <!-- 手机端菜单按钮 -->
  <div
    id="navButton"
    @click="toggleMenu"
    class="fixed top-5 left-6 w-16 h-16 flex items-center justify-center rounded-full cursor-pointer z-50 transition-all duration-300 transform"
    :class="isMenuVisible ? 'translate-x-70' : 'translate-x-0'"
  >
    <IconMenu :size="32" class="text-4xl ml-1" />
  </div>

  <!-- 抽屉菜单 -->
  <div
    id="navPanel"
    :style="{
      transform: isMenuVisible ? 'translateX(0)' : 'translateX(-275px)',
      transition: 'transform 0.3s ease-in-out',
    }"
  >
    <nav v-for="{ name, url } in menuData.mainMenu">
      <NuxtLink
        :to="url"
        target="_blank"
        class="link depth-0"
        style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0)"
        ><span class="indent-0"></span>{{ name }}
      </NuxtLink>
    </nav>
    <nav v-for="item in menuData.subMenu" :key="item.name">
      <NuxtLink
        :to="item.url"
        target="_blank"
        class="link depth-1"
        style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0)"
        ><span class="indent-1"></span>{{ item.name }}
      </NuxtLink>
    </nav>
  </div>

  <!--  PC端菜单 -->
  <div id="header" class="reveal">
    <h1>
      <NuxtLink to="/">GitHub Proxy</NuxtLink>
    </h1>
    <nav id="nav">
      <ul>
        <li
          class=""
          v-for="{ name, url, icon } in menuData.mainMenu"
          :class="[icon ? { active: isActive } : '']"
          @mouseenter="icon ? showDropdown() : null"
          @mouseleave="icon ? hideDropdown() : null"
        >
          <NuxtLink
            aria-current="page"
            :to="url"
            class="router-link-active router-link-exact-active"
            :class="icon ? 'icon solid fa-angle-down' : ''"
            >{{ name }}
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </div>
  <header class="reveal">
    <div>
      <ul
        class="dropotron level-0 right"
        style="
          user-select: none;
          position: fixed;
          z-index: 1000;
          right: 10px; /* 修改为你所需的固定值 */
          top: 48px; /* 修改为你所需的固定值 */
          opacity: 1;
        "
        v-if="isDropdownVisible"
        @mouseenter="showDropdown"
        @mouseleave="hideDropdown"
      >
        <li
          style="white-space: nowrap"
          v-for="item in menuData.subMenu"
          :key="item.name"
        >
          <NuxtLink :to="item.url" target="_blank" style="display: block"
            >{{ item.name }}
          </NuxtLink>
        </li>
      </ul>
    </div>
  </header>
</template>
