let Page = require('./basePage');
const {
    By,
    until,
} = require('selenium-webdriver');


Page.prototype.findLogo = async function () {
    await this.driver.wait(until.elementLocated(By.className('logo-box')), 5000, 'Looking for element');
    const logoElem = await this.driver.findElement(By.className('logo-box'))
    return logoElem;
};

Page.prototype.clickOnLogin = async function () {
    await this.driver.wait(until.elementLocated(By.linkText('Login')), 15000, 'Looking for element');
    const loginBtn = await this.driver.findElement(By.linkText('Login'));
    return loginBtn;
};

Page.prototype.dismissPopUp = async function () {
    await this.driver.wait(until.elementLocated(By.linkText('Login')), 15000, 'Looking for element');
    const dismissBtn = await this.driver.findElement(By.className('lr-close-pop'));
    return dismissBtn;
}

Page.prototype.loginWithGithub = async function () {
    await this.driver.wait(until.elementsLocated(By.className('lr-open-pop')), 15000, 'Looking for element');
    const loginBtn = await this.driver.findElement(By.className('lr-open-pop'));
    await this.delay(2000);
    loginBtn.click();
    await this.delay(1000);
    await this.driver.wait(until.elementsLocated(By.className('lr-flat-github')), 15000, 'Looking for element');
    const githubBtn = await this.driver.findElement(By.className('lr-flat-github'));
    githubBtn.click();
    await this.delay(2000);
    const parent = await this.driver.getWindowHandle();
    const windows = await this.driver.getAllWindowHandles();
    await this.driver.switchTo().window(windows[1]);
    await this.delay(2000);

    await this.driver.wait(until.elementLocated(By.id('login_field')), 15000, 'Looking for Login Field');
    const loginInputField = await this.driver.findElement(By.id('login_field'));
    await this.delay(2000);
    this.write(loginInputField, 'email@gmail.com');
    await this.delay(2000);

    await this.driver.wait(until.elementLocated(By.id('password')), 15000, 'Looking for Password Field');
    const passwordInputField = await this.driver.findElement(By.id('password'));
    await this.delay(2000);
    this.write(passwordInputField, '123456');
    await this.delay(2000);
    await this.driver.wait(until.elementLocated(By.name('commit')), 15000, 'Looking for Github Sign In');
    const signInBtn = await this.driver.findElement(By.name('commit'));
    signInBtn.click();
    await this.delay(2000);
}


Page.prototype.loginWithFB = async function () {
    await this.driver.wait(until.elementsLocated(By.className('lr-open-pop')), 15000, 'Looking for element');
    const loginBtn = await this.driver.findElement(By.className('lr-open-pop'));
    await this.delay(2000);
    loginBtn.click();
    await this.delay(2000);
    await this.driver.wait(until.elementsLocated(By.className('lr-flat-facebook')), 15000, 'Looking for element');
    const fbBtn = await this.driver.findElement(By.className('lr-flat-facebook'));
    await this.delay(2000);
    fbBtn.click();
    await this.delay(2000);
    const parent = await this.driver.getWindowHandle();
    const windows = await this.driver.getAllWindowHandles();
    await this.delay(2000);
    await this.driver.switchTo().window(windows[1]);
    await this.delay(2000);

    await this.driver.wait(until.elementLocated(By.id('email')), 15000, 'Looking for Login Field');
    const loginInputField = await this.driver.findElement(By.id('email'));
    await this.delay(2000);
    await this.write(loginInputField, '8639111645');
    await this.delay(2000);

    await this.driver.wait(until.elementLocated(By.id('pass')), 15000, 'Looking for Password Field');
    const passwordInputField = await this.driver.findElement(By.id('pass'));
    await this.delay(2000);
    await this.write(passwordInputField, 'test@123');
    await this.delay(2000);
    await this.driver.wait(until.elementLocated(By.name('login')), 15000, 'Looking for Github Sign In');
    const signInBtn = await this.driver.findElement(By.name('login'));
    signInBtn.click();
    await this.delay(2000);

    
    /* await this.driver.wait(until.elementLocated(By.className('oajrlxb2')), 15000, 'Authorizing for Facebook Sign In');
    const continueBtn = await this.driver.findElement(By.className('oajrlxb2'));
    await this.delay(2000);
    continueBtn.click(); */
    await this.delay(2000);
}

