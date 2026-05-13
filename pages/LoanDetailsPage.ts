import { Locator, Page } from '@playwright/test';

export class LoanDetailsPage {
    readonly page: Page;
    readonly continueButton: Locator;
    readonly successButton: Locator;

    constructor(page: Page) {
        this.page = page;

        this.continueButton = page.getByTestId('final-page-continue-button');
        this.successButton = page.getByTestId('final-page-success-ok-button');
    }

    async clickContinueButton() {
        await this.continueButton.click();
    }

    async clickSuccessButton() {
        await this.successButton.click();
    }
}