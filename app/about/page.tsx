import type { Metadata } from 'next';
import Image from 'next/image';
import { CustomLink } from '../../components/CustomLink';
import { H1Styles, H2Styles } from '../../constants/style-constants';

export const metadata: Metadata = {
	title: 'About',
	description: 'Software engineer, fintech builder, and former Staff Engineer at Refyne.',
};

const actionLinkStyles = 'font-medium text-blue-600 hover:underline';
const sectionStyles = 'border-t-2 border-black pt-8';

const AboutPage = () => {
	return (
		<div className="flex flex-col gap-14 pb-4">
			<section className="max-w-3xl space-y-6 pt-4">
				<p className="text-sm font-medium uppercase tracking-wide text-gray-500">About</p>
				<h1 className={`${H1Styles} text-4xl leading-tight sm:text-5xl`}>
					Engineer. Fintech builder. Deeply curious about how things work.
				</h1>
				<Image
					src="/static/refyne-engineering-team.png"
					width={1200}
					height={900}
					alt="Bharat with Refyne engineering team"
					className="border-2 border-black"
				/>
				<p className="text-sm text-gray-500">With Refyne engineering team.</p>
				<div className="border-l-2 border-black pl-5 text-lg leading-relaxed text-gray-700">
					<p>
						I&apos;m an engineer who believes good engineering can materially improve people&apos;s lives.
						I&apos;ve worked across fintech companies, most recently as part of Refyne&apos;s founding team,
						helping take company from zero to $1.5B valuation and profitability.
					</p>
				</div>
			</section>

			<section className={`${sectionStyles} max-w-3xl space-y-8`}>
				<div>
					<h2 className={H1Styles}>Professional</h2>
					<p className="mt-3 text-gray-700">
						Career has moved through financial systems, product engineering, and teams growing from zero.
					</p>
				</div>

				<article className="space-y-3">
					<h3 className={H2Styles}>Wells Fargo, intern</h3>
					<p className="text-gray-700">
						Started in internal data-visualization tooling with React and Python backend systems. That work
						pulled me toward fintech startups.
					</p>
				</article>

				<article className="space-y-3">
					<h3 className={H2Styles}>Shubhloans, SDE I</h3>
					<p className="text-gray-700">
						Took care of credit and underwriting systems. Built rule engine, credit-decisioning
						infrastructure, ETL pipelines, and collection-agent management tooling.
					</p>
					<p className="text-gray-700">
						Working closely with risk leadership taught me how to translate domain expertise into useful
						technical systems.
					</p>
				</article>

				<article className="space-y-3">
					<h3 className={H2Styles}>JitFin Co., SDE II</h3>
					<p className="text-gray-700">
						First engineer at an invoice-discounting startup. Built backend, frontend, AWS infrastructure,
						monitoring, and production deployment.
					</p>
				</article>

				<article className="space-y-3">
					<h3 className={H2Styles}>Refyne, SDE II to Staff Engineer</h3>
					<p className="text-gray-700">
						Joined before Refyne had logo. Over five years, grew from SDE II through Associate Staff
						Engineer to Staff Engineer.
					</p>
					<ul className="list-disc space-y-2 pl-5 text-gray-700">
						<li>Built earned-wage-access beta and general-availability products with founding team.</li>
						<li>
							Set up early infrastructure and built B2B integrations and ETL pipelines processing millions
							of user records daily.
						</li>
						<li>
							Started B2B integrations team, then lending infrastructure team; grew teams to three and
							five engineers.
						</li>
						<li>
							Built loan management, UPI, gold savings, underwriting, compliance, and lender-management
							systems.
						</li>
						<li>Delivered cost optimizations saving tens of thousands of dollars each month.</li>
					</ul>
					<p className="text-gray-700">
						Refyne taught me engineering leadership, product discovery, customer conversations, and how to
						make difficult trade-offs while growing quickly.
					</p>
				</article>
			</section>

			<section className={`${sectionStyles} max-w-3xl space-y-6`}>
				<div>
					<h2 className={H1Styles}>Side projects</h2>
					<p className="mt-3 text-gray-700">
						I build things on side for fun, learning, and occasionally because existing tools frustrated me.
					</p>
				</div>
				<article>
					<h3 className={H2Styles}>From Scratch</h3>
					<p className="mt-2 text-gray-700">
						Book exploring everyday technology by rebuilding it from first principles. Four chapters
						published; more in progress.
					</p>
					<CustomLink
						href="https://fromscratch.bharatkalluri.com"
						className={`${actionLinkStyles} mt-3 inline-block`}
					>
						Explore From Scratch →
					</CustomLink>
				</article>
				<article>
					<h3 className={H2Styles}>Cleanmail</h3>
					<p className="mt-2 text-gray-700">
						Tool for bulk-deleting and unsubscribing from email senders. Built to clean 10,000 emails; since
						used to delete millions more.
					</p>
					<CustomLink
						href="https://cleanmail.bharatkalluri.com"
						className={`${actionLinkStyles} mt-3 inline-block`}
					>
						Visit Cleanmail →
					</CustomLink>
				</article>
				<p className="text-gray-700">
					More experiments: ClickUp Toolkit, Spotify-dl, Indian Engineering Blogs, and Life Counter on{' '}
					<CustomLink href="https://github.com/BharatKalluri" className={actionLinkStyles}>
						GitHub →
					</CustomLink>
				</p>
			</section>

			<section className="border-2 border-black p-6 sm:p-8">
				<h2 className={H1Styles}>Want to work together?</h2>
				<p className="mt-4 max-w-2xl text-lg leading-relaxed text-gray-700">
					Available for selected consulting engagements: product builds, difficult systems, and technical
					decisions needing experienced ownership.
				</p>
				<CustomLink href="https://cal.com/bharatkalluri" className={`${actionLinkStyles} mt-6 inline-block`}>
					Schedule a call →
				</CustomLink>
			</section>
		</div>
	);
};

export default AboutPage;
