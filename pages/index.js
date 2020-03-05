import Layout from '../src/components/MyLayout';
import Link from 'next/link';

function getPosts() {
	return [
		{ id: 'hello-nextjs', title: 'Hello Next.js' },
		{ id: 'learn-nextjs', title: 'Learn Next.js is awesome' },
		{ id: 'deploy-nextjs', title: 'Deploy apps with ZEIT' }
	];
}

export default function Blog() {
	return (
		<Layout>
			<h1>My Blog</h1>
			<ul>
				{ getPosts().map(post => (
					<li key={ post.id }>
						<Link href="/p/[id]" as={ `/p/${ post.id }` }>
							<a className="anchor">{ post.title }</a>
						</Link>
					</li>
				)) }
			</ul>
			{ require('../src/utils/utils.js').importStyles('index') }
		</Layout>
	);
}