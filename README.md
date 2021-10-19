# ipotech components

## Set components to you app

```bash
# set token
# https://gitlab.com/-/profile/personal_access_tokens
$ yarn config set @onlinemortgage:registry https://gitlab.com/api/v4/projects/28188521/packages/npm/
$ yarn config set -- '//gitlab.com/api/v4/projects/28188521/packages/npm/:_authToken' "<your_token>"


# install module
$ yarn add @onlinemortgage/fe-components

# Use globally
# nuxt.config.js
...
plugins: [
    ...
    { src: '~/plugins/fe-components.js', ssr: false },
    ...
]
...

# plugins/fe-components.js
import Vue from 'vue'
import feComponents from '@onlinemortgage/fe-components'
Vue.use(feComponents)
# then you can use UI component anywhere in your app

# Use in components
# use all
import feComponents from '@onlinemortgage/fe-components'

# individual use
import { FeInput, FeSelect } from '@onlinemortgage/fe-components'

# components list
fe-alert
fe-button
fe-input
fe-range-input
fe-select
fe-switch
```

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload
$ yarn serve

# build for production
$ yarn build
```
