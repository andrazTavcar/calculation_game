// Object type
export type Operation = '*' | '/' | '+' | '-';
export type Equation = { equation: string, result: number };
export type EquationResult = { equation: string, userInput: number, valid: boolean }

// Function type
export type MathOperationFunc = (a: number, b: number) => number;
