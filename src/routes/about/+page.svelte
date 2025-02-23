<script lang="ts">
	import { Container, Row, Col, Card, CardBody } from '@sveltestrap/sveltestrap';
	import { companyName, currentYear } from '../../stores/companyInfo';
	3;

	const conferenceDetails = {
		mission: 'Bridging Innovation and Technology',
		description:
			'FutureTechExpo 2025 is where technology meets possibility. Join us for three days of cutting-edge presentations, hands-on workshops, and networking opportunities with industry leaders.',
		highlights: [
			{
				title: 'Expert Speakers',
				description:
					'Learn from industry pioneers and thought leaders who are shaping the future of technology.'
			},
			{
				title: 'Interactive Workshops',
				description:
					'Gain practical experience through hands-on sessions covering the latest tools and technologies.'
			},
			{
				title: 'Networking',
				description:
					'Connect with fellow developers, entrepreneurs, and tech enthusiasts from around the globe.'
			}
		]
	};
</script>

<Container class="py-5">
	<!-- Hero Section -->
	<Row class="mb-5">
		<Col lg={8} class="mx-auto text-center">
			<h1 class="display-4 fw-bold mb-4">About {$companyName}</h1>
			<h4 class="text-primary fw-semibold mb-3">{conferenceDetails.mission}</h4>
			<p class="lead text-secondary">{conferenceDetails.description}</p>
		</Col>
	</Row>

	<!-- Highlights Section -->
	<Row class="g-4 mb-5">
		{#each conferenceDetails.highlights as highlight}
			<Col md={4}>
				<Card class="h-100 border-0 highlight-card">
					<CardBody class="p-4 text-center">
						
						<h3 class="h4 fw-bold mb-3">
							{highlight.title}
						</h3>
						<p class="text-secondary mb-0">
							{highlight.description}
						</p>
					</CardBody>
				</Card>
			</Col>
		{/each}
	</Row>

	<!-- Mission Section -->
	<Row>
		<Col lg={8} class="mx-auto text-center">
			<div class="mission-section p-5 rounded-3">
				<h3 class="fw-bold mb-4">Our Mission</h3>
				<p class="lead mb-0">{conferenceDetails.description}</p>
			</div>
		</Col>
	</Row>
</Container>

<style>
	:global(.highlight-card) {
		transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
	}

	:global(.highlight-card:hover) {
		transform: translateY(-5px);
		box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
	}

	:global(.mission-section) {
		background: linear-gradient(135deg, 
			var(--bs-body-bg) 0%,
			var(--bs-secondary-bg) 100%
		);
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
		border: 1px solid var(--bs-border-color);
	}

	:global(.highlight-icon) {
		display: inline-block;
		padding: 1rem;
		border-radius: 50%;
		background: var(--bs-light);
		margin-bottom: 1.5rem;
	}
</style>


