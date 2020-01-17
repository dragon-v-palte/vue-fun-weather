<template>
    <div>
        <HeaderVue/>
        <HeroVue/>
        <PerfectVue/>
        <WidgetsVue/>
        <ScreenshotsVue/>
        <PeopleSayingVue/>
        <DownloadVue/>
        <FooterVue/>
    </div>
</template>

<script>
import HeaderVue from '../components/HeaderVue.vue'
import HeroVue from '../components/HeroVue.vue'
import PerfectVue from '../components/PerfectVue.vue'
import WidgetsVue from '../components/WidgetsVue.vue'
import ScreenshotsVue from '../components/ScreenshotsVue.vue'
import PeopleSayingVue from '../components/PeopleSayingVue.vue'
import DownloadVue from '../components/DownloadVue.vue'
import FooterVue from '../components/FooterVue.vue'

export default {
    name: "home",
    components: {        
        HeaderVue,
        HeroVue,
        PerfectVue,
        WidgetsVue,
        ScreenshotsVue,
        PeopleSayingVue,
        DownloadVue,
        FooterVue
    }
}
</script>