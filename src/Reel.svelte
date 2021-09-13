<svelte:options accessors={true}/>

<style lang="scss">
    @import "./global.scss";

    .container {
        width: 140px;
        height: 240px;

        display: flex;
        flex-direction: column;
        align-items: center;

        .window {
            width: 120px;
            height: 180px;

            overflow: hidden;

            border-radius: 16px;

            cursor: pointer;

            .reel {
                width: 120px;

                display: flex;
                flex-direction: column;

                .reel-item {
                    width: 120px;
                    height: 180px;

                    background-color: $dark-1;
                    color: $dark-2;

                    font-size: 160px;
                    font-family: $mono-font;
                    font-weight: bold;

                    display: flex;
                    justify-content: center;
                    align-items: center;

                    user-select: none;
                }
            }
        }

        .text {
            margin-top: 8px;

            font-weight: 500;
            font-size: large;
            text-align: center;

            user-select: none;
            cursor: pointer;
        }
    }
</style>

<script context=module>
    import * as mamano from "./assets/mamano.json";

    export function getQualifyingMamano(type, year) {
        // Check if there are query options selected
        if (type.length === 0 || year.length === 0) return "Please select 1 Mamano Type and Year!";

        // Get all mamano that are applicable for this roll
        let qualify = [];
        mamano.default.forEach((e, i) => {
            // Check if their types and year match the query
            if (e.opts.type.some(item => type.includes(item)) && year.includes(e.opts.year)) {
                qualify.push(i);
            }
        });

        if (qualify.length === 0) return "No Mamano match your query!";

        return qualify
    }
</script>

<script>
    import { getImage } from "./App.svelte";

    import { tweened } from 'svelte/motion';
    import { quadInOut } from 'svelte/easing';
    import { slide, fly, fade } from 'svelte/transition';

    // Rolling code
    const reelItemCount = 30;
    let current = [-1];
    let currentname = "";
    
    let spinning = false;
    const reelPos = tweened(0, {
		easing: quadInOut
    });

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    export function roll(qualify, delay) {
        // Remove all elements in the current reel except for the last one
        current = current.slice(-1);

        // Create each reel item after it
        for (let i = 0; i < reelItemCount - 1; i++) {
            current.push(qualify[getRandomInt(qualify.length)]);
        }

        // Reset the position of the reel
        spinning = true;
        reelPos.set(0, { duration: 0 });

        // Start the animation
        setTimeout(() => {
            // Spin the reel
            reelPos.set(1, { duration: 5000 })
            .then(() => {
                currentname = mamano.default[current.at(-1)].name;
                spinning = false;
            });
        }, delay);
    }

    // Wikia code
    function openWikia() {
        if (currentname !== "") {
            const url = `https://monstergirlencyclopedia.fandom.com/wiki/${currentname.replace(" ", "_")}`
            window.open(url, '_blank').focus();
        }
    }
</script>

<div class=container transition:slide>
    <div class=window on:click={openWikia}>
        <div class=reel style='transform: translateY(-{(180 * (reelItemCount - 1)) * $reelPos}px)'>
            {#each current as i}
                {#if i === -1}
                    <div class=reel-item>?</div>
                {:else}
                    <div class=reel-item style='background-image:url({getImage(i).src});'></div>
                {/if}
            {/each}
        </div>
    </div>
    {#if !spinning}
        <div class=text in:fly={{y: 20}} out:fade on:click={openWikia}>{currentname}</div>
    {/if}
</div>