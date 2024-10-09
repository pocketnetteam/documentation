import comp from "/home/user/projects/bastyon/documentation/vuepress-starter/docs/.vuepress/.temp/pages/en/user-docs/get-started-user.html.vue"
const data = JSON.parse("{\"path\":\"/en/user-docs/get-started-user.html\",\"title\":\"Ways to Monetize\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"Advertisers\",\"slug\":\"advertisers\",\"link\":\"#advertisers\",\"children\":[]},{\"level\":2,\"title\":\"Authors: Content Creators\",\"slug\":\"authors-content-creators\",\"link\":\"#authors-content-creators\",\"children\":[]},{\"level\":2,\"title\":\"Node Runners\",\"slug\":\"node-runners\",\"link\":\"#node-runners\",\"children\":[]}],\"git\":{\"updatedTime\":1727538088000,\"contributors\":[{\"name\":\"gked\",\"email\":\"glyukshin@mailfence.com\",\"commits\":1}]},\"filePathRelative\":\"en/user-docs/get-started-user.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
