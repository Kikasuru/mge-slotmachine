<style lang="scss">
    @import "./global.scss";

    .options {
        overflow-y: scroll;

        display: flex;
        flex-direction: column;
        align-items: center;

        position: fixed;

        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        
        background-color: $dark-2;

        &::-webkit-scrollbar { width: 0; }

        .close {
            position: fixed;

            top: 32px;
            right: 32px;
            height: 32px;
            width: 32px;

            display: flex;
            justify-content: center;
            align-items: center;

            font-size: 24px;

            border-radius: 32px;
            background-color: $dark-1;
            padding: 8px;

            user-select: none;
            
            cursor: pointer;
            &:hover {
                background-color: $dark-0;
                @media (hover: none) {
                    background-color: $dark-1;
                }
            }
        }

        .option-set {
            display: flex;
            flex-direction: row;
            justify-content: center;

            @media (max-width: 500px) {
                flex-wrap: wrap;
            }
        }

        .option-list {
            display: flex;
            flex-direction: column;
            justify-content: left;

            flex: 0 0 250px;
            padding: 8px;

            user-select: none;

            .toggle {
                width: 100%;
                height: 20px;
                display: flex;
                padding: 4px;

                &:hover {
                    background-color: $dark-1;
                    @media (hover: none) {
                        background-color: $dark-1;
                    }
                }

                &.selected { background-color: $main-0; }
                &.selected:hover {
                    background-color: $main-1;
                    @media (hover: none) {
                        background-color: $main-0;
                    }
                }

                .icon {
                    height: 20px;
                    width: 20px;

                    margin-right: 4px;
                }

                $border-radius: 4px;

                &.first {
                    border-top-left-radius: $border-radius;
                    border-top-right-radius: $border-radius;
                }
                &.last {
                    border-bottom-left-radius: $border-radius;
                    border-bottom-right-radius: $border-radius;
                }

                &.mass-toggler {
                    background-color: $dark-1;
                    justify-content: center;
                    &:hover {
                        background-color: $dark-0;
                        @media (hover: none) {
                            background-color: $dark-1;
                        }
                    }
                }
            }
        }
    }

    .title {
        display: flex;
        justify-content: center;
        align-items: center;

        font-weight: 500;

        padding: 8px;
    }
</style>

<script context=module>
    import * as query from "./assets/query.json";

    export function getDefaultOptions() {
        let opt = {type: {}, year: {}};

        // Create type and year flags
        query.type.sub.map((e) => {return e.key}).forEach((e) =>  opt.type[e] = true);
        query.year.sub.map((e) => {return e.key}).forEach((e) =>  opt.year[e] = true);

        return opt;
    }
</script>

<script>
    import { createEventDispatcher } from 'svelte';
    import { fly } from 'svelte/transition';

    const dispatch = createEventDispatcher();

    export let options;
</script>

<div class=options transition:fly={{y: 20}}>
    <div class=option-set>
        <div class=option-list>
            <div class=title>{query.type.name}</div>
            {#each query.type.sub as item, index}
                <div 
                    class=toggle
                    class:selected={options.type[item.key]}
                    class:first={index === 0}

                    on:click={() => {options.type[item.key] = options.type[item.key] ? false : true}}
                >
                    <div class=icon style="background-image: url(./assets/{item.icon});"></div>
                    {item.name}
                </div>
            {/each}
            
            {#if Object.values(options.type).includes(true)}
                <div
                    class="toggle last mass-toggler"
                    on:click={() => {Object.keys(options.type).forEach(k => options.type[k] = false)}}
                >Toggle all OFF</div>
            {:else}
            <div
                class="toggle last mass-toggler"
                on:click={() => {Object.keys(options.type).forEach(k => options.type[k] = true)}}
            >Toggle all ON</div>
            {/if}
        </div>
        <div class=option-list>
            <div class=title>{query.year.name}</div>
            {#each query.year.sub as item, index}
                <div 
                    class=toggle
                    class:selected={options.year[item.key]}
                    class:first={index === 0}

                    on:click={() => {options.year[item.key] = options.year[item.key] ? false : true}}
                >
                    {item.name}
                </div>
            {/each}
            
            {#if Object.values(options.year).includes(true)}
                <div
                    class="toggle last mass-toggler"
                    on:click={() => {Object.keys(options.year).forEach(k => options.year[k] = false)}}
                >Toggle all OFF</div>
            {:else}
            <div
                class="toggle last mass-toggler"
                on:click={() => {Object.keys(options.year).forEach(k => options.year[k] = true)}}
            >Toggle all ON</div>
            {/if}
        </div>
    </div>

    <div class=title>Credits</div>
    <div>Created by Kikasuru</div>
    <div>Characters by Kenkou Cross</div>

    <div class="close" on:click={() => {dispatch("optsave", { options })}}>✖</div>
</div>