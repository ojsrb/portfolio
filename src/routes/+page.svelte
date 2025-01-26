<script>
    import {reveal} from 'svelte-reveal';

    import owen from "$lib/assets/pictures/owen.jpeg";

    const activities = [
        {
            name: "ONW Engineering Academy",
            blurb: "A specialized program at my highschool that offers advanced engineering courses and opportunities that I am proud to be a part of. I am currently taking Intro to Engineering and Honors Biology through the program."
        },
        {
            name: "FIRST Robotics Team 1710",
            blurb: "My highschool's robotics team, where I am a part of the Informatics subteam. We are in charge of maintaining team websites, collecting data from competitions, and analyzing that data to refine our strategies and predict future matches."
        },
        {
            name: "ONW Orchestra",
            blurb: "I am the second-chair violist in the ONW Freshman Orchestra, and have been playing since fifth grade."
        },
        {
            name: "ONW Quest",
            blurb: "My schools gifted program, where I get the opportunity to challenge myself, usually through project-based learning. You can find some of these projects on the Projects tab."
        }
    ]

</script>

<div class="mx-auto w-5/6 lg:w-3/4 text-center justify-center content-center">
    <br />
    <h1>Hi, I'm Owen.</h1>
    <br />
    <img src={owen} class="w-max mx-auto rounded-lg" alt="owen at a lake in the mountains.">
    <br />
    <h2 class="w-3/4 mx-auto mb-16">I'm a highschooler interested in programming, web design, and engineering.</h2>
    <br />
    <h1 class="w-5/6 lg:w-max mx-auto">Here are some things I'm a part of:</h1>
    <br />
    {#each activities as a}
        <div use:reveal={{transition: "scale", duration: 750}}>
            <h2 class="m-5">{a.name}</h2>
            <p class="m-5 mb-10 w-3/4 text-center mx-auto">{a.blurb}</p>
        </div>
    {/each}

</div>

<br />
<br />



