import comp from "/home/user/projects/bastyon/documentation/vuepress-starter/docs/.vuepress/.temp/pages/dev-docs/get-started-dev.html.vue"
const data = JSON.parse("{\"path\":\"/dev-docs/get-started-dev.html\",\"title\":\"Developer Documentation\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":null,\"contributors\":[]},\"filePathRelative\":\"dev-docs/get-started-dev.md\"}")
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
