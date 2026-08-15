import { allPosts } from 'content-collections';
import type { Post } from 'content-collections';
import { EMAIL } from '../constants/constants';
import { H1Styles, H2Styles } from '../constants/style-constants';
import { CustomLink } from '../components/CustomLink';

const actionLinkStyles = 'font-medium text-blue-600 hover:underline';
const sectionStyles = 'border-t-2 border-black pt-8';

const SectionHeading = ({ children }: { children: React.ReactNode }) => (
	<h2 className={`${H1Styles} mb-6`}>{children}</h2>
);

const Service = ({ title, children }: { title: string; children: React.ReactNode }) => (
	<article className="border-l-2 border-gray-200 pl-5">
		<h3 className={H2Styles}>{title}</h3>
		<div className="mt-2 space-y-3 text-gray-700">{children}</div>
	</article>
);

const Work = ({
	title,
	description,
	tags,
	href,
	linkText,
}: {
	title: string;
	description: string;
	tags: string;
	href: string;
	linkText: string;
}) => (
	<article className="flex flex-col border-2 p-5">
		<h3 className={H2Styles}>{title}</h3>
		<p className="mt-3 flex-grow text-gray-700">{description}</p>
		<p className="mt-5 text-xs font-medium uppercase tracking-wide text-gray-500">{tags}</p>
		<CustomLink href={href} className={`${actionLinkStyles} mt-4`}>
			{linkText}
		</CustomLink>
	</article>
);

const Writing = ({ posts }: { posts: Post[] }) => (
	<section className={sectionStyles}>
		<SectionHeading>I write about how software works.</SectionHeading>
		<div className="max-w-2xl space-y-4 text-lg">
			<p>I&apos;ve been writing technical explanations and documenting my experiments for years.</p>
			<p className="text-sm font-medium uppercase tracking-wide text-gray-500">Some popular pieces</p>
			<ul className="border-y-2 border-gray-200 py-2">
				{posts.map((post) => (
					<li key={post.url} className="border-b border-gray-200 py-3 last:border-b-0">
						<CustomLink href={post.url} className={actionLinkStyles}>
							{post.title} →
						</CustomLink>
					</li>
				))}
			</ul>
		</div>
		<div className="mt-8">
			<CustomLink href="/blog" className={actionLinkStyles}>
				Browse all writing →
			</CustomLink>
		</div>
	</section>
);

