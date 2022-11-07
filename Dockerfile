FROM node AS dev
COPY console /code/
WORKDIR /code

RUN npm i
RUN npm i -g gulp-cli
RUN gulp
# RUN node node_modules/gulp/bin/gulp.js
RUN gulp docs
# RUN node node_modules/gulp/bin/gulp.js docs

FROM nginx as server
WORKDIR /var/www
COPY --from=dev /code/out .

# WORKDIR /var/www/docs
# COPY --from=dev /code/docs .

COPY nginx.conf /etc/nginx/
