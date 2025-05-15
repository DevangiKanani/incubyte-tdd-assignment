export class StringCalculator {
    private callCount = 0;

    add(input: string): number {
        this.callCount++;
        if (!input) return 0;
        const nums = input.split(',').map(Number);
        return nums.reduce((a, b) => a + b, 0);
    }
}