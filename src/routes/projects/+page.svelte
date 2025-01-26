<script>

    import {reveal} from 'svelte-reveal';

    import website from "$lib/assets/pictures/website.png";
    import weatherstation from "$lib/assets/pictures/weatherstation.jpeg";

    const projects = [
        {
            name: "portfolio.owenschmidt.tech",
            link: "https://portfolio.owenschmidt.tech",
            img: website,
            description: "My portfolio website, made with SvelteKit, designed with Tailwindcss, and deployed with couldflare.",
        },
        {
            name: "SITRUS Weather Station",
            link: "https://www.wunderground.com/dashboard/pws/KKSOLATH478",
            img: weatherstation,
            description: "A Raspberry-Pi powered weather station that sends it's data to wunderground for analysis."
        },
    ]
</script>

<svelte:head><meta name="viewport" content="width=device-width, initial-scale=1.0" /></svelte:head>

<div class="w-screen lg:w-3/4 mx-auto text-center text-pretty">
    <h1>Projects</h1>
    <br />
    {#each projects as a}
        <div class="flex flex-col lg:flex-row my-10" use:reveal={{transition: "scale", duration: 750}}>
            <img src={a.img} alt={a.name} class="w-96 mr-5 border-owen-white border-2 rounded-md"/>
            <div class="flex flex-col">
                <a class="text-2xl font-semibold underline" href={a.link}>{a.name}</a>
                <p class="my-3">{a.description}</p>
            </div>
        </div>


    {/each}
</div>