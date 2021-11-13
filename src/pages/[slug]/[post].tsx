import React from 'react'

import { GetStaticProps } from 'next'

import Markdown from '@/components/Markdown/Markdown'
import { postUrl, fetchNavlinks } from '@/utils/fetchers'
import { flatLinks, getPathsSlugPost } from '@/utils/helpers'

const Post = ({ data }: { data: string }) => <Markdown>{data}</Markdown>

export default Post

export async function getStaticPaths() {
  const navlinks = await fetchNavlinks()
  const flatNavLinks = flatLinks(
    navlinks,
    'links',
    'url',
    1,
    ({ title }) => title !== 'Interview',
  )
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const paths = getPathsSlugPost(flatNavLinks)

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug, post } = params as { slug: string; post: string }
  const res = await fetch(postUrl(slug, post))
  const data = await res.text()
  return {
    props: { data },
  }
}
