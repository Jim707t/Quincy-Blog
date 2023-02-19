---
tag: "Artificial Intelligence"
title: 'Unlock the full potential of ChatGPT with "step by step approach"'
subtitle: |
  I explore a step-by-step approach to working with ChatGPT that can improve the accuracy and completeness of its responses. By developing a practice that emphasizes planning, explicit instruction and caution.
date: "18 Feb, 2023"
---

Advances in artificial intelligence (AI) continue to reshape the world, language models like ChatGPT have become powerful tools for natural language processing. Lately, I see ChatGPT gaining wide recognition for its ability to generate human-like responses to a wide range of questions and tasks. So, as with any technology, maximizing the potential of ChatGPT requires careful consideration of best practices and techniques. Well, in my journey, I explore a step-by-step approach to working with ChatGPT that can improve the accuracy and completeness of its responses. By developing a practice that emphasizes planning, explicit instruction and caution. Whether you are a seasoned AI practitioner or new to the field, I believe my insights can help you get the most out of your work with ChatGPT and other language models.
<br><br>

I spent a lot of time trying to get ChatGPT to do things step by step. Although I sometimes emphasize points, he will skip steps that I have specifically instructed him not to skip. That's why I develop a practice and technique for ChatGPT to perform tasks step by step to avoid inaccurate and incomplete answers. The principle I follow is simple:
<br>

   1- Make him plan what he is going to do to make corrections if necessary and I can also make sure he  follows the plan.<br>
   2- Always make ChatGPT wait for my permission.<br>
   3-  After an optimized plan I can make him start the execution of the task while reminding him of his plan  all that step by step.
<br><br>

Why? We all know that when an answer is long, ChatGPT sometimes generates incomplete answers. This can break the ChatGPT workflow and make it confusing with its alignment to the previous answer This is another point of escalation.
<br><br>
These small techniques are effective in all areas ( I think ). Now let's look at some examples.
Let's say we want to create a python program to check if a credit card number is valid or not. I will do 2 different tests to see which is better optimized between my approach and a normal approach. I'll start with the normal approach.
<br><br>

<img src="/assets/unlock-gpt-1.png" alt="Alt Text" title="Optional Title" height="90%" width="90%">
<br><br>

As you see, I just ask it for some normal instructions as any user might do hoping for the best result. I make sure to tell him what he should use and some information to be fair. Now let's see the function offered by ChatGPT:
<br><br>

<img src="/assets/unlock-gpt-2.png" alt="Alt Text" title="Optional Title" height="90%" width="90%" margin="5%">

<br>
We can consider by this answer that ChatGPT understands what it has to do. See the function proposed by this one:
<br><br>

<img src="/assets/unlock-gpt-3.png" alt="Alt Text" title="Optional Title" height="90%" width="90%">
<br><br>

Looks good at first glance, it creates a function that can take an ID number
Ensuring that if the argument is in the correct form ("4111 1111 1111 1111") no space issues will occur. No problem, everything will be fine! In fact, I mean that the program will progress, not sure that it will succeed. No need to go further, in the code you can read it yourself.
<br><br>

<pre style="max-width:800px;overflow-x:scroll">

def validate_card_number(card_number):
    # Step 1: Remove any spaces and convert to string
    card_number = str(card_number).replace(' ', '')
    
    # Step 2: Check the length of the card number and the starting digits
    if len(card_number) not in [13, 16]:
        return "Invalid Card"
    elif card_number[0] == '4':
        card_type = "Visa"
    elif card_number[0] == '5' and card_number[1] in ['1', '2', '3', '4', '5']:
        card_type = "Mastercard"
    elif card_number[0] == '3':
        card_type = "American Express"
    else:
        return "Invalid Card"
    
    # Step 3: Apply the Luhn algorithm to validate the card number
    digits = [int(d) for d in card_number]
    odd_digits = digits[-2::-2]
    even_digits = [2*d if d < 5 else 2*d-9 for d in digits[-1::-2]]
    luhn_sum = sum(odd_digits + even_digits)
    if luhn_sum % 10 == 0:
        return f"{card_type} Card"
    else:
        return "Invalid Card"

card_number = input("Add your credit card number: ")
print(validate_card_number(card_number))

</pre>
<br><br>

So I have used the function proposed by ChatGPT to infer if a card is valid and what type it is. To test it I used the test Transactions<a href="https://developer.paypal.com/api/nvp-soap/payflow/integration-guide/test-transactions/#standard-test-cards" style="color: orange; text-decoration: underline;"> credit card number </a>provided by paypal. And here is the result:
<br><br>        

The function could not recognize the American Express card number :
<br><br>

<img src="/assets/unlock-gpt-4.png" alt="Alt Text" title="Optional Title" height="90%" width="90%">
<br><br>

He get Mastercard correct:
<br><br>

<img src="/assets/unlock-gpt-5.png" alt="Alt Text" title="Optional Title" height="90%" width="90%">
<br><br>

It's wrong on the Visa card number:
<br><br>

<img src="/assets/unlock-gpt-6.png" alt="Alt Text" title="Optional Title" height="90%" width="90%">
<br><br>        

Visa with wrong 13 digits was deducted invalid despite being valid to:
<br><br>

<img src="/assets/unlock-gpt-7.png" alt="Alt Text" title="Optional Title" height="90%" width="90%">
<br><br>

Then I gave it an invalid number which was calculated invalid of course:
<br><br>

<img src="/assets/unlock-gpt-8.png" alt="Alt Text" title="Optional Title" height="90%" width="90%">
<br><br>