const IndexPage = () => {
	const topPosts = allPosts
		.filter((post) => post.onFrontPage)
		.sort((a, b) => Date.parse(b.publishedAt) - Date.parse(a.publishedAt));

	return (
		<div className="flex flex-col gap-16 pb-4">
			<section className="max-w-3xl space-y-6 pt-4">
				<p className="text-sm font-medium uppercase tracking-wide text-gray-500">Bharat Kalluri</p>
				<h1 className={`${H1Styles} text-4xl leading-tight sm:text-5xl`}>
					I help startups &amp; NGOs build and untangle software.
				</h1>
				<div className="max-w-2xl space-y-5 text-lg leading-relaxed text-gray-700">
					<p>
						I&apos;m a software engineer and consultant with 7+ years of experience building products and
						systems in fintech.
					</p>
					<p>
						I work with founders and engineering teams when they need an experienced engineer to take
						ownership of a difficult technical problem, whether that&apos;s getting a new product off the
						ground, untangling an existing system, or figuring out the right technical direction.
					</p>
				</div>
				<div className="flex flex-wrap gap-x-6 gap-y-3 pt-1">
					<CustomLink href="https://cal.com/bharatkalluri" className={actionLinkStyles}>
						Work with me →
					</CustomLink>
					<CustomLink href="#work" className={actionLinkStyles}>
						See my work
					</CustomLink>
				</div>
			</section>

			<section className={sectionStyles}>
				<SectionHeading>What I can help with</SectionHeading>
				<div className="grid gap-8 md:grid-cols-2">
					<Service title="Build something new">
						<p>You have an idea, business problem, or internal workflow that needs software.</p>
						<p>
							I can turn it into a working product: architecture, sensible technology choices, and
							implementation.
						</p>
					</Service>
					<Service title="Fix something that's hurting">
						<p>Systems accumulate complexity.</p>
						<p>
							I find and fix problems making an application difficult to change, unreliable, expensive, or
							confusing.
						</p>
					</Service>
					<Service title="Make a difficult technical decision">
						<p>Sometimes you need experienced thinking, not another pair of hands.</p>
						<p>
							Architecture reviews, technology choices, prototypes, system design, infrastructure
							decisions, and technical second opinions.
						</p>
					</Service>
					<Service title="Small, unusual software projects">
						<p>
							I enjoy internal tools, automations, data systems, integrations, civic-tech projects, and
							prototypes.
						</p>
						<p>Useful problems do not always fit a SaaS product or six-month roadmap.</p>
					</Service>
				</div>
				<p className="mt-8">
					Have something else in mind?{' '}
					<CustomLink href="https://cal.com/bharatkalluri" className={actionLinkStyles}>
						Tell me about it →
					</CustomLink>
				</p>
			</section>

			<section className={`${sectionStyles} max-w-3xl`}>
				<SectionHeading>Experience</SectionHeading>
				<h3 className={H2Styles}>Building Refyne from the ground up</h3>
				<div className="mt-3 space-y-4 text-lg leading-relaxed text-gray-700">
					<p>
						I joined Refyne as part of its founding engineering team and spent several years helping build
						and scale the platform.
					</p>
					<p>
						Today, Refyne serves a network of{' '}
						<strong className="font-semibold text-black">500+ companies and 8 million employees</strong>.
					</p>
					<p>
						I&apos;ve worked across application architecture, backend systems, infrastructure, developer
						tooling, integrations, and everyday engineering problems that appear when a startup grows
						quickly.
					</p>
				</div>
				<CustomLink href="/about" className={`${actionLinkStyles} mt-5 inline-block`}>
					Read about my work →
				</CustomLink>
			</section>

			<section id="work" className={sectionStyles}>
				<SectionHeading>Selected work</SectionHeading>
				<div className="grid gap-5 md:grid-cols-3">
					<Work
						title="Parks Observatory"
						description="Making information about Bengaluru's public parks easier to collect, structure, explore, and understand."
						tags="Data · Civic tech · Mapping"
						href="https://parks-observatory-production.up.railway.app/"
						linkText="View project →"
					/>
					<Work
						title="Flashcard"
						description="A deliberately simple way to share contact information at conferences and events using QR codes and standard VCF contact files."
						tags="Product engineering · Web"
						href="https://flashcard.bharatkalluri.com"
						linkText="View project →"
					/>
					<Work
						title="From Scratch"
						description="An ongoing attempt to understand web stack by rebuilding parts from first principles: event loops, DNS, networking, and machinery underneath everyday software."
						tags="Computer science · Systems"
						href="https://fromscratch.bharatkalluri.com"
						linkText="Explore From Scratch →"
					/>
				</div>
			</section>

			<Writing posts={topPosts} />

			<section className={`${sectionStyles} max-w-3xl`}>
				<SectionHeading>About me</SectionHeading>
				<div className="space-y-4 text-lg leading-relaxed text-gray-700">
					<p>I&apos;m Bharat, a software engineer based in Bengaluru.</p>
					<p>
						I like understanding systems deeply, building useful things, and working on problems where
						software intersects with the real world.
					</p>
					<p>
						Outside work, I&apos;m usually reading, tinkering with a side project, self-hosting something
						unnecessarily, or disappearing into a computer game.
					</p>
				</div>
				<CustomLink href="/about" className={`${actionLinkStyles} mt-5 inline-block`}>
					More about me →
				</CustomLink>
			</section>

			<section id="contact" className="border-2 border-black p-6 sm:p-8">
				<h2 className={H1Styles}>Have a software problem worth solving?</h2>
				<div className="mt-4 max-w-2xl space-y-4 text-lg leading-relaxed text-gray-700">
					<p>I&apos;m available for selected consulting engagements.</p>
					<p>
						If you have a product to build, a system causing trouble, or a technical problem needing another
						experienced engineer, I&apos;d be happy to hear about it.
					</p>
				</div>
				<div className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
					<CustomLink href="https://cal.com/bharatkalluri" className={actionLinkStyles}>
						Schedule a call →
					</CustomLink>
					<CustomLink href={`mailto:${EMAIL}`} className={actionLinkStyles}>
						Email me at {EMAIL}
					</CustomLink>
				</div>
			</section>
		</div>
	);
};

export default IndexPage;
