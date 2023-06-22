import Head from "next/head";
import { StructuredText, renderMetaTags, useQuerySubscription } from "react-datocms";
import Container from "../components/container";
import Layout from "../components/layout";
import PostBody from "../components/post-body";
import PostTitle from '../components/post-title'
import LanguageBar from "../components/language-bar";


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
        }
      }
      ${metaTagsFragment}
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
            <PostBody content={home.content} />

          </article>
        </Container>
      </Layout>
    </>
  );  
}
