<script lang="ts">

    import { Container, Row, Col, Card, CardBody, CardTitle, Button, Icon } from '@sveltestrap/sveltestrap';

    const currentSponsors = [
		{
			name: 'TechCorp',
			tier: 'Gold',
			logo: '/images/sponsors/adidas.svg',
			url: 'javascript.void(0)'
		},
		{
			name: 'InnovateHub',
			tier: 'Silver',
			logo: '/images/sponsors/discord.svg',
			url: 'javascript.void(0)'
		},
		{
			name: 'DevStudio',
			tier: 'Bronze',
			logo: '/images/sponsors/samsung.svg',
			url: 'javascript.void(0)'
		}
	];

    const sponsorshipTiers = [
		{
			name: 'Bronze',
			price: '$2,000',
			color: '#CD7F32',
			benefits: [
				'Small logo on website',
				'1 conference ticket',
				'Social media mention',
				'Booth space (6ft table)'
			]
		},
		{
			name: 'Silver',
			price: '$5,000',
			color: '#C0C0C0',
			benefits: [
				'Medium logo on website',
				'3 conference tickets',
				'Social media campaign',
				'Premium booth space',
				'Speaking opportunity (lightning talk)',
				'Logo on conference materials'
			]
		},
		{
			name: 'Gold',
			price: '$10,000',
			color: '#FFD700',
			benefits: [
				'Large logo on website',
				'5 conference tickets',
				'Dedicated social media campaign',
				'Premium booth space (prime location)',
				'Main stage speaking slot',
				'Logo on all materials and banners',
				'VIP dinner invitation',
				'Access to attendee list'
			]
		}
	];

    const tierColors = {
        'Gold': '#FFD700',
        'Silver': '#C0C0C0',
        'Bronze': '#CD7F32'
    };
</script>


<Container class="py-5">
    <!-- Hero Section -->
    <Row class="mb-5 text-center">
        <Col lg={8} class="mx-auto">
            <h1 class="display-4 fw-bold mb-4">Become a Sponsor</h1>
            <p class="lead text-secondary">
                Join leading technology companies in supporting the most innovative tech conference of the year.
                Showcase your brand to hundreds of engaged developers and technology leaders.
            </p>
        </Col>
    </Row>

    <!-- Sponsorship Tiers -->
    <Row class="g-4 mb-5 justify-content-center">
        {#each sponsorshipTiers as tier}
            <Col sm={10} md={6} lg={4}>
                <Card class="h-100 sponsor-tier-card">
                    <CardBody class="d-flex flex-column p-4">
                        <div class="text-center mb-4">
                            <CardTitle class="display-6 fw-bold" style="color: {tier.color}">
                                {tier.name}
                            </CardTitle>
                            <h3 class="display-5 fw-bold mb-0">{tier.price}</h3>
                        </div>
                        <ul class="list-unstyled mb-4 mx-auto" style="max-width: 300px;">
                            {#each tier.benefits as benefit}
                                <li class="mb-3 ">
									<i class="bi bi-check-circle-fill text-success me-2" ></i>
                                    <span>{benefit}</span>
                                </li>
                            {/each}
                        </ul>
                        <div class="text-center mt-auto">
                            <Button color="dark" outline size="lg" class="px-4">
                                Schedule a Call
                            </Button>
                        </div>
                    </CardBody>
                </Card>
            </Col>
        {/each}
    </Row>

    <!-- Current Sponsors -->
    <Row class="mt-5 mb-4">
        <Col class="text-center">
            <h2 class="display-5 fw-bold mb-3">Our Current Sponsors</h2>
            <p class="lead text-secondary mb-5">Trusted by industry leaders</p>
        </Col>
    </Row>

    <Row class="g-4 justify-content-center">
        {#each currentSponsors as sponsor}
            <Col xs={12} sm={6} lg={4}>
                <a
                    href={sponsor.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="sponsor-link"
                >
                    <Card class="h-100 sponsor-card">
                        <CardBody class="text-center p-4">
                            <img
                                src={sponsor.logo}
                                alt={`${sponsor.name} logo`}
                                class="img-fluid sponsor-logo mb-4"
                                width="200"
                                height="100"
                            />
                            <h3 class="h4 mb-3">{sponsor.name}</h3>
                            <span 
                                class="badge rounded-pill px-3 py-2" 
                                style="background-color: {tierColors[sponsor.tier as keyof typeof tierColors]}"
                            >
                                {sponsor.tier} Sponsor
                            </span>
                        </CardBody>
                    </Card>
                </a>
            </Col>
        {/each}
    </Row>
</Container>


<style>
	.sponsor-logo {
		max-height: 100px;
		object-fit: contain;
	}

	.sponsor-link {
		text-decoration: none;
		color: inherit;
	}

    :global(.sponsor-card) {
        transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
        border: 1px solid #eee;
    }

    :global(.sponsor-card:hover) {
        transform: translateY(-5px);
        box-shadow: 0 10px 20px rgba(0,0,0,0.1);
    }

    :global(.sponsor-tier-card) {
        border: none;
        box-shadow: 0 5px 15px rgba(0,0,0,0.05);
    }

    :global(.bi-check2-circle) {
        font-size: 1.2rem;
    }
</style>