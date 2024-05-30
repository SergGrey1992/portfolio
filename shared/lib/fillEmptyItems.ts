export const fillEmptyItems = <T>(
    initArray: T[],
    count: number,
    addItem: (index: number) => T
): T[] => {
    const copy = [...initArray]
    const lengthArray = initArray.length
    const elementsToAdd =
        lengthArray % count === 0 ? 0 : count - (lengthArray % count)

    const newItems: T[] = [...Array(elementsToAdd)].map((_, index) =>
        addItem(index)
    )

    return copy.concat(newItems)
}
