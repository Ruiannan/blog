      export const typesMap = {"article":{"/":{"path":"/article/","indexes":[15,16,11,12,13,3,4,5,6,7,8,9,10,14]}},"timeline":{"/":{"path":"/timeline/","indexes":[0,2,11,12,13,3,4,5,6,7,8,9,10,14,16,15,1]}}};
      
if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
  });

      