So as a rational human I could say why? But don't even want to know why technically his get ⅕ of the answer. Or if you like ⅖ . What interests me is the result of my developed practice. So let's get into it.
<br><br>

As I said, we must make ChatGPT process step by step.
<br>
   1- Make him plan what he is going to do to make corrections if necessary and I can also make sure he      follows the plan.<br>
   2- Always make ChatGPT wait for my permission.<br>
   3-  After an optimized plan I can make him start the execution of the task while reminding him of his plan  all that step by step.
<br><br>

On these, let's designate a "prompt" aligned with these rules.
<br><br>

<img src="/assets/unlock-gpt-9.png" alt="Alt Text" title="Optional Title" height="90%" width="90%">
<br><br>

You can see above that I haven't really changed the previous information except to add some text so ChatGPT knows how to handle the problem.
<br><br>

<img src="/assets/unlock-gpt-10.png" alt="Alt Text" title="Optional Title" height="90%" width="90%">
<br><br>

I persist in "wait for order" mostly because I misspell my last sentence. I didn't mean to alter the prompt and this well structured plan. It's just that I don't want him to think the previous answer was inaccurate. The most important thing is that it is waiting for permission, which means the prompt has been understood, we are on the right path.
<br><br>

<img src="/assets/unlock-gpt-11.png" alt="Alt Text" title="Optional Title" height="90%" width="90%">
<br><br>

This may seem tedious, but you need to be patient and allow for step-by-step processing that is crucial to ensure that no incomplete response generation occurs, making it easier to create a more sophisticated program.
<br><br>

<img src="/assets/unlock-gpt-12.png" alt="Alt Text" title="Optional Title" height="90%" width="90%">
<br><br>

You can notice the main reasons why it always follows the process step by step. It's because I make him make a plan and explicitly tell him to follow the plan and never take the next step without permission. This helps ChatGPT know when to stop.
<br><br>

<img src="/assets/unlock-gpt-13.png" alt="Alt Text" title="Optional Title" height="90%" width="90%">
<br><br>

<img src="/assets/unlock-gpt-14.png" alt="Alt Text" title="Optional Title" height="90%" width="90%">
<br><br>

So far, he has accomplished his task step by step. It is now time to test the accuracy of his 2nd program carried out by special training.
<br><br>

<pre style="max-width:800px;overflow-x:scroll">

credit_card_number = input("Please enter your credit card number: ")

if len(credit_card_number) == 15 and credit_card_number.startswith('3'):
    card_type = "American Express"
elif len(credit_card_number) == 16 and credit_card_number.startswith('5') and credit_card_number[1] in ['1', '2', '3', '4', '5']:
    card_type = "Mastercard"
elif (len(credit_card_number) == 13 or len(credit_card_number) == 16) and credit_card_number.startswith('4'):
    card_type = "Visa"
else:
    card_type = "Unknown"

digits = [int(d) for d in credit_card_number if d.isdigit()]
odd_digits = digits[-1::-2]
even_digits = digits[-2::-2]
check_sum = sum(odd_digits + [sum(divmod(d * 2, 10)) for d in even_digits])
if check_sum % 10 == 0:
    is_valid = True
else:
    is_valid = False

if is_valid:
    print(f"The {card_type} credit card number {credit_card_number} is valid.")
else:
    print(f"The {card_type} credit card number {credit_card_number} is invalid.")

</pre>
<br><br>        

I did the first test with an American Express card number and the program took it correctly.
<br><br>
        
<img src="/assets/unlock-gpt-16.png" alt="Alt Text" title="Optional Title" height="90%" width="90%">
<br><br>

Test with Mastercard is correct
<br><br>

<img src="/assets/unlock-gpt-17.png" alt="Alt Text" title="Optional Title" height="90%" width="90%">
<br><br>

Visa 16 digit correctly detected as valid.
<br><br>



<img src="/assets/unlock-gpt-18.png" alt="Alt Text" title="Optional Title" height="90%" width="90%">
<br><br>

Visa 13 digit correctly detected as valid.
<br><br>


<img src="/assets/unlock-gpt-19.png" alt="Alt Text" title="Optional Title" height="90%" width="90%">
<br><br>

The unknown number is detected as invalid
<br><br>

<img src="/assets/unlock-gpt-21.png" alt="Alt Text" title="Optional Title" height="90%" width="90%">
<br><br>

What if I pass an incorrect number but with 16 digit and the first digit is 4 making it look like a VISA card number, what will be the inferring?
<br><br>

<img src="/assets/unlock-gpt-20.png" alt="Alt Text" title="Optional Title" height="90%" width="90%">
<br><br>

The program detected it as invalid but it says it matches the digit of the number in a Visa card since <a href="https://en.wikipedia.org/wiki/Luhn_algorithm" style="color: orange; text-decoration: underline;">Luhn's algorithm</a> is there it knows it's not a valid card. In the event that I were to enter a similar card number on disparate cards, you would inevitably observe a similar result.
<br><br>

From my experience working with ChatGPT, this is one of the different ways to extract the best ChatGPT answers. I hope I can share the other with you in another post. With a little creativity, you can apply this type of practice to any topic. I learned that step-by-step processing is key to getting accurate and complete answers. To do this, I developed a unique practice and technique of asking ChatGPT to create a plan, strictly ordering it to follow it, and never allowing it to progress without permission. Although it may seem laborious, this approach is essential to avoid incomplete responses and ensure a smooth workflow. With this method, I was able to produce more refined and accurate programs, as evidenced by my successful verification of credit card numbers. This technique has proven effective in a range of subjects, highlighting the importance of this approach in producing sophisticated results.