<script setup lang="ts">
useSeoMeta({
  title: "GitHub Proxy 代理加速",
  keywords: "GitHub,Proxy,代理加速",
  description:
    "GitHub 文件 , Releases , archive , gist , raw.githubusercontent.com 文件代理加速下载服务.",
});
</script>
<template>
  <section class="banner-style">
    <section id="cta">
      <img src="/img/github.png" height="100" width="100" /><br />
      <h2>GitHub Proxy</h2>
      <p>
        GitHub 文件 , Releases , archive , gist , raw.githubusercontent.com
        文件代理加速下载服务.
      </p>
      <div>
        <form action="/api/github-proxy" method="get" target="__blank">
          <div class="row gtr-50 gtr-uniform">
            <div class="col-8 col-12-mobilep">
              <input
                class="url"
                type="text"
                name="q"
                placeholder="输入 GitHub 文件链接"
                pattern="^((https|http):\/\/)?(github\.com\/.+?\/.+?\/(?:releases|archive|blob)|((?:raw|gist)\.(?:githubusercontent|github)\.com))\/.+$"
                required=""
              />
            </div>
            <div class="col-4 col-12-mobilep">
              <input type="submit" value="下载" />
            </div>
          </div>
        </form>
      </div>
    </section>
  </section>
  <section id="main" class="container">
    <div class="row">
      <div class="col-12">
        <section class="box">
          <h3>终端命令行</h3>
          <p>
            支持终端命令行 git clone , wget , curl 等工具下载. <br />
            支持
            <span class="red-text">raw.githubusercontent.com</span> ,
            <span class="red-text">gist.github.com </span> ,
            <span class="red-text">gist.githubusercontent.com</span>
            文件下载. <br /><b>注意：</b>不支持 SSH Key 方式 git clone 下载.
          </p>
          <hr />
          <header>
            <h4><b>git clone</b></h4>
          </header>
          <p>
            <b>git clone</b>
            <span class="red-text">本站链接</span
            ><span class="green-text"
              >https://github.com/stilleshan/dockerfiles</span
            >
          </p>
          <header>
            <h4><b>git clone 私有仓库</b></h4>
          </header>
          <p>
            Clone 私有仓库需要用户在
            <a href="https://github.com/settings/tokens" target="_blank"
              >Personal access tokens</a
            >
            申请 Token 配合使用. <br /><b>git clone</b>
            <span class="red-text">https://</span><b>user:your_token</b
            ><span class="red-text">@域名/</span
            ><span class="green-text"
              >https://github.com/your_name/your_private_repo</span
            >
          </p>
          <header>
            <h4><b>wget &amp; curl</b></h4>
          </header>
          <p>
            <b>wget</b>&nbsp;<span class="red-text">本站链接</span
            ><span class="green-text"
              >https://github.com/stilleshan/dockerfiles/archive/master.zip</span
            ><br /><b>wget</b>&nbsp;<span class="red-text">本站链接</span
            ><span class="green-text"
              >https://raw.githubusercontent.com/stilleshan/dockerfiles/main/README.md</span
            ><br /><b>curl -O</b>&nbsp;<span class="red-text">本站链接</span
            ><span class="green-text"
              >https://github.com/stilleshan/dockerfiles/archive/master.zip</span
            ><br /><b>curl -O</b>&nbsp;<span class="red-text">本站链接</span
            ><span class="green-text"
              >https://raw.githubusercontent.com/stilleshan/dockerfiles/main/README.md</span
            >
          </p>
        </section>
        <section class="box">
          <h3>首页下载</h3>
          <p>
            在本页地址栏输入合规链接（参考以下链接）点击下载按钮
            <br />
            支持
            <span class="red-text">raw.githubusercontent.com</span> ,
            <span class="red-text">gist.github.com </span> ,
            <span class="red-text">gist.githubusercontent.com</span>
            文件下载.
          </p>
          <hr />
          <header>
            <h4><b>Raw 文件</b></h4>
          </header>
          <p>
            https://raw.githubusercontent.com/stilleshan/dockerfiles/main/README.md
          </p>
          <header>
            <h4><b>分支源码</b></h4>
          </header>
          <p>https://github.com/stilleshan/dockerfiles/archive/master.zip</p>
          <header>
            <h4><b>Releases 源码</b></h4>
          </header>
          <p>https://github.com/fatedier/frp/archive/refs/tags/v0.54.0.zip</p>
          <header>
            <h4><b>Releases 文件</b></h4>
          </header>
          <p>
            https://github.com/fatedier/frp/releases/download/v0.54.0/frp_0.54.0_linux_amd64.tar.gz
          </p>
        </section>
      </div>
    </div>
  </section>
</template>
<style>
input::placeholder {
  color: white;
}
</style>
