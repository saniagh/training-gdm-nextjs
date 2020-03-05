import Layout from '../src/components/MyLayout';
import Link from 'next/link';
import { connect } from 'react-redux';
import image from '../src/images/download.jpeg';

function getPosts() {
	return [
		{ id: 'hello-nextjs', title: 'Hello Next.js' },
		{ id: 'learn-nextjs', title: 'Learn Next.js is awesome' },
		{ id: 'deploy-nextjs', title: 'Deploy apps with ZEIT' }
	];
}

const Blog = () => {
	const layout = require('../src/utils/layout.js').Index();
	return (
		<Layout>
			<h1>{ layout.pageTitle }</h1>
			<ul>
				{ getPosts().map(post => (
					<li key={ post.id }>
						<Link href="/p/[id]" as={ `/p/${ post.id }` }>
							<a className="anchor">{ post.title }</a>
						</Link>
					</li>
				)) }
			</ul>
			<img src={ image } style={{ width: 150 }}/>
			{ require('../src/utils/utils.js').importStyles('index') }
		</Layout>
	);
};

export default connect()(Blog);