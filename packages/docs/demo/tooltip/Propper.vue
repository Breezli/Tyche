<script lang="ts" setup>
const options = {
    fallbackPlacements: ['top-start', 'top-end', 'bottom-start', 'bottom-end'], // 备选位置
    padding: { top: 30, right: 5, bottom: 30, left: 5 }, // 自定义边距
    boundary: document.querySelector('.custom-boundary') || 'viewport', // 边界，默认为视口
    rootBoundary: 'document', // 根边界为整个文档
    flipVariations: true, // 不允许翻转方向
    allowedAutoPlacements: ['top', 'bottom'], // 只允许顶部和底部位置
};
</script>

<template>
    <vr-tooltip
        content="Try to scroll"
        placement="bottom"
        :popperOptions="options">
        <vr-button>尝试向上滚动</vr-button>
    </vr-tooltip>
</template>