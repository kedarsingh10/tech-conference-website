<script lang="ts">
	import {
		Container,
		Row,
		Col,
		Form,
		FormGroup,
		Input,
		Button,
		Toast,
		ToastBody,
		ToastHeader
	} from '@sveltestrap/sveltestrap';

	let formData = {
		name: '',
		email: '',
		message: ''
	};

	let showSuccessToast = false;
	let showErrorToast = false;

	const handleSubmit = (event: SubmitEvent) => {
		event.preventDefault();
		
		if (formData.name && formData.email && formData.message) {
			showSuccessToast = true;
			showErrorToast = false;

			formData = {
				name: '',
				email: '',
				message: ''
			};
		} else {
			showErrorToast = true;
		}
	};
</script>

<Container class="py-4">
	<Row>
		<Col md={8} class="mx-auto">
			<h1 class="display-4 mb-4">Contact Us</h1>
			<p class="lead mb-5">
				Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as
				possible.
			</p>

			<Form on:submit={handleSubmit}>
				<FormGroup floating label="Name">
					<Input type="text" placeholder="Your Name" bind:value={formData.name} />
				</FormGroup>

				<FormGroup floating label="Email">
					<Input type="email" placeholder="Your@Email.com" bind:value={formData.email} />
				</FormGroup>

				<FormGroup floating label="Message">
					<Input type="textarea" placeholder="Your Message" bind:value={formData.message} />
				</FormGroup>

				<Button type="submit" color="primary" size="lg" class="w-100">Send Message</Button>
			</Form>
		</Col>
	</Row>
</Container>

<div class="toast-container position-fixed bottom-0 end-0 p-3">
	<Toast isOpen={showSuccessToast} autohide={true} delay={3000} on:close={() => (showSuccessToast = false)}>
		<ToastHeader icon="success" class="bg-success text-white">
			Success
		</ToastHeader>
		<ToastBody>
			Message sent successfully! We'll get back to you as soon as possible.
		</ToastBody>
	</Toast>

	<Toast isOpen={showErrorToast} autohide={true} delay={3000} on:close={() => (showErrorToast = false)}>
		<ToastHeader icon="danger" class="bg-danger text-white">
			Error
		</ToastHeader>
		<ToastBody>
			Please fill in all fields.
		</ToastBody>
	</Toast>
</div>

<style>
	.toast-container {
		z-index: 1050;
	}
	:global(.toast) {
		border: 1px solid var(--bs-border-color);
		box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
		background-color: var(--bs-body-bg) !important;
		color: var(--bs-body-color);
	}

	:global([data-bs-theme="dark"]) .toast {
		background-color: var(--bs-dark) !important;
	}

	:global(.toast-body) {
		background-color: inherit;
		color: var(--bs-body-color);
	}
</style>
