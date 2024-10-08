## Introduction

My name is David Pearl, I'm a full stack web developer with 4.5 years experience.

Thanks for the opportunity to take your assessment.

My experience is with React, so I completed your assessment using Next.js, however am open to learning Vue if that is required for the position.

To answer your bonus question from the README

`('b' + 'a' + + 'a' + 'a').toLowerCase()` is `banana`

'b' + 'a' is fine and so is the final 'a'. However, `+ + 'a'` evaluates to NaN because the + operator tries to convert 'a' into a number.

When all the elements are concatenated the NaN is converted to a string.

The expression insided the brackets becomes `('b' + 'a' + 'NaN' + 'a')`, which evaluates to `'baNaNa'`.

Calling .toLowerCase() on `'baNaNa'` converts the string to 'banana'.

## Installation

Using npm:

`npm install`

or yarn:

`yarn install`

## Running the Development Server

Using npm:

`npm run dev`

or yarn:

`yarn dev`

## After install & start

The server should be running at [http://localhost:3000](http://localhost:3000)

Exercise 1 should be visible at the root url [here](http://localhost:3000)

Exercise 2 should be visible at `http://localhost:3000/exercise-2` [here](http://localhost:3000/exercise-2)