Page.prototype.registerUsingFB = async function () {
    await this.driver.wait(until.elementsLocated(By.className('lr-open-pop')), 15000, 'Looking for element');
    const loginBtn = await this.driver.findElement(By.className('lr-open-pop'));
    await this.delay(2000);
    loginBtn.click();
    await this.delay(2000);
    await this.driver.wait(until.elementsLocated(By.className('lr-flat-facebook')), 15000, 'Looking for element');
    const fbBtn = await this.driver.findElement(By.className('lr-flat-facebook'));
    await this.delay(2000);
    fbBtn.click();
    await this.delay(2000);
    const parent = await this.driver.getWindowHandle();
    const windows = await this.driver.getAllWindowHandles();
    await this.delay(2000);
    await this.driver.switchTo().window(windows[1]);
    await this.delay(2000);

    await this.driver.wait(until.elementLocated(By.id('email')), 15000, 'Looking for Login Field');
    const loginInputField = await this.driver.findElement(By.id('email'));
    await this.delay(2000);
    await this.write(loginInputField, '8639111645');
    await this.delay(2000);

    await this.driver.wait(until.elementLocated(By.id('pass')), 15000, 'Looking for Password Field');
    const passwordInputField = await this.driver.findElement(By.id('pass'));
    await this.delay(2000);
    await this.write(passwordInputField, 'test@123');
    await this.delay(2000);
    await this.driver.wait(until.elementLocated(By.name('login')), 15000, 'Looking for Github Sign In');
    const signInBtn = await this.driver.findElement(By.name('login'));
    signInBtn.click();
    await this.delay(2000);

    
    await this.driver.wait(until.elementLocated(By.className('oajrlxb2')), 15000, 'Authorizing for Facebook Sign In');
    const continueBtn = await this.driver.findElement(By.className('oajrlxb2'));
    await this.delay(2000);
    continueBtn.click();
    await this.delay(2000);
}

Page.prototype.clickOnRegister = async function () {
    await this.driver.wait(until.elementLocated(By.className('lr-open-register')), 15000, 'Looking for Register element');
    const registerBtn = await this.driver.findElement(By.className('lr-open-register'));
    return registerBtn;
}

Page.prototype.clickOnAlreadyHaveAnAccount = async function () {
    await this.driver.wait(until.elementLocated(By.id('already-have an account?')), 15000, 'Looking for Already Registered element');
    const alreadyHaveAnAccBtn = await this.driver.findElement(By.id('already-have an account?'));
    return alreadyHaveAnAccBtn;
}

Page.prototype.clickOnForgotPassword = async function () {
    await this.driver.wait(until.elementLocated(By.id('forgot-password')), 15000, 'Looking for Already Registered element');
    const alreadyHaveAnAccBtn = await this.driver.findElement(By.id('forgot-password'));
    return alreadyHaveAnAccBtn;
}

Page.prototype.clickOnCreateAccount = async function () {
    await this.driver.wait(until.elementsLocated(By.id('create-account')), 15000, 'Looking for Create Account element');
    const createAccountBtn = await this.driver.findElement(By.id('create-account'));
    return createAccountBtn;
}




Page.prototype.verifyLoginValidationMessage = async function () {
    await this.driver.wait(until.elementLocated(By.id('validation-loginradius-raas-login-emailid')), 15000, 'Looking for element');
    const errorElement = await this.driver.findElement(By.id('validation-loginradius-raas-login-emailid'));
    const errMsg = await errorElement.getText();
    console.log(errMsg);
    return errMsg.includes('The Email Id field is required.');
}

Page.prototype.getLoginButton2 = async function () {
    await this.driver.wait(until.elementLocated(By.id('loginradius-raas-submit-Login')), 15000, 'Looking for Login Button 2 element');
    const loginButton2 = await this.driver.findElement(By.id('loginradius-raas-submit-Login'));
    return loginButton2;
}

