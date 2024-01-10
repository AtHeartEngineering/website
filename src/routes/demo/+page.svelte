<div class="flex flex-row gap-8 mt-4">
	<div id="headings" class="flex flex-col gap-0 mb-5">
		<h1 class="h1">H1 Heading</h1>
		<h2 class="h2">H2 Heading</h2>
		<h3 class="h3">H3 Heading</h3>
		<h4 class="h4">H4 Heading</h4>
		<h5 class="h5">H5 Heading</h5>
		<h6 class="h6">H6 Heading</h6>
	</div>
	<div class="flex flex-col gap-0 mb-5">
		<p class="text-primary-500">Primary Color</p>
		<p class="text-secondary-500">Secondary Color</p>
		<p class="text-tertiary-500">Tertiary Color</p>
		<p class="text-surface-500">Surface Color</p>
		<p class="text-background-500">Background Color</p>
		<p class="text-error-500">Error Color</p>
		<p class="text-success-500">Success Color</p>
		<p class="text-warning-500">Warning Color</p>
		<p class="text-info-500">Info Color</p>
	</div>
	<div id="buttons" class="mb-5">
		<span class="h6">Primary</span>
		<div class="btn variant-filled-primary">fill</div>
		<div class="btn variant-ghost-primary">ghost</div>
		<div class="btn variant-soft-primary">soft</div>
		<div class="btn variant-outline-primary">outline</div>
		<span class="h6">Success</span>
		<div class="btn variant-filled-success">fill</div>
		<div class="btn variant-ghost-success">ghost</div>
		<div class="btn variant-soft-success">soft</div>
		<div class="btn variant-outline-success">outline</div>
		<span class="h6">Tertiary</span>
		<div class="btn variant-filled-tertiary">fill</div>
		<div class="btn variant-ghost-tertiary">ghost</div>
		<div class="btn variant-soft-tertiary">soft</div>
		<div class="btn variant-outline-tertiary">outline</div>
		<span class="h6">Secondary</span>
		<div class="btn variant-filled-secondary">fill</div>
		<div class="btn variant-ghost-secondary">ghost</div>
		<div class="btn variant-soft-secondary">soft</div>
		<div class="btn variant-outline-secondary">outline</div>
		<span class="h6">Surface</span>
		<div class="btn variant-filled-surface">fill</div>
		<div class="btn variant-ghost-surface">ghost</div>
		<div class="btn variant-soft-surface">soft</div>
		<div class="btn variant-outline-surface">outline</div>
		<span class="h6">Active</span>
		<div class="btn active variant-filled-surface">fill</div>
		<div class="btn active variant-ghost-surface">ghost</div>
		<div class="btn active variant-soft-surface">soft</div>
		<div class="btn active variant-outline-surface">outline</div>
	</div>
</div>

<style>
	#headings {
		min-width: 20rem;
	}
	#buttons {
		display: grid;
		grid-template-columns: min-content 1fr 1fr 1fr 1fr;
		gap: 0.5em;
		align-items: center;
	}
	#buttons span {
		margin-right: 3px;
	}
</style>
