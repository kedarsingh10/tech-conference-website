<script lang="ts">
    import { Container, Row, Col, Button } from '@sveltestrap/sveltestrap';
    import Speakers from '$lib/components/Speakers.svelte';
    import { onMount } from 'svelte';

    const eventDate = new Date('2025-03-01T09:00:00');
    
    let days = 0;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = eventDate.getTime() - now;

        days = Math.floor(distance / (1000 * 60 * 60 * 24));
        hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        seconds = Math.floor((distance % (1000 * 60)) / 1000);
    }

    onMount(() => {
        updateCountdown();
        const interval = setInterval(updateCountdown, 1000);
        return () => clearInterval(interval);
    });
</script>

<div class="hero-section text-center py-5">
    <Container>
        <!-- Hero Section -->
        <Row class="mb-5 justify-content-center">
            <Col lg={8}>
                <h1 class="display-2 fw-bold mb-4">Tech Conference 2025</h1>
                <p class="lead fs-4 mb-5 text-secondary">
                    Join us for the most innovative tech conference of the year. 
                    Discover the future of technology.
                </p>
                <div class="countdown-container mb-5">
                    <div class="countdown-item">
                        <span class="countdown-number">{days}</span>
                        <span class="countdown-label">Days</span>
                    </div>
                    <div class="countdown-item">
                        <span class="countdown-number">{hours}</span>
                        <span class="countdown-label">Hours</span>
                    </div>
                    <div class="countdown-item">
                        <span class="countdown-number">{minutes}</span>
                        <span class="countdown-label">Minutes</span>
                    </div>
                    <div class="countdown-item">
                        <span class="countdown-number">{seconds}</span>
                        <span class="countdown-label">Seconds</span>
                    </div>
                </div>
                <Button 
                    color="dark"
                    outline
                    size="lg" 
                    href="#" 
                    class="px-5 py-3 modern-btn"
                >
                    Register Now
                </Button>
            </Col>
        </Row>
    </Container>
</div>

<!-- Featured Main Speakers Section -->
<Container class="py-5">
    <Row class="mb-5">
        <Col class="text-center">
            <h2 class="display-4 fw-bold mb-3">Featured Speakers</h2>
            <p class="lead text-secondary">Meet our keynote speakers for this year's conference</p>
        </Col>
    </Row>

    <Speakers mainSpeakersOnly={true} />
</Container>

<style>
    .hero-section {
        background: linear-gradient(135deg, 
            var(--bs-body-bg) 0%,
            var(--bs-secondary-bg) 100%
        );
        min-height: 80vh;
        display: flex;
        align-items: center;
    }

    .countdown-container {
        display: flex;
        justify-content: center;
        gap: 2rem;
        font-family: 'Inter', sans-serif;
    }

    .countdown-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        min-width: 80px;
    }

    .countdown-number {
        font-size: 3rem;
        font-weight: 700;
        line-height: 1;
    }

    .countdown-label {
        font-size: 0.875rem;
        text-transform: uppercase;
        letter-spacing: 1px;
        margin-top: 0.5rem;
        color: var(--bs-secondary);
    }

    @media (max-width: 576px) {
        .countdown-container {
            gap: 1rem;
        }

        .countdown-item {
            min-width: 60px;
        }

        .countdown-number {
            font-size: 2rem;
        }

        .countdown-label {
            font-size: 0.75rem;
        }
    }

    :global(.modern-btn) {
        border: 2px solid #000;
        background: transparent;
        color: #000;
        font-weight: 600;
        letter-spacing: 0.5px;
        border-radius: 0;
        transition: all 0.3s ease;
    }

    :global(.modern-btn:hover) {
        background: #000;
        color: #fff;
        transform: translateY(-2px);
    }

    
</style>
