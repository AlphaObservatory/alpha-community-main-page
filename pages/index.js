import Head from "next/head";
import { StructuredText, renderMetaTags, useQuerySubscription } from "react-datocms";
import Container from "../components/container";
import LanguageBar from "../components/language-bar";
import Layout from "../components/layout";
import PostBody from "../components/post-body";
import PostTitle from '../components/post-title'
import PostHeader from "../components/post-header";

import { request } from "../lib/datocms";
import { metaTagsFragment, responsiveImageFragment } from "../lib/fragments";
import { useRouter } from "next/router";

export async function getStaticProps({ preview, locale }) {
  const formattedLocale = locale.split("-")[0];

  const graphqlRequest = {
    query: `
      {
        site: _site {
          favicon: faviconMetaTags {
            ...metaTagsFragment
          }
        }
        home(locale: ${formattedLocale}) {
          content {
            value
          }
          seo: _seoMetaTags {
            ...metaTagsFragment
          }
          title
          featuredImage {
            responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 2000, h: 1000 }) {
              ...responsiveImageFragment
            }
          }
        }
      }
      ${metaTagsFragment}
      ${responsiveImageFragment}
    `,
    preview,
  };

  return {
    props: {
      subscription: preview
        ? {
            ...graphqlRequest,
            initialData: await request(graphqlRequest),
            token: process.env.NEXT_EXAMPLE_CMS_DATOCMS_API_TOKEN,
            environment: process.env.NEXT_DATOCMS_ENVIRONMENT || null,
          }
        : {
            enabled: false,
            initialData: await request(graphqlRequest),
          },
    },
  };
}

export default function Index({ subscription }) {
  const {
    data: { home, site },
  } = useQuerySubscription(subscription);
  const { locale } = useRouter().locale;

  const metaTags = home.seo.concat(site.favicon);

  return (
    <>
      <Layout preview={subscription.preview}>
        <Head>{renderMetaTags(metaTags)}</Head>

        <Container>
          <LanguageBar />
          <article>
            <PostTitle>{home.title}</PostTitle>
            <PostHeader
              title={home.title}
              coverImage={home.featuredImage}
            />

            <PostBody content={home.content} />

          </article>
        </Container>
      </Layout>
    </>
  );  
}
