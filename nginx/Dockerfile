FROM nginx:1.21.5-alpine

ARG HOST_OVERRIDE

RUN apk upgrade --update-cache --avaliable && \
    apk add openssl && \
    rm -rf /var/cache/apk/*

RUN openssl \
    req -x509 \
    -newkey rsa:2048 \
    -nodes \
    -keyout /etc/nginx/${HOST_OVERRIDE}.key \
    -days 365 \
    -out /etc/nginx/${HOST_OVERRIDE}.crt \
    -subj "/C=US/ST=App/L=Raleigh/O=Unemployed/CN=${HOST_OVERRIDE}"

COPY nginx/nginx.conf /etc/nginx/nginx.conf
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

RUN sed -i "s/dev.domain.com/${HOST_OVERRIDE}/g" /etc/nginx/nginx.conf
RUN sed -i "s/dev.domain.com/${HOST_OVERRIDE}/g" /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]