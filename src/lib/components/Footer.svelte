<script lang="ts">
	import { companyName, currentYear } from '../../stores/companyInfo';

	const socialLinks = [
		{ 
			label: 'Twitter', 
			url: 'javascript:void(0)', 
			icon: '/images/social/twitter.svg'
		},
		{ 
			label: 'LinkedIn', 
			url: 'javascript:void(0)', 
			icon: '/images/social/linkedin.png'
		},
		{ 
			label: 'GitHub', 
			url: 'javascript:void(0)', 
			icon: '/images/social/github.svg'
		}
	];
</script>

<footer class="py-4 mt-5">
	<div class="container">
		<div class="row">
			<div class="col-md-6">
				<h5>{$companyName} {$currentYear}</h5>
				<p>Join us for the most innovative tech conference of the year.</p>
			</div>
			<div class="col-md-6 text-md-end">
				<p>Follow us on social media:</p>
				{#each socialLinks as { label, url, icon }}
					<a
						href={url}
						class="me-3 social-link"
						target="_blank"
						rel="noopener noreferrer"
						aria-label={label}
					>
						<img 
							src={icon} 
							alt={label} 
							width="48" 
							height="48" 
							class="social-icon"
						/>
					</a>
				{/each}
			</div>
		</div>
	</div>
</footer>

<style>
	footer a {
		text-decoration: none;
		display: inline-flex;
		align-items: center;
	}

	footer a:hover {
		opacity: 0.8;
		transform: translateY(-2px);
	}

	.social-icon {
		transition: transform 0.2s ease-in-out;
	}

	.social-link {
		transition: all 0.2s ease-in-out;
	}
</style>