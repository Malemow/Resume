<script setup lang="ts">
    import { ref } from "vue"

    interface Props {
        logoSrc?: string
        logoAlt?: string
        logoHeight?: string
    }

    const props = withDefaults(defineProps<Props>(), {
        logoSrc: "/malemow-nick-elegant-code-logo.png",
        logoAlt: "Nick Resume - Elegant Code Creator",
        logoHeight: "200px",
    })

    const isMenuOpen = ref(false)
</script>

<template>
    <header class="header">
        <div class="header-container">
            <!-- Logo 部分 -->
            <h1 class="logo">
                <ElImage
                    :src="props.logoSrc"
                    :alt="props.logoAlt"
                    :height="props.logoHeight"
                    class="logo-image"
                />
                <span class="visually-hidden">Nick Resume</span>
            </h1>

            <nav
                class="nav-wrapper"
                :class="{ 'nav-open': isMenuOpen }"
            >
                <slot name="nav" />
            </nav>

            <button
                class="menu-toggle"
                @click="isMenuOpen = !isMenuOpen"
                aria-label="Toggle navigation menu"
            >
                <ElIcon>
                    <component :is="isMenuOpen ? 'Close' : 'Menu'" />
                </ElIcon>
            </button>
        </div>
    </header>
</template>

<style scoped lang="scss">
    .header {
        position: sticky;
        top: 0;
        z-index: 50;
        background-color: var(--el-bg-color);
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }

    .header-container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 1rem 2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .logo {
        flex-shrink: 0;
        margin: 0;

        &-image {
            display: block;
            height: auto;
            max-width: 100%;
        }
    }

    .nav-wrapper {
        display: flex;
        align-items: center;
        gap: 2rem;
    }

    .visually-hidden {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        border: 0;
    }

    .menu-toggle {
        display: none;
        background: none;
        border: none;
        padding: 0.5rem;
        cursor: pointer;
        color: var(--el-text-color-primary);

        &:hover {
            color: var(--el-color-primary);
        }
    }

    @media (max-width: 768px) {
        .menu-toggle {
            display: block;
        }

        .nav-wrapper {
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background-color: var(--el-bg-color);
            padding: 1rem;
            flex-direction: column;
            align-items: flex-start;
            transform: translateY(-100%);
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;

            &.nav-open {
                transform: translateY(0);
                opacity: 1;
                visibility: visible;
            }
        }
    }
</style>
