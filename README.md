# **stitch.io**

a simplified clone of game-distribution sites steam and itch.io.

## **installation**

to set up the app on your local machine, navigate to the project folder in your terminal and type:

```
cd server
pipenv install
pipenv shell
python seed.py
python app.py
```

open another terminal window, navigate to the project folder, then type:

```
cd client
npm install
npm run dev
o
```
## **folder structure**
```
.
├── client
│   ├── node_modules
│   ├── public
│   └── src
│       ├── components
│       ├── hooks
│       └── routes
│           ├── friends
│           ├── home
│           ├── library
│           ├── login
│           ├── profile
│           ├── signup
│           └── store
│               └── game
└── server
    ├── assets
    ├── instance
    └── ...

```

## **technologies used**
• vite         (4.2.0)

• react        (18.2.0)

• react router (6.4.4)

• python

• flask

• zustand

• marshmallow

• tailwind css (3.3.1)

## **features**
*insert key features here (client-side routing, talk about the logic used, typed library, etc)*

## **demo / walkthrough**
*insert link to loom video with thumbnail here*

## **license**
stitch.io is available under the mit license. see the license.txt file for more info.

## **contact information**
[github](https://github.com/trevor-wells)

[linkedin](https://www.linkedin.com/in/trevor-e-wells/)
