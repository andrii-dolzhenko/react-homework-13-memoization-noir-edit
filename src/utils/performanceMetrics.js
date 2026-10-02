const metrics = {
  parentRenders: 0,
  filterCalculations: 0,
  statsCalculations: 0,
  productCardRenders: 0,
}

export function incrementPerformanceMetric(metric) {
  metrics[metric] += 1
}

export function getPerformanceMetrics() {
  return { ...metrics }
}
