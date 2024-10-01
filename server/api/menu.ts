export default defineEventHandler((event) => {
  return {
    mainMenu: [
      { name: "首页", url: "/" },
      { name: "捐赠打赏", url: "/donate" },
      { name: "商务咨询", url: "/contact" },
      { name: "更多服务", url: "javascript:void(0);", icon: true },
    ],
    isDropdown: true,
    subMenu: [
      { name: "Docker 镜像加速", url: "https://dockerproxy.net" },
      { name: "RSS 订阅服务", url: "https://rssforever.com" },
      { name: "FRP 内网穿透", url: "https://freefrp.net" },
    ],
  };
});
