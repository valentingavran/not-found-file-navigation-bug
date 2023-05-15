import Link from 'next/link';
import { notFound } from "next/navigation";

export default function ArticlePage({ params }: {params: { articleId: string }} ) {
	if(params.articleId !== '1') notFound();
	return (
	<main>
		<h1>Article Page</h1>
		<p>Only visible if articleId is 1</p>
		<Link href="/">Back to home</Link>
	</main>)
}
