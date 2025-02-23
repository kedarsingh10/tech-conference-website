<script lang="ts">
	import {
		Container,
		Row,
		Col,
		Button,
		ButtonGroup,
		Card,
		CardBody
	} from '@sveltestrap/sveltestrap';

	const schedule = [
		{
			day: 'Day 1',
			date: '2025-06-01',
			sessions: [
				{
					time: '09:00 - 10:00',
					title: 'Opening Keynote: The Future of AI',
					speaker: 'Dr. Sarah Chen',
					description: 'Exploring the latest breakthroughs in AI and their impact on technology'
				},
				{
					time: '10:30 - 11:30',
					title: 'Cloud Architecture Workshop',
					speaker: 'James Wilson',
					description: 'Hands-on session on building scalable cloud architectures'
				},
				{
					time: '11:30 - 12:30',
					title: 'Cybersecurity Best Practices',
					speaker: 'Maria Rodriguez',
					description: 'Essential security practices for modern applications'
				},
				{
					time: '1:30 - 2:30',
					title: 'Big Data Analytics',
					speaker: 'Laura Green',
					description: 'Harnessing big data analytics for business intelligence and decision making'
				},
				{
					time: '3:30 - 5:30',
					title: 'Internet of Things (IoT)',
					speaker: 'Daniel White',
					description: 'Understanding the impact and applications of IoT in various industries'
				}
			]
		},
		{
			day: 'Day 2',
			date: '2025-06-02',
			sessions: [
				{
					time: '09:00 - 10:00',
					title: 'UX Design Principles',
					speaker: 'David Kim',
					description: 'Creating intuitive user experiences for modern applications'
				}
			]
		},
		{
			day: 'Day 3',
			date: '2025-06-03',
			sessions: [
				{
					time: '09:00 - 10:00',
					title: 'Closing Keynote',
					speaker: 'James Wilson',
					description: 'Reflecting on the future of technology'
				}
			]
		}
	];

	let selectedDate = schedule[0].date;

	const formatDate = (dateStr: string) => {
		return new Date(dateStr).toLocaleDateString('en-US', {
			weekday: 'long',
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		});
	};

	$: filteredSchedule = schedule.find((s) => s.date === selectedDate)?.sessions ?? [];
</script>

<Container class="py-5">
	<Row class="mb-5">
		<Col class="text-center">
			<h1 class="display-4 fw-bold mb-4">Conference Schedule</h1>
			<p class="lead text-secondary">
				Plan your conference experience with our comprehensive schedule
			</p>
		</Col>
	</Row>

	<Row class="mb-4">
		<Col xs={12} class="d-flex justify-content-center">
			<ButtonGroup>
				{#each schedule as day}
					<Button
						color="primary"
						outline={selectedDate !== day.date}
						on:click={() => (selectedDate = day.date)}
					>
						{formatDate(day.date).split(',')[0]}
					</Button>
				{/each}
			</ButtonGroup>
		</Col>
	</Row>

	<Row class="mb-4">
		<Col>
			<h2 class="h3 mb-4">
				{formatDate(selectedDate)}
			</h2>
		</Col>
	</Row>

	<Row>
		<Col xs={12}>
			<div class="sessions-container">
				{#each filteredSchedule as session}
					<Card class="session-card mb-3">
						<CardBody>
							<div class="d-flex flex-wrap align-items-center gap-3">
								<div class="session-time fw-bold text-primary">
									{session.time}
								</div>
								<div class="flex-grow-1">
									<h3 class="h5 mb-2">{session.title}</h3>
									<p class="mb-2 text-secondary">
										<span class="fw-semibold">{session.speaker}</span>
									</p>
									<p class="mb-0 session-description">
										{session.description}
									</p>
								</div>
							</div>
						</CardBody>
					</Card>
				{/each}
			</div>
		</Col>
	</Row>
</Container>

<style>
	.sessions-container {
		max-height: 600px;
		overflow-y: auto;
		padding-right: 1rem;
	}

	/* Custom Scrollbar Styles */
	.sessions-container::-webkit-scrollbar {
		width: 8px;
	}

	.sessions-container::-webkit-scrollbar-track {
		background: var(--bs-light);
		border-radius: 4px;
	}

	.sessions-container::-webkit-scrollbar-thumb {
		background: var(--bs-primary);
		border-radius: 4px;
	}

	.sessions-container::-webkit-scrollbar-thumb:hover {
		background: var(--bs-primary-dark, #0056b3);
	}

	.session-time {
		min-width: 150px;
	}

	:global(.session-card) {
		transition: transform 0.2s ease-in-out;
		border: 1px solid var(--bs-border-color);
	}

	:global(.session-card:hover) {
		transform: translateY(-2px);
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	}

	.session-description {
		color: var(--bs-secondary-color);
		font-size: 0.95rem;
	}
</style>
