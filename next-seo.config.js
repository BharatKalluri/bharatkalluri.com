const title = 'Bharat Kalluri';
const description =
  'Front-end developer, JavaScript enthusiast, and course creator.';

const baseURL = "https://bharatkalluri.com"

const SEO = {
  title,
  description,
  canonical: baseURL,
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: baseURL,
    title,
    description,
    images: [
    //   {
    //     //   TODO: Need to create an URL
    //     url: 'https://leerob.io/static/images/og.jpg',
    //     alt: title,
    //     width: 1280,
    //     height: 720
    //   }
    ]
  },
  twitter: {
    handle: '@bharatkalluri',
    site: '@bharatkalluri',
    cardType: 'summary_large_image'
  }
};

export default SEO;