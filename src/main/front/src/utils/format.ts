export function formatMonth(date: Date): string {
  return date.getFullYear() + "/" +
    (date.getMonth() + 1).toString().padStart(2, "0");
}

export function formatDay(date: Date): string {
  return (date.getMonth() + 1).toString().padStart(2, "0") +
    "/" +
    date.getDate().toString().padStart(2, "0");
}
