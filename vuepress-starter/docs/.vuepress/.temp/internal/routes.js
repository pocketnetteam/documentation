export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/home/user/projects/bastyon/documentation/vuepress-starter/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Home"} }],
  ["/get-started.html", { loader: () => import(/* webpackChunkName: "get-started.html" */"/home/user/projects/bastyon/documentation/vuepress-starter/docs/.vuepress/.temp/pages/get-started.html.js"), meta: {"title":"Get Started"} }],
  ["/en/dev-docs/get-started-dev.html", { loader: () => import(/* webpackChunkName: "en_dev-docs_get-started-dev.html" */"/home/user/projects/bastyon/documentation/vuepress-starter/docs/.vuepress/.temp/pages/en/dev-docs/get-started-dev.html.js"), meta: {"title":"Developer Documentation"} }],
  ["/en/user-docs/get-started-user.html", { loader: () => import(/* webpackChunkName: "en_user-docs_get-started-user.html" */"/home/user/projects/bastyon/documentation/vuepress-starter/docs/.vuepress/.temp/pages/en/user-docs/get-started-user.html.js"), meta: {"title":"User documentation"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/home/user/projects/bastyon/documentation/vuepress-starter/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);
