Step 1: Extract the zip file contents(Extract here)											
Step 2: cd Loginhub-Automation Testing													
Step 3: npm i																
Step 4: npm test															 


Note:- It will run based on chrome driver version and in this project we have used 79 chrome version.


Positive Test Case
		1.Verify the logo(launching the loginhub page).
		2.Verify the login button functionlity (Click on login and close the login pop up).
		3.Verify the Login with Github (without Credentails).
		4.Login with  Facebook Social network. (User ID:- 8639111645,password:- test@123).
		5.Verify the Register button functionlity (Click on Register and close the Register pop up).
		6.Click on Register and Click on already have an account and Close the pop up.
		7.Click on Register and Click on already have an account and Complte the login with facebook.
		8.Click on login and click on forgot password.
		9.Click on login and click on create account 
		10.Click on Login, Click on Create an account, create with Social Login.
		11.Luanch the page and Click on Start 30 day trial.		
		
Negative Test Case	
		1.Verify login page when the field is blank and Submit button is clicked.
		2.Verify user cannot login with a valid username and an invalid password.
		3.Verify Register page when the field is blank and Submit button is clicked.
		4.Verify user cannot Register with a valid email and an invalid password.
		5.Verify user cannot Register with a valid Date and an invalid password.
		6.Verify user cannot Register with a valid password and an invalid email.
		7.Click on forgot password and enter a invalid emailid.
		8.Validate Email id format in Registration Page.
		9.Validate Date of Birth format in Registration Page.
		10.Validate Password field in Registration Page.
