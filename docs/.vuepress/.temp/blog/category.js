export const categoriesMap = {"category":{"/":{"path":"/category/","map":{"TS":{"path":"/category/ts/","indexes":[0]}}}},"tag":{"/":{"path":"/tag/","map":{"TS":{"path":"/tag/ts/","indexes":[0]}}}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogCategory)
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoriesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ categoriesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoriesMap);
  });

