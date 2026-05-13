import { Locator, Page } from '@playwright/test';

export class LoanCalculatorPage {
    readonly page: Page;
    readonly applyButton: Locator;

    constructor(page: Page) {
        this.page = page;

        this.applyButton = page.getByTestId('id-small-loan-calculator-field-apply');
    }

    async clickApplyButton() {
        await this.applyButton.click();
    }
}