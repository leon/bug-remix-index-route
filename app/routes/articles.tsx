import { json, LoaderFunction, MetaFunction, Outlet, redirect, useLoaderData } from 'remix'

export default function ArticleLayout() {
  return (
    <div className="some wrapper classes for the article such as tailwind prose">
      <Outlet />
    </div>
  )
}
