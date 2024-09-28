import comp from "/home/user/projects/bastyon/documentation/vuepress-starter/docs/.vuepress/.temp/pages/user-docs/get-started-user.html.vue"
const data = JSON.parse("{\"path\":\"/user-docs/get-started-user.html\",\"title\":\"User documentation\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":null,\"contributors\":[]},\"filePathRelative\":\"user-docs/get-started-user.md\"}")
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
