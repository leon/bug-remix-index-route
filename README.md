# A normal layout where the wrapper around the mdx files needs to be different from the index route

By specifying `articles.index.tsx` that indicates that I don't want to render the index route with the same wrapper, since most blog posts have a different layout then the blog start page.

currently this causes

```
Path "articles" defined by route "routes/articles" conflicts with route "routes/articles.index"
```

but I think it should be possible
