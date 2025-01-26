<script>

    import game from "$lib/assets/icons/game.svg";
    import mail from "$lib/assets/icons/mail.svg";
    import message from "$lib/assets/icons/message.svg";
    import phone from "$lib/assets/icons/phone.svg";
    import code from "$lib/assets/icons/code.svg";

    import {copy} from 'svelte-copy';

    const contact = [{
            name: "Email: ",
            text: "owen@owenschmidt.tech",
            link: "owen@owenschmidt.tech",
            icon: mail,
            copy: false,
        },
        {
            name: "Phone: ",
            text: "913-461-0771",
            link: "913-461-0771",
            icon: phone,
            copy: false,
        },
        {
            name: "Steam: ",
            text: "ojsrb",
            link: "https://steamcommunity.com/profiles/76561199222649882/",
            icon: game,
            copy: false
        },
        {
            name: "Discord: ",
            text: "@o.n.",
            link: "discord.com/users/800898653820551168",
            icon: message,
            copy: false,
        },
        {
            name: "GitHub: ",
            text: "ojsrb",
            link: "https://github.com/ojsrb",
            icon: code,
            copy: false,
        }

    ]
</script>

<svelte:head><meta name="viewport" content="width=device-width, initial-scale=1.0" /></svelte:head>

<div class="w-screen lg:w-3/4 mx-auto text-center text-pretty">
    <h1>Contact</h1>
    <br />
    {#each contact as a}
        <div class="flex flex-row my-3 w-screen lg:w-3/4 mx-auto align-baseline h-8 items-center">
            <img src={a.icon} alt="icon" class="mx-2 h-8 align-baseline"/>
            <p class="mx-2 align-baseline">{a.name}</p>
            <p class="mx-2 text-xl font-extrabold focus:text-owen-orange align-baseline">{a.text}</p>
            <button class="text-owen-orange" use:copy={a.link} on:click={a.copy = !a.copy}>{#if a.copy} Copied! {:else} Copy {/if}</button>
        </div>
    {/each}
</div>
