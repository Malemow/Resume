<script setup lang="ts">
    const blogName = import.meta.env.VITE_BLOG_NAME
    const blogSlogan = import.meta.env.VITE_BLOG_SLOGAN
</script>

<template>
    <header class="header">
        <div class="header-container">
            <h1 class="logo">
                {{ blogName }}
                <span class="slogan">{{ blogSlogan }}</span>
            </h1>

            <nav>
                <slot name="nav" />
            </nav>
        </div>
    </header>
</template>

<style scoped lang="scss">
    .header {
        position: sticky;
        top: 0;
        z-index: 50;
        padding: 0.5rem 1rem;
        background-color: var(--el-bg-color);
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }

    .logo {
        width: fit-content;
        display: flex;
        flex-direction: column;
        align-items: center;
        line-height: 1.2;
        font-weight: bold;

        .slogan {
            font-size: 1.6rem;
            font-weight: inherit;
        }
    }
</style>
