<template>
  <div>
    <h2>Weights lifted every day</h2>
    <svg
        width="400"
        height="250"
        viewBox="0 0 550 300"
        xmlns="http://www.w3.org/2000/svg"
        style="border: 1px solid whitesmoke; background-color: whitesmoke; border-radius: 10px;"
    >
      <line x1="40" y1="250" x2="530" y2="250" stroke="black" stroke-width="2" />

      <line x1="40" y1="250" x2="40" y2="20" stroke="black" stroke-width="2" />

      <rect
          v-for="(item, index) in data"
          :key="'bar-' + index"
          :x="xPosition(index)"
          :y="yPosition(item.weight)"
          :width="barWidth"
          :height="barHeight(item.weight)"
          fill="steelblue"
      />

      <polyline
          :points="linePoints"
          stroke="red"
          fill="none"
          stroke-width="2"
      />

      <text
          v-for="(item, index) in data"
          :key="'label-' + index"
          :x="xPosition(index) + barWidth / 2"
          y="270"
          text-anchor="middle"
          font-size="12"
      >
        {{ item.day }}
      </text>

      <text
          v-for="(item, index) in data"
          :key="'val-' + index"
          :x="xPosition(index) + barWidth / 2"
          :y="yPosition(item.weight) - 5"
          text-anchor="middle"
          font-size="12"
      >
        {{ item.weight }}
      </text>
      <text
        transform="rotate(-90, 120, 90)"
      >
        Weight lifted (kg)
      </text>
    </svg>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const data = ref([
  { day: 'Monday',    weight: 20 },
  { day: 'Tuesday',   weight: 30 },
  { day: 'Wednesday', weight: 25 },
  { day: 'Thursday',  weight: 40 },
  { day: 'Friday',    weight: 35 },
  { day: 'Saturday',  weight: 45 },
  { day: 'Sunday',    weight: 30 }
]);

const barWidth = 30;
const maxHeight = 200;
const chartBottom = 250;
const startX = 50;
const gap = 40;

const linePoints = computed(() => {
  return data.value
      .map((item, index) => {
        const x = xPosition(index) + barWidth / 2
        const y = yPosition(item.weight)
        return `${x},${y}`
      })
      .join(' ')
});

function xPosition(index) {
  return startX + index * (barWidth + gap)
}

function yPosition(weight) {
  const maxValue = Math.max(...data.value.map(d => d.weight))
  const scale = maxHeight / maxValue
  return chartBottom - weight * scale
}


function barHeight(weight) {
  const maxValue = Math.max(...data.value.map(d => d.weight))
  const scale = maxHeight / maxValue
  return weight * scale
}
</script>
