<script setup lang="ts">
    import { RouterView } from "vue-router"
    import zhTW from "element-plus/dist/locale/zh-tw.mjs"
    import { HeaderLayout, MainLayout, FooterLayout } from "@/layouts"
</script>

<template>
    <ElConfigProvider :locale="zhTW">
        <HeaderLayout />
        <MainLayout>
            <template #default>
                <RouterView />
            </template>
        </MainLayout>
        <FooterLayout />
    </ElConfigProvider>
</template>
