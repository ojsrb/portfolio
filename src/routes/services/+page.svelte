<script>

    import {reveal} from 'svelte-reveal';

    const services = [
        {
            name: "Web Development and Design",
            description: "I will build and design your website! Refer to contact page to talk to me.",
        },
        {
            name: "Web and Game Server Hosting",
            description: "I can host websites and game servers, contact me for more details."
        },

    ]
</script>

<svelte:head><meta name="viewport" content="width=device-width, initial-scale=1.0" /></svelte:head>

<div class="w-screen lg:w-3/4 mx-auto text-center text-pretty">
    <h1>Services</h1>
    <br />
    {#each services as a}
        <div class="my-5">
            <h2>{a.name}</h2>
            <p>{a.description}</p>
        </div>
    {/each}

</div>