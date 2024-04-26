<template>
  <ul
    class="text-slate-100 dark:text-slate-700 flex flex-col motion-safe:animate-pulse"
  >
    <li
      class="grid grid-cols-10 gap-3 my-1.5"
      v-for="i in [3, 2, 2, 3, 2]"
      :key="i"
    >
      <div
        class="bg-red-100/50 dark:bg-red-300/50 h-3 rounded-md"
        :class="[`col-span-${i}`]"
      />
      <div
        class="bg-slate-100/50 dark:bg-slate-500/50 h-3 rounded-md col-span-3"
      />
    </li>

    <li
      class="self-end w-12 mt-2 h-4 bg-slate-100/50 dark:bg-slate-500/50 rounded-sm"
    />
  </ul>
</template>
