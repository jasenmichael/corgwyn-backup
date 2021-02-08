# corgwyn

TODO punch list:
- [x] SEO, og:twitter meta
- [x] add image srcSet
- [x] fix lighthouse nags

J did:
- [X] finish styling footer content
- [x] scroll to top button
- [x] smooth scroll to top
- [x] create hamburger menu
- [x] create/display mobile links menu
- [x] create contact page with form
- [x] create donate page woth form
- [x] implement auth google sign in
- [x] create cms for corgis
- [x] do home page sections
  

N working on: (see notes in file)
- [ ] pages/index.vue

https://corgwyn.pluginpretty.com/

https://corgwyn.netlify.app/

--------

git flow example

add a nuxt module
```bash
npm i @nuxtjs/someModule
```
edit nuxt.config.js if needed
since adding a pkg changes package.json package-lock.json and nuxt.config.js 
we will add and commit all 3 files
```bash
git add package.json package-lock.json nuxt.config.js
git commit -m "task: add @nuxtjs/someModule"
```

----------------

say we create a page and some componenets for it

create a page file
```bash
touch pages/somePage.vue
git add pages/somePage.vue
git commit -m "chore: create somePage"
```

create a component file, and add it to somePage
```bash
git add component/someComponent.vue
git add pages/somePage.vue
git commit -m "chore: create and add someComponent to somePage"
```
