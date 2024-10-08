const CURRENCY_FORMATTER = new Intl.NumberFormat("en-US", {
    currency: "USD",
    style: "currency",
    minimumFractionDigits: 0,
})

export function formatCurrency(ammount: number) {
    return CURRENCY_FORMATTER.format(ammount)
}

const NUMBER_FORMATTER = new Intl.NumberFormat("en-US")

export function formatNumber(number: number) {
    return NUMBER_FORMATTER.format(number)
}