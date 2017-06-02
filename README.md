# Start Using Vue.js with Rails Today

* Ruby      2.4.1
* Rails     5.1.1
* webpacker 2.0
* vue       2.3.3
* node      7.10.0
* npm       5.0.1
* yarn      0.24.5

> Use [Webpack][1] to manage app-like JavaScript modules in Rails

```bash
rails new rails-vue-sandbox --webpack=vue
# or run on a Rails app already setup with webpacker
./bin/rails webpacker:install:vue

# update vue.js
yarn upgrade vue

./bin/rails webpacker
# or
./bin/webpack --watch --progress --colors


# Procfile
web: bundle exec rails s
webpacker: ./bin/webpack-dev-server --host 127.0.0.1 --inline true --hot false

foreman start
```

### 31 May Oleg G.Kapranov

[1]: https://github.com/rails/webpacker
