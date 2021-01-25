<script>
    import Nav from "../components/Nav.svelte";
    import { onMount } from "svelte";

    export let segment;

    let hideNav = false;

    onMount(async () => {
        // hide nav when scroll
        const mainElm = document.querySelector("main");
        let prevScrollpos = mainElm.scrollTop;
        mainElm.onscroll = () => {
            if (prevScrollpos - 15 > mainElm.scrollTop) {
                hideNav = false;
                prevScrollpos = mainElm.scrollTop;
            } else if (prevScrollpos + 15 < mainElm.scrollTop) {
                hideNav = true;
                prevScrollpos = mainElm.scrollTop;
            }
        };
    });
</script>

<div id="wrap">
    <Nav {segment} hide={hideNav} />
    <main>
        <slot />
    </main>
</div>

<style>
    #wrap {
        width: 100%;
    }

    main {
        position: relative;
        max-width: 56em;
        background-color: white;
        padding: 5em 0.7em 2em 0.7em;
        margin: 0 auto;
        box-sizing: border-box;
        overflow-y: auto;
        height: 100vh;
    }
</style>
