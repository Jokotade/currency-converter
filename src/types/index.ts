// This file contains TypeScript interfaces and types used throughout the application.

export interface Currency {
    code: string;
    name: string;
}

export interface ExchangeRate {
    base: string;
    rates: Record<string, number>;
}

export interface ConversionResult {
    amount: number;
    convertedAmount: number;
    exchangeRate: number;
    fromCurrency: string;
    toCurrency: string;
}