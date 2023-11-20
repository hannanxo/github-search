The `github-search` is a search application for getting information on github users and repositories. This project is made using the following stack:
## Tools Utilized:
- NextJS
- TanStack Query
- Antd Components & style

## Getting Started:

To get the application running simply clone it and run the following command in the terminal

```bash
npm i
# or
yarn i
```

This will install the `node-modules` required to run the application. Next, create a `.env.local` file create an environment variable named `NEXT_PUBLIC_TOKEN`, and place your GitHub token here.
This will allow you to not get blocked from the API after a few requests. After this run the following to start the development server:

``` bash
npm run dev
# or
yarn run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project is using NEXT 14 which comes with the app router support. The starting point of the app is the page in the `app/page.tsx`.

## Screenshots:
- User can toggle between dark and light themes using the switch (also the theme is preserved using localStorage):  
<img width="500" alt="image" src="https://github.com/hannanxo/github-search-app/assets/88934213/36fda9f7-6c28-4953-9f80-c8c2f2ef2370">
<img width="500" alt="image" src="https://github.com/hannanxo/github-search-app/assets/88934213/2e6df9f0-456c-4ea9-9d68-8fc061ad7450">

- Debounce is used to reduce the number of API calls sent along with session-based caching:
<img width="500" alt="image" src="https://github.com/hannanxo/github-search-app/assets/88934213/ad1bd593-5595-47be-b8ea-ec31bceaa9bc">
<img width="500" alt="image" src="https://github.com/hannanxo/github-search-app/assets/88934213/8b2aca07-9fbe-491c-a57f-85a2c5384676">

- Responsive UI:
<img width="146" alt="image" src="https://github.com/hannanxo/github-search-app/assets/88934213/9c8cb44e-eb59-47cd-9b92-76d2613828b1">
<img width="146" alt="image" src="https://github.com/hannanxo/github-search-app/assets/88934213/33f6f038-e88b-4089-a221-f4fba7cd9947">
<img width="146" alt="image"  src="https://github.com/hannanxo/github-search-app/assets/88934213/31f7242d-52f9-438e-a415-2ac6dc265a30">

</br>




## Features:

The highlighting features of the project are the following:
- Use of Antd tokens for the UI.
- Session-based caching of the search queries.
- Proper distribution of components and container logic.
- Handling all data retrieval cases like isSuccess, isLoading, and isError.


To create your own `github-search` checkout [Github Search](https://dev-portal.carbonteq.com/docs/Training/react/githubsearch) - your feedback and contributions are welcome!
