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

const CaseStudy = () => (
	<article className="border-2 p-5 sm:p-6">
		<p className="text-xs font-medium uppercase tracking-wide text-gray-500">Nonprofit / civic technology</p>
		<h3 className={`${H2Styles} mt-2`}>Pacta / Parks Observatory</h3>
		<div className="mt-5 grid gap-x-8 gap-y-5 text-gray-700 md:grid-cols-2">
			<div>
				<p className="font-medium text-black">The problem</p>
				<p className="mt-1">
					Bengaluru has many public parks, but information about their condition, rules, accessibility, and
					possibilities is scattered and difficult to use.
				</p>
			</div>
			<div>
				<p className="font-medium text-black">The context</p>
				<p className="mt-1">
					At a public-spaces workshop, the founder of Pacta helped our team understand the policy and community
					context. We narrowed a large civic problem down to parks and the communities around them.
				</p>
			</div>
			<div>
				<p className="font-medium text-black">My role</p>
				<p className="mt-1">
					I worked on the research, data, story, and prototype with the team, bringing an engineering perspective
					to a problem that first needed better framing.
				</p>
			</div>
			<div>
				<p className="font-medium text-black">What we did</p>
				<p className="mt-1">
					We explored a structured database for parks, including regulations, timings, accessibility, activities,
					and maintenance indicators. That work became Parks Observatory.
				</p>
			</div>
			<div>
				<p className="font-medium text-black">How technology helps</p>
				<p className="mt-1">
					Shared, usable data can help residents discover public spaces, help organisers plan activities, and give
					people working on parks a clearer basis for action.
				</p>
			</div>
			<div>
				<p className="font-medium text-black">Current status</p>
				<p className="mt-1">
					Parks Observatory is a live prototype and an ongoing exploration of how data can make civic problems
					easier to see, discuss, and improve.
				</p>
			</div>
		</div>
		<CustomLink
			href="https://parks-observatory-production.up.railway.app/"
			className={`${actionLinkStyles} mt-6 inline-block`}
		>
			Explore Parks Observatory →
		</CustomLink>
	</article>
);

