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
	<article className="flex flex-col border-2 border-black p-5 sm:p-6">
		<h3 className={H2Styles}>{title}</h3>
		<p className="mt-2 text-xs font-bold uppercase tracking-[0.16em] text-gray-500">{tags}</p>
		<p className="mt-3 flex-grow leading-relaxed text-gray-700">{description}</p>
		<CustomLink href={href} className={`${actionLinkStyles} mt-6`}>
			{linkText}
		</CustomLink>
	</article>
);

const Writing = ({ posts }: { posts: Post[] }) => (
	<section className={sectionStyles}>
		<div className="grid gap-8 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] md:gap-14">
			<div>
				<p className="text-xs font-bold uppercase tracking-[0.16em] text-gray-500">Writing</p>
				<SectionHeading>I write about how software works.</SectionHeading>
				<p className="mt-5 max-w-sm leading-relaxed text-gray-700">
					Technical explanations and experiments, written for people who want to understand systems deeply.
				</p>
				<CustomLink href="/blog" className={`${actionLinkStyles} mt-6 inline-block`}>
					Browse all writing →
				</CustomLink>
			</div>
			<ul className="border-t border-gray-300">
				{posts.map((post) => (
					<li key={post.url} className="border-b border-gray-300 py-4">
						<CustomLink href={post.url} className={`${actionLinkStyles} text-lg`}>
							{post.title} →
						</CustomLink>
					</li>
				))}
			</ul>
		</div>
	</section>
);

