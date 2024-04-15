FROM node:20-alpine

ARG osUserId
ARG osGroupId

ENV USER dev

RUN deluser --remove-home node \
    && addgroup -S $USER -g $osGroupId \
    && adduser -S -G $USER -u $osUserId $USER
