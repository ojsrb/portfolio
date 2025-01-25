<script>
    import {reveal} from 'svelte-reveal';

    const activities = [
        {
            name: "ONW Engineering Academy",
            blurb: "A specialized program at my highschool that offers advanced engineering courses and opportunities."
        },
        {
            name: "FIRST Robotics Team 1710",
            blurb: "My highschool's robotics team. I am a part of the Informatics subteam, where we analyze data from matches and maintain our team websites."
        },
        {
            name: "ONW Orchestra",
            blurb: "I play the viola, and am currently part of the ONW Freshman Orchestra."
        },
        {
            name: "ONW Quest",
            blurb: "My schools gifted program, where I get the opportunity to challenge myself through projects like this site."
        }
    ]

    let activitiesCheck = false;
    function activitiesShow() {
        activitiesCheck = !activitiesCheck;
    }
</script>

<div class="mx-auto w-fit text-center justify-center content-center">
    <br />
    <h1>Hi, I'm Owen.</h1>
    <br />
    <img src="$lib/assets/owen.jpeg" class="w-1/2 mx-auto rounded-lg" alt="Picture of owen at a lake in the mountains.">
    <br />
    <h2 class="w-1/2 mx-auto mb-16">I'm a highschooler interested in programming, web design, and engineering.</h2>
    {#each activities as a}
        <div use:reveal={{transition: "scale", duration: 750}}>
            <h2 class="m-5">{a.name}</h2>
            <p class="m-5 mb-10 w-96 text-center mx-auto">{a.blurb}</p>
        </div>
    {/each}

</div>

<br />
<br />