Page.prototype.loginValidUserNameInvalidPasswd = async function () {
    await this.driver.wait(until.elementLocated(By.name('emailid')), 15000, 'Looking for input username element');
    const inputUsername = await this.driver.findElement(By.name('emailid'));
    await this.delay(2000);
    this.write(inputUsername, 'username@email.com');
    await this.delay(2000);

    await this.driver.wait(until.elementLocated(By.name('password')), 15000, 'Looking for Input Password element');
    const inputPasswd = await this.driver.findElement(By.name('password'));
    await this.delay(2000);
    this.write(inputPasswd, '1234');
    await this.delay(2000);

    const loginBtn2 = await this.getLoginButton2();
    loginBtn2.click();
    await this.delay(2000);

    await this.driver.wait(until.elementLocated(By.id('validation-loginradius-raas-login-password')), 15000, 'Looking for element');
    const errElm = await this.driver.findElement(By.id('validation-loginradius-raas-login-password'));
    const errMsg = await errElm.getText();
    await this.delay(2000);
    return errMsg.includes('The Password field must be at least 6 characters in length.');
}

Page.prototype.getRegisterButton2 = async function () {
    await this.driver.wait(until.elementLocated(By.id('loginradius-raas-submit-Register')), 15000, 'Looking for Register Button 2 element');
    const registerBtn2 = await this.driver.findElement(By.id('loginradius-raas-submit-Register'));
    return registerBtn2;
}

Page.prototype.registerWithEmptyFields = async function () {
    const registerBtn2 = await this.getRegisterButton2();
    await this.delay(2000);
    await registerBtn2.click();
    await this.delay(2000);
    await this.driver.wait(until.elementsLocated(By.id('validation-loginradius-raas-registration-lastname')), 15000, 'Looking for error element');
    const errElm = await this.driver.findElement(By.id('validation-loginradius-raas-registration-lastname'));
    const errMsg = await errElm.getText();
    await this.delay(2000);
    return errMsg.includes('The Last Name field is required.');
}

Page.prototype.registerWithInvalidPasswd = async function () {

    await this.driver.wait(until.elementsLocated(By.name('emailid')), 15000, 'Looking for Create Account element');
    const emailInput = await this.driver.findElement(By.name('emailid'));
    await this.delay(1000);
    await this.write(emailInput, 'email@gmail.com');
    await this.delay(1000);

    await this.driver.wait(until.elementsLocated(By.name('password')), 15000, 'Looking for Create Account element');
    const passwordInput = await this.driver.findElement(By.name('password'));
    await this.delay(1000);
    await this.write(passwordInput, '123');
    await this.delay(1000);

    const registerBtn = await this.getRegisterButton2();
    await this.delay(2000);
    await registerBtn.click();
    await this.delay(2000);
    await this.driver.wait(until.elementLocated(By.id('validation-loginradius-raas-registration-password')), 15000, 'Looking for error element');
    const errElm = await this.driver.findElement(By.id('validation-loginradius-raas-registration-password'));
    const errMsg = await errElm.getText();
    return errMsg.includes('The Password field must be at least 6 characters in length.');
}

Page.prototype.registerWithValidDataInvalidPasswd = async function () {

    await this.driver.wait(until.elementsLocated(By.name('birthdate')), 15000, 'Looking for Create Account element');
    const birthDateInput = await this.driver.findElement(By.name('birthdate'));
    await this.delay(1000)
    await this.write(birthDateInput, '10-30-1991');
    await this.delay(1000)

    await this.driver.wait(until.elementsLocated(By.name('password')), 15000, 'Looking for Create Account element');
    const passwordInput = await this.driver.findElement(By.name('password'));
    await this.delay(1000);
    await this.write(passwordInput, '123');
    await this.delay(1000);

    const registerBtn = await this.getRegisterButton2();
    await this.delay(2000);
    await registerBtn.click();
    await this.delay(2000);
    await this.driver.wait(until.elementLocated(By.id('validation-loginradius-raas-registration-password')), 15000, 'Looking for error element');
    const errElm = await this.driver.findElement(By.id('validation-loginradius-raas-registration-password'));
    const errMsg = await errElm.getText();
    await this.delay(2000);
    return errMsg.includes('The Password field must be at least 6 characters in length.');
};

