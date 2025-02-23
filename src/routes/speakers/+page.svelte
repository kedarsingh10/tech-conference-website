<script lang="ts">
    import { Container, Row, Col } from '@sveltestrap/sveltestrap';
    import Speakers from '$lib/components/Speakers.svelte';
</script>

<Container class="py-5">
    <Row class="mb-5">
        <Col class="text-center">
            <h1 class="display-4 mb-4">Our Speakers</h1>
            <p class="lead">
                Learn from industry leaders and innovators who are shaping the future of technology.
            </p>
        </Col>
    </Row>

    <Speakers mainSpeakersOnly={false} />
</Container> 