const {
    By
} = require('selenium-webdriver');
const {
    describe,
    it,
    after,
    before
} = require('mocha');
const Page = require('../pages/homePage');

const chai = require('chai');
const expect = chai.expect;
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

process.on('unhandledRejection', () => {});

(async function example() {
    try {
        describe('LoginHub automated Positive testing', async function () {
            this.timeout(5000000);
            let driver, page;

            beforeEach(async () => {
                page = new Page();
                driver = page.driver;
                await page.visit('http://www.loginhub.com/');
                await page.delay(3000);
            });

            afterEach(async () => {
                await page.quit();
            });

            it('find logo', async () => {
                const logo = await page.findLogo();
                await page.delay(1000);
                await logo.isDisplayed();
                await page.delay(1000);
            });

            it('Click on Login And Dismiss', async () => {
                const loginBtn = await page.clickOnLogin();
                await page.delay(1000);
                await loginBtn.click();
                const dismissBtn = await page.dismissPopUp();
                await page.delay(3000);
                await dismissBtn.click();
                await page.delay(2000);
            });

            it('Login with Github (without crendentials)', async () => {
                await page.loginWithGithub();
            });

            it('Login with Facebook', async () => {
                await page.loginWithFB();
            });

            it('Click on Register and Dismiss', async () => {
                const registerBtn = await page.clickOnRegister();
                await page.delay(1000);
                await registerBtn.click();
                const dismissBtn = await page.dismissPopUp();
                await page.delay(2000);
                await dismissBtn.click();
                await page.delay(2000);
            });

            it('Click on Register, Already have an account, Dismiss', async () => {
                const registerBtn = await page.clickOnRegister();
                await page.delay(1000);
                await registerBtn.click();
                await page.delay(1000);
                const alreadyHaveAnAccBtn = await page.clickOnAlreadyHaveAnAccount();
                await page.delay(1000);
                await alreadyHaveAnAccBtn.click();
                const dismissBtn = await page.dismissPopUp();
                await page.delay(1000);
                await dismissBtn.click();
                await page.delay(1000);
            });

            it('Click on Register, Already have an account, login with FB ', async () => {
                const registerBtn = await page.clickOnRegister();
                await page.delay(1000);
                registerBtn.click();
                const alreadyHaveAnAccBtn = await page.clickOnAlreadyHaveAnAccount();
                await page.delay(1000);
                alreadyHaveAnAccBtn.click();
                await page.delay(1000);
                await page.loginWithFB();
            });

            it('Click on Login, Click on Forgot Password', async () => {
                const loginBtn = await page.clickOnLogin();
                await page.delay(1000);
                await loginBtn.click();
                const forgotPasswordBtn = await page.clickOnForgotPassword();
                await page.delay(1000);
                await forgotPasswordBtn.click();
                await page.delay(2000);
            });

            it('Click on Login,Click on Register Account', async () => {
                const loginBtn = await page.clickOnLogin();
                await page.delay(2000);
                await loginBtn.click();
                const createAccBtn = await page.clickOnCreateAccount();
                await page.delay(2000);
                await createAccBtn.click();
                await page.delay(2000);
            });

            it('Click on Login, Click on Create an account, create with Social Login', async () => {
                const loginBtn = await page.clickOnLogin();
                await page.delay(1000);
                await loginBtn.click();
                const createAccBtn = await page.clickOnCreateAccount();
                await page.delay(1000);
                await createAccBtn.click();
                await page.delay(2000);
                await page.loginWithFB();
            });

            it('Click on Start 30 day trial', async function () {
                const trialBtn = await page.getTrailBtn();
                await page.delay(2000);
                await trialBtn.click();
                await page.delay(2000);
                const result = await page.verifyNewPageTitle();
                await page.delay(2000);
                expect(result).to.be.true;
            });
        });
    } catch (ex) {
        console.log(new Error(ex.message));
    }

    try {
        describe('Loingub automated Negative testing', async function () {
            this.timeout(5000000);
            let driver, page;

            beforeEach(async () => {
                page = new Page();
                driver = page.driver;
                await page.visit('http://www.loginhub.com/');
                await page.delay(3000);
            });

            afterEach(async () => {
                await page.quit();
            });

            it('Trying to login with empty fields', async function () {
                const loginBtn = await page.clickOnLogin();
                await page.delay(2000);
                await loginBtn.click();
                await page.delay(2000);
                const loginBtn2 = await page.getLoginButton2();
                await loginBtn2.click();
                const result = await page.verifyLoginValidationMessage();
                await page.delay(3000);
                expect(result).to.be.true;
            });

            it('Valid Username, Invalid Password', async function () {
                const loginBtn = await page.clickOnLogin();
                await page.delay(2000);
                await loginBtn.click();
                await page.delay(2000);
                const result = await page.loginValidUserNameInvalidPasswd();
                expect(result).to.be.true;
            });

            it('Register Page, Fields are empty, Submit Clicked', async function () {
                const registerBtn = await page.clickOnRegister();
                await page.delay(2000);
                await registerBtn.click();
                await page.delay(2000);
                const result = await page.registerWithEmptyFields();
                expect(result).to.be.true;
            });

            it('Register Valid Email And Invalid Password', async function () {
                const registerBtn = await page.clickOnRegister();
                await page.delay(2000);
                await registerBtn.click();
                await page.delay(2000);
                const result = await page.registerWithInvalidPasswd();
                expect(result).to.be.true;
            });

            it('Valid Date, Invalid Password', async function () {
                const registerBtn = await page.clickOnRegister();
                await page.delay(2000);
                await registerBtn.click();
                await page.delay(2000);
                const result = await page.registerWithValidDataInvalidPasswd();
                expect(result).to.be.true;
            });

            it('Valid Password and Invalid Email', async function () {
                const registerBtn = await page.clickOnRegister();
                await page.delay(2000);
                await registerBtn.click();
                await page.delay(2000);
                const result = await page.registerWithValidPasswdInvalidEmail();
                expect(result).to.be.true;
            });

            it('Click on Forgot Password, Invalid Email', async function () {
                const loginBtn = await page.clickOnLogin();
                await page.delay(1000);
                await loginBtn.click();
                const forgotPasswordBtn = await page.clickOnForgotPassword();
                await page.delay(1000);
                await forgotPasswordBtn.click();
                await page.delay(2000);
                const result = await page.submitForgotPasswdWithInvalidEmail();
                expect(result).to.be.true;
            });


            it('Validate Email in Registration', async function () {
                const registerBtn = await page.clickOnRegister();
                await page.delay(2000);
                await registerBtn.click();
                await page.delay(2000);
                const result = await page.validateRegistrationEmail();
                expect(result).to.be.true;
            });

            it('Validate Date of Birth in Registration', async function () {
                const registerBtn = await page.clickOnRegister();
                await page.delay(2000);
                await registerBtn.click();
                await page.delay(2000);
                const result = await page.validateDOBInRegistration();
                expect(result).to.be.true;
            });

            it('Validate Password field in Registration', async function () {
                const registerBtn = await page.clickOnRegister();
                await page.delay(2000);
                await registerBtn.click();
                await page.delay(2000);
                const result = await page.validatePasswordInRegistration();
                expect(result).to.be.true;
            })

        });
    } catch (error) {
        console.log(new Error(ex.message));
    }


})();