Page.prototype.registerWithValidPasswdInvalidEmail = async function () {

    await this.driver.wait(until.elementsLocated(By.name('emailid')), 15000, 'Looking for Create Account element');
    const emailInput = await this.driver.findElement(By.name('emailid'));
    await this.delay(1000);
    await this.write(emailInput, 'email');
    await this.delay(1000);

    await this.driver.wait(until.elementsLocated(By.name('password')), 15000, 'Looking for Create Account element');
    const passwordInput = await this.driver.findElement(By.name('password'));
    await this.delay(1000);
    await this.write(passwordInput, '123456');
    await this.delay(1000);
    const registerBtn = await this.getRegisterButton2();
    await this.delay(2000);
    await registerBtn.click();
    await this.delay(2000);

    await this.driver.wait(until.elementLocated(By.id('validation-loginradius-raas-registration-emailid')), 15000, 'Looking for error element');
    const errElm = await this.driver.findElement(By.id('validation-loginradius-raas-registration-emailid'));
    const errMsg = await errElm.getText();
    await this.delay(2000);
    return errMsg.includes('The Email field must contain a valid email address.');

}


Page.prototype.submitForgotPasswdWithInvalidEmail = async function () {

    await this.driver.wait(until.elementLocated(By.id('loginradius-raas-forgotpassword-emailid')), 15000, 'Looking for Input Email element');
    const inputEmail = await this.driver.findElement(By.id('loginradius-raas-forgotpassword-emailid'));
    await this.delay(2000);
    this.write(inputEmail, 'email');
    await this.delay(2000);


    await this.driver.wait(until.elementLocated(By.id('loginradius-raas-submit-Send')), 15000, 'Looking for Send Button');
    const sendButton = await this.driver.findElement(By.id('loginradius-raas-submit-Send'));
    await sendButton.click();
    await this.delay(2000);

    await this.driver.wait(until.elementLocated(By.id('validation-loginradius-raas-forgotpassword-emailid')), 15000, 'Looking for error element');
    const errElm = await this.driver.findElement(By.id('validation-loginradius-raas-forgotpassword-emailid'));
    const errMsg = await errElm.getText();
    await this.delay(2000);
    return errMsg.includes('The Email Id field must contain a valid email address.');

}


Page.prototype.validateRegistrationEmail = async function () {

    await this.driver.wait(until.elementsLocated(By.name('lastname')), 15000, 'Looking for Create Account element');
    const lastNameInput = await this.driver.findElement(By.name('lastname'));
    await this.delay(1000)
    await lastNameInput.sendKeys('Last Name');
    await this.delay(1000)

    await this.driver.wait(until.elementsLocated(By.name('firstname')), 15000, 'Looking for Create Account element');
    const firstNameInput = await this.driver.findElement(By.name('firstname'));
    await this.delay(1000)
    await firstNameInput.sendKeys('First Name');
    await this.delay(1000)

    await this.driver.wait(until.elementsLocated(By.name('birthdate')), 15000, 'Looking for Create Account element');
    const birthDateInput = await this.driver.findElement(By.name('birthdate'));
    await this.delay(1000)
    await this.write(birthDateInput, '10-20-1999');
    await this.delay(1000)


    await this.driver.wait(until.elementsLocated(By.name('emailid')), 15000, 'Looking for Create Account element');
    const emailInput = await this.driver.findElement(By.name('emailid'));
    await this.delay(1000);
    await this.write(emailInput, 'email');
    await this.delay(1000);

    await this.driver.wait(until.elementsLocated(By.name('password')), 15000, 'Looking for Create Account element');
    const passwordInput = await this.driver.findElement(By.name('password'));
    await this.delay(1000);
    await this.write(passwordInput, '123456');
    await this.delay(1000);

    const registerBtn = await this.getRegisterButton2();
    await this.delay(1000);
    await registerBtn.click();
    await this.delay(1000);

    await this.driver.wait(until.elementLocated(By.id('validation-loginradius-raas-registration-emailid')), 15000, 'Looking for error element');
    const errElm = await this.driver.findElement(By.id('validation-loginradius-raas-registration-emailid'));
    const errMsg = await errElm.getText();
    await this.delay(2000);
    return errMsg.includes('The Email field must contain a valid email address.');

}

