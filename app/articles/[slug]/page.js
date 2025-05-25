import articles from "@/data/articles.json";
import { notFound } from "next/navigation";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import Head from "next/head";

// ✅ Generate paths for all slugs
export async function generateStaticParams() {
    return articles.map((article) => ({
        slug: article.slug,
    }));
}

// ✅ Dynamic metadata for SEO
export async function generateMetadata({ params }) {
    const { slug } = await params;
    const article = articles.find((a) => a.slug === slug);

    if (!article) return {};

    const meta = article.metadata;
    return {
        title: meta.title,
        description: meta.description,
        keywords: meta.keywords,
        metadataBase: new URL(meta.metadataBase),
        openGraph: {
            title: meta.openGraph.title,
            description: meta.openGraph.description,
            url: meta.openGraph.url,
            type: meta.openGraph.type,
            images: meta.openGraph.images,
        },
        twitter: {
            card: meta.twitter.card,
            title: meta.twitter.title,
            description: meta.twitter.description,
            images: [meta.twitter.image],
        },
        alternates: {
            canonical: meta.canonical,
        },
    };
}

// ✅ The actual article page
export default async function ArticlePage({ params }) {
    const { slug } = await params;
    const article = articles.find((a) => a.slug === slug);

    if (!article) return notFound();

    return (
        <Container className="py-4">
            <Head>
                <title>{article.metadata.title}</title>
                <meta
                    name="description"
                    content={article.metadata.description}
                />
                <meta name="keywords" content={article.metadata.keywords} />
            </Head>

            <Row>
                <Col>
                    <h1>{article.title}</h1>
                    <p className="text-muted">
                        By {article.author} •{" "}
                        {new Date(article.published).toLocaleDateString()}
                    </p>
                    {article.image && (
                        <img
                            src={article.image}
                            alt={article.alt}
                            width={800}
                            height={450}
                            className="img-fluid mb-4"
                        />
                    )}
                    <p className="lead">{article.introduction}</p>
                    <hr />
                </Col>
            </Row>

            {article.sections.map((section, index) => (
                <Row key={index} className="mb-4">
                    <Col>
                        <h2>{section.heading}</h2>
                        <div
                            dangerouslySetInnerHTML={{ __html: section.html }}
                        />
                    </Col>
                </Row>
            ))}

            {article.sources && article.sources.length > 0 && (
                <Row className="mt-5">
                    <Col>
                        <h3>Sources</h3>
                        <ul>
                            {article.sources.map((source, i) => (
                                <li key={i}>
                                    <a
                                        href={source.url}
                                        target="_blank"
                                        rel="noopener noreferrer">
                                        {source.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </Col>
                </Row>
            )}
        </Container>
    );
}
