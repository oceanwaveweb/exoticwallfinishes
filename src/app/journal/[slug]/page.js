import { JOURNAL_ARTICLES } from '@/data/journal';
import ArticleClient from './ArticleClient';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
    return JOURNAL_ARTICLES.map((article) => ({
        slug: article.slug,
    }));
}

export async function generateMetadata({ params }) {
    const resolvedParams = await params;
    const article = JOURNAL_ARTICLES.find((a) => a.slug === resolvedParams.slug);
    
    if (!article) {
        return {
            title: 'Article Not Found | Exotic Wall Finishes',
        };
    }

    return {
        title: `${article.title} | Exotic Wall Finishes Journal`,
        description: article.excerpt,
        alternates: {
            canonical: `https://www.exoticwallfinishes.com/journal/${article.slug}`,
        },
        openGraph: {
            title: article.title,
            description: article.excerpt,
            url: `https://www.exoticwallfinishes.com/journal/${article.slug}`,
            images: [
                {
                    url: article.image,
                    alt: article.title,
                },
            ],
        },
    };
}

export default async function ArticlePage({ params }) {
    const resolvedParams = await params;
    const article = JOURNAL_ARTICLES.find((a) => a.slug === resolvedParams.slug);

    if (!article) {
        notFound();
    }

    return <ArticleClient article={article} />;
}
