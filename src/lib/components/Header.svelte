<script lang="ts">
	import {
		Navbar,
		NavbarBrand,
		NavItem,
		NavLink,
		Nav,
		Collapse,
		NavbarToggler,
		Icon
	} from '@sveltestrap/sveltestrap';
	
    import { companyName } from '../../stores/companyInfo';
    import { isDarkMode } from '../../stores/themeStore';

	let isOpen = $state(false);
	
	const toggleNavbar = () => {
		isOpen = !isOpen;
	};

	const toggleTheme = () => {
		$isDarkMode = !$isDarkMode;
		document.documentElement.setAttribute('data-bs-theme', $isDarkMode ? 'dark' : 'light');
	};

	// Navbar items
	const navbarItems = [
		{
			path: '/',
			label: 'Home'
		},
		{ path: '/speakers', label: 'Speakers' },
		{ path: '/schedule', label: 'Schedule' },
		{ path: '/sponsors', label: 'Sponsors' },
		{ path: '/about', label: 'About' },
		{ path: '/contact', label: 'Contact' }
	];
</script>

<Navbar expand="md" container="md" class="mb-3">
	<NavbarBrand href="/">
		<!-- <img src="/logo.png" alt="Brand Logo" height="30" class="me-2" /> -->
		{$companyName}
	</NavbarBrand>
	<NavbarToggler onclick={toggleNavbar} />
	<Collapse {isOpen} navbar expand="md">
		<Nav class="ms-auto" navbar>
			{#each navbarItems as item}
				<NavItem>
					<NavLink href={item.path} onclick={toggleNavbar}>
						{item.label}
					</NavLink>
				</NavItem>
			{/each}
			<NavItem>
				<NavLink href="javascript:void(0)" on:click={toggleTheme}>
					<i class={`bi ${$isDarkMode ? 'bi-sun-fill' : 'bi-moon-fill'}`}></i>
				</NavLink>
			</NavItem>
		</Nav>
	</Collapse>
</Navbar> 