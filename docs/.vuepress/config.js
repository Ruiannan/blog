import { blogPlugin } from "@vuepress/plugin-blog";
import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress";
import { viteBundler } from "@vuepress/bundler-vite";
import { searchPlugin } from "@vuepress/plugin-search";
import { copyCodePlugin } from "@vuepress/plugin-copy-code";
import { readingTimePlugin } from "@vuepress/plugin-reading-time";

export default defineUserConfig({
  lang: "zh-CN",

  title: "记录美好生活",
  description: "顺境多做事，逆境多读书",
  base: "/blog/",
  head: ["link", { rel: "icon", href: "/images/profile.png" }],

  theme: defaultTheme({
    logo: "https://avatars.githubusercontent.com/u/32606602?v=4",

    navbar: [
      "/",
      {
        text: "文章",
        link: "/article/",
      },
      {
        text: "分类",
        link: "/category/",
      },
      {
        text: "标签",
        link: "/tag/",
      },
      {
        text: "时间轴",
        link: "/timeline/",
      },
    ],
  }),

  plugins: [
    blogPlugin({
      // 只有贴子下面的文件才是文章
      filter: ({ filePathRelative }) =>
        filePathRelative ? filePathRelative.startsWith("posts/") : false,

      // 获取文章信息
      getInfo: ({ frontmatter, title, data }) => ({
        title,
        author: frontmatter.author || "",
        date: frontmatter.date || null,
        category: frontmatter.category || [],
        tag: frontmatter.tag || [],
        excerpt:
          // 支持通过frontmatter手动设置摘录
          typeof frontmatter.excerpt === "string"
            ? frontmatter.excerpt
            : data?.excerpt || "",
      }),

      // 为那些用户选择禁用的所有页面生成摘录
      excerptFilter: ({ frontmatter }) =>
        !frontmatter.home &&
        frontmatter.excerpt !== false &&
        typeof frontmatter.excerpt !== "string",

      category: [
        {
          key: "category",
          getter: (page) => page.frontmatter.category || [],
          layout: "Category",
          itemLayout: "Category",
          frontmatter: () => ({
            title: "分类",
            sidebar: false,
          }),
          itemFrontmatter: (name) => ({
            title: `分类 ${name}`,
            sidebar: false,
          }),
        },
        {
          key: "tag",
          getter: (page) => page.frontmatter.tag || [],
          layout: "Tag",
          itemLayout: "Tag",
          frontmatter: () => ({
            title: "标签",
            sidebar: false,
          }),
          itemFrontmatter: (name) => ({
            title: `标签 ${name}`,
            sidebar: false,
          }),
        },
      ],

      type: [
        {
          key: "article",
          // Remove archive articles
          filter: (page) => !page.frontmatter.archive,
          layout: "Article",
          frontmatter: () => ({
            title: "文章",
            sidebar: false,
          }),
          // Sort pages with time and sticky
          sorter: (pageA, pageB) => {
            if (pageA.frontmatter.sticky && pageB.frontmatter.sticky)
              return pageB.frontmatter.sticky - pageA.frontmatter.sticky;

            if (pageA.frontmatter.sticky && !pageB.frontmatter.sticky)
              return -1;

            if (!pageA.frontmatter.sticky && pageB.frontmatter.sticky) return 1;

            if (!pageB.frontmatter.date) return 1;
            if (!pageA.frontmatter.date) return -1;

            return (
              new Date(pageB.frontmatter.date).getTime() -
              new Date(pageA.frontmatter.date).getTime()
            );
          },
        },
        {
          key: "timeline",
          // Only article with date should be added to timeline
          filter: (page) => page.frontmatter.date instanceof Date,
          // Sort pages with time
          sorter: (pageA, pageB) =>
            new Date(pageB.frontmatter.date).getTime() -
            new Date(pageA.frontmatter.date).getTime(),
          layout: "Timeline",
          frontmatter: () => ({
            title: "时间轴",
            sidebar: false,
          }),
        },
      ],
      hotReload: true,
    }),
    searchPlugin({
      locales: {
        "/": {
          placeholder: "搜索",
        },
      },
    }),
    copyCodePlugin({
      locales: {
        "/": {
          // 覆盖复制按钮标签文字
          copy: "复制此段代码",
        },
      },
    }),
    readingTimePlugin({
      // 配置项
    }),
  ],

  bundler: viteBundler(),
});
