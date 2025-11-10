import { getAllResorts, getResortData } from '@/lib/api';
import Resort from './resort';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

export const revalidate = 120;

export const generateStaticParams = async () => {
  const allResorts = await getAllResorts();
  return allResorts.map((r) => ({
    slug: r.slug,
  }));
};

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

const Page = async ({ params }: PageProps) => {
  const { slug } = await params;

  const [resort, allResorts] = await Promise.all([
    getResortData(slug),
    getAllResorts(),
  ]);

  if (!resort) {
    notFound();
  }

  const relatedResorts = allResorts
    .filter((r) => r.country === resort.country && r.slug !== resort.slug)
    .slice(0, 3);

  return (
    <>
      <Resort resort={resort} relatedResorts={relatedResorts} />
    </>
  );
};

export default Page;

export const generateMetadata = async ({
  params,
}: PageProps): Promise<Metadata> => {
  const { slug } = await params;
  const resort = await getResortData(slug);

  if (!resort) {
    return { title: 'Resort Not Found' };
  }

  return {
    title: `${resort.name} | ${resort.region}, ${resort.country}`,
    description: resort.shortDescription,
    keywords: [
      resort.name,
      resort.country,
      resort.region,
      'ski resort',
      'skiing',
      'snowboarding',
    ],
    openGraph: {
      title: `${resort.name} | ${resort.region}, ${resort.country}`,
      description: resort.shortDescription,
      images: resort.heroImageUrl ? [{ url: resort.heroImageUrl }] : [],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${resort.name} | ${resort.region}, ${resort.country}`,
      description: resort.shortDescription,
      images: resort.heroImageUrl ? [resort.heroImageUrl] : [],
    },
  };
};