Page.prototype.validateDOBInRegistration = async function () {
    await this.driver.wait(until.elementsLocated(By.name('lastname')), 15000, 'Looking for Create Account element');
    const lastNameInput = await this.driver.findElement(By.name('lastname'));
    await this.delay(1000)
    await lastNameInput.sendKeys('Last Name');
    await this.delay(1000)

    await this.driver.wait(until.elementsLocated(By.name('firstname')), 15000, 'Looking for Create Account element');
    const firstNameInput = await this.driver.findElement(By.name('firstname'));
    await this.delay(1000)
    await firstNameInput.sendKeys('First Name');
    await this.delay(1000)

    await this.driver.wait(until.elementsLocated(By.name('birthdate')), 15000, 'Looking for Create Account element');
    const birthDateInput = await this.driver.findElement(By.name('birthdate'));
    await this.delay(1000)
    await this.write(birthDateInput, '20-10-1999');
    await this.delay(1000)


    await this.driver.wait(until.elementsLocated(By.name('emailid')), 15000, 'Looking for Create Account element');
    const emailInput = await this.driver.findElement(By.name('emailid'));
    await this.delay(1000);
    await this.write(emailInput, 'email@email.com');
    await this.delay(1000);

    await this.driver.wait(until.elementsLocated(By.name('password')), 15000, 'Looking for Create Account element');
    const passwordInput = await this.driver.findElement(By.name('password'));
    await this.delay(1000);
    await this.write(passwordInput, '123456');
    await this.delay(1000);

    const registerBtn = await this.getRegisterButton2();
    await this.delay(1000);
    await registerBtn.click();
    await this.delay(1000);

    await this.driver.wait(until.elementLocated(By.id('validation-loginradius-raas-registration-birthdate')), 15000, 'Looking for error element');
    const errElm = await this.driver.findElement(By.id('validation-loginradius-raas-registration-birthdate'));
    const errMsg = await errElm.getText();
    await this.delay(2000);
    return errMsg.includes('The Date of Birth field must contain a valid date (mm-dd-yyyy).');
}

Page.prototype.validatePasswordInRegistration = async function () {
    await this.driver.wait(until.elementsLocated(By.name('lastname')), 15000, 'Looking for Create Account element');
    const lastNameInput = await this.driver.findElement(By.name('lastname'));
    await this.delay(1000)
    await lastNameInput.sendKeys('Last Name');
    await this.delay(1000)

    await this.driver.wait(until.elementsLocated(By.name('firstname')), 15000, 'Looking for Create Account element');
    const firstNameInput = await this.driver.findElement(By.name('firstname'));
    await this.delay(1000)
    await firstNameInput.sendKeys('First Name');
    await this.delay(1000)

    await this.driver.wait(until.elementsLocated(By.name('birthdate')), 15000, 'Looking for Create Account element');
    const birthDateInput = await this.driver.findElement(By.name('birthdate'));
    await this.delay(1000)
    await this.write(birthDateInput, '20-10-1999');
    await this.delay(1000)


    await this.driver.wait(until.elementsLocated(By.name('emailid')), 15000, 'Looking for Create Account element');
    const emailInput = await this.driver.findElement(By.name('emailid'));
    await this.delay(1000);
    await this.write(emailInput, 'email@email.com');
    await this.delay(1000);

    await this.driver.wait(until.elementsLocated(By.name('password')), 15000, 'Looking for Create Account element');
    const passwordInput = await this.driver.findElement(By.name('password'));
    await this.delay(1000);
    await this.write(passwordInput, 'asdlkdjsaldnljsaljslkdsaljdlksjalhasdj;sj;asjd;sajdsa;ldsajda;lsdl;saj');
    await this.delay(1000);

    const registerBtn = await this.getRegisterButton2();
    await this.delay(1000);
    await registerBtn.click();
    await this.delay(1000);

    await this.driver.wait(until.elementLocated(By.id('validation-loginradius-raas-registration-password')), 15000, 'Looking for error element');
    const errElm = await this.driver.findElement(By.id('validation-loginradius-raas-registration-password'));
    const errMsg = await errElm.getText();
    await this.delay(2000);
    return errMsg.includes('The Password field must not exceed 32 characters in length.');
}

Page.prototype.getTrailBtn = async function () {
    await this.driver.wait(until.elementLocated(By.className('trial')), 15000, 'Looking for Trail Button element');
    const trailBtn = await this.driver.findElement(By.className('trial'));
    return trailBtn;
}

Page.prototype.verifyNewPageTitle = async function () {
    await this.driver.wait(until.elementLocated(By.className('title')), 15000, 'Looking for title element');
    const titleElem = await this.driver.findElement(By.className('title'));
    const headerTextElem = await titleElem.findElement(By.xpath('//h1[not(@id) and not(@class)]'));
    const title = await headerTextElem.getText();
    return title.includes('One Customer Identity Platform. Flexible Pricing.');
}


module.exports = Page;