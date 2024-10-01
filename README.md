# GitHub 加速项目

该项目旨在为 GitHub 的 release、archive 以及项目文件提供加速服务。此版本基于 Nuxt3 实现，支持文件的加速下载和项目的克隆。

## 功能特性

- **加速 GitHub 文件下载**：支持对 GitHub release、archive 文件以及项目内的文件进行加速下载。
- **支持克隆项目**：通过提供对仓库的加速克隆功能，极大缩短国内用户的下载等待时间。
- **支持 jsDelivr 镜像**：可选使用 jsDelivr 镜像进行加速，适用于分支文件等情况。
- **跨域支持**：内置 CORS 头，支持跨域资源请求。

## 使用方法

### 1. 安装依赖

首先，克隆该项目并安装依赖：

```bash
git clone https://github.com/7836246/Github-Proxy
cd Github-Proxy
npm install
```

### 2. 启动开发服务器

安装依赖后，启动开发服务器：

```bash
npm run dev
```

### 3. 构建生产环境

当你需要部署到生产环境时，可以使用以下命令进行构建：

```bash
npm run build
npm run start
```

### 4. 使用 API 进行下载加速

项目提供了 API 接口，你可以通过以下方式使用：

```html

<form action="/api/github-proxy" method="get" target="_blank">
    <input
            type="text"
            name="q"
            placeholder="输入 GitHub 文件链接"
            required
    />
    <input type="submit" value="下载"/>
</form>
```

用户在输入框中粘贴 GitHub 文件链接，并点击“下载”按钮，即可加速下载 GitHub 文件。

## 配置

在 `server/api/github-proxy.ts` 文件中，你可以根据需要自定义配置：

- `ASSET_URL`：静态文件地址
- `PREFIX`：路由前缀
- `Config.jsdelivr`：是否启用 jsDelivr 镜像

## 贡献

如果你有任何建议或发现了 Bug，欢迎提交 Issue 或 PR。

## License

MIT License

## 说明

本项目基于 [gh-proxy](https://github.com/hunshcn/gh-proxy) 项目，并借鉴了其样式和功能。

### 致谢

本项目中的所有样式和功能均来自于 [ghp.ci](https://ghp.ci/)。如有疑问或需要删除相关内容，请联系本站。
