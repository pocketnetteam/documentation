import comp from "/home/user/projects/bastyon/documentation/vuepress-starter/docs/.vuepress/.temp/pages/dev-docs/getting-started.html.vue"
const data = JSON.parse("{\"path\":\"/dev-docs/getting-started.html\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":3,\"title\":\"Test\",\"slug\":\"test\",\"link\":\"#test\",\"children\":[]}],\"git\":{\"updatedTime\":null,\"contributors\":[]},\"filePathRelative\":\"dev-docs/getting-started.md\"}")
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
