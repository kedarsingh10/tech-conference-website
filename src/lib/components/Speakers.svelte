<script lang="ts">
	import { Container, Row, Col, Card, CardBody, CardTitle } from '@sveltestrap/sveltestrap';

	let { mainSpeakersOnly = false } = $props<{ mainSpeakersOnly: boolean }>();

	const speakers = [
		{
			name: 'Dr. Sarah Chen',
			title: 'AI Research Director, TechCorp',
			image: '/images/speakers/Sarah.jpg',
			isMainSpeaker: true,
			bio: 'Leading expert in artificial intelligence and machine learning with over 15 years of experience in developing cutting-edge AI solutions.',
			topics: ['Artificial Intelligence', 'Machine Learning', 'Neural Networks']
		},
		{
			name: 'James Wilson',
			title: 'Chief Architect, CloudScale',
			image: '/images/speakers/James.jpg',
			isMainSpeaker: true,
			bio: 'Cloud architecture specialist focusing on scalable systems and microservices architecture.',
			topics: ['Cloud Architecture', 'Microservices', 'Scalability']
		},
		{
			name: 'Maria Rodriguez',
			title: 'Security Engineer, SecureNet',
			image: '/images/speakers/Maria.jpg',
			isMainSpeaker: false,
			bio: 'Cybersecurity expert specializing in threat detection and blockchain security.',
			topics: ['Cybersecurity', 'Blockchain', 'Network Security']
		},
		{
			name: 'David Kim',
			title: 'UX Director, DesignLabs',
			image: '/images/speakers/David.jpg',
			isMainSpeaker: false,
			bio: 'User experience designer with a passion for creating intuitive and accessible interfaces.',
			topics: ['UX Design', 'Accessibility', 'User Research']
		}
	];

	const displayedSpeakers = $derived(
		mainSpeakersOnly ? speakers.filter((speaker) => speaker.isMainSpeaker) : speakers
	);
</script>

<Container>
	<Row class="row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
		{#each displayedSpeakers as speaker}
			<Col>
				<Card class="h-100 speaker-card">
					<CardBody>
						<div class="text-center mb-3">
							<img
								src={speaker.image}
								alt={speaker.name}
								class="rounded-circle speaker-image mb-3"
								width="150"
								height="150"
							/>
							<CardTitle class="h4">
								{speaker.name}
							</CardTitle>
							<p class="text-muted">{speaker.title}</p>
						</div>

						{#if !mainSpeakersOnly}
							<p class="speaker-bio">{speaker.bio}</p>
							<div class="topics">
								{#each speaker.topics as topic}
									<span class="badge bg-primary me-1 mb-1">{topic}</span>
								{/each}
							</div>
						{/if}
					</CardBody>
				</Card>
			</Col>
		{/each}
	</Row>
</Container>

<style>
	.speaker-image {
		object-fit: cover;
		border: 3px solid #f8f9fa;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	}
	.speaker-bio {
		font-size: 0.95rem;
		line-height: 1.5;
		margin-bottom: 1rem;
	}

	.topics {
		margin-top: auto;
	}

	
</style>
