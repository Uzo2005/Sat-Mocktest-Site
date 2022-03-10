# Sat-Mocktest-Site
My first personal project----expect to see lots of bugs😢


The idea for this project came to me when I observed that the SAT Mocktest EdUSAabuja members used for practice was administered with google forms which I felt was not a very effective method.
I am not actually sure what a readme file should contain but I will try my best to explain what I have done in this project and what I still hope to do.

THIS IS HOW THIS WEBSITE WORKS:
1. The landing page is a form which requires your name and email. 
   The email the student provides in the form, would be used to communicate his final score after the exam. 
   This form is not a login form because I reasoned that if students had to login to take the test then the database needs to save their information and track their score and this requires storage space bit if they never had to login but just took the exam when they felt like and could track their scores via their email, then the backend would be simple and easy to manage.

2. On filling the form details and submitting: the student is led to a general instructions page and is prompted to begin the Timer for the Reading section.
   This instructioms page contains a button for going back to the login form and another button for starting the Reading section which should last 65 minutes.

3. If the student  clicked the "Start Timer" button on the general instructions page he will be  redirected to the Reading page which has a 65 minutes countdown timer and which redirects  to the writing instructions when the timer counts to 0. Also after the timer counts to zero the student cannot return to that section again.

4. After the submit button for the English reading is clicked or the timer runs out, the student is led to the wrting instructions page which contains the instructioms for the writing page, buttons for exit and another button for starting the Timer.

5. The writing page lasts for 35 minutes and when it ends the user cannot return to the page also, the user is redirected to the 10 minutes break page because in the real SAT there is a 10 minutes break between the English and Math Section.
   The student has the option to skip the break and start the Maths Section immediately, however if the student remain on the break-page; he is redirected to the MathsNoCalc instructions  after the 10 minutes countdown is over.

6. When the timer for the MathsNoCalc is started the 25 minutes countdown starts and the user can now begin answering the maths questions without the use of a calculator. Questions 15 to 20 have to be typed in the box provided.

7. After the MathNoCalc ends the student is redirected to the MathsCalc section where a calculator is allowed. This will last for 55minutes and is very similar to the MathNocalc section except it that it should have 38 questions. Also questions 30 to 38 are to typed in the input box provided.
 
8. When the student submits or the timer runs out, the student is led to the ending page where he is congratulated for finishing the SAT mocktest and is prompted to check his email for his score. Also a button is provided for going back to learn from mistakes.




THIS ARE THE ISSUES I AM FACING RIGHT NOW:

1. I have no clue how to make the adding of questions and answers easy for the admin without having the admin look at or modify the source code. 
   In paraphrase, how do I create a UI database for administering questions and answers.


2. How can I make the page not accessible when the user is still completing the mocktest but accessible when the same user wants to learn from his mistakes.

                   
         Thank you, happy coding:)
