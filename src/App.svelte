<style lang="scss">
    @import "./global.scss";

    .content {
        position: fixed;

        top: 0;
        left: 0;
        height: 100%;
        width: 100%;

        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        .reel-window {
            display: flex;
            flex-direction: row;
            justify-content: center;
            flex-wrap: wrap;

            width: 100%;
            padding-top: 32px;
        }

        .controls {
            display: flex;
            flex-direction: row;

            .button {
                $border-radius: 8px;

                background-color: $dark-1;
                padding: 8px;

                user-select: none;

                &.clickable {
                    cursor: pointer;
                    &:hover {
                        background-color: $dark-0;
                        @media (hover: none) {
                            background-color: $dark-1;
                        }
                    }
                }

                &.first {
                    border-top-left-radius: $border-radius;
                    border-bottom-left-radius: $border-radius;
                    
                    margin-left: 4px;
                }

                &.last {
                    border-top-right-radius: $border-radius;
                    border-bottom-right-radius: $border-radius;
                    
                    margin-right: 4px;
                }

                &.mono { font-family: $mono-font; }
            }
        }
    }

    .loader {
        position: fixed;

        top: 0;
        left: 0;
        height: 100%;
        width: 100%;

        background-color: $dark-0;

        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>

<script context="module">
    let images = [];
    export function getImage(index) {return images[index];}
</script>

<script>
    import Reel, { getQualifyingMamano } from "./Reel.svelte";
    import Options, { getDefaultOptions } from "./Options.svelte";
    import * as mamano from "./assets/mamano.json";
    import * as query from "./assets/query.json";

    import { fade } from 'svelte/transition';

    let optOpen = false;
    let options = getDefaultOptions();

    function handleOptSave(event) {
        optOpen = false;
        options = event.detail.options;
    }

    let finished = 0;
    let promise = loadImages();

    function loadImages() {
        return new Promise((res, rej) => {
            mamano.default.forEach((e, i) => {
                images[i] = new Image();
                images[i].onload = () => {
                    finished += 1;
                    if (finished === mamano.default.length) res();
                }
                images[i].src = "./assets" + e.img;
            });
        });
    }

    let reelCount = 3;
    let reels = [];

    function getKeys(optObj) {
        let keys = [];
        for (const key in optObj) if (optObj[key]) keys.push(key);
        return keys;
    }

    $: type = getKeys(options.type);
    $: year = getKeys(options.year);

    let spinning = false;

    function rollReels() {
        const qualify = getQualifyingMamano(type, year);

        if (typeof qualify === "string") {
            alert(qualify);
            return;
        }

        if (reelCount === 0) return;

        reels.forEach((e, i) => {
            if (e && e.roll) e.roll(qualify, 200 * i);
        });

        // Set spinning to true and set the delay
        spinning = true;
        let delay = (200 * (reelCount - 1)) + 5500;

        setTimeout(() => {
            spinning = false;
        }, delay);
    }

    function createReelItems(count) {
        let items = [];
        for (let i = 0; i < count; i++) items.push({id: i});
        return items;
    }

    $: reelItems = createReelItems(reelCount);
    let width; let height;
    $: maxReels = Math.floor(width / 140) * Math.floor((height / 240) - 0.2);

    $: if (reelCount > maxReels) {
        reelCount = maxReels;
    }

    $: if (reelCount < 0) {
        reelCount = 0;
    }
</script>

<svelte:window bind:innerWidth={width} bind:innerHeight={height}/>

<div class=content>
    <div class=reel-window>
        {#each reelItems as item, index (item.id)}
            <Reel bind:this={reels[index]}/>
        {/each}
    </div>
    <div class=controls>
        {#if !spinning}
            <div class="button first last clickable" on:click={() => {optOpen = true;}}>Options</div>
            <div class="button first">Reels: {reelCount}</div>
            <div class="button clickable mono" on:click={() => {reelCount--}}>-</div>
            <div class="button last clickable mono" on:click={() => {reelCount++}}>+</div>
            <div class="button first last clickable" on:click={rollReels}>Spin</div>
        {:else}
            <div class="button first last">Spinning...</div>
        {/if}
    </div>
</div>

{#if optOpen}
    <Options options={options} on:optsave={handleOptSave}/>
{/if}

{#await promise}
    <div class=loader out:fade>Loading Images {finished}/{images.length}</div>
{/await}