<template>
    <vr-tooltip
      content="延迟 1000ms 后消失"
      :show-timeout="500"
      :hide-timeout="1000">
      <vr-button>延迟 500ms 后出现</vr-button>
    </vr-tooltip>
  </template>