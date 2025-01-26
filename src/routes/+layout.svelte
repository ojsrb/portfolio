<script lang="ts">
	import '../app.css';
	let { children } = $props();

    const buttons = [
        {
            name: 'Projects',
            link: "/projects"
        },
        {
            name: "Services",
            link: "/services"
        },
        {
            name: "Contact",
            link: "/contact"
        }
    ]

</script>

<div class="sticky top-1 bg-owen-gray overflow-hidden flex flex-row rounded-xl h-16 align-middle m-3">
    <a href="/" class="p-3 px-2 m-2 font-black text-xl text-owen-white bg-owen-blue rounded-lg transition-colors ease-in-out duration-500 hover:animate-spin" >Owen</a>
    {#each buttons as b}
        <a href={b.link} class="p-3 my-2 mx-1 hover:bg-owen-white rounded-lg hover:text-owen-gray align-middle text-lg transition ease-in-out duration-500 hover:scale-110">{b.name}</a>
    {/each}
</div>

{@render children()}

<style lang="postcss">
    @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&display=swap');
    :global(body) {
        @apply bg-owen-black;
        @apply text-owen-white;
        @apply bg-cover bg-center bg-no-repeat bg-fixed bg-blend-normal;
        font-family: 'Nunito', sans-serif;
    }
</style>
