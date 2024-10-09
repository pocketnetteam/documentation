import comp from "/home/user/projects/bastyon/documentation/vuepress-starter/docs/.vuepress/.temp/pages/get-started.html.vue"
const data = JSON.parse("{\"path\":\"/get-started.html\",\"title\":\"Get Started\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"Overview\",\"slug\":\"overview\",\"link\":\"#overview\",\"children\":[]},{\"level\":2,\"title\":\"Quick Start Guide\",\"slug\":\"quick-start-guide\",\"link\":\"#quick-start-guide\",\"children\":[{\"level\":3,\"title\":\"Installation\",\"slug\":\"installation\",\"link\":\"#installation\",\"children\":[]},{\"level\":3,\"title\":\"Contribution\",\"slug\":\"contribution\",\"link\":\"#contribution\",\"children\":[]},{\"level\":3,\"title\":\"Documentation\",\"slug\":\"documentation\",\"link\":\"#documentation\",\"children\":[]}]},{\"level\":2,\"title\":\"How to Leave Feedback on Bastyon\",\"slug\":\"how-to-leave-feedback-on-bastyon\",\"link\":\"#how-to-leave-feedback-on-bastyon\",\"children\":[]},{\"level\":2,\"title\":\"FAQs\",\"slug\":\"faqs\",\"link\":\"#faqs\",\"children\":[]}],\"git\":{\"updatedTime\":1728440694000,\"contributors\":[{\"name\":\"gked\",\"email\":\"glyukshin@mailfence.com\",\"commits\":2}]},\"filePathRelative\":\"get-started.md\"}")
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