const Writing = ({ posts }: { posts: Post[] }) => (
	<section className={sectionStyles}>
		<SectionHeading>I write about technology, systems, and judgment.</SectionHeading>
		<div className="max-w-2xl space-y-4 text-lg">
			<p>I&apos;ve been writing technical explanations and documenting my experiments for years.</p>
			<p>
				I&apos;m also interested in writing about technology for nonprofits, civic tech, public data, build-versus-buy
				decisions, and AI or automation for small teams.
			</p>
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
						I work with small teams that need technology to get something important done - whether that&apos;s choosing
						the right tools, automating messy workflows, making better use of data, or building custom software when
						existing tools aren&apos;t enough.
					</p>
					<p>
						I&apos;m particularly interested in working with nonprofits and civic organisations where good technology can
						help small teams do considerably more.
					</p>
					<p className="border-l-2 border-black pl-5 text-black">
						<strong className="font-semibold">You don&apos;t need to know what technology you need before reaching out.</strong>{' '}
						Tell me what you&apos;re trying to accomplish. We can figure out whether the answer is software, automation,
						an existing tool, or something simpler.
					</p>
					<p className="text-base">
						I have 7+ years of experience building and operating software. As a founding engineer at Refyne, I helped
						build systems serving a network of{' '}
						<strong className="font-semibold text-black">500+ companies and 8 million employees</strong>.
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
				<SectionHeading>Problems I can help with</SectionHeading>
				<p className="max-w-2xl text-lg leading-relaxed text-gray-700">
					The first question is not always &quot;what should we build?&quot; Sometimes the useful work is understanding
					the problem, improving what already exists, or choosing not to build at all.
				</p>
				<div className="mt-8 grid gap-8 md:grid-cols-2">
					<Service title="Figure out what you actually need">
						<p>You have a problem but do not yet know whether the answer is technology.</p>
						<p>
							We can work out whether you need software, automation, AI, an existing SaaS tool, or simply a better
							process.
						</p>
					</Service>
					<Service title="Make your existing technology work better">
						<p>Tools and processes often become messy as an organisation grows.</p>
						<p>
							I can help with spreadsheets, disconnected tools, manual workflows, unreliable systems, difficult-to-use
							data, and infrastructure that costs more than it should.
						</p>
					</Service>
					<Service title="Build something when necessary">
						<p>When existing tools are not enough, I can help turn a clear need into something useful.</p>
						<p>
							That might be an internal tool, dashboard, website, integration, data system, public-facing product, or
							custom application.
						</p>
					</Service>
					<Service title="Be your technology sounding board">
						<p>You should not need a CTO to make a good technical decision.</p>
						<p>
							I can help evaluate vendors, software proposals, tools, architecture, AI opportunities, and other
							technical choices.
						</p>
					</Service>
				</div>
			</section>

			<section className={`${sectionStyles} max-w-3xl`}>
				<SectionHeading>Experience building and operating serious software</SectionHeading>
				<h3 className={H2Styles}>Founding engineer at Refyne</h3>
				<div className="mt-3 space-y-4 text-lg leading-relaxed text-gray-700">
					<p>
						I joined Refyne as part of its founding engineering team and spent several years helping build and scale
						the platform from the ground up.
					</p>
					<p>
						Refyne now serves a network of{' '}
						<strong className="font-semibold text-black">500+ companies and 8 million employees</strong>.
					</p>
					<p>
						I&apos;ve worked across application architecture, backend systems, infrastructure, developer
						tooling, integrations, and everyday engineering problems that appear when a startup grows
						quickly.
					</p>
					<p>
						That experience helps me move between product questions, organisational constraints, and the technical
						details needed to make a system dependable.
					</p>
				</div>
				<CustomLink href="/about" className={`${actionLinkStyles} mt-5 inline-block`}>
					Read about my work →
				</CustomLink>
			</section>

			<section id="work" className={sectionStyles}>
				<SectionHeading>Selected work</SectionHeading>
				<div className="space-y-5">
					<CaseStudy />
					<div className="grid gap-5 md:grid-cols-2">
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
				</div>
			</section>

			<section className={`${sectionStyles} max-w-3xl`}>
				<SectionHeading>Ways to work together</SectionHeading>
				<p className="max-w-2xl text-lg leading-relaxed text-gray-700">
					I take on advisory work, short projects, and longer hands-on engagements. The shape can follow what your
					organisation actually needs.
				</p>
				<div className="mt-8 grid gap-8 md:grid-cols-2">
					<Service title="Technology advisory">
						<p>Ongoing or occasional help thinking through tools, vendors, architecture, data, and AI.</p>
					</Service>
					<Service title="Short-term consulting">
						<p>A focused engagement to understand a problem, improve a system, or make an important decision.</p>
					</Service>
					<Service title="Project-based development">
						<p>Hands-on work to build an internal tool, integration, dashboard, website, or custom application.</p>
					</Service>
					<Service title="Ongoing technology support">
						<p>A practical technical partner for a small team that needs experienced ownership over time.</p>
					</Service>
				</div>
			</section>

			<Writing posts={topPosts} />

			<section className={`${sectionStyles} max-w-3xl`}>
				<SectionHeading>About me</SectionHeading>
				<div className="space-y-4 text-lg leading-relaxed text-gray-700">
					<p>I&apos;m Bharat, a technologist based in Bengaluru.</p>
					<p>
						I started as an engineer, became a founding engineer and technology leader at a fast-growing startup,
						and now help organisations use technology more effectively.
					</p>
					<p>
						I&apos;m especially drawn to nonprofit and civic problems where a small team can benefit from thoughtful
						technology, better data, and practical technical judgment.
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
				<h2 className={H1Styles}>Have a problem technology might help with?</h2>
				<div className="mt-4 max-w-2xl space-y-4 text-lg leading-relaxed text-gray-700">
					<p>
						Tell me what you&apos;re trying to accomplish and we&apos;ll figure out the right way to approach it.
					</p>
					<p>I&apos;m available for selected advisory, consulting, and hands-on engagements.</p>
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
