# Implementation:

### Q) What libraries did you add to the frontend? What are they used for?

bpk-component-\* - Imported React Components from backpack styleguide to reuse basic components like button, ProgressBar, Spinner, card.

bpk-theming for customising theme of progress bar

querystring - npm package to convert object into querystring

bpk-tokens - to have consistent coloring, spacing and type settings

prop-types - For props validations

### Q) What is the command to start the server?

(Default) `APIKEY=ss630745725358065467897349852985 npm run server`

---

# General:

### Q) How long, in hours, did you spend on the test?

Around 14 hours

### Q) If you had more time, what further improvements or new features would you add?

Following features and improvemnets can be done

- Pagination as user scrolls down.

- Right now it shows itinerary by one agent. We can add (see +n deals) from n different agents in the UI for the same itinerary.

- Add Graphql as transformation layer with query language which will prevent the overfetching of response.

- Implement caching at server level based on session created. Each session data will be cached for configured amount of time. We can use redis to store key value pair, where key will be sessionkey.

- Use graphql apollo link state, redux caching or react suspense for caching at client level.

### Q) Which parts are you most proud of? And why?

- The best part i loved doing is to decouple components at very basic functional level which made the life very easy while doing changes for optimisation. We don't have to read through a huge file, but changes can be done in a decoupled component with its own independent testing.

- Second one is to implement design based on styleguide. After initial learning curve of understanding how it works, it was a breeze to code the design.

### Q) Which parts did you spend the most time with? What did you find most difficult?

These parts took more time.

- Initial learning curve for getting familiar with design tokens and using backpack styleguide.

- Learning the API architecture and carving out the flattened api result set to be consumed by client.

- Fixing Linting errors to adhere to skyscanner eslint config.

Most difficult:

- Asyn mocking of API in snapshot testing

### Q) How did you find the test overall? If you have any suggestions on how we can improve the test or our API, we'd love to hear them.

- Test is fun , well structured. May be to one of the task can be to use Grapqhl to transform API result. The entire test can be combined with CI/CD metric system which will track the performance of the application on every commit.
