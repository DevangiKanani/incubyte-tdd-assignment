export class StringCalculator {
    private callCount = 0;

    add(input: string): number {
        this.callCount++;
        if (!input) return 0;
        const sanitized = input.replace(/\n/g, ',');
        const nums = sanitized.split(',').map(Number);
        return nums.reduce((a, b) => a + b, 0);
    }
}