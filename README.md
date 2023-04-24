# Auth Template
Here is how we can do Auth for our projects.

## Authentication vs Authorization
Remember, `authenticated` means "We have confirmed this person is who they say they are" and `authorized` means "This person is who they say the are AND they are allowed to be here." So if we just want a user to be logged into the site to show content, we just check if they're `authenticated`. However, they wanted to update their profile info, we'd need to make sure they were `authorized` to do that (e.g. the profile they're updating is their own)

## Advice
Remember, **DO NOT TRUST THE FRONTEND**. Validate everything on the server. Just because you block a form in the GUI, doesn't mean a nefarious actor couldn't just pop open a console and make a `fetch` request. Also, the frontend can be buggy and mistakes can happen.

This template is more rushed than we would've preferred and doesn't have as many nice tools (we encourage you to check out ESModules), but this is an good launch point for understanding authentication.

## Explaining Trade offs
Nothing in life is free, so here are some of the pitfalls of this approach.

### Sessions Over Tokens
Since our entire application lives on one server (our frontend is just a bunch of static pages), that means we can use cookies for auth. JWTs are better for situations where you don't control everything or have multiple servers that need to maintain users across them. Also, JWTS should be stored in the cookie anyway, so we might as well just use the much smaller sessions anyway.

**Sessions**
Here's a nice ["getting started" article on Express sessions](https://www.section.io/engineering-education/session-management-in-nodejs-using-expressjs-and-express-session/). The big hurdle with sessions is that they need to be stored somewhere. *Usually* that's a global store like Redis (which is also crazy fast). But to keep things simple, we're just using our database, and hooking it up with knex.

The tl;dr on sessions is this: when a user logs in, we create a session cookie. All that cookie has on it is the session id. Then, on the server, we always have access to the same session so we can load and read anything from it. Generally, that's just the logged in user data. However, the only thing that ever gets sent in the cookie is the session id, which means we can load other things into our session without size concerns (JWTS are the opposite, you must keep those small).

To logout a user, simply `.destroy` the session.

### Client System
Without a proper front end router system or backend template system, we're a little limited. So for this setup, let's try to keep the number of html files limited (in fact, the signup and login pages could probably be combined). We also lack a proper bundler like Vite or an import system like ESModules, so we have to keep a `globals` file for universal functions and values.

This also means that we have to use `localStorage` as our state. Anything saved in memory on a specific page's won't be able to be shared with other pages. So for instance on sign up or log in, the user *must* be saved to `localStorage` before navigating away. We are using httpOnly cookies, so the client can't see who's logged in (and even if they could see, remember, the cookie is only the *session* id, not the user info).

The apps this would be suited for are ones where a user has info and children entities they can access, but they don't interact with other users. Primary reason being is that in order to load a different users/assets via the url, we're have to use queries and that can get messy. However, if one really wanted to, there is a helper function `isCurrentlyLoggedInUser` to distinguish things between the current user and another user.

Logging out is simple, once the server destroys the httpOnly cookie, remove the `user` key from `localStorage`.

### Brittle
Given time constraints, this project is handling barely any errors. The model is very brittle right now, the server and sql errors should be handled. I'm also only handling the most basic of logged in/logged out flow on the client. Things like creating users who already exist or even wrong passwords can be handled much more delicately.

We could also extend the functionality. For example, right now a user can't update their password, but that would be a good feature to have. It's just that's a more complicated process with form validation before it can even submit, and then once it submits, the values need to be double checked.
