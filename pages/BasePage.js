
export class BasePage {
    constructor(page) {
        this.page = page;
    }
    /*page is the browser tab Playwright gives each test.
    this.page = page saves it on the object, so every method in the class can use it as this.page.
    It’s like a Java constructor that stores a field. In JavaScript you always write this. to use it.*/

    async open(path = '/index.html') {
        await this.page.goto(path);
    }

    async captureDialog(action) {
        // 1. start listening for the dialog (don't await it yet)
        const dialogPromise = this.page.waitForEvent('dialog');

        // 2. run the click
        await action();

        // 3. await the stored Promise
        const dialog = await dialogPromise;

        // 4. read its message, accept it, and return the message
        const message = dialog.message();
        await dialog.accept();
        return message;

    }
}