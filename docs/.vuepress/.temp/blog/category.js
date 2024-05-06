export const categoriesMap = {"category":{"/":{"path":"/category/","map":{"TS":{"path":"/category/ts/","indexes":[0]},"History":{"path":"/category/history/","indexes":[1,2]},"CategoryA":{"path":"/category/categorya/","indexes":[3,4,5,6,7,8,9,10,11,12,13,14]},"CategoryB":{"path":"/category/categoryb/","indexes":[3,4,5,6,7,8,9,11,12,13]},"CategoryC":{"path":"/category/categoryc/","indexes":[15,16]}}}},"tag":{"/":{"path":"/tag/","map":{"TS":{"path":"/tag/ts/","indexes":[2,0]},"WWII":{"path":"/tag/wwii/","indexes":[1]},"tag A":{"path":"/tag/tag-a/","indexes":[6,7,8,9,10,14]},"tag B":{"path":"/tag/tag-b/","indexes":[6,7,8,9,10,14]},"tag C":{"path":"/tag/tag-c/","indexes":[3,4,5,11,12,13]},"tag D":{"path":"/tag/tag-d/","indexes":[3,4,5,11,12,13]},"tag E":{"path":"/tag/tag-e/","indexes":[15,16]}}}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogCategory)
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoriesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ categoriesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoriesMap);
  });

