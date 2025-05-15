export class StringCalculator {
    private callCount = 0;

    add(input: string): number {
        this.callCount++;
        if (!input) return 0;

        let delimiter = /,|\n/;
        if (input.startsWith("//")) {
            const match = input.match(/^\/\/(.+)\n(.*)/);
            if (match) {
                const [, delim, rest] = match;
                delimiter = new RegExp(`[${delim}]`);
                input = rest;
            }
        }

        const nums = input.split(delimiter).map(Number);
        const negatives = nums.filter(n => n < 0);
        if (negatives.length) {
            throw new Error(`negatives not allowed: ${negatives.join(',')}`);
        }
        return nums.reduce((a, b) => a + (b <= 1000 ? b : 0), 0);
    }
}