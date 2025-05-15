export class StringCalculator {
    private callCount = 0;

    // Step 8: Event handler field
    private addOccurredHandlers: ((input: string, result: number) => void)[] = [];

    // Method to subscribe to the event
    public onAddOccurred(handler: (input: string, result: number) => void): void {
        this.addOccurredHandlers.push(handler);
    }

    add(input: string): number {
        this.callCount++;
        if (!input) {
            this.triggerAddOccurred(input, 0);
            return 0;
        }

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

        const result = nums.reduce((a, b) => a + (b <= 1000 ? b : 0), 0);

        // Step 8: Trigger the event
        this.triggerAddOccurred(input, result);

        return result;
    }

    private triggerAddOccurred(input: string, result: number) {
        this.addOccurredHandlers.forEach(handler => handler(input, result));
    }

    getCalledCount(): number {
        return this.callCount;
    }
}
