export enum ProgressionKey {
    arithmetic = 1,
    geometric,
    harmonic,
    fibonacci
}

export const keyToWord = (key: ProgressionKey): string => {
    switch (key) {
        case ProgressionKey.arithmetic: return 'arithmetic'
        case ProgressionKey.geometric: return 'geometric'
        case ProgressionKey.harmonic: return 'harmonic'
        case ProgressionKey.fibonacci: return 'fibonacci'
    }

}

export const isKey = (key: number): key is ProgressionKey => {
    const keys = Object.values(ProgressionKey).filter(e=>Number.isInteger(e))
    return keys.includes(key)
}