const IndexPage = () => {
	const topPosts = allPosts
		.filter((post) => post.onFrontPage)
		.sort((a, b) => Date.parse(b.publishedAt) - Date.parse(a.publishedAt));

	return (
		<div className="flex flex-col gap-16 pb-4">
			<section className="max-w-3xl space-y-6 pt-10 pb-4">
				<p className="text-sm font-medium uppercase tracking-wide text-gray-500">Bharat Kalluri</p>
				<h1 className={`${H1Styles} text-4xl leading-tight sm:text-5xl`}>
					Building useful software for teams doing consequential work.
				</h1>
				<div className="max-w-2xl space-y-5 text-lg leading-relaxed text-gray-700">
					<p>
						I work with nonprofits, mission-driven teams, and startups: building products, improving
						systems, and turning messy operational work into software that helps people do more.
					</p>
					<p>
						My background is in startup engineering, with 7+ years building products and systems in fintech.
					</p>
				</div>
				<div className="flex flex-wrap gap-x-6 gap-y-3 pt-1">
					<CustomLink href="https://cal.com/bharatkalluri" className={actionLinkStyles}>
						Work with me →
					</CustomLink>
					<CustomLink href="#work" className={actionLinkStyles}>
						See independent work →
					</CustomLink>
				</div>
			</section>

			<section className={`${sectionStyles} max-w-3xl`}>
				<div className="mb-8">
					<SectionHeading>Where I&apos;ve built</SectionHeading>
				</div>
				<div className="space-y-8">
					<article className="border-l-2 border-black pl-5">
						<h3 className={H2Styles}>Refyne · Founding engineer → Staff Engineer</h3>
						<div className="mt-3 space-y-4 leading-relaxed text-gray-700">
							<p>
								Helped build Refyne from its earliest product through scale-up across earned-wage
								access, lending, UPI, underwriting, integrations, and data pipelines.
							</p>
							<p>
								Started and led lending infrastructure and B2B integrations teams, working closely with
								customers, lenders, compliance teams, and company leadership.
							</p>
						</div>
						<p className="mt-5 text-sm text-gray-700">
							5 years · 0 → 500+ companies · 8 million employees · Led teams of 5 and 3
						</p>
					</article>
					<div className="grid gap-8 md:grid-cols-2">
						<article className="border-l-2 border-gray-200 pl-5">
							<h3 className={H2Styles}>JitFin Co. · First engineer</h3>
							<p className="mt-3 leading-relaxed text-gray-700">
								Built an invoice-discounting platform end to end: product, backend, frontend, AWS
								infrastructure, monitoring, and production deployment.
							</p>
						</article>
						<article className="border-l-2 border-gray-200 pl-5">
							<h3 className={H2Styles}>Shubhloans · Software engineer</h3>
							<p className="mt-3 leading-relaxed text-gray-700">
								Built underwriting and credit-decisioning systems, a rule engine, ETL pipelines, and
								collections tooling while working directly with risk leadership.
							</p>
						</article>
					</div>
				</div>
				<CustomLink href="/about" className={`${actionLinkStyles} mt-8 inline-block`}>
					Read more about my work →
				</CustomLink>
			</section>

			<section className={sectionStyles}>
				<div className="mb-10 max-w-2xl">
					<p className="text-xs font-bold uppercase tracking-[0.16em] text-gray-500">Consulting</p>
					<SectionHeading>How I work with teams</SectionHeading>
					<p className="mt-5 leading-relaxed text-gray-700">
						I&apos;m particularly keen to work with nonprofits and civic organizations, but collaborate with
						any team doing thoughtful, useful work.
					</p>
					<CustomLink
						href="https://cal.com/bharatkalluri"
						className={`${actionLinkStyles} mt-6 inline-block`}
					>
						Tell me about it →
					</CustomLink>
				</div>
				<div className="grid gap-x-12 gap-y-10 md:grid-cols-2">
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
			</section>

			<section id="work" className={sectionStyles}>
				<div className="mb-8 max-w-xl">
					<SectionHeading>Personal Projects</SectionHeading>
					<p className="mt-4 text-lg leading-relaxed text-gray-700">
						Public-interest projects and useful experiments.
					</p>
				</div>
				<div className="grid gap-5 md:grid-cols-2">
					<Work
						title="Parks Observatory"
						description="A public-interest data project making Bengaluru park information easier for residents and advocates to collect, explore, and understand."
						tags="Data · Civic tech · Mapping"
						href="https://parks-observatory-production.up.railway.app/"
						linkText="View project →"
					/>
					<Work
						title="From Scratch"
						description="An ongoing attempt to understand web stack by rebuilding parts from first principles: event loops, DNS, networking, and machinery underneath everyday software."
						tags="Computer science · Systems"
						href="https://fromscratch.bharatkalluri.com"
						linkText="Explore From Scratch →"
					/>
					<Work
						title="Flashcard"
						description="Skip another LinkedIn connection that gets lost in the feed. Share a QR code that saves a real phone contact—with or without a phone number—and notes about when and how you met. It leans on the contact standard, so the connection stays searchable where you already look."
						tags="Contact sharing · Privacy · QR codes"
						href="https://flashcard.bharatkalluri.com"
						linkText="Try Flashcard →"
					/>
					<Work
						title="Wander"
						description="A personal atlas for saving restaurants, trails, and other places before they get lost in chats, then turning the places that belong together into a flexible trip."
						tags="Travel · Places · Trip planning"
						href="https://wander.bharatkalluri.com"
						linkText="Explore Wander →"
					/>
				</div>
			</section>

			<Writing posts={topPosts} />

			<section
				className={`${sectionStyles} grid gap-8 md:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] md:gap-14`}
			>
				<div>
					<p className="text-xs font-bold uppercase tracking-[0.16em] text-gray-500">About</p>
					<SectionHeading>Engineer, builder, curious person.</SectionHeading>
				</div>
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
					<CustomLink href="/about" className={`${actionLinkStyles} mt-5 inline-block`}>
						More about me →
					</CustomLink>
				</div>
			</section>

			<section id="contact" className="border-2 border-black p-6 sm:p-10">
				<p className="text-xs font-bold uppercase tracking-[0.16em] text-gray-500">Start a conversation</p>
				<h2 className={`${H1Styles} mt-4 text-4xl leading-tight sm:text-5xl`}>Working on something useful?</h2>
				<div className="mt-5 max-w-2xl space-y-4 text-lg leading-relaxed text-gray-700">
					<p>
						I take on selected engagements with nonprofits, mission-driven organizations, and startups. If
						software could remove friction from your work, let&apos;s talk.
					</p>
				</div>
				<div className="mt-8 flex flex-wrap gap-3">
					<CustomLink
						href="https://cal.com/bharatkalluri"
						className="bg-black px-5 py-3 font-semibold text-white no-underline hover:bg-gray-800"
					>
						Schedule a call →
					</CustomLink>
					<CustomLink
						href={`mailto:${EMAIL}`}
						className="px-5 py-3 font-semibold text-blue-700 underline underline-offset-4"
					>
						Email me at {EMAIL}
					</CustomLink>
				</div>
			</section>
		</div>
	);
};

export default IndexPage;
