<script>
	import Image from 'svelte-image';
	import FaGithubSquare from 'svelte-icons/fa/FaGithubSquare.svelte';
	import FaTwitterSquare from 'svelte-icons/fa/FaTwitterSquare.svelte';
	import FaLinkedin from 'svelte-icons/fa/FaLinkedin.svelte';
</script>

<div class="container">
	<div class="background">
		<Image
			src="images/nick.jpg"
			class="bg"
			alt="Image of Nick looking out from edge of cliff"
			wrapperClass="wrapper"
			height="100%"
			width="100%"
		/>
	</div>
	<div class="content">
		<h1>Hi, I'm Nick Randall</h1>
		<div>I'm a husband, father, outdoor enthusiast, and software engineer</div>
		<div class="icons">
			<a
				class="icon"
				href="https://github.com/nicksrandall"
				target="_blank"
				rel="noopener noreferrer"
			>
				<FaGithubSquare />
			</a>
			<a
				class="icon"
				href="https://twitter.com/nicksrandall"
				target="_blank"
				rel="noopener noreferrer"
			>
				<FaTwitterSquare />
			</a>
			<a
				class="icon"
				href="https://linkedin.com/in/nickrandall"
				target="_blank"
				rel="noopener noreferrer"
			>
				<FaLinkedin />
			</a>
		</div>
	</div>
</div>

<style>
	.container {
		overflow: hidden;
		position: relative;
		width: 100vw;
		height: 100vh;
	}
	.background {
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		width: 100vw;
		height: 100vh;
		filter: brightness(50%);
		z-index: -1;
	}
	.bg {
		object-fit: cover;
	}

	.content {
		width: 100%;
		padding: 24px;
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: 1;
		text-align: center;
		color: white;
	}

	h1 {
		line-height: 1;
		font-size: 56px;
		margin-bottom: 16px;
	}

	@media (max-width: 800px) {
		h1 {
			font-size: 48px;
		}
	}

	.icons {
		padding: 24px;
	}

	.icon {
		color: white;
		width: 48px;
		height: 48px;
		display: inline-block;
	}
	.icon:hover {
		color: #38b2ac;
	}

	.background :global(.bg),
	.background :global(.placeholder) {
		object-fit: cover;
	}

	.background :global(.wrapper) {
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		width: 100vw;
		height: 100vh;
	}

	.background :global(div),
	.background :global(div + div) {
		height: 100%;
	}
</style>
