export const searchIndex = [
  {
    "title": "首页",
    "headers": [],
    "path": "/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "Get Started",
    "headers": [
      {
        "level": 2,
        "title": "Pages",
        "slug": "pages",
        "link": "#pages",
        "children": []
      },
      {
        "level": 2,
        "title": "Content",
        "slug": "content",
        "link": "#content",
        "children": []
      },
      {
        "level": 2,
        "title": "Configuration",
        "slug": "configuration",
        "link": "#configuration",
        "children": []
      },
      {
        "level": 2,
        "title": "Layouts and customization",
        "slug": "layouts-and-customization",
        "link": "#layouts-and-customization",
        "children": []
      }
    ],
    "path": "/get-started.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "TS 类型",
    "headers": [
      {
        "level": 2,
        "title": "基础类型",
        "slug": "基础类型",
        "link": "#基础类型",
        "children": [
          {
            "level": 3,
            "title": "数字类型",
            "slug": "数字类型",
            "link": "#数字类型",
            "children": []
          },
          {
            "level": 3,
            "title": "字符串",
            "slug": "字符串",
            "link": "#字符串",
            "children": []
          },
          {
            "level": 3,
            "title": "布尔类型",
            "slug": "布尔类型",
            "link": "#布尔类型",
            "children": []
          },
          {
            "level": 3,
            "title": "枚举类型",
            "slug": "枚举类型",
            "link": "#枚举类型",
            "children": []
          },
          {
            "level": 3,
            "title": "any",
            "slug": "any",
            "link": "#any",
            "children": []
          },
          {
            "level": 3,
            "title": "unkown",
            "slug": "unkown",
            "link": "#unkown",
            "children": []
          },
          {
            "level": 3,
            "title": "void",
            "slug": "void",
            "link": "#void",
            "children": []
          },
          {
            "level": 3,
            "title": "undefined",
            "slug": "undefined",
            "link": "#undefined",
            "children": []
          },
          {
            "level": 3,
            "title": "never",
            "slug": "never",
            "link": "#never",
            "children": []
          },
          {
            "level": 3,
            "title": "Array",
            "slug": "array",
            "link": "#array",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "高级类型",
        "slug": "高级类型",
        "link": "#高级类型",
        "children": [
          {
            "level": 3,
            "title": "union",
            "slug": "union",
            "link": "#union",
            "children": []
          },
          {
            "level": 3,
            "title": "literal",
            "slug": "literal",
            "link": "#literal",
            "children": []
          },
          {
            "level": 3,
            "title": "nullable",
            "slug": "nullable",
            "link": "#nullable",
            "children": []
          }
        ]
      }
    ],
    "path": "/posts/TS%E5%9F%BA%E7%A1%80.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "",
    "headers": [],
    "path": "/404.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "分类",
    "headers": [],
    "path": "/category/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "分类 TS",
    "headers": [],
    "path": "/category/ts/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "标签",
    "headers": [],
    "path": "/tag/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "标签 TS",
    "headers": [],
    "path": "/tag/ts/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "文章",
    "headers": [],
    "path": "/article/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "时间轴",
    "headers": [],
    "path": "/timeline/",
    "pathLocale": "/",
    "extraFields": []
  }
]

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSearchIndex) {
    __VUE_HMR_RUNTIME__.updateSearchIndex(searchIndex)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ searchIndex }) => {
    __VUE_HMR_RUNTIME__.updateSearchIndex(searchIndex)
  })
}
