export function formatDiscount(percent: number): number {
    if (percent <= 9) return 10
    if (percent % 5 === 0) return percent

    return Math.ceil(percent / 5) * 5
}
