<script>
    import { onMount } from "svelte";
    import "./assets/style.css";
    import MarkerMap from "marker-map";
    import treasureMapImg from "./assets/treasure-map.jpg";
    import placeImg from "./assets/place.svg";
    import homeImg from "./assets/home.svg";
    import infoImg from "./assets/info.svg";
    import highPriorityImg from "./assets/high-priority.svg";

    const markerMap = new MarkerMap();

    let JSONFormatter = null;

    let markers = [
        {
            id: "my_home_1",
            width: 12,
            top: 56,
            left: 40,
            img: homeImg,
            meta: { my: "home" },
        },
        { width: 12, top: 20, left: 64, img: placeImg },
    ];

    let addPlaces = [
        {
            id: "3",
            width: 12,
            top: 70,
            left: 70,
            img: infoImg,
            meta: { abc: "xyz" },
        },
        {
            id: "4",
            width: 12,
            top: 37,
            left: 16,
            img: highPriorityImg,
        },
    ];

    let countAdd = 0;

    function add() {
        if (countAdd >= addPlaces.length) return;
        markerMap.add(addPlaces[countAdd]);
        countAdd++;
    }

    function randomActive() {
        markerMap.activeAll();
        const allMarkers = markerMap.getAll();
        const markerRand =
            allMarkers[Math.floor(Math.random() * allMarkers.length)];
        markerMap.inactive(markerRand.id);
    }

    function listData() {
        const formatter = new JSONFormatter.default(markerMap.getAll());
        document.getElementById("detail").innerHTML = "";
        document.getElementById("detail").appendChild(formatter.render());
    }

    function reset() {
        countAdd = 0;
        markerMap.destroy();
        markerMap.render("#show", {
            background: treasureMapImg,
            markers: markers,
        });
    }

    onMount(async () => {
        markerMap.render("#show", {
            background: treasureMapImg,
            markers: markers,
        });

        JSONFormatter = await import("json-formatter-js");

        markerMap.on("click", (e, opt) => {
            // to delete marker
            if (
                confirm(
                    `Want to delete:\n ID: ${opt.id}\n${JSON.stringify(
                        opt.meta
                    )}`
                )
            ) {
                markerMap.remove(opt.id);
            }
        });
    });
</script>

<svelte:head>
    <title>Example Marker Map</title>
    <link rel="icon" href="marker-map/favicon.ico" />
</svelte:head>

<div class="content">
    <div class="link">
        <a href="https://github.com/angkarn/marker-map">
            <img width="35" src="img/github.svg" alt="github" />
        </a>
    </div>
    <h1 class="title">
        <span><a href="marker-map">Marker Map</a></span> Example
    </h1>

    <div id="show" />
    <div id="action">
        <button on:click={add}>Add Marker</button>
        <button on:click={randomActive}>Random Active</button>
        <button on:click={listData}>Get Marker Data</button>
        <button on:click={reset}>Reset</button>
    </div>

    <div id="detail" />
</div>

<style>
    .link {
        text-align: center;
        margin-top: -0.5em;
        right: 1.2em;
        top: 0.5em;
    }

    .title {
        font-variant: all-small-caps;
    }

    .title a {
        text-decoration: none;
        color: rgb(10, 95, 63);
    }

    .content {
        padding: 10px;
        margin: 15px auto;
        text-align: center;
    }

    #show {
        margin: 5px auto;
        width: 100%;
        max-width: 400px;
    }

    #action {
        margin: 15px 8px;
    }

    button {
        background: #333333;
        color: rgb(255, 255, 255);
        box-shadow: 0 0 2px #00000038;
        border: none;
        padding: 2px 4px 5px 5px;
        margin: 5px 3px;
        min-width: 140px;
        border-radius: 4px;
        font-size: 1.2em;
        outline: none;
        cursor: pointer;
        font-variant: all-small-caps;
        user-select: none;
    }

    #detail {
        padding: 10px;
        overflow-x: auto;
        text-align: left;
        font-size: 0.8em;
    }
</style>
