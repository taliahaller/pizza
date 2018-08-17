# Beep Boop Number Translator

#### Webpage form to convert users numerical input into specific pattern detailed below, 17 Aug 2018.
#### By Talia Haller

## Description

Creates a web application that takes a number from a user (range = 0 to 1000) and returns a range of numbers from 0 to the chosen number with the following exceptions:

Numbers that contain a 0 are replaced (all digits) with "Beep!"
Numbers that contain a 1 are replaced (all digits) with "Boop!"
Numbers divisible by 3 are replaced with "I'm sorry, Dave. I'm afraid I can't do that."

These exceptions are written from least to most important. The first exception should apply unless the second exception does, and the same with the second and third. For example, the number 10 is replaced with "Boop!", and the number 30 is with "I'm sorry, Dave. I'm afraid I can't do that."

Also a user can enter a new number and see new results over and over again.

## Specs for project:

    Format: Behavior | "Input" | "Output"
    1. Create form to take user input and put same number back out. | "5" | "5"
    2. Program returns all numbers below inputted number. | "3" | "3, 2, 1, 0"
    3. Programs returns number range in increasing order. | "3" | "0, 1, 2, 3"
    4. Program replaces all numbers containing "0" with "Beep". | "3" | "Beep, 1, 2, 3"
    5. Program replaces all numbers containing "1" with "Beep" (overrides spec 4). | "3" | "Beep, Boop, 2, 3"
    6. Program replaces all numbers divisible by 3 with Dave sentence (overrides spec 4, 5). | "3" | "Beep, Boop, 2, [Dave Sentence]"


## Setup/Installation Requirements

    This webpage requires no installation.
    1. Clone the repository in the terminal, using the "git clone" command.
    2. CD into the directory of interest.
    3. Open the index.html file in your browser, using "open index.html" or a method of your choosing.

## Bugs

No known bugs.

## Support and contact details

Please email taliahaller@gmail.com if an issue arises.

## Technologies Used

    HTML
    CSS
    Atom
    Bootstrap
    JavaScript
    jQuery

## License

Public Domain

Copyright (c) 2018 Talia Haller
