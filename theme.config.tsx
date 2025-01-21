import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'
import { useConfig } from 'nextra-theme-docs'
import { FeelbackYesNo, PRESET_LIKE_DISLIKE } from "@feelback/react"
import "@feelback/react/styles/feelback.css"

const config: DocsThemeConfig = {
  logo: (
    <>
      <svg viewBox="0 0 600 600" width="32" height="32">
        <style>
          {`.s0 { fill: none;stroke: currentcolor;stroke-miterlimit:100;stroke-width: 100 }`}
        </style>
        <path
          id="Background"
          className="s0"
          d="m300 550c-138.3 0-250-111.8-250-250 0-138.3 111.7-250 250-250 138.2 0 250 111.7 250 250 0 138.2-111.8 250-250 250z"
        />
      </svg>
    </>
  ),
  darkMode: true,
  project: {
    link: 'https://github.com/worldrepublicorg/docs',
  },
  docsRepositoryBase: 'https://github.com/worldrepublicorg/docs/blob/main/',
  footer: {
    text: (
      <>
      {/* Footer is intentionally left empty */}
    </>
    )
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
    autoCollapse: true
  },
  toc: {
    backToTop: true,
    extraContent: () =>
    <>
        <hr className="divider top-divider" />
        <FeelbackYesNo contentSetId="b2983747-797d-4e6e-9ea3-15d59b9c27ce"
            preset={PRESET_LIKE_DISLIKE}
            textQuestion="Is this page useful?"
            textAnswer="Thanks for your feedback :)"
        />
        <hr className="divider" />
    </>
  },
  feedback: {
    content: '❤️ Share general feedback',
    labels: 'user-feedback'
  },
  editLink: {
    text: '✏️ Edit this page on GitHub'
  },
  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath !== '/') {
      return {
        titleTemplate: '%s | World Republic Docs'
      }
    }
  },
  head: () => {
    const { asPath, defaultLocale, locale } = useRouter()
    const { frontMatter } = useConfig()
    const url =
      'https://docs.worldrepublic.org' +
      (defaultLocale === locale ? asPath : `/${locale}${asPath}`)
 
    return (
      <>
        <meta property="og:url" content={url} />
        <meta property="og:title" content={frontMatter.title || 'World Republic Docs'} />
        <meta
          property="og:description"
          content={frontMatter.description || 'World Republic Docs for members'}
        />
        <link rel="icon" href="/img/icons/favicon.ico" type="image/x-icon"></link>
      </>
    )
  },
  // https://nextra.site/docs/docs-theme/theme-configuration
  // primaryHue: {
  //   dark: 
  //   light: 
  // }
}

export default config
